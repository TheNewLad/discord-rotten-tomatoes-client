import { Button } from "@/components/ui/button.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { onboardingSchema } from "@/components/ui/onboarding/onboardingSchema.ts";
import { useOnboardingForm } from "@/components/ui/onboarding/useOnboardingForm.ts";
import { z } from "zod";

type OnboardingSchema = z.infer<typeof onboardingSchema>;

const inputs: { name: keyof OnboardingSchema; label: string }[] = [
  { name: "plot", label: "Plot" },
  { name: "acting", label: "Acting" },
  {
    name: "visuals",
    label: "Visuals",
  },
  { name: "audio", label: "Audio" },
  { name: "pacing", label: "Pacing" },
];

export const OnboardingForm = () => {
  const { form, onSubmit } = useOnboardingForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-3 space-y-2">
        {inputs.map(({ name, label }) => (
          <FormField
            key={name}
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    min={0}
                    max={10}
                    type="number"
                    onChange={(event) =>
                      field.onChange(event.target.valueAsNumber)
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit" disabled={!form.formState.isValid}>
          Submit
        </Button>
      </form>
    </Form>
  );
};
