-- Fix 1: Enable RLS on waitlist_rate_limits table and add restrictive policy
ALTER TABLE public.waitlist_rate_limits ENABLE ROW LEVEL SECURITY;

-- Deny all public access - only accessible via SECURITY DEFINER functions
CREATE POLICY "Deny all public access to rate limits"
ON public.waitlist_rate_limits
FOR ALL
USING (false)
WITH CHECK (false);

-- Fix 2: Replace overly permissive SELECT policy on referral_lookup_attempts
DROP POLICY IF EXISTS "System can select for rate limiting" ON public.referral_lookup_attempts;

-- Deny public SELECT - table should only be accessed via SECURITY DEFINER functions
CREATE POLICY "Deny public select on lookup attempts"
ON public.referral_lookup_attempts
FOR SELECT
USING (false);

-- Fix 3: Add server-side validation constraints on waitlist table
-- Name length constraint (2-100 characters)
ALTER TABLE public.waitlist ADD CONSTRAINT waitlist_name_length 
CHECK (length(name) >= 2 AND length(name) <= 100);

-- Phone format constraint (French format, nullable)
ALTER TABLE public.waitlist ADD CONSTRAINT waitlist_phone_format 
CHECK (phone IS NULL OR phone ~ '^(\+33|0)[0-9\s.\-]{9,}$');

-- Fix 4: Replace overly permissive INSERT policy on waitlist with rate-limited version
DROP POLICY IF EXISTS "Anyone can insert waitlist (signup)" ON public.waitlist;

-- Create a function to check signup rate limit
CREATE OR REPLACE FUNCTION public.check_waitlist_signup_rate()
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  recent_count INTEGER;
BEGIN
  -- Allow max 100 signups per hour globally
  SELECT COUNT(*) INTO recent_count
  FROM public.waitlist
  WHERE created_at > NOW() - INTERVAL '1 hour';
  
  RETURN recent_count < 100;
END;
$$;

-- New INSERT policy with rate limiting
CREATE POLICY "Rate limited waitlist signup"
ON public.waitlist
FOR INSERT
WITH CHECK (public.check_waitlist_signup_rate());

-- Fix 5: Replace overly permissive INSERT policy on referral_lookup_attempts
DROP POLICY IF EXISTS "Anyone can insert lookup attempts" ON public.referral_lookup_attempts;

-- Create a function to check lookup rate limit
CREATE OR REPLACE FUNCTION public.check_lookup_attempt_rate(p_ip_hash text)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  recent_count INTEGER;
BEGIN
  -- Allow max 10 lookups per IP per 5 minutes
  SELECT COUNT(*) INTO recent_count
  FROM public.referral_lookup_attempts
  WHERE ip_hash = p_ip_hash
    AND attempted_at > NOW() - INTERVAL '5 minutes';
  
  RETURN recent_count < 10;
END;
$$;

-- New INSERT policy with IP-based rate limiting
CREATE POLICY "Rate limited lookup attempts"
ON public.referral_lookup_attempts
FOR INSERT
WITH CHECK (public.check_lookup_attempt_rate(ip_hash));