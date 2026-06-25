import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingCart, MessageSquare, Users, Zap, CheckCircle,
  Star, Quote, ArrowRight, Calendar, Shield, Clock,
  X, Bot, RotateCcw,
} from 'lucide-react';
import { SEO } from './SEO';
import { StarsCanvas } from './StarBackground';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from './ui/accordion';

// ---------------------------------------------------------------------------
// Brand logos (inlined SVG)
// ---------------------------------------------------------------------------

const ShopifyLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 256 292" xmlns="http://www.w3.org/2000/svg" aria-label="Shopify">
    <path d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805-.19.056-3.388 1.043-8.678 2.68-5.18-14.906-14.322-28.604-30.405-28.604-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.976 70.635-14.558 4.511-24.9 7.718-26.221 8.133-8.126 2.549-8.383 2.805-9.45 10.462C21.3 95.806.038 260.235.038 260.235l165.678 31.042 89.77-19.42S223.973 58.8 223.775 57.34zM156.49 40.848l-14.019 4.339c.005-.988.01-1.96.01-3.023 0-9.264-1.286-16.723-3.349-22.636 8.287 1.04 13.806 10.469 17.358 21.32zm-27.638-19.483c2.304 5.773 3.802 14.058 3.802 25.238 0 .572-.005 1.095-.01 1.624-9.117 2.824-19.024 5.89-28.953 8.966 5.575-21.516 16.025-31.908 25.161-35.828zm-11.131-10.537c1.617 0 3.246.549 4.805 1.622-12.007 5.65-24.877 19.88-30.312 48.297l-22.886 7.088C75.694 46.16 90.81 10.828 117.72 10.828z" fill="#95BF46"/>
    <path d="M221.237 54.983c-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-.637-.634-1.496-.959-2.394-1.099l-12.527 256.233 89.762-19.418S223.972 58.8 223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357" fill="#5E8E3E"/>
    <path d="M135.242 104.585l-11.069 32.926s-9.698-5.176-21.586-5.176c-17.428 0-18.305 10.937-18.305 13.693 0 15.038 39.2 20.8 39.2 56.024 0 27.713-17.577 45.558-41.277 45.558-28.44 0-42.984-17.7-42.984-17.7l7.615-25.16s14.95 12.835 27.565 12.835c8.243 0 11.596-6.49 11.596-11.232 0-19.616-32.16-20.491-32.16-52.724 0-27.129 19.472-53.382 58.778-53.382 15.145 0 22.627 4.338 22.627 4.338" fill="#FFF"/>
  </svg>
);

const FacebookLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 666.667 666.667" aria-label="Facebook / Meta">
    <defs><clipPath id="fb-clip" clipPathUnits="userSpaceOnUse"><path d="M0 700h700V0H0Z"/></clipPath></defs>
    <g clipPath="url(#fb-clip)" transform="matrix(1.33333 0 0 -1.33333 -133.333 800)">
      <path d="M0 0c0 138.071-111.929 250-250 250S-500 138.071-500 0c0-117.245 80.715-215.622 189.606-242.638v166.242h-51.552V0h51.552v32.919c0 85.092 38.508 124.532 122.048 124.532 15.838 0 43.167-3.105 54.347-6.211V81.986c-5.901.621-16.149.932-28.882.932-40.993 0-56.832-15.528-56.832-55.9V0h81.659l-14.028-76.396h-67.631v-171.773C-95.927-233.218 0-127.818 0 0" style={{fill:'#0866ff',fillRule:'nonzero',stroke:'none'}} transform="translate(600 350)"/>
      <path d="m0 0 14.029 76.396H-67.63v27.019c0 40.372 15.838 55.899 56.831 55.899 12.733 0 22.981-.31 28.882-.931v69.253c-11.18 3.106-38.509 6.212-54.347 6.212-83.539 0-122.048-39.441-122.048-124.533V76.396h-51.552V0h51.552v-166.242a250.559 250.559 0 0 1 60.394-7.362c10.254 0 20.358.632 30.288 1.831V0Z" style={{fill:'#fff',fillRule:'nonzero',stroke:'none'}} transform="translate(447.918 273.604)"/>
    </g>
  </svg>
);

