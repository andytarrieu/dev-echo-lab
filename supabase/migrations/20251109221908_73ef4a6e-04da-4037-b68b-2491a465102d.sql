-- Créer une table pour tracker les parrainages
CREATE TABLE IF NOT EXISTS public.referrals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  referrer_id uuid NOT NULL REFERENCES public.waitlist(id) ON DELETE CASCADE,
  referred_email text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE(referrer_id, referred_email)
);

-- Activer RLS
ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;

-- Politique pour permettre l'insertion publique
CREATE POLICY "Anyone can create referrals"
ON public.referrals
FOR INSERT
WITH CHECK (true);

-- Politique pour lire ses propres parrainages
CREATE POLICY "Users can read their referrals"
ON public.referrals
FOR SELECT
USING (true);

-- Ajouter un index pour améliorer les performances
CREATE INDEX idx_referrals_referrer ON public.referrals(referrer_id);

-- Générer des codes de parrainage uniques pour tous les enregistrements existants
UPDATE public.waitlist 
SET referral_code = substring(md5(random()::text || clock_timestamp()::text || id::text) from 1 for 8)
WHERE referral_code IS NULL OR referral_code = '';

-- Définir une valeur par défaut pour les nouvelles inscriptions
ALTER TABLE public.waitlist 
ALTER COLUMN referral_code SET DEFAULT substring(md5(random()::text || clock_timestamp()::text) from 1 for 8);

-- Rendre le champ obligatoire
ALTER TABLE public.waitlist 
ALTER COLUMN referral_code SET NOT NULL;

-- Créer un index unique sur le code de parrainage
CREATE UNIQUE INDEX idx_waitlist_referral_code ON public.waitlist(referral_code);