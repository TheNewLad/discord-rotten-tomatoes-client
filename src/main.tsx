import { env } from "@/config/environment.ts";
import { ROUTES } from "@/config/routes.ts";
import { DashboardLayout } from "@/layouts/dashboard.layout.tsx";
import { NotFound404Page } from "@/pages/not-found-404.page.tsx";
import { OauthAuthorizePage } from "@/pages/oauth-authorize.page.tsx";
import { OnboardUserPage } from "@/pages/onboard-user.page.tsx";
import { SignInPage } from "@/pages/sign-in.page.tsx";
import { Unauthorized403Page } from "@/pages/unauthorized-403.page.tsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./globals.css";

const queryClient = new QueryClient();

if (!env.CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  { path: ROUTES.HOME, element: <Navigate to={ROUTES.DASHBOARD} replace /> },
  {
    path: ROUTES.DASHBOARD.HOME,
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <div>Home</div>,
      },
      {
        path: ROUTES.DASHBOARD.REVIEWS,
        element: <div>Reviews</div>,
      },
      {
        path: ROUTES.DASHBOARD.PROFILE.HOME,
        element: <div>Profile</div>,
      },
      {
        path: ROUTES.DASHBOARD.PROFILE.ONBOARD_USER,
        element: <OnboardUserPage />,
      },
      {
        path: ROUTES.DASHBOARD.PROFILE.SETTINGS,
        element: <div>Settings</div>,
      },
      {
        path: "*",
        element: <Navigate to={ROUTES.ERROR.NOT_FOUND} />,
      },
      {
        path: "*",
        element: <Navigate to={ROUTES.ERROR.NOT_FOUND} />,
      },
    ],
  },
  {
    path: ROUTES.SIGN_IN,
    element: <SignInPage />,
  },
  {
    path: ROUTES.OAUTH_AUTHORIZE,
    element: <OauthAuthorizePage />,
  },
  {
    path: ROUTES.ERROR.UNAUTHORIZED,
    element: <Unauthorized403Page />,
  },
  {
    path: ROUTES.ERROR.NOT_FOUND,
    element: <NotFound404Page />,
  },
  {
    path: "*",
    element: <Navigate to={ROUTES.ERROR.NOT_FOUND} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={env.CLERK_PUBLISHABLE_KEY}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ClerkProvider>
  </React.StrictMode>,
);
