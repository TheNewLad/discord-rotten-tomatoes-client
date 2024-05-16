import { env } from "@/config/environment.js";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

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

const getAuthorizationStatus = async () => {
  let { data: profile } = await supabase
    .from("profile")
    .select("authorized")
    .single();

  return profile?.authorized ?? null;
};

function handleAuthentication(setSession) {
  supabase.auth.getSession().then(({ data: { session } }) => {
    setSession(session);
  });

  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_event, session) => {
    setSession(session);
  });

  return () => subscription.unsubscribe();
}

const handleAuthorization = async (session, setAuthorized) => {
  const authorizationStatus = await getAuthorizationStatus();

  if (typeof authorizationStatus === "boolean") {
    return setAuthorized(authorizationStatus);
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
};

export const useAuth = () => {
  const [session, setSession] = useState(null);
  const [authorized, setAuthorized] = useState(null);

  useEffect(() => {
    return handleAuthentication(setSession);
  }, []);

  useEffect(() => {
    handleAuthorization(session, setAuthorized);
  }, [session]);

  return { signInWithDiscord, signOut, session, authorized };
};
