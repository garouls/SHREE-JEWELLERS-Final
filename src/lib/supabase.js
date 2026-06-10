import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://mysceikgkhvuewohxtzf.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15c2NlaWtna2h2dWV3b2h4dHpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2MDk1NzAsImV4cCI6MjA5NTE4NTU3MH0.REXzTCouzjoMsj2x5sr4vlSGWUOGGlibVMeqEMLrzMI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
