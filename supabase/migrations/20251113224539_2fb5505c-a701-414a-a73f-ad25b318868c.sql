-- Allow anyone to verify referral codes (needed for the referral system)
CREATE POLICY "Anyone can verify referral codes"
ON public.waitlist
FOR SELECT
USING (true);