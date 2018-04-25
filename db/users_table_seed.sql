create table if not exists (
  id serial primary key,
  display_name text,
  auth_id text,
  email_address varchar(100),
  address varchar(80),
  phone_number varchar(20)
)