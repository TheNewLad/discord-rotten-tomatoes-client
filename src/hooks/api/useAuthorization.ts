import { endpoints } from "@/config/endpoints.ts";
import { useQuery } from "@tanstack/react-query";

interface Props {
  clerkSessionId?: string;
}

export const useAuthorization = ({ clerkSessionId }: Props) => {
  const 

  const { data, isError, error, isPending } = useQuery({
    queryKey: ["authorize", clerkSessionId],
    queryFn: async () => authorizeUser({ clerkSessionId }),
    enabled: !!clerkSessionId,
  });

  return {
    data,
    isLoading: isPending,
    isError,
    error,
  };
};

const authorizeUser = async ({ clerkSessionId }: Props) => {
  if (!clerkSessionId) {
    throw new Error("Missing authenticatedUserId");
  }

  const res = await fetch(endpoints.AUTHORIZE_USER, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${clerkSessionId}`,
    },
  });

  return res.json();
};
