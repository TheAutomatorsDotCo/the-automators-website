import type { VercelRequest, VercelResponse } from '@vercel/node';

// ---------------------------------------------------------------------------
// In-memory rate limiter (per Vercel warm instance — documented caveat)
// Max 5 submissions per IP per 10 minutes.
// ---------------------------------------------------------------------------

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5;
const ipTimestamps = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const hits = (ipTimestamps.get(ip) ?? []).filter(ts => ts > windowStart);
  hits.push(now);
  ipTimestamps.set(ip, hits);
  return hits.length > RATE_LIMIT_MAX;
}

// ---------------------------------------------------------------------------
// Validation helpers
// ---------------------------------------------------------------------------

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_REGEX = /^https?:\/\/.+\..+/i;

async function verifyTurnstile(token: string, remoteip?: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error('[lead] TURNSTILE_SECRET_KEY is not set');
    return false;
  }
  const body = new URLSearchParams({ secret, response: token });
  if (remoteip) body.append('remoteip', remoteip);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });
  const data = await res.json() as { success: boolean; 'error-codes'?: string[] };
  if (!data.success) {
    console.warn('[lead] Turnstile failed:', data['error-codes']);
  }
  return data.success === true;
}

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  // --- Rate limiting -------------------------------------------------------
  const ip =
    (req.headers['x-forwarded-for'] as string)?.split(',')[0].trim() ||
    req.socket?.remoteAddress ||
    'unknown';

  if (isRateLimited(ip)) {
    return res.status(429).json({ ok: false, error: 'Too many requests. Please try again later.' });
  }

  const body = req.body ?? {};

  // --- Honeypot ------------------------------------------------------------
  // If the hidden field is filled, silently accept (don't forward to n8n)
  if (body.company_website_hp) {
    return res.status(200).json({ ok: true });
  }

  // --- Turnstile verification ----------------------------------------------
  const turnstileToken = typeof body.turnstileToken === 'string' ? body.turnstileToken : '';
  if (!turnstileToken) {
    return res.status(400).json({ ok: false, error: 'Security verification is required.' });
  }

  const turnstileValid = await verifyTurnstile(turnstileToken, ip === 'unknown' ? undefined : ip);
  if (!turnstileValid) {
    return res.status(400).json({ ok: false, error: 'Security verification failed. Please refresh and try again.' });
  }

  // --- Server-side validation & sanitisation -------------------------------
  const errors: Record<string, string> = {};

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  const company = typeof body.company === 'string' ? body.company.trim() : '';
  const website = typeof body.website === 'string' ? body.website.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!name || name.length < 2) errors.name = 'Full name is required (at least 2 characters).';
  if (!email || !EMAIL_REGEX.test(email)) errors.email = 'A valid email address is required.';
  if (!company) errors.company = 'Company name is required.';
  if (!website || !URL_REGEX.test(website)) errors.website = 'A valid website URL is required (e.g. https://yourstore.com).';

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ ok: false, errors });
  }

  // --- Build the exact n8n payload contract --------------------------------
  const payload = {
    name,
    email,
    company,
    website,
    message,
    page_url:     typeof body.page_url     === 'string' ? body.page_url.trim()     : '',
    referrer:     typeof body.referrer     === 'string' ? body.referrer.trim()     : '',
    submitted_at: typeof body.submitted_at === 'string' ? body.submitted_at.trim() : new Date().toISOString(),
    utm_source:   typeof body.utm_source   === 'string' ? body.utm_source.trim()   : '',
    utm_medium:   typeof body.utm_medium   === 'string' ? body.utm_medium.trim()   : '',
    utm_campaign: typeof body.utm_campaign === 'string' ? body.utm_campaign.trim() : '',
    utm_content:  typeof body.utm_content  === 'string' ? body.utm_content.trim()  : '',
    utm_term:     typeof body.utm_term     === 'string' ? body.utm_term.trim()     : '',
  };

  // --- Forward to n8n ------------------------------------------------------
  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  const webhookSecret = process.env.N8N_WEBHOOK_SECRET;

  if (!webhookUrl) {
    console.error('[lead] N8N_WEBHOOK_URL is not set');
    return res.status(500).json({ ok: false, error: 'Form submission service is unavailable. Please contact us directly.' });
  }

  let n8nRes: Response;
  try {
    n8nRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(webhookSecret ? { 'x-webhook-token': webhookSecret } : {}),
      },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error('[lead] n8n fetch error:', err);
    return res.status(502).json({ ok: false, error: 'Failed to submit. Please try again or contact us directly.' });
  }

  if (!n8nRes.ok) {
    const text = await n8nRes.text().catch(() => '');
    console.error('[lead] n8n non-OK response:', n8nRes.status, text);
    return res.status(502).json({ ok: false, error: 'Failed to submit. Please try again or contact us directly.' });
  }

  return res.status(200).json({ ok: true });
}
