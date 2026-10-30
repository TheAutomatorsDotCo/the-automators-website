/** Same response headers previously set for every path in vercel.json. */
const SECURITY_HEADERS: Record<string, string> = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains',
  'Content-Security-Policy':
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com https://www.googletagmanager.com https://server.fillout.com https://chat.theautomators.co; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data:; connect-src 'self' https://challenges.cloudflare.com https://www.google-analytics.com https://analytics.google.com https://chat.theautomators.co wss://chat.theautomators.co; frame-src https://challenges.cloudflare.com https://server.fillout.com https://chat.theautomators.co; object-src 'none'; base-uri 'self';",
};

export function clientIp(request: Request): string {
  const ip = request.headers.get('CF-Connecting-IP')?.trim();
  return ip || 'unknown';
}

export function isWorkersDevHost(hostname: string): boolean {
  return hostname === 'workers.dev' || hostname.endsWith('.workers.dev');
}

export function apiJson(
  request: Request,
  body: unknown,
  status: number,
  extra?: Record<string, string>,
): Response {
  const headers = new Headers();
  headers.set('Content-Type', 'application/json; charset=utf-8');
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    headers.set(key, value);
  }
  if (extra) {
    for (const [key, value] of Object.entries(extra)) {
      headers.set(key, value);
    }
  }
  if (isWorkersDevHost(new URL(request.url).hostname) && !headers.has('X-Robots-Tag')) {
    headers.set('X-Robots-Tag', 'noindex');
  }
  return new Response(JSON.stringify(body), { status, headers });
}

export async function readBody(request: Request): Promise<Record<string, unknown>> {
  const text = await request.text();
  if (!text) return {};
  try {
    const parsed = JSON.parse(text) as unknown;
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      return parsed as Record<string, unknown>;
    }
    return {};
  } catch {
    return Object.fromEntries(new URLSearchParams(text));
  }
}
