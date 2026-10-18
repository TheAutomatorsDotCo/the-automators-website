import { useState, useEffect } from 'react';
import { Calendar, MessageCircle, X } from 'lucide-react';
import { captureAttribution } from '../lib/attribution';

const BREVO_BOOKING_URL = 'https://meet.brevo.com/braam-raubenheimer/discovery-call';
const WHATSAPP_URL = 'https://wa.me/27790299611';
const DISMISS_KEY = 'ta_mobile_cta_dismissed';

export function MobileCTA() {
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

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, '1');
    } catch {
      // ignore
    }
  };

  const handleBookClick = () => {
    captureAttribution('booking_cta_click', { location: 'mobile_sticky' });
  };

  const handleWhatsAppClick = () => {
    captureAttribution('whatsapp_cta_click', { location: 'mobile_sticky' });
  };

  return (
    <div
      className={`lg:hidden fixed z-40 inset-x-0 motion-safe:transition-all motion-safe:duration-300 ${
        show ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-full pointer-events-none'
      }`}
      style={{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 80px)' }}
      aria-hidden={!show}
    >
      <div className="mx-4 flex items-center gap-2 bg-[#1a1a2e]/95 backdrop-blur-xl border border-white/10 rounded-2xl px-3 py-2.5 shadow-2xl shadow-black/50">
        <a
          href={BREVO_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleBookClick}
          tabIndex={show ? 0 : -1}
          className="flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        >
          <Calendar className="w-4 h-4" />
          Book a demo
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          tabIndex={show ? 0 : -1}
          className="flex-1 bg-[#25D366] text-white text-sm font-semibold px-4 py-2.5 rounded-xl inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp us
        </a>
        <button
          onClick={handleDismiss}
          tabIndex={show ? 0 : -1}
          className="text-white/50 hover:text-white/80 transition-colors p-1.5 rounded-full"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
