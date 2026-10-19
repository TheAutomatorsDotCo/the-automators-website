import { useState, useEffect } from 'react';
import { Calendar, MessageCircle, X } from 'lucide-react';
import { trackBookingClick } from '../lib/attribution';

const BREVO_BOOKING_URL = 'https://meet.brevo.com/braam-raubenheimer/discovery-call';
const WHATSAPP_URL = 'https://wa.me/27790299611';
const DISMISS_KEY = 'ta_mobile_cta_dismissed';

type MobileCTAProps = {
  onVisibilityChange?: (visible: boolean) => void;
};

export function MobileCTA({ onVisibilityChange }: MobileCTAProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem(DISMISS_KEY) === '1';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const show = visible && !dismissed;

  useEffect(() => {
    onVisibilityChange?.(show);
    return () => onVisibilityChange?.(false);
  }, [show, onVisibilityChange]);

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
