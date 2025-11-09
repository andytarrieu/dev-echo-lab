-- Assure que les insertions publiques sont autorisées sur public.waitlist
DO $$ BEGIN
  -- Supprimer une éventuelle ancienne politique d'insertion
  DROP POLICY IF EXISTS "Anyone can sign up for waitlist" ON public.waitlist;
  DROP POLICY IF EXISTS "Allow anonymous insert to waitlist" ON public.waitlist;
EXCEPTION WHEN undefined_object THEN
  NULL;
END $$;

-- Créer une politique explicite autorisant les insertions pour tout le monde (anon + authenticated)
CREATE POLICY "Allow public to insert waitlist"
ON public.waitlist
FOR INSERT
TO public
WITH CHECK (true);
