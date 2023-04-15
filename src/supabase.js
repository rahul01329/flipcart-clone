import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tjahnmjjcwjawxkmhnpy.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqYWhubWpqY3dqYXd4a21obnB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE0MDUwMDgsImV4cCI6MTk5Njk4MTAwOH0.ZAhWu3U572GOPL6JK3LouTZ34ALwnsRuzcQHz-R1Q-k';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
