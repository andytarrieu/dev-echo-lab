-- Fix RLS Policies for waitlist table
DROP POLICY IF EXISTS "Users can read their own waitlist entry by email" ON waitlist;
DROP POLICY IF EXISTS "Users can update their own entry by email" ON waitlist;

-- Create secure SELECT policy - users can only read their own entry by email
CREATE POLICY "Users can read their own waitlist entry by email"
ON waitlist FOR SELECT
USING ((auth.jwt() ->> 'email') = email);

-- Create secure UPDATE policy - users can only update their own entry
CREATE POLICY "Users can update their own entry by email"
ON waitlist FOR UPDATE
USING ((auth.jwt() ->> 'email') = email);

-- Fix RLS Policies for referrals table
DROP POLICY IF EXISTS "Users can read referrals" ON referrals;

-- Create secure SELECT policy - users can only read referrals where they are the referrer
CREATE POLICY "Users can read own referrals"
ON referrals FOR SELECT
USING (
  referrer_id IN (
    SELECT id FROM waitlist WHERE email = (auth.jwt() ->> 'email')
  )
);