/*
# Create bookings table for appointment requests

1. New Tables
- `bookings` — stores appointment booking requests submitted from the landing page.
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — client's full name
  - `phone` (text, not null) — client's phone number
  - `desired_datetime` (timestamptz, not null) — requested appointment date and time
  - `service` (text, not null) — selected service name
  - `status` (text, not null, default 'new') — booking status: new, confirmed, cancelled, completed
  - `created_at` (timestamptz, default now()) — when the booking was submitted

2. Security
- Enable RLS on `bookings`.
- This is a single-tenant landing page with no sign-in screen, so anon + authenticated can insert new bookings.
- SELECT and DELETE are restricted to authenticated (studio owner) only — visitors should not see or delete other people's bookings.
- INSERT is open to anon + authenticated (anyone can submit a booking request).
- UPDATE is restricted to authenticated (studio owner can change status).

3. Notes
- No user_id column since there is no auth/login on this landing page.
- Phone validation is handled in the frontend; the database stores the raw value.
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  desired_datetime timestamptz NOT NULL,
  service text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon + authenticated) to insert new booking requests
DROP POLICY IF EXISTS "anon_insert_bookings" ON bookings;
CREATE POLICY "anon_insert_bookings"
ON bookings FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated users (studio owner) can view bookings
DROP POLICY IF EXISTS "auth_select_bookings" ON bookings;
CREATE POLICY "auth_select_bookings"
ON bookings FOR SELECT
TO authenticated
USING (true);

-- Only authenticated users (studio owner) can update booking status
DROP POLICY IF EXISTS "auth_update_bookings" ON bookings;
CREATE POLICY "auth_update_bookings"
ON bookings FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

-- Only authenticated users (studio owner) can delete bookings
DROP POLICY IF EXISTS "auth_delete_bookings" ON bookings;
CREATE POLICY "auth_delete_bookings"
ON bookings FOR DELETE
TO authenticated
USING (true);