// Simplified WooCommerce mark: purple badge with W + o letterforms
const WooCommerceLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="WooCommerce">
    <rect width="24" height="24" rx="4" fill="#7F54B3"/>
    <path d="M3.5 9L6.2 16L9 10.5L11.8 16L14.5 9" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="19.5" cy="12.5" r="2.5" stroke="white" strokeWidth="1.5"/>
  </svg>
);

const WhatsAppLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="WhatsApp">
    <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// ---------------------------------------------------------------------------
// Booking URL: respects VITE_BOOKING_URL env override
// ---------------------------------------------------------------------------

const BOOKING_URL = import.meta.env.VITE_BOOKING_URL ?? 'https://meet.brevo.com/braam-raubenheimer/e-commerce-chatbot';

function BookButton({ label = 'Book a 25 min discovery call', className = '' }: { label?: string; className?: string }) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-full inline-flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${className}`}
    >
      <Calendar className="w-5 h-5" />
      <span>{label}</span>
    </a>
  );
}

// ---------------------------------------------------------------------------
// Sticky booking bar: appears after scrolling past the hero
// ---------------------------------------------------------------------------

function StickyBookBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 450);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const show = visible && !dismissed;

  return (
    <div
      className={`fixed bottom-8 right-6 z-50 flex items-center gap-3 glass border border-white/20 rounded-full px-4 py-2.5 shadow-2xl shadow-black/40 motion-safe:transition-all motion-safe:duration-300 ${
        show ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-hidden={!show}
    >
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={show ? 0 : -1}
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-sm font-semibold px-5 py-2 rounded-full inline-flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
      >
        <Calendar className="w-4 h-4" />
        Book a free discovery call
      </a>
      <button
        onClick={() => setDismissed(true)}
        tabIndex={show ? 0 : -1}
        className="text-white/50 hover:text-white/80 transition-colors p-1 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        aria-label="Dismiss booking prompt"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Compact abandoned-cart chat demo
// ---------------------------------------------------------------------------

interface DemoMsg { type: 'bot' | 'user'; text: string; }

const DEMO_INITIAL: DemoMsg = {
  type: 'bot',
  text: "Hi there! I noticed you left 2 items in your cart. Your Nike Air Max and hoodie are still waiting. Can I help you complete your order?",
};

const DEMO_SCRIPT: DemoMsg[] = [
  { type: 'user', text: "I wasn't sure about the sizing for the Air Max." },
  { type: 'bot', text: "No problem: based on your last order you wore a size 10, which runs true to size. Size 10 is in stock right now. Want me to hold your cart while you decide?" },
  { type: 'user', text: "Yes please, let's do it!" },
  { type: 'bot', text: "Cart saved! You also save R85 if you check out in the next 20 minutes, here is your direct checkout link." },
];

function AbandonedCartDemo() {
  const [messages, setMessages] = useState<DemoMsg[]>([DEMO_INITIAL]);
  const [step, setStep] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [complete, setComplete] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const delay = (ms: number) =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? Promise.resolve()
      : new Promise<void>(r => setTimeout(r, ms));

  const runNext = async () => {
    if (animating || complete) return;
    setAnimating(true);
    const nextMsg = DEMO_SCRIPT[step];
    await delay(350);
    setMessages(prev => [...prev, nextMsg]);
    if (step + 1 >= DEMO_SCRIPT.length) setComplete(true);
    setStep(s => s + 1);
    setAnimating(false);
  };

  const reset = () => {
    setMessages([DEMO_INITIAL]);
    setStep(0);
    setAnimating(false);
    setComplete(false);
  };

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] rounded-2xl border border-white/10 overflow-hidden">
      {/* Chat header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-white text-sm font-semibold">Store Assistant</div>
            <div className="text-white/70 text-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              Online 24/7
            </div>
          </div>
        </div>
        <button
          onClick={reset}
          className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          aria-label="Reset demo"
        >
          <RotateCcw className="w-3.5 h-3.5 text-white/70" />
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="p-4 min-h-[220px] max-h-[220px] overflow-y-auto space-y-3">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
              msg.type === 'bot'
                ? 'bg-white/10 text-white rounded-tl-none'
                : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-tr-none'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {complete && (
          <div className="bg-emerald-500/15 border border-emerald-500/30 rounded-xl p-3 flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
            <p className="text-emerald-300 text-xs font-medium">Cart recovered: sale won back in under 60 seconds.</p>
          </div>
        )}
      </div>

      {/* Action button */}
      <div className="border-t border-white/10 p-3">
        {complete ? (
          <button
            onClick={reset}
            className="w-full py-2.5 rounded-xl bg-white/5 text-white/70 text-sm hover:bg-white/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Replay demo
          </button>
        ) : (
          <button
            onClick={runNext}
            disabled={animating}
            className={`w-full py-2.5 rounded-xl text-white text-sm font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
              animating
                ? 'bg-white/5 cursor-not-allowed'
                : 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600'
            }`}
          >
            {step === 0 ? 'See the chatbot in action' : animating ? 'Typing...' : 'Continue conversation'}
          </button>
        )}
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
  { Logo: FacebookLogo, name: 'Messenger' },
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
    body: 'The same shipping and returns questions arrive hundreds of times a month, stealing time from work that actually grows your store.',
  },
] as const;

