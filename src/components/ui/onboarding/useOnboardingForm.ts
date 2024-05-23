import { onboardingSchema } from "@/components/ui/onboarding/onboardingSchema.ts";
import { SupabaseUserContext } from "@/context/SupabaseUserContext.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface OnboardingPayload {
  supabaseUserId: string;
  reviewWeights: {
    plot: number;
    acting: number;
    visuals: number;
    audio: number;
    pacing: number;
  };
}

export const useOnboardingForm = () => {
  const user = useContext(SupabaseUserContext);

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
      supabaseUserId: user?.id,
      reviewWeights: data,
    });
  };

  const onboardUser = async ({
    supabaseUserId,
    reviewWeights,
  }: OnboardingPayload) => {
    // Send the data to the server
    // Once that passes then we can let Supabase know that the user has completed onboarding
    console.log({ supabaseUserId, reviewWeights });
  };

  return {
    form,
    onSubmit,
  };
};
