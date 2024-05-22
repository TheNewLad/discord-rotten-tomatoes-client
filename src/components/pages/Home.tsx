import { Dashboard } from "@/components/layouts/Dashboard";
import { Onboarding } from "@/components/ui/Onboarding.tsx";

export const Home = () => {
  return (
    <Dashboard>
      <h1 className="text-2xl font-bold">Home</h1>
      <p className="mt-4">Welcome to the Home page!</p>
      <input type="text" className="rounded-md" />
      <Onboarding />
    </Dashboard>
  );
};