const VALUE_CARDS = [
  {
    icon: ShoppingCart,
    gradient: 'from-indigo-500 to-purple-500',
    title: 'Recover Abandoned Carts',
    body: 'Re-engage shoppers who leave without buying. Your chatbot follows up automatically and brings them back before the sale is lost.',
    extra: false,
  },
  {
    icon: MessageSquare,
    gradient: 'from-cyan-500 to-blue-500',
    title: 'Instant Order & Shipping Answers',
    body: 'Give customers real-time answers on order status, shipping timelines, and return policies, without a single support ticket reaching your team.',
    extra: false,
  },
  {
    icon: Users,
    gradient: 'from-green-500 to-emerald-500',
    title: 'Qualify Leads & Capture Contacts',
    body: 'Chat with every visitor, collect emails, and route high-intent buyers to your sales team, so no warm prospect slips through the cracks.',
    extra: false,
  },
  {
    icon: Zap,
    gradient: 'from-purple-500 to-pink-500',
    title: 'Shopify & WooCommerce Ready',
    body: 'Native integrations with your store platform. Your chatbot reads product data, live inventory, and order history from day one.',
    extra: true,
  },
];

const PROOF_STATS = [
  { value: '5,697+', label: 'Messages/Month', sub: 'Handled for a single ecommerce store' },
  { value: '99.9%', label: 'Chatbot Uptime', sub: 'Always on, even when your team is not' },
  { value: '2–3 wks', label: 'Average Go-Live', sub: 'From first call to live chatbot' },
];

