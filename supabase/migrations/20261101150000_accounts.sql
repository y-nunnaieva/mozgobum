-- Accounts: a parent signs up with a nick; children are created by the parent (create-child function).
create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  nick text not null unique check (nick ~ '^[a-z0-9_]{3,20}$'),
  role text not null check (role in ('parent', 'child')),
  parent_id uuid references public.profiles (id) on delete cascade,
  created_at timestamptz not null default now(),
  check ((role = 'child') = (parent_id is not null))
);

-- The nick is the local part of the technical e-mail. The role comes from app_metadata,
-- which only the server can set, so a public sign-up always creates a parent.
create function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles (id, nick, role, parent_id)
  values (
    new.id,
    split_part(new.email, '@', 1),
    coalesce(new.raw_app_meta_data ->> 'role', 'parent'),
    (new.raw_app_meta_data ->> 'parent_id')::uuid
  );
  return new;
end $$;

create trigger on_auth_user_created after insert on auth.users
for each row execute function public.handle_new_user();

-- Stats mirror the app's local shape: units (per question or skill) and reviews (per review key).
create table public.unit_stats (
  child_id uuid not null references public.profiles (id) on delete cascade,
  unit text not null check (length(unit) <= 200),
  asked int not null default 0,
  wrong int not null default 0,
  streak int not null default 0,
  primary key (child_id, unit)
);

create table public.review_stats (
  child_id uuid not null references public.profiles (id) on delete cascade,
  review text not null check (length(review) <= 200),
  last timestamptz not null,
  primary key (child_id, review)
);

create table public.review_keys (
  child_id uuid not null,
  review text not null,
  key text not null check (length(key) <= 200),
  streak int not null default 0,
  primary key (child_id, review, key),
  foreign key (child_id, review) references public.review_stats (child_id, review) on delete cascade
);

alter table public.profiles enable row level security;
alter table public.unit_stats enable row level security;
alter table public.review_stats enable row level security;
alter table public.review_keys enable row level security;

create function public.is_parent_of(child uuid) returns boolean
language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.profiles where id = child and parent_id = auth.uid());
$$;

create function public.can_see(child uuid) returns boolean
language sql stable security definer set search_path = '' as $$
  select child = auth.uid() or public.is_parent_of(child);
$$;

create policy "own profile and own children" on public.profiles
  for select to authenticated using (id = (select auth.uid()) or parent_id = (select auth.uid()));
create policy "own or children's stats" on public.unit_stats
  for select to authenticated using (public.can_see(child_id));
create policy "own or children's stats" on public.review_stats
  for select to authenticated using (public.can_see(child_id));
create policy "own or children's stats" on public.review_keys
  for select to authenticated using (public.can_see(child_id));

-- Reads go through the tables; every write goes through the functions below.
grant select on public.profiles, public.unit_stats, public.review_stats, public.review_keys to authenticated;

-- Only a child's own answers count; a parent playing in preview records nothing.
create function public.record_answer(p_unit text, p_ok boolean, p_review text default null, p_key text default null)
returns void language plpgsql security definer set search_path = '' as $$
declare
  me uuid := auth.uid();
begin
  if not exists (select 1 from public.profiles where id = me and role = 'child') then
    raise exception 'only a child records answers';
  end if;

  insert into public.unit_stats as s (child_id, unit, asked, wrong, streak)
  values (me, p_unit, 1, case when p_ok then 0 else 1 end, case when p_ok then 1 else 0 end)
  on conflict (child_id, unit) do update set
    asked = s.asked + 1,
    wrong = s.wrong + case when p_ok then 0 else 1 end,
    streak = case when p_ok then s.streak + 1 else 0 end;

  if p_review is not null then
    insert into public.review_stats as r (child_id, review, last) values (me, p_review, now())
    on conflict (child_id, review) do update set last = now();

    insert into public.review_keys as k (child_id, review, key, streak)
    values (me, p_review, p_key, case when p_ok then 1 else 0 end)
    on conflict (child_id, review, key) do update set
      streak = case when p_ok then k.streak + 1 else 0 end;
  end if;
end $$;

-- A parent may reset any review of their child; the child only after 3 days without playing it.
create function public.reset_review(p_child uuid, p_review text)
returns void language plpgsql security definer set search_path = '' as $$
declare
  last_round timestamptz;
begin
  if not public.is_parent_of(p_child) then
    if p_child <> auth.uid() then
      raise exception 'not allowed';
    end if;
    select last into last_round from public.review_stats where child_id = p_child and review = p_review;
    if last_round is null or last_round > now() - interval '3 days' then
      raise exception 'too early to start over';
    end if;
  end if;

  delete from public.review_stats where child_id = p_child and review = p_review;
end $$;

-- Clearing a subchapter's stats is for parents only.
create function public.clear_units(p_child uuid, p_units text[])
returns void language plpgsql security definer set search_path = '' as $$
begin
  if not public.is_parent_of(p_child) then
    raise exception 'not allowed';
  end if;
  delete from public.unit_stats where child_id = p_child and unit = any (p_units);
end $$;

revoke execute on function public.record_answer, public.reset_review, public.clear_units,
  public.is_parent_of, public.can_see, public.handle_new_user from public, anon;
grant execute on function public.record_answer, public.reset_review, public.clear_units,
  public.is_parent_of, public.can_see to authenticated;
