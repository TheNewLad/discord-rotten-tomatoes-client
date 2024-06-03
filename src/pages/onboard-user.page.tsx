import { OnboardUserForm } from "@/components/forms/onboard-user/onboard-user.form.tsx";

export const OnboardUserPage = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-400">
          Add your review weights
        </h1>
        <p className="text-center text-slate-400">
          This will help tailor your experience.
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <OnboardUserForm />
      </div>
    </div>
  );
};
