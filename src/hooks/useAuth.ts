import { env } from "@/config/environment.ts";
import { supabase } from "@/lib/supabase.ts";
import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

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
  const { data: profile } = await supabase
    .from("profile")
    .select("authorized")
    .single();

  return profile?.authorized ?? null;
};

function handleAuthentication(setSession: (session: Session | null) => void) {
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

const handleAuthorization = async (
  session: Session | null,
  setAuthorized: (authorized: boolean) => void,
) => {
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
  const [session, setSession] = useState<Session | null>(null);
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    return handleAuthentication(setSession);
  }, []);

  useEffect(() => {
    handleAuthorization(session, setAuthorized);
  }, [session]);

  return { signInWithDiscord, signOut, session, authorized };
};
