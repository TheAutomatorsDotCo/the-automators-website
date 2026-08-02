/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Public site key for Cloudflare Turnstile widget (safe to expose client-side)
  readonly VITE_TURNSTILE_SITE_KEY: string
  // Optional override for the discovery-call booking URL
  readonly VITE_BOOKING_URL?: string
  // Chatwoot self-hosted base URL (public)
  readonly VITE_CHATWOOT_BASE_URL?: string
  // Chatwoot website inbox token (public; safe to expose client-side)
  readonly VITE_CHATWOOT_WEBSITE_TOKEN?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
