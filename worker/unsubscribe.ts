import type { Env } from './env';
import { apiJson, clientIp, readBody } from './http';
import { createRateLimiter } from './rate-limit';

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 10;
const isRateLimited = createRateLimiter(RATE_LIMIT_MAX, RATE_LIMIT_WINDOW_MS);

const DEFAULT_UNSUBSCRIBE_ENDPOINT = 'https://n8n.theautomators.co/webhook/ta-unsubscribe';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TOKEN_REGEX = /^[a-f0-9]{24}$/;
const UPSTREAM_TIMEOUT_MS = 10_000;

const NO_STORE = { 'Cache-Control': 'no-store' };

export async function handleUnsubscribe(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') {
    return apiJson(request, { ok: false }, 405, { ...NO_STORE, Allow: 'POST' });
  }

  const ip = clientIp(request);
  if (isRateLimited(ip)) {
    return apiJson(request, { ok: false }, 429, NO_STORE);
  }

  const endpoint = env.UNSUBSCRIBE_ENDPOINT || DEFAULT_UNSUBSCRIBE_ENDPOINT;

  try {
    const body = await readBody(request);
    const e = String(body.e || '').trim().toLowerCase();
    const t = String(body.t || '').trim().toLowerCase();

    if (!EMAIL_REGEX.test(e) || e.length > 254 || !TOKEN_REGEX.test(t)) {
      return apiJson(request, { ok: false }, 400, NO_STORE);
    }

    const upstream = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ e, t }).toString(),
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    });
    return apiJson(request, { ok: upstream.ok }, upstream.ok ? 200 : 400, NO_STORE);
  } catch (err) {
    console.error('[unsubscribe] upstream error', err);
    return apiJson(request, { ok: false }, 502, NO_STORE);
  }
}
