const errorBasePath = "/error";

/* eslint sort-keys:"error" */
export const routes = {
  DASHBOARD: "/dashboard",
  ERROR: {
    UNAUTHORIZED: `${errorBasePath}/403`,
  },
  HOME: "/",
  OAUTH_AUTHORIZE: "/oauth/authorize",
  SIGN_IN: "/sign-in",
};
