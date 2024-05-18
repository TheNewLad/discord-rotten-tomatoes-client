import "./globals.css";
import { Home } from "@/components/pages/Home.tsx";
import { UserContext } from "@/context/UserContext.ts";
import { useAuth } from "@/hooks/useAuth.ts";

export default function App() {
  const { signInWithDiscord, session, authorized } = useAuth();

  if (!session) {
    return <button onClick={signInWithDiscord}>Sign in</button>;
  } else if (authorized === false) {
    return <div>Not authorized</div>;
  } else {
    return (
      <UserContext.Provider value={session.user}>
        <Home onboarding={true} />
      </UserContext.Provider>
    );
  }
}
