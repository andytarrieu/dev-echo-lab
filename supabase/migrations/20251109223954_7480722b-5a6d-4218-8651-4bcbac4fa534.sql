-- Fix referrals table public exposure
-- Drop the permissive SELECT policy that allows anyone to read all referrals
DROP POLICY IF EXISTS "Users can read their referrals" ON referrals;

-- Create a restrictive policy so users can only read their own referrals
-- Note: This requires authentication, unauthenticated users cannot read any referrals
CREATE POLICY "Users can only read their own referrals"
ON referrals FOR SELECT
USING (auth.uid() = referrer_id);