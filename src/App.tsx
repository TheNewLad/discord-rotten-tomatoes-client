import "./globals.css";
import { Home } from "@/components/pages/Home.tsx";
import { SupabaseUserContext } from "@/context/SupabaseUserContext.ts";
import { useAuthorization } from "@/hooks/api/useAuthorization.ts";
import { useSupabaseSession } from "@/hooks/useSupabaseSession.ts";
import { signInWithDiscord } from "@/lib/supabase.ts";

export default function App() {
  // const { signInWithDiscord, session, authorized } = useAuth();
  const session = useSupabaseSession();
  const { data, isLoading } = useAuthorization({
    discordToken: session?.provider_token,
    supabaseUserId: session?.user.id,
  });

  if (!session) {
    return <button onClick={signInWithDiscord}>Sign in</button>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  } else if (!data.authorized) {
    return <div>Not authorized</div>;
  } else {
    return (
      <SupabaseUserContext.Provider value={session.user}>
        <Home />
      </SupabaseUserContext.Provider>
    );
  }
}
