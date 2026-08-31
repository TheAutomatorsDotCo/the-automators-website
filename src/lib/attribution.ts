const KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'pid'] as const;
const STORE_KEY = 'ta_attr';
const BOOKING_BASE = 'https://meet.brevo.com/braam-raubenheimer/e-commerce-chatbot';

export type CtaLocation = 'hero' | 'mid' | 'final' | 'sticky' | 'header' | 'faq';

/** Call once, as early as possible, before the first render. Safe to call again if query params appear later. */
export function captureAttribution() {
  try {
    const q = new URLSearchParams(window.location.search);
    const found: Record<string, string> = {};
    KEYS.forEach((k) => {
      const v = q.get(k);
      if (v) found[k] = v;
    });
    if (Object.keys(found).length) {
      sessionStorage.setItem(STORE_KEY, JSON.stringify(found));
    }
  } catch {
    // private browsing or storage disabled, carry on without attribution
  }
}

export function getAttribution(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(STORE_KEY) || '{}') as Record<string, string>;
  } catch {
    return {};
  }
}

export function bookingUrl() {
  const attr = getAttribution();
  const u = new URL(BOOKING_BASE);
  Object.keys(attr).forEach((k) => u.searchParams.set(k, attr[k]));
  return u.toString();
}

export function trackBookingClick(location: CtaLocation) {
  const attr = getAttribution();
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'booking_cta_click', {
      cta_location: location,
      campaign: attr.utm_campaign || 'direct',
      variant: attr.utm_content || 'none',
    });
  }
}