const FAQS = [
  {
    q: 'Which platforms and channels do you support?',
    a: 'We build native integrations for Shopify and WooCommerce, with support for website chat widgets, Facebook Messenger, WhatsApp Business, and Instagram DMs. One chatbot can serve all your channels simultaneously with synced conversation history.',
  },
  {
    q: 'How long does it take to go live?',
    a: 'Most ecommerce chatbot projects are live within 2–3 weeks from the kick-off call. The timeline covers the audit, building and training the AI on your product and order data, integration setup, and testing. Simpler stores can be ready in under a week.',
  },
  {
    q: 'What does it cost?',
    a: 'Every chatbot is custom-scoped to your store size and complexity. The 25-minute discovery call is specifically so we can give you an accurate, no-surprises quote. Flexible payment terms are available.',
  },
  {
    q: 'Is my customer data safe?',
    a: 'Yes. Your customer data stays within your existing platform (Shopify, WooCommerce, etc.) and is only read by the chatbot at query time. We do not store or sell your customer data. All connections are encrypted in transit, and we are happy to sign a data processing agreement if required.',
  },
];

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function EcommerceChatbotsLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]">
      <SEO
        title="Ecommerce Chatbots That Recover Sales & Cut Support Costs"
        description="AI-powered chatbots built for ecommerce stores. Recover abandoned carts, answer order questions 24/7, and integrate with Shopify or WooCommerce. Book a free 25-min discovery call."
        path="/chatbots-for-ecommerce"
        keywords="ecommerce chatbot, shopify chatbot, woocommerce chatbot, abandoned cart recovery, customer support chatbot, ecommerce AI"
        noindex
      />
      <StarsCanvas />
      <StickyBookBar />

      {/* ================================================================
          HERO
      ================================================================= */}
      <section className="relative pt-32 sm:pt-44 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-white/70 text-sm mb-8">
            <Zap className="w-4 h-4 text-indigo-400" />
            <span>Built exclusively for ecommerce stores</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl gradient-text mb-6 leading-tight">
            Turn Every Visitor Into a Customer, 24 Hours a Day
          </h1>
          <p className="text-xl sm:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-8">
            An AI chatbot built for your store: recover abandoned carts, answer order and shipping questions instantly, and cut your support load without adding headcount.
          </p>

          {/* Platform trust bar */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap mb-10">
            <span className="text-white/50 text-sm">Works with:</span>
            {PLATFORM_BADGES.map(({ Logo, name }) => (
              <div
                key={name}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm"
              >
                <Logo className="w-5 h-5" />
                <span>{name}</span>
              </div>
            ))}
          </div>

          <BookButton label="Book a 25 min discovery call" />
          <p className="text-white/60 text-sm mt-10">Free, no obligation. We'll show you what's possible for your store.</p>
        </div>
      </section>

      {/* ================================================================
          PAIN POINTS: "Sound familiar?"
      ================================================================= */}
      <section className="relative py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl text-white mb-3">Sound familiar?</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              These are the gaps that cost ecommerce stores real revenue, every day they go unaddressed.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {PAIN_POINTS.map(({ icon: Icon, color, title, body }) => (
              <div key={title} className="rounded-2xl glass border border-white/10 p-8">
                <Icon className={`w-6 h-6 ${color} mb-5`} />
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          VALUE PROPS: 4 cards
      ================================================================= */}
      <section className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
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
            {VALUE_CARDS.map(({ icon: Icon, gradient, title, body, extra }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-3xl glass border border-white/10 p-8 hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-200"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <div className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${gradient} text-white mb-6`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="relative text-white text-xl mb-3">{title}</h3>
                <p className="relative text-white/60 mb-4">{body}</p>
                {extra && (
                  <div className="relative flex items-center gap-3 flex-wrap">
                    {([
                      { Logo: ShopifyLogo, label: 'Shopify' },
                      { Logo: WooCommerceLogo, label: 'WooCommerce' },
                      { Logo: FacebookLogo, label: 'Messenger' },
                    ] as const).map(({ Logo, label }) => (
                      <div key={label} className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10">
                        <Logo className="w-4 h-4" />
                        <span className="text-white/70 text-xs">{label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          DEMO: abandoned cart recovery
      ================================================================= */}
      <section className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl gradient-text mb-4">See It In Action</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Watch an abandoned-cart chatbot win back a sale in real time (the kind of conversation that runs automatically while you sleep).
            </p>
          </div>
          <div className="max-w-lg mx-auto">
            <AbandonedCartDemo />
          </div>
        </div>
      </section>

      {/* ================================================================
          HOW IT WORKS: 3 steps
      ================================================================= */}
      <section className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="relative overflow-hidden rounded-3xl glass border border-white/10 p-12 sm:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl gradient-text mb-4">
                  From Zero to Live in 2–3 Weeks
                </h2>
                <p className="text-xl text-white/60">
                  A simple three-step process. No technical knowledge required on your end.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
                {([
                  { num: 1, gradient: 'from-indigo-500 to-purple-500', title: 'Audit', body: 'We map your top customer questions, your product catalogue, and the support bottlenecks costing you the most time.' },
                  { num: 2, gradient: 'from-purple-500 to-pink-500', title: 'Build', body: 'We train the AI on your store data and brand voice, wire up your integrations, and configure every conversation flow.' },
                  { num: 3, gradient: 'from-pink-500 to-rose-500', title: 'Launch', body: "We deploy to your store, run final tests, and hand over a chatbot that's live and already routing leads to your inbox." },
                ] as const).map(({ num, gradient, title, body }) => (
                  <div key={num} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} text-white text-xl font-bold mb-4`}>{num}</div>
                    <h4 className="text-white font-semibold mb-2">{title}</h4>
                    <p className="text-white/60 text-sm">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SOCIAL PROOF: Epic Deals stats + Brad testimonial
      ================================================================= */}
      <section className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Stats: sourced from the Epic Deals case study */}
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {PROOF_STATS.map(({ value, label, sub }) => (
              <div key={label} className="glass border border-white/10 rounded-3xl p-8 text-center hover:border-white/20 hover:shadow-lg transition-all duration-200">
                <div className="text-5xl gradient-text mb-2">{value}</div>
                <h4 className="text-white mb-1">{label}</h4>
                <p className="text-white/60 text-sm">{sub}</p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
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
                        alt="Brad - Founder EpicDeals.co.za - The Automators Client"
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mb-5 sm:mb-6 flex-1">
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500/20 mb-3 sm:mb-4" />
                  <p className="text-white/80 leading-relaxed text-base italic">
                    The Automators' team has helped tremendously with our ecommerce business. So much of the tedious work we all had to do has now disappeared through automation. We can compete with teams twice our size!
                  </p>
                </div>

                <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-5 sm:mb-6" />

                <div className="relative z-10 text-center">
                  <h4 className="text-white font-semibold text-base sm:text-lg mb-1">Brad</h4>
                  <a
                    href="https://epicdeals.co.za/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 text-sm sm:text-base hover:text-purple-400 transition-colors inline-block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
                  >
                    Founder, EpicDeals.co.za
                  </a>
                  <div className="flex gap-1 justify-center mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-pink-500 text-pink-500" fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Case study link */}
            <div className="text-center mt-6">
              <Link
                to="/case-studies/epic-deals"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
              >
                Read the Epic Deals case study
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          PRIMARY CTA: booking anchor
      ================================================================= */}
      <section id="book" className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl relative z-10">
          <div className="relative overflow-hidden rounded-[2.5rem] glass border border-white/10 p-10 sm:p-14 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white mb-6">
                <Calendar className="w-8 h-8" />
              </div>
              <h2 className="text-4xl sm:text-5xl gradient-text mb-4">
                Book Your Free 25-min Discovery Call
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Tell us about your store. We'll show you exactly what an AI chatbot can do for your revenue and support costs (no pitch, just clarity).
              </p>

              <BookButton label="Book my free discovery call" className="text-lg px-10 py-5" />

              <div className="flex items-center justify-center gap-6 mt-10 text-white/60 text-sm flex-wrap">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 25 minutes</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> No obligation</span>
                <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> No pressure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          FAQ: shadcn Accordion for full a11y
      ================================================================= */}
      <section className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl gradient-text mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-white/60">Quick answers before your call</p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="glass border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-200 border-b-0"
              >
                <AccordionTrigger className="px-5 py-4 text-white font-semibold text-base hover:no-underline hover:text-white focus-visible:ring-white/50 data-[state=open]:text-white">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="px-5">
                  <p className="text-white/70 text-sm leading-relaxed pb-2">{item.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-10">
            <p className="text-white/60 mb-3">Still have questions?</p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-2 text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
            >
              Ask us on the discovery call <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
