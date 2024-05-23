import { User } from "@supabase/supabase-js";
import { createContext } from "react";

export const SupabaseUserContext = createContext<User | null>(null);
