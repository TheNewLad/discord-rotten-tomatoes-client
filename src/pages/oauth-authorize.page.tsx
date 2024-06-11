import { useOauthAuthorization } from "@/api/useOauthAuthorization.ts";
import { LoadingIcon } from "@/components/icons/loading.icon.tsx";
import { ROUTES } from "@/config/routes.ts";
import { Link, Navigate } from "react-router-dom";

export const OauthAuthorizePage = () => {
  const { isLoading, error } = useOauthAuthorization();

  if (isLoading) {
    return (
      <main>
        <h1 className="inline-flex gap-2 p-4 text-white">
          Authorizing <LoadingIcon />
        </h1>
      </main>
    );
  }

  if (error) {
    if (error.response.status === 403) {
      return <Navigate to={ROUTES.ERROR.UNAUTHORIZED} />;
    }
    return (
      <main>
        <h1 className="inline-flex gap-2 p-4 text-white">
          Error authorizing user. Please try{" "}
          <Link className="underline" to={ROUTES.SIGN_IN}>
            signing in
          </Link>{" "}
          again.
        </h1>
      </main>
    );
  }

  return <Navigate to={ROUTES.DASHBOARD.HOME} />;
};
