-- Add RLS policy for referral_lookup_attempts to allow inserts from anyone
ALTER TABLE public.referral_lookup_attempts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert lookup attempts"
ON public.referral_lookup_attempts
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow the verify_referral_code function to work (it's SECURITY DEFINER so this is for extra safety)
CREATE POLICY "System can select for rate limiting"
ON public.referral_lookup_attempts
FOR SELECT
TO anon, authenticated
USING (true);