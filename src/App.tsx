import "./globals.css";
import { Home } from "@/components/pages/Home.tsx";
import { useAuth } from "@/hooks/useAuth.ts";

export default function App() {
  const { signInWithDiscord, signOut, session, authorized } = useAuth();

  if (!session) {
    return <button onClick={signInWithDiscord}>Sign in</button>;
  } else if (authorized === false) {
    return <div>Not authorized</div>;
  } else {
    return <Home />; //<button onClick={signOut}>Sign out</button>;
  }
}
