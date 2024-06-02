const errorBasePath = "/error";
const dashboardBasePath = "/dashboard";

/* eslint sort-keys:"error" */
export const routes = {
  DASHBOARD: {
    HOME: dashboardBasePath,
    REVIEWS: `${dashboardBasePath}/reviews`,
  },
  ERROR: {
    UNAUTHORIZED: `${errorBasePath}/403`,
  },
  HOME: "/",
  OAUTH_AUTHORIZE: "/oauth/authorize",
  SIGN_IN: "/sign-in",
};
