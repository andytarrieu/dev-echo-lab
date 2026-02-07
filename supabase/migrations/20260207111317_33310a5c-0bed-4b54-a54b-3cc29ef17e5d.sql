-- Fix RLS: the existing restrictive ALL policy blocks anonymous INSERTs (USING is applied as WITH CHECK on INSERT)
-- We want: anonymous can INSERT (rate-limited), but cannot SELECT/UPDATE/DELETE.

DROP POLICY IF EXISTS "Deny anonymous access to waitlist" ON public.waitlist;

-- Keep waitlist private for anon
CREATE POLICY "Deny anonymous select waitlist"
ON public.waitlist
FOR SELECT
TO anon
USING (false);

CREATE POLICY "Deny anonymous update waitlist"
ON public.waitlist
FOR UPDATE
TO anon
USING (false);

CREATE POLICY "Deny anonymous delete waitlist"
ON public.waitlist
FOR DELETE
TO anon
USING (false);

-- Ensure the anonymous signup policy also covers authenticated users (e.g., Google OAuth flow)
DROP POLICY IF EXISTS "Allow anonymous waitlist signup with rate limit" ON public.waitlist;
CREATE POLICY "Allow public waitlist signup with rate limit"
ON public.waitlist
FOR INSERT
TO anon, authenticated
WITH CHECK (check_waitlist_signup_rate());