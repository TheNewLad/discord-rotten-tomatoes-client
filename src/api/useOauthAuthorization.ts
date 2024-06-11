import { endpoints } from "@/config/endpoints.ts";
import { FetchError } from "@/lib/errors.ts";
import { useAuth } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";

export const useOauthAuthorization = () => {
  const { getToken } = useAuth();
  const { isLoading, data, error } = useQuery<unknown, FetchError>({
    queryKey: ["oauth_validate"],
    queryFn: async () => {
      const response = await fetch(endpoints.VALIDATE_USER, {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new FetchError(response, "Failed to validate user");
      }

      return response.json();
    },
    retry: false,
  });

  return { isLoading, data, error };
};
