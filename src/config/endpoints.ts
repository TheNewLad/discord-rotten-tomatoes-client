import { env } from "@/config/environment.ts";

const baseUrl = env.API_URL;
export const endpoints = {
  AUTHORIZE_USER: `${baseUrl}/api/authorize`,
};
