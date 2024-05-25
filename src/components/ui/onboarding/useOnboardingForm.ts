import { onboardingSchema } from "@/components/ui/onboarding/onboardingSchema.ts";
import { SupabaseUserContext } from "@/context/SupabaseUserContext.ts";
import { useOnboarding } from "@/hooks/api/useOnboarding.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const useOnboardingForm = () => {
  const user = useContext(SupabaseUserContext);
  const { onboardUser } = useOnboarding({
    discordUserId: user?.user_metadata.provider_id,
  });

  const form = useForm<z.infer<typeof onboardingSchema>>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      plot: 10,
      acting: 10,
      visuals: 10,
      audio: 10,
      pacing: 10,
    },
  });

  const onSubmit = (data: z.infer<typeof onboardingSchema>) => {
    if (!user) return;

    onboardUser({
      reviewWeights: data,
    });
  };

  return {
    form,
    onSubmit,
  };
};
