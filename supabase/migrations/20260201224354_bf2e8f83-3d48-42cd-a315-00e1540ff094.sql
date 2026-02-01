-- Fix: Set search_path on waitlist_rate_limit_before_insert function
CREATE OR REPLACE FUNCTION public.waitlist_rate_limit_before_insert()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
DECLARE
  v_user uuid;
  v_count int;
  window_interval INTERVAL := '1 hour';
  limit_count integer := 5;
BEGIN
  -- Adjust column name if different; expects owner_id column on waitlist
  v_user := NEW.owner_id;

  -- If no user (anonymous), allow (or you can change to handle anon by IP)
  IF v_user IS NULL THEN
    RETURN NEW;
  END IF;

  SELECT COUNT(*) INTO v_count
  FROM public.waitlist_rate_limits
  WHERE user_id = v_user
    AND created_at >= now() - window_interval;

  IF v_count >= limit_count THEN
    RAISE EXCEPTION 'Rate limit exceeded: max % inserts per % for user %', limit_count, window_interval, v_user;
  END IF;

  -- Record this attempt
  INSERT INTO public.waitlist_rate_limits (user_id) VALUES (v_user);

  RETURN NEW;
END;
$function$;