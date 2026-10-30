/**
 * In-memory rate limiter, per Worker isolate.
 * A cold isolate, or a request served by a different isolate, starts fresh.
 * Turnstile covers the contact form as well.
 */
export function createRateLimiter(max: number, windowMs: number) {
  const ipTimestamps = new Map<string, number[]>();

  return function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const windowStart = now - windowMs;
    const hits = (ipTimestamps.get(ip) ?? []).filter((ts) => ts > windowStart);
    hits.push(now);
    ipTimestamps.set(ip, hits);
    return hits.length > max;
  };
}
