import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Calendar, ArrowRight } from 'lucide-react';
import { SEO } from './SEO';
import { getConsentChoice } from './CookieConsent';

const BREVO_BOOKING_URL = 'https://meet.brevo.com/braam-raubenheimer/discovery-call';

export function ThankYouPage() {
  const eventFired = useRef(false);

  useEffect(() => {
    if (eventFired.current) return;
    eventFired.current = true;

    const consent = getConsentChoice();
    if (consent === 'accepted' && window.gtag) {
      window.gtag('event', 'generate_lead', {
        currency: 'ZAR',
        value: 1,
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]">
      <SEO
        title="Thank You"
        description="Thank you for contacting The Automators. We will get back to you within 24 hours on business days."
        path="/thank-you"
        noindex={true}
      />

      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl relative z-10">
          <div className="glass border border-white/10 rounded-[3rem] p-10 sm:p-16 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-500 text-white mb-6 sm:mb-8">
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl gradient-text mb-4 sm:mb-6">Thank You!</h1>
            
            <p className="text-xl sm:text-2xl text-white/70 mb-4">
              We have received your message and will get back to you within 24 hours on business days.
            </p>
            
            <p className="text-lg text-white/50 mb-8 sm:mb-10">
              In the meantime, feel free to book a discovery call or explore our services.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={BREVO_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-full inline-flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book a discovery call
              </a>
              <Link
                to="/"
                className="px-8 py-4 rounded-full btn-secondary transition-all inline-flex items-center gap-2"
              >
                Back to Home
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
