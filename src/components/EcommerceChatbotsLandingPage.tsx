import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingBag, Truck, UserPlus, Store, CheckCircle,
  Star, Quote, ArrowRight, Calendar, Shield, Clock,
  X, ShoppingCart, MessageSquare, Zap, Search, Wrench, Rocket, ChevronDown,
} from 'lucide-react';
import { SEO } from './SEO';
import { StarsCanvas } from './StarBackground';
import { BookingButton } from './BookingButton';
import { captureAttribution } from '../lib/attribution';
import { EPIC_DEALS_VOLUME, EPIC_DEALS_VOLUME_LABEL } from './CaseStudies/caseStudiesData';

// ---------------------------------------------------------------------------
// Brand marks: monochrome currentColor, ~22px, trademark-safe silhouette usage
// ---------------------------------------------------------------------------

const ShopifyLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 256 292" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="24" height="24">
    <path
      fill="currentColor"
      d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805-.19.056-3.388 1.043-8.678 2.68-5.18-14.906-14.322-28.604-30.405-28.604-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.976 70.635-14.558 4.511-24.9 7.718-26.221 8.133-8.126 2.549-8.383 2.805-9.45 10.462C21.3 95.806.038 260.235.038 260.235l165.678 31.042 89.77-19.42S223.973 58.8 223.775 57.34z"
    />
  </svg>
);

const WooCommerceLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="24" height="24">
    <path d="M3.5 9L6.2 16L9 10.5L11.8 16L14.5 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="19.5" cy="12.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const MessengerLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="24" height="24">
    <path
      fill="currentColor"
      d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.1l3.131 3.259 5.889-3.259-6.561 6.863z"
    />
  </svg>
);

const WhatsAppLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="24" height="24">
    <path
      fill="currentColor"
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
    />
  </svg>
);

const MARK_CLASS = 'w-6 h-6 flex-shrink-0 block';

