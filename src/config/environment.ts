export const env = {
  API_URL: import.meta.env.VITE_API_URL,
  CLERK_PUBLISHABLE_KEY: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
  DISCORD_OAUTH_REDIRECT_URI: `${import.meta.env.VITE_API_URL}/auth/callback/discord`,
};
