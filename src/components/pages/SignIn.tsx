import { SignIn as ClerkSignIn } from "@clerk/clerk-react";

export const SignIn = () => (
  <div className="grid h-screen place-items-center">
    <ClerkSignIn />
  </div>
);
