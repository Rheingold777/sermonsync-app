import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side client with service role
export const supabaseAdmin = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Database types
export interface Church {
  id: string;
  name: string;
  pastor_name: string;
  pastor_email: string;
  phone?: string;
  timezone: string;
  language: string;
  send_time: string;
  send_day: string;
  plan: 'starter' | 'growth' | 'dfy' | 'trial';
  trial_end?: string;
  created_at: string;
}

export interface Contact {
  id: string;
  church_id: string;
  name: string;
  phone: string;
  language_pref: 'en' | 'es' | 'both';
  status: 'active' | 'opted-out';
  created_at: string;
}

export interface Sermon {
  id: string;
  church_id: string;
  title: string;
  date: string;
  notes_url?: string;
  notes_text?: string;
  recap_en?: string;
  recap_es?: string;
  status: 'draft' | 'approved' | 'scheduled' | 'sent';
  scheduled_at?: string;
  sent_at?: string;
  created_at: string;
}

export interface MessageLog {
  id: string;
  sermon_id: string;
  contact_id: string;
  phone: string;
  language: 'en' | 'es';
  message: string;
  status: 'queued' | 'sent' | 'delivered' | 'failed';
  twilio_sid?: string;
  sent_at?: string;
  created_at: string;
}
