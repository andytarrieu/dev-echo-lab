-- Drop and recreate the INSERT policy for waitlist to ensure it works for anon users
DROP POLICY IF EXISTS "Anyone can insert waitlist (signup)" ON public.waitlist;

CREATE POLICY "Anyone can insert waitlist (signup)" 
ON public.waitlist 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);