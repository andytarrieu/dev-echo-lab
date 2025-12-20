-- Drop the existing insert policy
DROP POLICY IF EXISTS "Public can insert waitlist (signup)" ON public.waitlist;

-- Create a new policy that allows anonymous inserts
CREATE POLICY "Anyone can insert waitlist (signup)" 
ON public.waitlist 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);