-- Drop the restrictive policy that blocks anonymous access for INSERT
-- We need to allow anonymous inserts for waitlist signup (without auth)

-- Create a permissive policy to allow anonymous inserts with rate limiting
CREATE POLICY "Allow anonymous waitlist signup with rate limit"
ON public.waitlist
FOR INSERT
TO anon
WITH CHECK (check_waitlist_signup_rate());

-- Note: The existing "Rate limited waitlist signup" policy is RESTRICTIVE
-- We need a PERMISSIVE policy to actually allow the insert
-- The rate limit function will still protect against abuse