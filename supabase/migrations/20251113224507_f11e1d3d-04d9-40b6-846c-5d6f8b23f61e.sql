-- Drop the restrictive SELECT policy
DROP POLICY IF EXISTS "No public access to waitlist data" ON public.waitlist;

-- Allow authenticated users to read their own waitlist entry based on email
CREATE POLICY "Users can read their own waitlist entry"
ON public.waitlist
FOR SELECT
TO authenticated
USING (email = auth.jwt()->>'email');