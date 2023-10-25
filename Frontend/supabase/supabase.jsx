import { createClient } from '@supabase/supabase-js'

const Url = import.meta.env.VITE_URL
const AnonKey = import.meta.env.VITE_PUBLIC_ANON_KEY
// Create a single supabase client for interacting with your database
export const Supabase = createClient(Url, AnonKey)
