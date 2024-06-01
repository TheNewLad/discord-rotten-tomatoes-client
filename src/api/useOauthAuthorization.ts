import { endpoints } from "@/config/endpoints.ts";
import { useSession } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";

export const useOauthAuthorization = () => {
  const { session } = useSession();
  const { isLoading, data, error } = useQuery({
    queryKey: ["oauth_authorize"],
    queryFn: async () =>
      fetch(endpoints.AUTHORIZE_USER, {
        headers: {
          Authorization: `Bearer ${session?.id}`,
          "Content-Type": "application/json",
        },
      }).then((res) => res.json()),
    enabled: !!session?.id,
  });

  return { isLoading, data, error };
};
