-- Add database constraints for input validation
-- First, fix any invalid existing phone data
UPDATE public.waitlist SET phone = NULL WHERE phone IS NOT NULL AND phone !~ '^(\+33|0)[0-9\s.\-]{9,20}$';

-- Add name length constraint
ALTER TABLE public.waitlist ADD CONSTRAINT name_length 
CHECK (length(name) >= 2 AND length(name) <= 100);

-- Add name format constraint (letters, spaces, hyphens, apostrophes, accented chars)
ALTER TABLE public.waitlist ADD CONSTRAINT name_format 
CHECK (name ~ '^[a-zA-ZÀ-ÿ\s''\-]+$');

-- Add phone format constraint (French format) - now safe after data cleanup
ALTER TABLE public.waitlist ADD CONSTRAINT phone_format 
CHECK (phone IS NULL OR phone ~ '^(\+33|0)[0-9\s.\-]{9,20}$');

-- Add referral_code length constraint
ALTER TABLE public.waitlist ADD CONSTRAINT referral_code_length 
CHECK (length(referral_code) <= 50);

-- Create a function to auto-assign position (prevents position manipulation)
CREATE OR REPLACE FUNCTION public.assign_waitlist_position()
RETURNS TRIGGER AS $$
DECLARE
  max_pos INTEGER;
BEGIN
  -- Get current max position
  SELECT COALESCE(MAX(position), 14999) INTO max_pos FROM public.waitlist;
  
  -- Assign position: random between 15000-25000 or increment if higher
  IF max_pos < 15000 THEN
    NEW.position := floor(random() * (25000 - 15000 + 1) + 15000)::INTEGER;
  ELSIF max_pos >= 25000 THEN
    NEW.position := max_pos + 1;
  ELSE
    NEW.position := floor(random() * (25000 - 15000 + 1) + 15000)::INTEGER;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create trigger to auto-assign position on insert
DROP TRIGGER IF EXISTS assign_position_trigger ON public.waitlist;
CREATE TRIGGER assign_position_trigger
BEFORE INSERT ON public.waitlist
FOR EACH ROW
EXECUTE FUNCTION public.assign_waitlist_position();

-- Create rate limiting function
CREATE OR REPLACE FUNCTION public.check_signup_rate()
RETURNS TRIGGER AS $$
BEGIN
  -- Check global rate: max 100 signups per hour
  IF (SELECT COUNT(*) FROM public.waitlist WHERE created_at > NOW() - INTERVAL '1 hour') > 100 THEN
    RAISE EXCEPTION 'Signup rate limit exceeded. Please try again later.';
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create trigger for rate limiting
DROP TRIGGER IF EXISTS check_rate_limit_trigger ON public.waitlist;
CREATE TRIGGER check_rate_limit_trigger
BEFORE INSERT ON public.waitlist
FOR EACH ROW
EXECUTE FUNCTION public.check_signup_rate();