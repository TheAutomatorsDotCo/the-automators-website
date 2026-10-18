import type { VercelRequest, VercelResponse } from '@vercel/node';

// ---------------------------------------------------------------------------
// In-memory rate limiter (per Vercel warm instance)
// Max 10 unsubscribe attempts per IP per 10 minutes.
// Caveat: This is per-instance only. On a cold start or when requests hit
// different instances, the limit resets. For persistent limits, use an
// external store like Upstash Redis.
// ---------------------------------------------------------------------------

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 10;
const ipTimestamps = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const hits = (ipTimestamps.get(ip) ?? []).filter(ts => ts > windowStart);
  hits.push(now);
  ipTimestamps.set(ip, hits);
  return hits.length > RATE_LIMIT_MAX;
}

// Forwards an unsubscribe confirmation to the outreach suppression service.
// No secrets here: the token in the link is verified server-side by that service.
const UNSUBSCRIBE_ENDPOINT =
  process.env.UNSUBSCRIBE_ENDPOINT || 'https://n8n.theautomators.co/webhook/ta-unsubscribe';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TOKEN_REGEX = /^[a-f0-9]{24}$/;
const UPSTREAM_TIMEOUT_MS = 10_000;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store');

  // GET (and any other method) must never unsubscribe anyone.
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false });
  }

  // --- Rate limiting -------------------------------------------------------
  const ip =
    (req.headers['x-forwarded-for'] as string)?.split(',')[0].trim() ||
    req.socket?.remoteAddress ||
    'unknown';

  if (isRateLimited(ip)) {
    return res.status(429).json({ ok: false });
  }

  const body = (typeof req.body === 'string' ? safeParse(req.body) : req.body) || {};
  const e = String(body.e || '').trim().toLowerCase();
  const t = String(body.t || '').trim().toLowerCase();

  if (!EMAIL_REGEX.test(e) || e.length > 254 || !TOKEN_REGEX.test(t)) {
    return res.status(400).json({ ok: false });
  }

  try {
    const upstream = await fetch(UNSUBSCRIBE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ e, t }).toString(),
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    });
    return res.status(upstream.ok ? 200 : 400).json({ ok: upstream.ok });
  } catch (err) {
    console.error('[unsubscribe] upstream error', err);
    return res.status(502).json({ ok: false });
  }
}

function safeParse(s: string) {
  try {
    return JSON.parse(s);
  } catch {
    return Object.fromEntries(new URLSearchParams(s));
  }
}
