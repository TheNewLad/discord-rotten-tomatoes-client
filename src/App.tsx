import "./globals.css";
import { Home } from "@/components/pages/Home.tsx";
import { useAuthorization } from "@/hooks/api/useAuthorization.ts";

export default function App() {
  // const { signInWithDiscord, session, authorized } = useAuth();
  const session = null;
  const { data, isLoading } = useAuthorization({
    discordToken: session?.provider_token,
    authenticatedUserId: session?.user.id,
  });

  if (!session) {
    return <button onClick={signInWithDiscord}>Sign in</button>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  } else if (!data.authorized) {
    return <div>Not authorized</div>;
  } else {
    return <Home />;
  }
}
