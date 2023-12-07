import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://evqtokgvdhclkgvpdwik.supabase.co'
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2cXRva2d2ZGhjbGtndnBkd2lrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEyNTgxMjksImV4cCI6MjAxNjgzNDEyOX0.NdCq9rL3_VGC-a1uCK431JsqWFFrVEmjvY9FUZ0v6xk`
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;