import { useOauthAuthorization } from "@/api/useOauthAuthorization.ts";
import { routes } from "@/config/routes.ts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const OauthAuthorizePage = () => {
  const [ellipsis, setEllipsis] = useState(0);
  const { isLoading, data, error } = useOauthAuthorization();

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setEllipsis((prev) => (prev + 1) % 4);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (error) {
        navigate(routes.ERROR.UNAUTHORIZED);
      } else {
        !data.authorized
          ? navigate(routes.HOME)
          : navigate(routes.ERROR.UNAUTHORIZED);
      }
    }
  }, [data]);

  return (
    <main>
      <h1 className="p-4 text-white">Authorizing{`${".".repeat(ellipsis)}`}</h1>
    </main>
  );
};
