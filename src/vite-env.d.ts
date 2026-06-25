/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Public site key for Cloudflare Turnstile widget (safe to expose client-side)
  readonly VITE_TURNSTILE_SITE_KEY: string
  // Optional override for the discovery-call booking URL
  readonly VITE_BOOKING_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
