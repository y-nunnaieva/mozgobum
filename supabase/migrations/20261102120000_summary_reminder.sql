-- A child may start a subchapter summary over after 2 days; other reviews still need 3.
create or replace function public.reset_review(p_child uuid, p_review text)
returns void language plpgsql security definer set search_path = '' as $$
declare
  last_round timestamptz;
  min_wait interval := case when p_review like '%/podsumowanie' then interval '2 days' else interval '3 days' end;
begin
  if not public.is_parent_of(p_child) then
    if p_child <> auth.uid() then
      raise exception 'not allowed';
    end if;
    select last into last_round from public.review_stats where child_id = p_child and review = p_review;
    if last_round is null or last_round > now() - min_wait then
      raise exception 'too early to start over';
    end if;
  end if;

  delete from public.review_stats where child_id = p_child and review = p_review;
end $$;
