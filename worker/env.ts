export interface Env {
  ASSETS: {
    fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
  };
  TURNSTILE_SECRET_KEY?: string;
  N8N_WEBHOOK_URL?: string;
  /** Optional. Falls back to the production unsubscribe webhook. */
  UNSUBSCRIBE_ENDPOINT?: string;
}
