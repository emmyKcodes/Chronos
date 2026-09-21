import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Missing EXPO_PUBLIC_SUPABASE_URL / EXPO_PUBLIC_SUPABASE_ANON_KEY. Check your .env file.",
  );
}

// expo-router's web output renders in Node during dev/build (SSR), where
// `window` doesn't exist. AsyncStorage's web shim assumes it does, so calling
// it there crashes the whole bundler. This adapter no-ops in that context
// and behaves normally everywhere else (native + real browser).
const isServer = typeof window === "undefined";

const ssrSafeStorage = {
  getItem: (key: string) =>
    isServer ? Promise.resolve(null) : AsyncStorage.getItem(key),
  setItem: (key: string, value: string) =>
    isServer ? Promise.resolve() : AsyncStorage.setItem(key, value),
  removeItem: (key: string) =>
    isServer ? Promise.resolve() : AsyncStorage.removeItem(key),
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ssrSafeStorage,
    autoRefreshToken: true,
    persistSession: true,
    // We're using expo-auth-session to open the OAuth browser tab ourselves,
    // so Supabase doesn't need to try to parse the redirect URL itself.
    detectSessionInUrl: false,
  },
});
