-- Add user_id column to waitlist table to link with auth.users
ALTER TABLE public.waitlist ADD COLUMN user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE;

-- Create index for better performance
CREATE INDEX idx_waitlist_user_id ON public.waitlist(user_id);

-- Drop existing RLS policies
DROP POLICY IF EXISTS "Allow public to insert waitlist" ON public.waitlist;
DROP POLICY IF EXISTS "Anyone can verify referral codes" ON public.waitlist;
DROP POLICY IF EXISTS "Users can read their own waitlist entry" ON public.waitlist;

-- Create new RLS policies based on user_id
CREATE POLICY "Users can read their own waitlist entry"
  ON public.waitlist
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Public can insert waitlist (signup)"
  ON public.waitlist
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can update their own entry"
  ON public.waitlist
  FOR UPDATE
  USING (auth.uid() = user_id);

-- Update referrals table RLS policies
DROP POLICY IF EXISTS "Users can only read their own referrals" ON public.referrals;

CREATE POLICY "Users can read their own referrals"
  ON public.referrals
  FOR SELECT
  USING (
    auth.uid() IN (
      SELECT user_id FROM public.waitlist WHERE id = referrer_id
    )
  );