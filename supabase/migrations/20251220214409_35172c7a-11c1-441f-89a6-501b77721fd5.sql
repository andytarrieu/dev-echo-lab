-- Fix waitlist automation: assign random positions + rate-limit signups
-- (Functions already exist; they just weren't attached to the table.)

-- Attach position assignment trigger
DROP TRIGGER IF EXISTS trg_waitlist_assign_position ON public.waitlist;
CREATE TRIGGER trg_waitlist_assign_position
BEFORE INSERT ON public.waitlist
FOR EACH ROW
EXECUTE FUNCTION public.assign_waitlist_position();

-- Attach global signup rate-limit trigger
DROP TRIGGER IF EXISTS trg_waitlist_check_signup_rate ON public.waitlist;
CREATE TRIGGER trg_waitlist_check_signup_rate
BEFORE INSERT ON public.waitlist
FOR EACH ROW
EXECUTE FUNCTION public.check_signup_rate();
