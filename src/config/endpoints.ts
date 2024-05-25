import { env } from "@/config/environment.ts";

const baseUrl = env.API_URL;
export const endpoints = {
  AUTHORIZE_USER: `${baseUrl}/api/authorize`,
  GET_ONBOARDED_STATUS: (discordUserId: string) =>
    `${baseUrl}/api/users/onboard/${discordUserId}`,
  ONBOARD_USER: `${baseUrl}/api/users/onboard`,
};
