import { endpoints } from "@/config/endpoints.ts";
import { useQuery } from "@tanstack/react-query";

interface Props {
  discordToken?: string | null;
  supabaseUserId?: string;
}

export const useAuthorization = ({ discordToken, supabaseUserId }: Props) => {
  const { data, isError, error, isPending } = useQuery({
    queryKey: ["authorize", discordToken, supabaseUserId],
    queryFn: async () => authorizeUser({ discordToken, supabaseUserId }),
    enabled: !!supabaseUserId,
  });

  return {
    data,
    isLoading: isPending,
    isError,
    error,
  };
};

const authorizeUser = async ({ discordToken, supabaseUserId }: Props) => {
  if (!supabaseUserId) {
    throw new Error("Missing supabaseUserId");
  }

  const res = await fetch(endpoints.AUTHORIZE_USER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${discordToken}`,
    },
    body: JSON.stringify({ supabaseUserId }),
  });

  return res.json();
};
