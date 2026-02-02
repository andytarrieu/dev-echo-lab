-- Add column for storing user's priority document response
ALTER TABLE public.waitlist 
ADD COLUMN priority_document TEXT DEFAULT NULL;