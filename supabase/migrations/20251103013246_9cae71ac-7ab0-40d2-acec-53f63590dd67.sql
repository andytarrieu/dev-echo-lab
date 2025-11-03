-- Create waitlist table
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  referral_code TEXT,
  position INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add email validation constraint
ALTER TABLE public.waitlist 
ADD CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

-- Add unique constraint on email to prevent duplicates
ALTER TABLE public.waitlist 
ADD CONSTRAINT unique_email UNIQUE (email);

-- Create index for faster email lookups
CREATE INDEX idx_waitlist_email ON public.waitlist(email);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public signup)
CREATE POLICY "Anyone can sign up for waitlist" 
ON public.waitlist 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- No one can read by default (protect PII)
-- Later you can add admin policies for SELECT/UPDATE/DELETE