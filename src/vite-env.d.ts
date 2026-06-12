/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Public site key for Cloudflare Turnstile widget (safe to expose client-side)
  readonly VITE_TURNSTILE_SITE_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
