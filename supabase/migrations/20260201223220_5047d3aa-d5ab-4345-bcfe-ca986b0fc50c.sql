
-- Fix: Add explicit deny for anonymous users on waitlist table
-- This ensures unauthenticated users cannot read any waitlist data
CREATE POLICY "Deny anonymous access to waitlist"
ON public.waitlist
AS RESTRICTIVE
FOR ALL
USING (auth.uid() IS NOT NULL);

-- Fix: Add explicit deny for anonymous users on referrals table
-- This ensures unauthenticated users cannot read any referral data
CREATE POLICY "Deny anonymous access to referrals"
ON public.referrals
AS RESTRICTIVE
FOR ALL
USING (auth.uid() IS NOT NULL);
