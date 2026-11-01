-- The nick as typed ("Ola"); the login stays case-insensitive through the lowercase nick.
alter table public.profiles add column display_nick text;
update public.profiles set display_nick = nick;
alter table public.profiles alter column display_nick set not null;
alter table public.profiles add constraint display_nick_matches check (lower(display_nick) = nick);

-- user_metadata is set by the client, so it is used only when it spells the same nick.
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = '' as $$
declare
  login text := split_part(new.email, '@', 1);
  typed text := new.raw_user_meta_data ->> 'nick';
begin
  insert into public.profiles (id, nick, display_nick, role, parent_id)
  values (
    new.id,
    login,
    case when lower(typed) = login then typed else login end,
    coalesce(new.raw_app_meta_data ->> 'role', 'parent'),
    (new.raw_app_meta_data ->> 'parent_id')::uuid
  );
  return new;
end $$;
