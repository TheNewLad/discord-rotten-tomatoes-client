import { endpoints } from "@/config/endpoints.ts";
import { useQuery } from "@tanstack/react-query";

interface Props {
  discordToken?: string | null;
  authenticatedUserId?: string;
}

export const useAuthorization = ({
  discordToken,
  authenticatedUserId,
}: Props) => {
  const { data, isError, error, isPending } = useQuery({
    queryKey: ["authorize", discordToken, authenticatedUserId],
    queryFn: async () => authorizeUser({ discordToken, authenticatedUserId }),
    enabled: !!authenticatedUserId,
  });

  return {
    data,
    isLoading: isPending,
    isError,
    error,
  };
};

const authorizeUser = async ({ discordToken, authenticatedUserId }: Props) => {
  if (!authenticatedUserId) {
    throw new Error("Missing authenticatedUserId");
  }

  const res = await fetch(endpoints.AUTHORIZE_USER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${discordToken}`,
    },
    body: JSON.stringify({ authenticatedUserId }),
  });

  return res.json();
};
