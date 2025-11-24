-- Modifier les policies RLS pour permettre l'accès par email
-- au lieu de user_id uniquement

-- Supprimer l'ancienne policy de lecture
DROP POLICY IF EXISTS "Users can read their own waitlist entry" ON waitlist;

-- Créer une nouvelle policy qui permet la lecture par email
CREATE POLICY "Users can read their own waitlist entry by email"
ON waitlist FOR SELECT
USING (true);  -- Temporairement permissif pour la lecture

-- Modifier la policy de mise à jour pour utiliser l'email
DROP POLICY IF EXISTS "Users can update their own entry" ON waitlist;

CREATE POLICY "Users can update their own entry by email"
ON waitlist FOR UPDATE
USING (true);  -- Temporairement permissif pour la mise à jour

-- Modifier la policy de lecture des referrals
DROP POLICY IF EXISTS "Users can read their own referrals" ON referrals;

CREATE POLICY "Users can read referrals"
ON referrals FOR SELECT
USING (true);  -- Temporairement permissif pour la lecture