# Chronos — Bare-Bones Setup

This gives you: Supabase client, Google auth (via Supabase OAuth), auth-gated
navigation with `expo-router`, a glassmorphic bottom tab bar, and four themed
screens — all plain `StyleSheet`, no NativeWind.

## 0. Copy files in

Drop everything here into your existing Expo project, matching folders:
`app/`, `src/`, `supabase/`, `.env.example`.

## 1. Install dependencies

```bash
npx expo install expo-blur expo-web-browser expo-auth-session expo-splash-screen expo-crypto
npx expo install @react-native-async-storage/async-storage react-native-url-polyfill
npx expo install @expo-google-fonts/playfair-display @expo-google-fonts/inter expo-font

npm install @supabase/supabase-js
```

`expo-router` and `@expo/vector-icons` should already be present from the
default template — if not: `npx expo install expo-router @expo/vector-icons`.

## 2. Create your Supabase project

1. Go to https://supabase.com/dashboard → **New project**.
2. Once created, go to **Project Settings → API** and copy the **Project URL**
   and **anon public key**.
3. Copy `.env.example` → `.env` and fill those in:

```
EXPO_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=xxxxxxxx
```

4. Open **SQL Editor** in Supabase, paste in `supabase/schema.sql`, and run it.
   This creates `profiles`, `goals`, `milestones`, `tasks` — each with row
   level security so users can only see their own rows.

## 3. Set up Google OAuth

**In Google Cloud Console** (https://console.cloud.google.com/apis/credentials):
1. Create an OAuth 2.0 Client ID of type **Web application** (Supabase needs
   this one specifically, even though your app is mobile).
2. Under **Authorized redirect URIs**, add your Supabase callback:
   `https://xxxx.supabase.co/auth/v1/callback`
3. Copy the **Client ID** and **Client Secret**.

**In Supabase Dashboard:**
1. Go to **Authentication → Providers → Google**.
2. Toggle it on, paste in the Client ID and Client Secret, save.

**In your app** (`app.json`), add a URL scheme so redirects work outside Expo
Go (dev builds / production):

```json
{
  "expo": {
    "scheme": "chronos"
  }
}
```

While you're testing in **Expo Go**, `expo-auth-session`'s
`makeRedirectUri()` automatically uses the `auth.expo.io` proxy, so it works
without any extra config. Once you move to a dev build or standalone app, it
switches to using your `scheme` — no code changes needed on your end.

## 4. Run it

```bash
npx expo start
```

You should land on the login screen, tap **Continue with Google**, get
redirected back into the app signed in, and land on the tab bar.

## Notes

- **Glassmorphism**: `src/components/GlassView.tsx` and `GlassButton.tsx`
  wrap `expo-blur`'s `<BlurView>` — that's what gives the frosted look. Reuse
  these anywhere you want a glass card/button instead of hand-rolling blur
  each time.
- **Native Google Sign-In alternative**: what's here uses Supabase's OAuth
  web flow, which is the fastest to wire up and works in Expo Go. If you'd
  rather use the native `@react-native-google-signin/google-signin` SDK
  (typically smoother UX, but requires a dev build and a bit more Google
  Console setup with a separate Android/iOS OAuth client), let me know and
  I'll swap `AuthContext.tsx` over to that flow with `signInWithIdToken`.
- **Fonts**: loaded via `@expo-google-fonts` in `app/_layout.tsx`. Swap in
  the exact weights you want (e.g. `PlayfairDisplay_700Bold` for the splash
  wordmark) as you build out more screens.
- **Mascot**: `login.tsx` has a plain circle placeholder — drop in the real
  Chronos illustration whenever it's ready.
- Calendar/Goals/Chronos screens are intentionally minimal — they show the
  theme and glass components working, but the real data-fetching (Supabase
  queries for goals/tasks) isn't wired in yet. Ping me when you're ready for
  that layer.
