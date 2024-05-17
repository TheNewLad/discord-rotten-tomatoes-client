export const env = {
  API_URL: import.meta.env.VITE_API_URL,
  DISCORD_OAUTH_REDIRECT_URI: `${import.meta.env.VITE_API_URL}/auth/callback/discord`,
  SUPABASE_KEY: import.meta.env.VITE_SUPABASE_KEY,
  SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
};
