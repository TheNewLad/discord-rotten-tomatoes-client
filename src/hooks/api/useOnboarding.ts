import { endpoints } from "@/config/endpoints.ts";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";

export const useOnboarding = ({
  discordUserId,
}: {
  discordUserId?: string;
}) => {
  const queryClient = new QueryClient();

  const queryKey = ["onboarded"];

  const { data, isError, error, isPending } = useQuery({
    queryKey,
    queryFn: async () => fetchOnboardingStatus({ discordUserId }),
    enabled: !!discordUserId,
  });

  const mutation = useMutation({
    mutationFn: async ({
      reviewWeights,
    }: {
      reviewWeights: Record<string, number>;
    }) => onboardUser({ reviewWeights, discordUserId }),
    onSuccess: (data) => {
      queryClient.setQueryData(queryKey, data);
    },
  });

  return {
    data,
    onboardUser: mutation.mutate,
    isLoading: isPending,
    isError,
    error,
  };
};

const fetchOnboardingStatus = async ({
  discordUserId,
}: {
  discordUserId?: string;
}) => {
  if (!discordUserId) {
    throw new Error("Missing discordUserId");
  }

  const res = await fetch(endpoints.GET_ONBOARDED_STATUS(discordUserId));
  return res.json();
};

const onboardUser = async ({
  discordUserId,
  reviewWeights,
}: {
  discordUserId?: string;
  reviewWeights?: Record<string, number>;
}) => {
  if (!discordUserId) {
    throw new Error("Missing discordUserId");
  }

  const res = await fetch(endpoints.ONBOARD_USER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ discordUserId, reviewWeights }),
  });
  return res.json();
};