function PlatformMark({ Logo, name }: { Logo: React.FC<{ className?: string }>; name: string }) {
  return (
    <div className="flex items-center space-x-2 flex-shrink-0 text-white/70 hover:text-white">
      <Logo className={MARK_CLASS} />
      <span className="text-sm">{name}</span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sticky booking bar: session-only dismiss. Chat widget goes in this corner later.
// ---------------------------------------------------------------------------

const STICKY_DISMISS_KEY = 'ta_sticky_dismissed';

function StickyBookBar({ onVisibilityChange }: { onVisibilityChange: (visible: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem(STICKY_DISMISS_KEY) === '1';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 450);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const show = scrolled && !dismissed;

  useEffect(() => {
    onVisibilityChange(show);
  }, [show, onVisibilityChange]);

  const dismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(STICKY_DISMISS_KEY, '1');
    } catch {
      // ignore
    }
  };

  return (
    <div
      className={`fixed z-50 motion-safe:transition-all motion-safe:duration-300 ${
        show ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      } inset-x-0 bottom-0 sm:inset-x-auto sm:bottom-8 sm:right-6`}
      aria-hidden={!show}
    >
      <div className="flex items-center gap-3 bg-[#1a1a2e]/95 border-t border-white/20 px-4 py-3 sm:glass sm:border sm:rounded-full sm:px-4 sm:py-2.5 sm:shadow-2xl sm:shadow-black/40">
        <BookingButton
          location="sticky"
          tabIndex={show ? 0 : -1}
          className="flex-1 sm:flex-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-sm font-semibold px-5 py-2.5 sm:py-2 rounded-full inline-flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          <Calendar className="w-4 h-4" />
          Book a 25 min demo
        </BookingButton>
        <button
          onClick={dismiss}
          tabIndex={show ? 0 : -1}
          className="text-white/50 hover:text-white/80 transition-colors p-1 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          aria-label="Dismiss booking prompt"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Static data
// ---------------------------------------------------------------------------

const PLATFORM_BADGES = [
  { Logo: ShopifyLogo, name: 'Shopify' },
  { Logo: WooCommerceLogo, name: 'WooCommerce' },
  { Logo: MessengerLogo, name: 'Messenger' },
  { Logo: WhatsAppLogo, name: 'WhatsApp' },
] as const;

const PAIN_POINTS = [
  {
    icon: ShoppingCart,
    color: 'text-rose-400',
    title: '~70% of carts are abandoned',
    body: 'Most shoppers leave without buying, and without a chatbot you have no automated way to bring them back.',
  },
  {
    icon: Clock,
    color: 'text-amber-400',
    title: 'Sales happen after hours',
    body: 'Customers shop at midnight. Questions go unanswered. They find a competitor who replied first.',
  },
  {
    icon: MessageSquare,
    color: 'text-cyan-400',
    title: 'Support drowns your team',
    body: 'Repeat shipping and returns questions steal time from work that grows your store.',
  },
] as const;

const VALUE_CARDS = [
  {
    icon: ShoppingBag,
    color: 'text-indigo-400',
    title: 'Recover Abandoned Carts',
    body: 'Re-engage shoppers who leave without buying. Your chatbot follows up automatically and brings them back before the sale is lost.',
    extra: false,
  },
  {
    icon: Truck,
    color: 'text-cyan-400',
    title: 'Instant Order & Shipping Answers',
    body: 'Give customers real-time answers on order status, shipping timelines, and return policies, without a single support ticket reaching your team.',
    extra: false,
  },
  {
    icon: UserPlus,
    color: 'text-green-400',
    title: 'Qualify Leads & Capture Contacts',
    body: 'Chat with every visitor, collect emails, and route high-intent buyers to your sales team, so no warm prospect slips through the cracks.',
    extra: false,
  },
  {
    icon: Store,
    color: 'text-purple-400',
    title: 'Shopify & WooCommerce Ready',
    body: 'Native integrations with your store platform. Your chatbot reads product data, live inventory, and order history from day one.',
    extra: true,
  },
];

const PROCESS_STEPS = [
  {
    icon: Search,
    color: 'text-indigo-400',
    step: '01',
    title: 'Audit',
    body: 'We map your top customer questions, your product catalogue, and the support bottlenecks costing you the most time.',
  },
  {
    icon: Wrench,
    color: 'text-purple-400',
    step: '02',
    title: 'Build',
    body: 'We train the AI on your store data and brand voice, wire up your integrations, and configure every conversation flow.',
  },
  {
    icon: Rocket,
    color: 'text-cyan-400',
    step: '03',
    title: 'Launch',
    body: "We deploy to your store, run final tests, and hand over a chatbot that's live and already routing leads to your inbox.",
  },
] as const;

const PROOF_STATS = [
  {
    value: EPIC_DEALS_VOLUME,
    label: EPIC_DEALS_VOLUME_LABEL,
    sub: 'Handled for one South African store',
    wide: true,
  },
  {
    value: '95%+',
    label: 'Handled without a human',
    sub: 'Escalated with full context when not',
    wide: false,
  },
  {
    value: '2-3 wks',
    label: 'Average go-live',
    sub: 'From first call to live chatbot',
    wide: false,
  },
];

const FAQS = [
  {
    q: 'Which platforms and channels do you support?',
    a: 'We build native integrations for Shopify and WooCommerce, with support for website chat widgets, Facebook Messenger, WhatsApp Business, and Instagram DMs. One chatbot can serve all your channels simultaneously with synced conversation history.',
  },
  {
    q: 'How long does it take to go live?',
    a: 'Most ecommerce chatbot projects are live within 2-3 weeks from the kick-off call. The timeline covers the audit, building and training the AI on your product and order data, integration setup, and testing. Simpler stores can be ready in under a week.',
  },
  {
    q: 'What does it cost?',
    a: 'Every chatbot is custom-scoped to your store size and complexity. The 25-minute demo is specifically so we can give you an accurate, no-surprises quote. Flexible payment terms are available.',
  },
  {
    q: 'Is my customer data safe?',
    a: 'Yes. Your customer data stays within your existing platform (Shopify, WooCommerce, etc.) and is only read by the chatbot at query time. We do not store or sell your customer data. All connections are encrypted in transit, and we are happy to sign a data processing agreement if required.',
  },
];

const CTA_CLASS =
  'btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-full inline-flex items-center space-x-2';

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function EcommerceChatbotsLandingPage() {
  const [stickyVisible, setStickyVisible] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    captureAttribution();
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e] ${stickyVisible ? 'pb-20 sm:pb-0' : ''}`}>
      <SEO
        title="Ecommerce Chatbots That Recover Sales & Cut Support Costs"
        description="AI-powered chatbots built for ecommerce stores. Recover abandoned carts, answer order questions 24/7, and integrate with Shopify or WooCommerce. Book a free 25 min demo."
        path="/chatbots-for-ecommerce"
        keywords="ecommerce chatbot, shopify chatbot, woocommerce chatbot, abandoned cart recovery, customer support chatbot, ecommerce AI"
        noindex
      />
      <StarsCanvas />
      <StickyBookBar onVisibilityChange={setStickyVisible} />

      {/* ================================================================
          HERO
      ================================================================= */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center relative z-10 max-w-5xl">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-white/10 text-white/70 text-sm mb-6">
            <Zap className="w-4 h-4 text-indigo-400" />
            <span>Built exclusively for ecommerce stores</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl gradient-text mb-6 leading-tight">
            The messages your store gets at 11pm
            <br />
            are the sales you lose by 8am
          </h1>
          <p className="text-lg sm:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-8">
            An AI chatbot trained on your store. It answers order and shipping questions
            instantly, recovers carts before they go cold, and takes the repetitive load
            off your team without adding headcount.
          </p>

          <div className="platform-badges flex items-center justify-center mb-10">
            <span className="w-full text-center text-white/50 text-sm">Works with:</span>
            {PLATFORM_BADGES.map(({ Logo, name }) => (
              <PlatformMark key={name} Logo={Logo} name={name} />
            ))}
          </div>

          <BookingButton location="hero" className={CTA_CLASS}>
            <Calendar className="w-5 h-5" />
            <span>Book a 25 min demo</span>
          </BookingButton>
          <p className="text-white/60 text-sm mt-10">Free. We run it on your own products, nothing to install.</p>
        </div>
      </section>

      {/* ================================================================
          PAIN POINTS
      ================================================================= */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl text-white mb-3">Sound familiar?</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              These are the gaps that cost ecommerce stores real revenue, every day they go unaddressed.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 items-start">
            {PAIN_POINTS.map(({ icon: Icon, color, title, body }) => (
              <div key={title} className="rounded-2xl glass border border-white/10 p-8 flex flex-col">
                <Icon className={`w-8 h-8 ${color} mb-6`} />
                <h3 className="text-white font-semibold mb-4">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          VALUE PROPS
      ================================================================= */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl gradient-text mb-4">
              What Your Chatbot Does for You
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Purpose-built for ecommerce, not a generic bot bolted onto your site.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {VALUE_CARDS.map(({ icon: Icon, color, title, body, extra }) => (
              <div
                key={title}
                className="rounded-3xl glass border border-white/10 p-8 hover:border-white/20 flex flex-col"
              >
                <Icon className={`w-8 h-8 ${color} mb-6`} />
                <h3 className="text-white text-xl mb-4">{title}</h3>
                <p className="text-white/60 mb-4">{body}</p>
                {extra && (
                  <div className="platform-badges flex items-center">
                    {([
                      { Logo: ShopifyLogo, name: 'Shopify' },
                      { Logo: WooCommerceLogo, name: 'WooCommerce' },
                      { Logo: MessengerLogo, name: 'Messenger' },
                    ] as const).map(({ Logo, name }) => (
                      <PlatformMark key={name} Logo={Logo} name={name} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          HOW IT WORKS
      ================================================================= */}
      <section id="how-it-works" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ scrollMarginTop: '6.5rem' }}>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl gradient-text mb-4">
              From Zero to Live in 2-3 Weeks
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              A simple three-step process. No technical knowledge required on your end.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 items-start">
            {PROCESS_STEPS.map(({ icon: Icon, color, step, title, body }) => (
              <div key={title} className="rounded-2xl glass border border-white/10 p-8 flex flex-col">
                <Icon className={`w-8 h-8 ${color} mb-6`} />
                <p className={`text-sm ${color} mb-2`}>{step}</p>
                <h3 className="text-white font-semibold mb-4">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SOCIAL PROOF
      ================================================================= */}
      <section id="results" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ scrollMarginTop: '6.5rem' }}>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {PROOF_STATS.map(({ value, label, sub, wide }) => (
              <div key={label} className="glass border border-white/10 rounded-3xl p-8 text-center hover:border-white/20 hover:shadow-lg transition-all duration-200">
                <div className={`gradient-text mb-2 ${wide ? 'text-3xl sm:text-4xl' : 'text-5xl'}`}>{value}</div>
                <h4 className="text-white mb-1">{label}</h4>
                <p className="text-white/60 text-sm">{sub}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl gradient-text mb-4">What Ecommerce Stores Say</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />
              <div className="relative overflow-hidden rounded-3xl sm:rounded-[2rem] bg-[#1a1a2e]/80 backdrop-blur-xl border border-white/10 p-6 sm:p-8 group-hover:border-white/20 group-hover:bg-[#1a1a2e]/90 transition-all flex flex-col">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500" />

                <div className="relative z-10 flex justify-center mb-5 sm:mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-2 ring-white/20 group-hover:ring-purple-500/60 transition-all">
                      <img
                        src="/brad.png"
                        alt="Brad Eyre, Founder and CEO of Epic Deals"
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mb-5 sm:mb-6 flex-1">
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500/20 mb-3 sm:mb-4" />
                  <p className="text-white/80 leading-relaxed text-base italic">
                    Automation allowed us to compete with teams twice our size. Normal work just
                    disappeared, and we could focus on what matters, getting every device right
                    and delighting our customers.
                  </p>
                </div>

                <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-5 sm:mb-6" />

                <div className="relative z-10 text-center">
                  <h4 className="text-white font-semibold text-base sm:text-lg mb-1">Brad Eyre</h4>
                  <a
                    href="https://epicdeals.co.za/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 text-sm sm:text-base hover:text-purple-400 transition-colors inline-block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
                  >
                    Founder &amp; CEO, Epic Deals
                  </a>
                  <div className="flex space-x-2 justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-pink-500 text-pink-500" fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link
                to="/case-studies/epic-deals"
                className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 text-sm"
              >
                Read the Epic Deals case study
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          PRIMARY CTA
      ================================================================= */}
      <section id="book" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ scrollMarginTop: '6.5rem' }}>
        <div className="container mx-auto max-w-2xl relative z-10">
          <div className="relative overflow-hidden rounded-[2.5rem] glass border border-white/10 p-10 sm:p-14 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white mb-6">
                <Calendar className="w-8 h-8" />
              </div>
              <h2 className="text-4xl sm:text-5xl gradient-text mb-4">
                See it running on your own products
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Send us your store URL and we will build a working demo on your real products,
                then walk you through it in 25 minutes. If it is not a fit, you will know inside
                the first five.
              </p>

              <BookingButton location="final" className={`${CTA_CLASS} text-lg px-10 py-5`}>
                <Calendar className="w-5 h-5" />
                <span>Book my 25 min demo</span>
              </BookingButton>

              <div className="flex items-center justify-center gap-6 mt-10 text-white/60 text-sm flex-wrap">
                <span className="flex items-center space-x-2"><Clock className="w-4 h-4" /> <span>Runs on your real products</span></span>
                <span className="flex items-center space-x-2"><CheckCircle className="w-4 h-4" /> <span>Nothing to install</span></span>
                <span className="flex items-center space-x-2"><Shield className="w-4 h-4" /> <span>You keep the findings either way</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          FAQ
      ================================================================= */}
      <section id="faq" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" style={{ scrollMarginTop: '6.5rem' }}>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl gradient-text mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-white/60">Quick answers before your demo</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((item, idx) => {
              const open = openFAQ === idx;
              return (
                <div
                  key={item.q}
                  className="glass border border-white/10 rounded-2xl overflow-hidden hover:border-white/20"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFAQ(open ? null : idx)}
                    aria-expanded={open}
                    className="w-full text-left p-6 flex items-start justify-between gap-4"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="flex-1">
                      <h3 className={`text-white font-semibold text-lg ${open ? 'mb-4' : ''}`}>
                        {item.q}
                      </h3>
                      {open && (
                        <p className="text-white/60 text-sm leading-relaxed">{item.a}</p>
                      )}
                    </div>
                    <ChevronDown
                      className="w-5 h-5 text-white/60 flex-shrink-0"
                      style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms' }}
                    />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <p className="text-white/60 mb-4">Still have questions?</p>
            <BookingButton
              location="faq"
              className="text-indigo-400 hover:text-indigo-300 inline-flex items-center space-x-2 text-sm"
            >
              Ask us on the 25 min demo <ArrowRight className="w-4 h-4" />
            </BookingButton>
          </div>
        </div>
      </section>
    </div>
  );
}
