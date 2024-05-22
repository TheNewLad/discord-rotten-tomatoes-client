import { endpoints } from "@/config/endpoints.ts";
import { useEffect, useState } from "react";

interface Props {
  discordToken?: string | null;
  supabaseUserId?: string;
}

export const useAuthorization = ({
  discordToken = null,
  supabaseUserId,
}: Props) => {
  const [authorized, setAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleAuthorization = async () => {
      if (!discordToken && !supabaseUserId) return;

      try {
        setIsLoading(true);

        const res = await fetch(endpoints.AUTHORIZE_USER, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${discordToken}`,
          },
          body: JSON.stringify({ supabaseUserId }),
        });

        const { authorized } = await res.json();

        setAuthorized(authorized);
      } finally {
        setIsLoading(false);
      }
    };

    handleAuthorization();
  }, [discordToken, supabaseUserId]);

  return { authorized, isLoading };
};
