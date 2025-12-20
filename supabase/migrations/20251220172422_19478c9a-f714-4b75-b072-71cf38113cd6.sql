-- =============================================
-- FIX 1: Secure referral code verification with rate limiting
-- =============================================

-- Create table to track referral lookup attempts for rate limiting
CREATE TABLE IF NOT EXISTS public.referral_lookup_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_hash TEXT NOT NULL, -- Store hashed IP for privacy
  attempted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  code_attempted TEXT
);

-- Enable RLS on the attempts table (no public access)
ALTER TABLE public.referral_lookup_attempts ENABLE ROW LEVEL SECURITY;

-- Index for efficient rate limit queries
CREATE INDEX IF NOT EXISTS idx_referral_attempts_ip_time 
  ON public.referral_lookup_attempts(ip_hash, attempted_at);

-- Cleanup old attempts (keep only last 24 hours)
CREATE OR REPLACE FUNCTION public.cleanup_old_lookup_attempts()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  DELETE FROM referral_lookup_attempts 
  WHERE attempted_at < NOW() - INTERVAL '24 hours';
END;
$$;

-- Secure function to verify referral codes with rate limiting
CREATE OR REPLACE FUNCTION public.verify_referral_code(
  code TEXT,
  client_ip_hash TEXT DEFAULT ''
)
RETURNS TABLE(referrer_id UUID, is_valid BOOLEAN)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  attempt_count INTEGER;
  found_id UUID;
BEGIN
  -- Rate limit: max 10 lookups per IP hash per 5 minutes
  SELECT COUNT(*) INTO attempt_count
  FROM referral_lookup_attempts
  WHERE ip_hash = client_ip_hash
    AND attempted_at > NOW() - INTERVAL '5 minutes';
  
  IF attempt_count >= 10 THEN
    RAISE EXCEPTION 'Rate limit exceeded. Please try again later.';
  END IF;
  
  -- Log attempt (only if IP hash provided)
  IF client_ip_hash != '' THEN
    INSERT INTO referral_lookup_attempts (ip_hash, code_attempted)
    VALUES (client_ip_hash, LEFT(code, 3) || '***'); -- Only log partial code
  END IF;
  
  -- Check code validity
  SELECT id INTO found_id 
  FROM waitlist 
  WHERE referral_code = code 
  LIMIT 1;
  
  IF found_id IS NOT NULL THEN
    RETURN QUERY SELECT found_id, true::BOOLEAN;
  ELSE
    RETURN QUERY SELECT NULL::UUID, false::BOOLEAN;
  END IF;
END;
$$;

-- Grant execute to anon and authenticated users
GRANT EXECUTE ON FUNCTION public.verify_referral_code(TEXT, TEXT) TO anon, authenticated;

-- =============================================
-- FIX 2: Secure referrals INSERT policy with validation
-- =============================================

-- Drop the insecure policy
DROP POLICY IF EXISTS "Anyone can create referrals" ON public.referrals;

-- Create secure function to validate referral creation
CREATE OR REPLACE FUNCTION public.can_create_referral(
  p_referrer_id UUID,
  p_referred_email TEXT
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  referrer_exists BOOLEAN;
  referred_exists BOOLEAN;
  is_self_referral BOOLEAN;
  already_referred BOOLEAN;
  recent_referral_count INTEGER;
BEGIN
  -- Check if referrer exists in waitlist
  SELECT EXISTS(SELECT 1 FROM waitlist WHERE id = p_referrer_id) INTO referrer_exists;
  IF NOT referrer_exists THEN
    RETURN false;
  END IF;
  
  -- Check if referred email exists in waitlist (must have signed up)
  SELECT EXISTS(SELECT 1 FROM waitlist WHERE email = p_referred_email) INTO referred_exists;
  IF NOT referred_exists THEN
    RETURN false;
  END IF;
  
  -- Prevent self-referral
  SELECT EXISTS(
    SELECT 1 FROM waitlist 
    WHERE id = p_referrer_id AND email = p_referred_email
  ) INTO is_self_referral;
  IF is_self_referral THEN
    RETURN false;
  END IF;
  
  -- Prevent duplicate referrals (same email referred twice)
  SELECT EXISTS(
    SELECT 1 FROM referrals WHERE referred_email = p_referred_email
  ) INTO already_referred;
  IF already_referred THEN
    RETURN false;
  END IF;
  
  -- Rate limit: max 5 referrals per referrer per hour
  SELECT COUNT(*) INTO recent_referral_count
  FROM referrals
  WHERE referrer_id = p_referrer_id
    AND created_at > NOW() - INTERVAL '1 hour';
  
  IF recent_referral_count >= 5 THEN
    RETURN false;
  END IF;
  
  RETURN true;
END;
$$;

-- Create new secure INSERT policy
CREATE POLICY "Validated referral inserts only"
ON public.referrals
FOR INSERT
TO anon, authenticated
WITH CHECK (
  public.can_create_referral(referrer_id, referred_email)
);

-- =============================================
-- Add overall referral limit trigger (max 100 per referrer)
-- =============================================

CREATE OR REPLACE FUNCTION public.check_referral_limit()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  current_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO current_count 
  FROM referrals WHERE referrer_id = NEW.referrer_id;
  
  IF current_count >= 100 THEN
    RAISE EXCEPTION 'Maximum referral limit (100) exceeded';
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create trigger to enforce limit
DROP TRIGGER IF EXISTS enforce_referral_limit ON public.referrals;
CREATE TRIGGER enforce_referral_limit
  BEFORE INSERT ON public.referrals
  FOR EACH ROW
  EXECUTE FUNCTION public.check_referral_limit();