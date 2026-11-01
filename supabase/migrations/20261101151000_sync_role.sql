-- The admin API writes app_metadata in an update right after the insert, so the role and
-- the parent link are copied from there as well.
create function public.sync_user_role() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  update public.profiles set
    role = coalesce(new.raw_app_meta_data ->> 'role', 'parent'),
    parent_id = (new.raw_app_meta_data ->> 'parent_id')::uuid
  where id = new.id;
  return new;
end $$;

create trigger on_auth_user_role_changed after update of raw_app_meta_data on auth.users
for each row
when (old.raw_app_meta_data ->> 'role' is distinct from new.raw_app_meta_data ->> 'role'
  or old.raw_app_meta_data ->> 'parent_id' is distinct from new.raw_app_meta_data ->> 'parent_id')
execute function public.sync_user_role();

revoke execute on function public.sync_user_role from public, anon, authenticated;
