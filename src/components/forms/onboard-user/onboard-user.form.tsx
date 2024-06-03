import { onboardUserSchema } from "@/components/forms/onboard-user/onboard-user.schema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const OnboardUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof onboardUserSchema>>({
    resolver: zodResolver(onboardUserSchema),
  });

  const fields: {
    name: keyof z.infer<typeof onboardUserSchema>;
    label: string;
  }[] = [
    {
      name: "plot",
      label: "Plot (0-10)",
    },
    {
      name: "acting",
      label: "Acting (0-10)",
    },
    {
      name: "visuals",
      label: "Visuals (0-10)",
    },
    {
      name: "audio",
      label: "Audio (0-10)",
    },
    {
      name: "pacing",
      label: "Pacing (0-10)",
    },
  ];

  return (
    <form
      className="space-y-6"
      onSubmit={handleSubmit((data) => console.log("form data", data))}
    >
      {fields.map((field) => (
        <div key={field.name}>
          <label
            htmlFor={register(field.name).name}
            className="block text-sm font-medium leading-6 text-slate-400"
          >
            {field.label}
          </label>
          <input
            id={register(field.name).name}
            type="number"
            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...register(field.name, { valueAsNumber: true })}
          />
          {errors[field.name]?.message && (
            <p className="mt-1 text-sm text-rose-400">
              {errors[field.name]?.message}
            </p>
          )}
        </div>
      ))}

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save Review Ratings
        </button>
      </div>
    </form>
  );
};
