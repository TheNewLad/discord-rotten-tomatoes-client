import { Button } from "@/components/elements/button.tsx";
import { DiscordIcon } from "@/components/icons/discord.icon.tsx";
import { routes } from "@/config/routes.ts";
import { SignInButton } from "@clerk/clerk-react";

export const SignInPage = () => {
  return (
    <div className="flex h-screen min-h-full flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Sign in to Cinecord Reviews
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex justify-center">
          <SignInButton forceRedirectUrl={routes.OAUTH_AUTHORIZE}>
            <Button color="indigo" className="flex max-w-64 flex-1">
              <DiscordIcon />
              Sign in
            </Button>
          </SignInButton>
        </div>
      </div>
    </div>
  );
};
