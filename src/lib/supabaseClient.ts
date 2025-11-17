import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not found. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Lead {
  id: string
  name: string
  company?: string
  email: string
  phone: string
  message: string
  created_at: string
}

export interface Service {
  id: string
  title: string
  description: string
  image_url?: string
  created_at: string
  updated_at: string
}

export interface Testimonial {
  id: string
  name: string
  company?: string
  message: string
  image_url?: string
  created_at: string
}


