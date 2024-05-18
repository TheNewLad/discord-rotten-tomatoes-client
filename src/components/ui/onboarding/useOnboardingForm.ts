import { onboardingSchema } from "@/components/ui/onboarding/onboardingSchema.ts";
import { UserContext } from "@/context/UserContext.ts";
import { supabase } from "@/lib/supabase.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface OnboardingPayload {
  discordId: string;
  reviewWeights: {
    plot: number;
    acting: number;
    visuals: number;
    audio: number;
    pacing: number;
  };
}

export const useOnboardingForm = () => {
  const user = useContext(UserContext);

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
      discordId: user?.user_metadata.provider_id,
      reviewWeights: data,
    });
  };

  const onboardUser = async ({
    discordId,
    reviewWeights,
  }: OnboardingPayload) => {
    // Send the data to the server
    // Once that passes then we can let Supabase know that the user has completed onboarding
    console.log({ discordId, reviewWeights });

    const { data: updatedUser } = await supabase
      .from("profile")
      .update({ onboarded: true })
      .eq("user_id", user?.id)
      .select("onboarded")
      .single();

    console.log(updatedUser);
  };

  return {
    form,
    onSubmit,
  };
};
