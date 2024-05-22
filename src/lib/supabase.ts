import { env } from "@/config/environment.ts";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_KEY);

export async function signInWithDiscord() {
  await supabase.auth.signInWithOAuth({
    provider: "discord",
    options: {
      scopes: "guilds.members.read",
    },
  });
}

export async function signOut() {
  await supabase.auth.signOut();
}
