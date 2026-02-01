-- Create enum for user type
CREATE TYPE public.user_type AS ENUM ('particulier', 'professionnel');

-- Add user_type column to waitlist table
ALTER TABLE public.waitlist 
ADD COLUMN user_type public.user_type NOT NULL DEFAULT 'particulier';