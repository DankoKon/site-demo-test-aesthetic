import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase environment variables are not set.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Booking = {
  id: string;
  name: string;
  phone: string;
  desired_datetime: string;
  service: string;
  status: string;
  created_at: string;
};

export type BookingInsert = {
  name: string;
  phone: string;
  desired_datetime: string;
  service: string;
};
