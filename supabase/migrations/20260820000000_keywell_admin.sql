-- Keywell Arshaka Innovation admin schema
-- Apply manually in Supabase after connecting the project.

create extension if not exists pgcrypto;

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  sku text not null unique,
  category text not null,
  description text,
  image_url text,
  specifications jsonb not null default '[]'::jsonb,
  daily_rate numeric(12,2) not null default 0 check (daily_rate >= 0),
  stock_count integer not null default 0 check (stock_count >= 0),
  status text not null default 'active' check (status in ('active', 'draft', 'out_of_stock')),
  featured boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  company text,
  request text not null,
  product_id uuid references public.products(id) on delete set null,
  status text not null default 'new' check (status in ('new', 'in_progress', 'resolved', 'archived')),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.site_content (
  id uuid primary key default gen_random_uuid(),
  content_key text not null unique,
  content_value jsonb not null default '{}'::jsonb,
  updated_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists products_category_idx on public.products(category);
create index if not exists products_status_idx on public.products(status);
create index if not exists leads_status_idx on public.leads(status);
create index if not exists leads_created_at_idx on public.leads(created_at desc);

create or replace function public.set_updated_at() returns trigger
language plpgsql set search_path = public as $$
begin new.updated_at = now(); return new; end;
$$;

drop trigger if exists products_updated_at on public.products;
create trigger products_updated_at before update on public.products for each row execute function public.set_updated_at();
drop trigger if exists leads_updated_at on public.leads;
create trigger leads_updated_at before update on public.leads for each row execute function public.set_updated_at();
drop trigger if exists site_content_updated_at on public.site_content;
create trigger site_content_updated_at before update on public.site_content for each row execute function public.set_updated_at();

alter table public.products enable row level security;
alter table public.leads enable row level security;
alter table public.site_content enable row level security;

create policy "public can view active products" on public.products for select to anon, authenticated using (status = 'active');
create policy "public can create leads" on public.leads for insert to anon, authenticated with check (true);
create policy "authenticated users view leads" on public.leads for select to authenticated using (true);
create policy "authenticated users manage products" on public.products for all to authenticated using (true) with check (true);
create policy "authenticated users manage leads" on public.leads for update to authenticated using (true) with check (true);
create policy "authenticated users manage content" on public.site_content for all to authenticated using (true) with check (true);

-- Replace broad authenticated policies above with an admin-membership policy before production.
