-- Add explicit SELECT policy to deny public access to waitlist data
CREATE POLICY "No public access to waitlist data" 
ON public.waitlist 
FOR SELECT 
TO anon, authenticated
USING (false);

-- Note: To allow admin access later, create a separate policy like:
-- CREATE POLICY "Admins can view waitlist" 
-- ON public.waitlist 
-- FOR SELECT 
-- TO authenticated
-- USING (public.has_role(auth.uid(), 'admin'));