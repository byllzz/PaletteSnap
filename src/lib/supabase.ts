import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase environment variables.\n" +
      "Please create a `.env` file in the project root with:\n" +
      "  VITE_SUPABASE_URL=https://your-project.supabase.co\n" +
      "  VITE_SUPABASE_ANON_KEY=your-publishable-key\n" +
      "See README.md for details.",
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
