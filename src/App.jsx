import "./index.css";
import { createClient } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";
import { env } from "./environment.js";

const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_KEY);

async function signInWithDiscord() {
  await supabase.auth.signInWithOAuth({
    provider: "discord",
    options: {
      scopes: "guilds.members.read",
    },
  });
}

async function signOut() {
  await supabase.auth.signOut();
}

export default function App() {
  const [session, setSession] = useState(null);
  const [authorized, setAuthorized] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const checkIfUserAlreadyAuthorized = async () => {
      let { data: profile } = await supabase
        .from("profile")
        .select("authorized")
        .single();

      return profile?.authorized ?? null;
    };

    checkIfUserAlreadyAuthorized().then(async (authorized) => {
      if (typeof authorized === "boolean") {
        return setAuthorized(authorized);
      }

      const authToken = session?.provider_token;
      if (!authToken) return;

      const res = await fetch(`${env.API_URL}/api/authorize`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      const data = await res.json();

      const { data: newAuthorization } = await supabase
        .from("profile")
        .update({ authorized: data.authorized ?? null })
        .eq("user_id", session.user.id)
        .select("authorized")
        .single();

      setAuthorized(newAuthorization?.authorized ?? null);
    });
  }, [session]);

  if (!session) {
    return <button onClick={signInWithDiscord}>Sign in</button>;
  } else if (authorized === false) {
    return <div>Not authorized</div>;
  } else {
    return <button onClick={signOut}>Sign out</button>;
  }
}
