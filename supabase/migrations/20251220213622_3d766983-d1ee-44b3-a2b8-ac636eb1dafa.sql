-- Drop and recreate the INSERT policy as PERMISSIVE (not RESTRICTIVE)
DROP POLICY IF EXISTS "Anyone can insert waitlist (signup)" ON public.waitlist;

CREATE POLICY "Anyone can insert waitlist (signup)" 
ON public.waitlist 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);