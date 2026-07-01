// ⚙️ 2. Create a Supabase client file
import { createClient } from "@supabase/supabase-js";
export const supabase = createClient(
	process.env.SUPABASE_URL,
	process.env.SUPABASE_KEY,
);
