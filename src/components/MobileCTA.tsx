import { useState, useEffect } from 'react';
import { Calendar, MessageCircle, X } from 'lucide-react';
import { trackBookingClick } from '../lib/attribution';

const BREVO_BOOKING_URL = 'https://meet.brevo.com/braam-raubenheimer/discovery-call';
const WHATSAPP_URL = 'https://wa.me/27790299611';
const DISMISS_KEY = 'ta_mobile_cta_dismissed';
const LG_QUERY = '(min-width: 64rem)';

type MobileCTAProps = {
  onVisibilityChange?: (visible: boolean) => void;
};

export function MobileCTA({ onVisibilityChange }: MobileCTAProps) {
  const [isLg, setIsLg] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(LG_QUERY).matches;
  });
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem(DISMISS_KEY) === '1';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const mq = window.matchMedia(LG_QUERY);
    const onChange = () => setIsLg(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const show = isLg && visible && !dismissed;

  useEffect(() => {
    onVisibilityChange?.(show);
    return () => onVisibilityChange?.(false);
  }, [show, onVisibilityChange]);

  if (!isLg) return null;

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, '1');
    } catch {
      // ignore
    }
  };

  const handleBookClick = () => {
    trackBookingClick('sticky');
  };

  return (
    <div
      className={`sticky-cta ${show ? 'is-visible' : 'is-hidden'}`}
      aria-hidden={!show}
    >
      <div className="sticky-cta-inner">
        <a
          href={BREVO_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleBookClick}
          tabIndex={show ? 0 : -1}
          className="sticky-cta-btn sticky-cta-btn-book"
        >
          <Calendar className="w-4 h-4" />
          Book a demo
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={show ? 0 : -1}
          className="sticky-cta-btn sticky-cta-btn-wa"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp us
        </a>
        <button
          onClick={handleDismiss}
          tabIndex={show ? 0 : -1}
          className="sticky-cta-dismiss"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
