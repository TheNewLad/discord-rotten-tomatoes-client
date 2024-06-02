import { env } from "@/config/environment.ts";
import { routes } from "@/config/routes.ts";
import { DashboardLayout } from "@/layouts/dashboard.layout.tsx";
import { OauthAuthorizePage } from "@/pages/oauth-authorize.page.tsx";
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
  { path: routes.HOME, element: <Navigate to={routes.DASHBOARD} replace /> },
  {
    path: routes.DASHBOARD.HOME,
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <div>Home</div>,
      },
      {
        path: routes.DASHBOARD.REVIEWS,
        element: <div>Reviews</div>,
      },
    ],
  },
  {
    path: routes.SIGN_IN,
    element: <SignInPage />,
  },
  {
    path: routes.OAUTH_AUTHORIZE,
    element: <OauthAuthorizePage />,
  },
  {
    path: routes.ERROR.UNAUTHORIZED,
    element: <Unauthorized403Page />,
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
