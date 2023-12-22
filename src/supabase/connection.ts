

import { createClient } from '@supabase/supabase-js';
import { Database } from './types/database';

const supabaseUrl = 'https://wybbplprzjjkfpboqcbu.supabase.co';

// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5YmJwbHByempqa2ZwYm9xY2J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1OTAyNDIsImV4cCI6MjAxODE2NjI0Mn0.EknoBmtP78cXE597bvDnTWElfPpd_RvccgDm2IfLH-U';
  
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;