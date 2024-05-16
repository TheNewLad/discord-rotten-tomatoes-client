import "./index.css";
import { useAuth } from "@/hooks/useAuth.js";
import React from "react";

export default function App() {
  const { signInWithDiscord, signOut, session, authorized } = useAuth();

  if (!session) {
    return <button onClick={signInWithDiscord}>Sign in</button>;
  } else if (authorized === false) {
    return <div>Not authorized</div>;
  } else {
    return <button onClick={signOut}>Sign out</button>;
  }
}
