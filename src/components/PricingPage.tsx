import { useState, useEffect } from 'react';
import { Check, Zap, Rocket, Crown, Star, Shield, DollarSign, Phone, MessageCircle, Workflow, ChevronDown, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { SEO } from './SEO';
import { StarsCanvas } from './StarBackground';
import { saveLeadData } from '../utils/leadData';

interface PricingPageProps {
  category: 'automation' | 'voice-agents' | 'chatbots';
}

// SEO configuration per category
const seoConfig = {
  automation: {
    title: 'Workflow Automation Pricing | Custom Solutions',
    description: 'Get custom workflow automation pricing tailored to your business needs. Free consultation, dedicated specialist, and ongoing support included.',
    path: '/pricing/automation',
    keywords: 'workflow automation pricing, custom automation cost, business automation services, automation consultant pricing',
  },
  'voice-agents': {
    title: 'AI Voice Agent Pricing | From $99/month',
    description: 'AI Voice Agent pricing starting at $99/month. Make automated phone calls, follow up with customers, and generate reviews. No contracts, cancel anytime.',
    path: '/pricing/voice-agents',
    keywords: 'voice agent pricing, AI phone calls cost, automated calling service pricing, voice AI subscription',
  },
  chatbots: {
    title: 'AI Chatbot Pricing | From $99/month',
    description: 'AI Chatbot pricing starting at $99/month. 24/7 customer support across website, WhatsApp, and Facebook. No setup fees, cancel anytime.',
    path: '/pricing/chatbots',
    keywords: 'chatbot pricing, AI chatbot cost, customer support bot pricing, chatbot subscription',
  },
};

// Category display names
const categoryNames = {
  automation: 'Workflow Automation',
  'voice-agents': 'AI Voice Agents',
  chatbots: 'AI Chatbots',
};

export function PricingPage({ category }: PricingPageProps) {
  const navigate = useNavigate();
  const [currency, setCurrency] = useState<'USD' | 'ZAR' | 'EUR'>('USD');
  const [paymentPlan, setPaymentPlan] = useState<'once-off' | '6-months' | '12-months' | '18-months'>('18-months');
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  // Payment plan multipliers
  const paymentMultipliers = {
    'once-off': 1.0,
    '6-months': 1.15,
    '12-months': 1.25,
    '18-months': 1.35
  };
  
  // Payment plan options
  const paymentOptions = [
    { value: 'once-off', label: 'Pay in Full', badge: 'Best Value', icon: '✓' },
    { value: '6-months', label: '6 Monthly Payments', badge: '', icon: '💳' },
    { value: '12-months', label: '12 Monthly Payments', badge: '', icon: '💳' },
    { value: '18-months', label: '18 Monthly Payments', badge: '', icon: '💳' },
  ];
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(null);
    if (openDropdown !== null) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [openDropdown]);
  
  // Exchange rates: 1 USD = 18 ZAR, 1 USD = 0.95 EUR (approximate)
  const convertPrice = (usdPrice: string, showMonthly: boolean = false): string => {
    if (usdPrice === 'Custom' || usdPrice.includes('Starting')) {
      return usdPrice;
    }
    
    const numPrice = parseFloat(usdPrice.replace(/[$,]/g, ''));
    const multiplier = paymentMultipliers[paymentPlan];
    const totalPrice = numPrice * multiplier;
    
    if (showMonthly && paymentPlan !== 'once-off') {
      const months = parseInt(paymentPlan.split('-')[0]);
      const monthlyPrice = totalPrice / months;
      
      if (currency === 'ZAR') {
        const zarMonthly = Math.round(monthlyPrice * 18);
        return `R ${zarMonthly.toLocaleString()}/mo`;
      } else if (currency === 'EUR') {
        const eurMonthly = Math.round(monthlyPrice * 0.95);
        return `€${eurMonthly.toLocaleString()}/mo`;
      }
      return `$${Math.round(monthlyPrice).toLocaleString()}/mo`;
    }
    
    if (currency === 'ZAR') {
      const zarPrice = Math.round(totalPrice * 18);
      return `R ${zarPrice.toLocaleString()}`;
    } else if (currency === 'EUR') {
      const eurPrice = Math.round(totalPrice * 0.95);
      return `€${eurPrice.toLocaleString()}`;
    }
    
    return `$${Math.round(totalPrice).toLocaleString()}`;
  };
  
  const automationPlans = [
    {
      name: 'Custom Automation Solution',
      icon: <img src="/enterprise-icon.png" alt="Custom Automation" className="w-12 h-12 sm:w-16 sm:h-16" />,
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored automation solutions designed specifically for your business needs',
      features: [
        'Free discovery call to understand your workflows',
        'Custom automation strategy & roadmap',
        'Tailored solution based on your specific needs',
        'Unlimited workflows & integrations',
        'Dedicated automation specialist',
        'Complete implementation & training',
        'Ongoing support & optimization',
        'No one-size-fits-all packages',
      ],
      highlighted: true,
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      isSubscription: false,
    },
  ];

  const voiceAgentsPlans = [
    {
      name: 'Starter',
      icon: <img src="/voice-starter.png" alt="Voice Starter" className="w-12 h-12 sm:w-16 sm:h-16" />,
      price: '$99',
      period: 'per month',
      description: 'Perfect for small businesses with consistent but moderate call volume. Ideal for internal tools and basic automation needs.',
      features: [
        '200 call minutes per month',
        '5 calls at the same time',
        '1 standard agent personality',
        'Basic scripted conversations',
        'Surveys & simple reminders',
        'Setup & maintenance included',
        'Basic call logs',
        'Email support (24-hour response)',
        'Extra minutes: $0.36/minute',
      ],
      highlighted: false,
      gradient: 'from-blue-500 to-cyan-500',
      isSubscription: true,
    },
    {
      name: 'Professional',
      icon: <img src="/professional-icon.png" alt="Professional" className="w-12 h-12 sm:w-16 sm:h-16" />,
      price: '$199',
      period: 'per month',
      description: 'Growing businesses requiring superior audio quality for regional service and moderate-to-high call volume. Professional-grade features included.',
      features: [
        '550 call minutes per month',
        '10 calls at the same time',
        '3 unique agent personalities',
        'Advanced multi-step conversations',
        'Lead qualification & upselling',
        'Crystal-clear audio quality',
        'Setup & maintenance included',
        'CRM & Helpdesk sync (HubSpot, Zapier, Sheets)',
        'Priority chat support (4-hour response)',
        'Extra minutes: $0.28/minute',
      ],
      highlighted: true,
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      isSubscription: true,
    },
    {
      name: 'Custom',
      icon: <img src="/enterprise-icon.png" alt="Custom" className="w-12 h-12 sm:w-16 sm:h-16" />,
      price: 'Custom',
      period: 'pricing',
      description: 'Enterprise-grade voice AI for high-volume operations. Low-latency performance with dedicated support for mission-critical applications.',
      features: [
        'Unlimited call minutes',
        '15+ calls at the same time',
        'Unlimited agents & custom voices',
        'AI learning & real-time adaptation',
        'Ultra-fast voice responses',
        'Full API access & custom integrations',
        'Advanced dashboards & analytics',
        'Dedicated support & account manager',
        'Extra minutes: $0.05/minute',
      ],
      highlighted: false,
      gradient: 'from-orange-500 to-red-500',
      isSubscription: false,
    },
  ];

  const chatbotsPlans = [
    {
      name: 'Basic',
      icon: <img src="/chatbot-starter.png" alt="Chatbot Basic" className="w-12 h-12 sm:w-16 sm:h-16" />,
      price: '$99',
      period: 'per month',
      description: 'FAQ bot for businesses getting started with AI',
      features: [
        'FAQ bot (website or URL link)',
        '500 messages per month',
        '1,000 table rows',
        'Basic Knowledgebase for FAQs',
        'NLP with your favorite AI model',
        'AI usage billed separately',
        'Always alive',
      ],
      highlighted: false,
      gradient: 'from-cyan-500 to-teal-500',
      isSubscription: true,
    },
    {
      name: 'Professional',
      icon: <img src="/professional-icon.png" alt="Professional" className="w-12 h-12 sm:w-16 sm:h-16" />,
      price: '$129',
      period: 'per month',
      description: 'Multi-channel bot with enhanced capabilities',
      features: [
        '5,000 messages per month',
        '100,000 table rows',
        'Website, WhatsApp, Facebook channels',
        'Custom integrations',
        'Basic Knowledgebase',
        'NLP with your favorite AI model',
        'AI usage billed separately',
        'Always alive',
      ],
      highlighted: true,
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      isSubscription: true,
    },
    {
      name: 'Advanced',
      icon: <img src="/enterprise-icon.png" alt="Advanced" className="w-12 h-12 sm:w-16 sm:h-16" />,
      price: '$299',
      period: 'per month + AI costs',
      description: 'Professional chatbot with unlimited capabilities',
      features: [
        'Multiple channels (Website, WhatsApp, Facebook)',
        '5,000+ messages (expandable)',
        '100,000 structured data table rows',
        'Large Knowledgebase storage',
        '10GB file storage',
        'Human handover ready',
        'Custom integrations',
        'NLP with your favorite AI model',
        'Always alive',
      ],
      highlighted: false,
      gradient: 'from-orange-500 to-red-500',
      isSubscription: true,
    },
  ];

  // Get plans based on category prop
  const plans = category === 'automation' 
    ? automationPlans 
    : category === 'voice-agents' 
    ? voiceAgentsPlans 
    : chatbotsPlans;

  const handlePlanSelection = (planName: string, price: string, isSubscription?: boolean) => {
    // Format price display based on subscription or one-time purchase
    let priceDisplay: string;
    let paymentPlanLabel: string;

    if (price === 'Custom') {
      priceDisplay = 'Custom Pricing';
      paymentPlanLabel = 'Custom';
    } else if (isSubscription) {
      // For chatbot subscriptions, show monthly pricing
      const monthlyPrice = parseFloat(price.replace('$', ''));
      let formattedPrice = '';
      
      if (currency === 'USD') {
        formattedPrice = `$${monthlyPrice}/month`;
      } else if (currency === 'EUR') {
        formattedPrice = `€${Math.round(monthlyPrice * 0.95)}/month`;
      } else if (currency === 'ZAR') {
        formattedPrice = `R ${Math.round(monthlyPrice * 18).toLocaleString()}/month`;
      }
      
      priceDisplay = formattedPrice;
      paymentPlanLabel = 'Monthly Subscription';
    } else {
      // For one-time purchases (automation/voice agents)
      paymentPlanLabel = paymentOptions.find(opt => opt.value === paymentPlan)?.label || 'Pay in Full';
      priceDisplay = `${convertPrice(price)} (${paymentPlanLabel})`;
    }
    
    // Save pricing data to localStorage - use category prop instead of activeTab
    saveLeadData({
      source: 'pricing',
      pricing: {
        planName,
        serviceType: category,
        paymentPlan: paymentPlanLabel,
        price: priceDisplay,
        timestamp: new Date().toISOString(),
      },
    });
    
    // Navigate to contact page
    navigate('/contact');
  };

  const addons = [
    {
      name: 'Additional Workflow',
      price: '$297',
      description: 'Add another automated workflow to your package',
      icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
    {
      name: 'Monthly Maintenance',
      price: '$497/mo',
      description: 'Ongoing support, updates, and optimization',
      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
    {
      name: 'Training Session',
      price: '$397',
      description: 'Additional 1-hour training for your team',
      icon: <Star className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
    {
      name: 'Custom Integration',
      price: 'Starting at $797',
      description: 'Connect to unique or proprietary systems',
      icon: <DollarSign className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
  ];

  const chatbotAddons = [
    {
      name: 'Table Rows',
      price: '$50',
      description: 'Per 100,000 rows',
      icon: <Workflow className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
    {
      name: 'Vector DB Storage',
      price: '$40',
      description: 'Per 1GB of storage',
      icon: <Crown className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
    {
      name: 'Messages & Events',
      price: '$40',
      description: 'For 5,000 messages per month',
      icon: <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
    {
      name: 'File Storage',
      price: '$20',
      description: 'Per 10GB of storage',
      icon: <Star className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
  ];

  const voiceAgentAddons = [
    {
      name: 'Additional Minutes',
      price: '$50',
      description: 'Per 500 minutes',
      icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
    {
      name: 'Extra Agent Personality',
      price: '$99/mo',
      description: 'Add custom voice personality',
      icon: <Star className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
    {
      name: 'CRM Integration Setup',
      price: '$297',
      description: 'One-time setup fee',
      icon: <Workflow className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
    {
      name: 'Custom Voice Training',
      price: '$497',
      description: 'One-time training fee',
      icon: <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />,
    },
  ];

  const currentAddons = category === 'chatbots' ? chatbotAddons : category === 'voice-agents' ? voiceAgentAddons : addons;

  // Convert addon prices (no payment plan applied)
  const convertAddonPrice = (price: string): string => {
    if (price.includes('Starting')) {
      if (currency === 'ZAR') {
        const match = price.match(/\$(\d+)/);
        if (match) {
          const zarPrice = Math.round(parseFloat(match[1]) * 18);
          return `Starting at R ${zarPrice.toLocaleString()}`;
        }
      } else if (currency === 'EUR') {
        const match = price.match(/\$(\d+)/);
        if (match) {
          const eurPrice = Math.round(parseFloat(match[1]) * 0.95);
          return `Starting at €${eurPrice.toLocaleString()}`;
        }
      }
      return price;
    }
    
    if (price.includes('/mo')) {
      const numPrice = parseFloat(price.replace(/[$,/mo]/g, ''));
      if (currency === 'ZAR') {
        const zarPrice = Math.round(numPrice * 18);
        return `R ${zarPrice.toLocaleString()}/mo`;
      } else if (currency === 'EUR') {
        const eurPrice = Math.round(numPrice * 0.95);
        return `€${eurPrice.toLocaleString()}/mo`;
      }
      return price;
    }
    
    // For regular addon prices, just convert currency without payment plan
    const numPrice = parseFloat(price.replace(/[$,]/g, ''));
    if (currency === 'ZAR') {
      const zarPrice = Math.round(numPrice * 18);
      return `R ${zarPrice.toLocaleString()}`;
    } else if (currency === 'EUR') {
      const eurPrice = Math.round(numPrice * 0.95);
      return `€${eurPrice.toLocaleString()}`;
    }
    return price;
  };

  // Get current SEO config
  const currentSeo = seoConfig[category];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]">
      <SEO
        title={currentSeo.title}
        description={currentSeo.description}
        path={currentSeo.path}
        keywords={currentSeo.keywords}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": categoryNames[category],
            "description": currentSeo.description,
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": category === 'automation' ? 'Custom' : "99",
              "highPrice": "Custom",
              "availability": "https://schema.org/InStock"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long does implementation take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most projects are completed within 2-4 weeks, depending on complexity. We'll give you a specific timeline during your discovery call."
                }
              },
              {
                "@type": "Question",
                "name": "What if I need changes later?",
                "acceptedAnswer":                 {
                  "@type": "Answer",
                  "text": "You can purchase additional workflows or monthly maintenance for ongoing support and optimization."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need technical knowledge?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Not at all! We handle all the technical implementation and provide training so you can manage your automations with confidence."
                }
              }
            ]
          }
        ]}
      />
      {/* Spinning Stars Background */}
      <StarsCanvas />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center relative z-10">
          {/* Back to All Pricing Link */}
          <div className="mb-6">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to All Services</span>
            </Link>
          </div>
          
          <div className="h-2 sm:h-4 mb-4 sm:mb-6"></div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl gradient-text mb-4 sm:mb-6">
            {categoryNames[category]} Pricing
          </h1>
          <p className="text-xl sm:text-2xl text-white/60 max-w-3xl mx-auto mb-4">
            {category === 'chatbots' 
              ? 'Simple monthly subscription pricing. Scale as you grow with flexible add-ons. No setup fees, cancel anytime.'
              : category === 'automation'
              ? 'Custom automation solutions tailored to your unique business needs. Schedule a free consultation to get your personalized quote.'
              : 'Simple monthly subscription pricing. Scale your calling capacity as you grow. No setup fees, cancel anytime.'}
          </p>
          <p className="text-lg sm:text-xl text-indigo-400 font-semibold mb-8 sm:mb-12">
            {category === 'chatbots' ? 'Starting at $99/month' : category === 'voice-agents' ? 'Starting at $99/month' : 'Custom Pricing - Contact Us'}
          </p>

          {/* Currency Toggle */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <button
              onClick={() => setCurrency('USD')}
              className={`flex items-center space-x-1.5 sm:space-x-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 text-base sm:text-lg ${
                currency === 'USD'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-2 border-purple-300/50 shadow-lg shadow-purple-500/50'
                  : 'glass border border-white/10 text-white/60 hover:text-white hover:border-white/20'
              }`}
            >
              <DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="font-medium">USD</span>
            </button>
            <button
              onClick={() => setCurrency('EUR')}
              className={`flex items-center space-x-1.5 sm:space-x-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 text-base sm:text-lg ${
                currency === 'EUR'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-2 border-cyan-300/50 shadow-lg shadow-blue-500/50'
                  : 'glass border border-white/10 text-white/60 hover:text-white hover:border-white/20'
              }`}
            >
              <span className="font-bold text-sm sm:text-base">€</span>
              <span className="font-medium">EUR</span>
            </button>
            <button
              onClick={() => setCurrency('ZAR')}
              className={`flex items-center space-x-1.5 sm:space-x-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 text-base sm:text-lg ${
                currency === 'ZAR'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white border-2 border-emerald-300/50 shadow-lg shadow-green-500/50'
                  : 'glass border border-white/10 text-white/60 hover:text-white hover:border-white/20'
              }`}
            >
              <span className="font-bold text-sm sm:text-base">R</span>
              <span className="font-medium">ZAR</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative pt-10 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl gradient-text mb-3 sm:mb-4">
              {category === 'automation' && 'Workflow Automation Pricing'}
              {category === 'voice-agents' && 'AI Voice Agent Pricing'}
              {category === 'chatbots' && 'AI Chatbot Pricing'}
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
              {category === 'automation' && 'Every business is unique. Get a custom automation solution designed specifically for your workflows, team size, and goals. No cookie-cutter packages.'}
              {category === 'voice-agents' && 'AI-powered phone calls and customer conversations. Simple monthly subscription with included minutes and pay-as-you-go overage.'}
              {category === 'chatbots' && 'Intelligent 24/7 customer support with simple monthly pricing. Scale your bot with add-ons as you grow. No contracts, cancel anytime.'}
            </p>
          </div>
          <div className={`grid gap-6 sm:gap-8 ${category === 'automation' ? 'lg:grid-cols-1 max-w-2xl mx-auto' : 'lg:grid-cols-3'}`}>
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`card-3d relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] glass border transition-all ${
                  plan.highlighted 
                    ? 'border-purple-500 lg:scale-105' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {plan.highlighted && (
                  <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1.5 px-4 text-center">
                    <span className="text-white font-medium text-xs sm:text-sm tracking-wider uppercase">Most Popular</span>
                  </div>
                )}
                <div className="p-6 sm:p-8">
                  <div className="mb-4 sm:mb-6">
                    {plan.icon}
                  </div>
                  <h3 className="text-white mb-2 text-2xl sm:text-3xl">{plan.name}</h3>
                  
                  {/* Payment Plan Selector */}
                  {plan.price !== 'Custom' && !plan.isSubscription && category === 'voice-agents' && (
                    <div className="mb-3 sm:mb-4 relative">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenDropdown(openDropdown === index ? null : index);
                        }}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-base sm:text-lg rounded-lg sm:rounded-xl bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20 text-white font-medium hover:from-white/15 hover:to-white/10 hover:border-white/30 transition-all cursor-pointer shadow-lg backdrop-blur-sm flex items-center justify-between"
                      >
                        <span className="flex items-center gap-3 sm:gap-4">
                          <span className="inline-block min-w-[16px]">{paymentOptions.find(opt => opt.value === paymentPlan)?.icon}</span>
                          <span>{paymentOptions.find(opt => opt.value === paymentPlan)?.label}</span>
                          {paymentOptions.find(opt => opt.value === paymentPlan)?.badge && (
                            <span className={`text-xs sm:text-sm px-2 py-0.5 rounded-full ${
                              paymentPlan === 'once-off' 
                                ? 'bg-green-500/20 text-green-300' 
                                : 'bg-orange-500/20 text-orange-300'
                            }`}>
                              {paymentOptions.find(opt => opt.value === paymentPlan)?.badge}
                            </span>
                          )}
                        </span>
                        <ChevronDown className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform ${openDropdown === index ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {openDropdown === index && (
                        <div 
                          className="absolute z-50 w-full mt-2 rounded-lg sm:rounded-xl bg-[#1a1a2e]/95 border-2 border-white/20 shadow-2xl overflow-hidden backdrop-blur-xl"
                          style={{ backgroundColor: 'rgba(26, 26, 46, 0.98)' }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {paymentOptions.map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setPaymentPlan(option.value as any);
                                setOpenDropdown(null);
                              }}
                              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-left flex items-center justify-between transition-all ${
                                paymentPlan === option.value
                                  ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-white'
                                  : 'text-white/80 hover:bg-white/10 hover:text-white'
                              }`}
                            >
                              <span className="flex items-center gap-3 sm:gap-4">
                                <span className="inline-block min-w-[16px]">{option.icon}</span>
                                <span className="font-medium">{option.label}</span>
                              </span>
                              {option.badge && (
                                <span className={`text-[10px] sm:text-xs px-2 py-1 rounded-full ${
                                  option.value === 'once-off' 
                                    ? 'bg-green-500/30 text-green-300' 
                                    : 'bg-orange-500/30 text-orange-300'
                                }`}>
                                  {option.badge}
                                </span>
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="mb-4 sm:mb-6">
                    {plan.isSubscription ? (
                      <div>
                        <div className="text-4xl sm:text-5xl text-white mb-2">
                          {currency === 'USD' && `$${plan.price.replace('$', '')}`}
                          {currency === 'EUR' && `€${Math.round(parseFloat(plan.price.replace('$', '')) * 0.95)}`}
                          {currency === 'ZAR' && `R ${Math.round(parseFloat(plan.price.replace('$', '')) * 18).toLocaleString()}`}
                          <span className="text-white/50 ml-2 text-lg sm:text-xl">/month</span>
                        </div>
                        {plan.period.includes('AI costs') && (
                          <div className="text-base sm:text-lg text-white/50">
                            + AI costs
                          </div>
                        )}
                      </div>
                    ) : paymentPlan !== 'once-off' && plan.price !== 'Custom' ? (
                      <div>
                        <div className="text-4xl sm:text-5xl text-white mb-2">
                          <span className="text-white/70 text-2xl sm:text-3xl mr-1">from</span>
                          {convertPrice(plan.price, true)}
                        </div>
                        <div className="text-base sm:text-lg text-white/50">
                          Total: {convertPrice(plan.price)} over {paymentPlan.split('-')[0]} months
                        </div>
                      </div>
                    ) : (
                      <div>
                        {plan.price !== 'Custom' && (
                          <span className="text-white/70 text-2xl sm:text-3xl mr-1">from</span>
                        )}
                        <span className="text-4xl sm:text-5xl text-white">{convertPrice(plan.price)}</span>
                        {plan.period !== 'pricing' && (
                          <span className="text-white/50 ml-2 text-base sm:text-lg">{plan.period}</span>
                        )}
                      </div>
                    )}
                  </div>
                  <p className="text-white/60 mb-6 sm:mb-8 text-lg sm:text-xl">{plan.description}</p>
                  
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 sm:space-x-3">
                        <div className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center mt-0.5`}>
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <span className="text-white/70 text-lg sm:text-xl">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handlePlanSelection(plan.name, plan.price, plan.isSubscription)}
                    className={`block w-full py-3 sm:py-4 px-6 rounded-full text-center font-semibold transition-all duration-300 text-lg sm:text-xl ${
                      plan.highlighted
                        ? 'btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 hover:scale-105'
                        : 'glass border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 hover:scale-105'
                    }`}
                  >
                    {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="relative pt-16 sm:pt-20 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-5xl sm:text-6xl md:text-7xl gradient-text mb-4 sm:mb-6">Add-Ons</h2>
            <p className="text-2xl sm:text-3xl text-white/60">
              {category === 'chatbots' 
                ? 'Expand your chatbot capabilities with these optional upgrades'
                : category === 'voice-agents'
                ? 'Scale your voice agent capabilities with these optional add-ons'
                : 'Enhance your automation package with these optional services'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {currentAddons.map((addon, index) => (
              <div
                key={index}
                className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all"
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
                      {addon.icon}
                    </div>
                    <h4 className="text-white text-lg sm:text-xl">{addon.name}</h4>
                  </div>
                  <span className="text-purple-400 font-semibold text-lg sm:text-xl">{convertAddonPrice(addon.price)}</span>
                </div>
                <p className="text-white/60 text-lg sm:text-xl">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="relative pt-16 sm:pt-20 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="relative overflow-hidden rounded-3xl sm:rounded-[3rem] glass border border-white/10 p-8 sm:p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10"></div>
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-green-500 to-emerald-500 text-white mb-6 sm:mb-8">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h2 className="text-4xl sm:text-5xl gradient-text mb-4 sm:mb-6">
                {category === 'chatbots' || category === 'voice-agents' ? '14-Day Money-Back Guarantee' : '30-Day Money-Back Guarantee'}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-8 sm:mb-12">
                {category === 'chatbots' 
                  ? "Try our chatbot service risk-free. If you're not satisfied within 14 days, we'll refund your first month – no questions asked."
                  : category === 'voice-agents'
                  ? "Try our voice agent service risk-free. If you're not satisfied within 14 days, we'll refund your first month – no questions asked."
                  : "We're confident in our solutions. If you're not completely satisfied within 30 days of project completion, we'll refund your investment – no questions asked."}
              </p>
              <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h4 className="text-white mb-1 sm:mb-2 text-lg sm:text-xl">
                    {category === 'chatbots' || category === 'voice-agents' ? 'No Contracts' : 'Custom Solutions'}
                  </h4>
                  <p className="text-white/60 text-base sm:text-lg">
                    {category === 'chatbots' || category === 'voice-agents' ? 'Cancel anytime, no questions' : 'Tailored to your needs'}
                  </p>
                </div>
                <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h4 className="text-white mb-1 sm:mb-2 text-lg sm:text-xl">Transparent Pricing</h4>
                  <p className="text-white/60 text-base sm:text-lg">No hidden fees or surprises</p>
                </div>
                <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h4 className="text-white mb-1 sm:mb-2 text-lg sm:text-xl">Proven Results</h4>
                  <p className="text-white/60 text-base sm:text-lg">Join 200+ happy clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative pt-12 sm:pt-16 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl gradient-text text-center mb-8 sm:mb-10">Frequently Asked Questions</h2>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/20 transition-all">
              <button
                onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
                className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3"
              >
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-0">How much does workflow automation cost?</h3>
                  {openFAQ === 1 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-base leading-relaxed">
                      Workflow automation pricing is custom-tailored to your specific needs. Every business has unique workflows, integrations, and requirements, so we don't offer one-size-fits-all packages. Schedule a free consultation to discuss your needs and receive a personalized quote. <Link to="/contact" className="text-indigo-400 hover:text-indigo-300">Get your custom quote</Link>.
                    </p>
                  )}
                </div>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-white/60 flex-shrink-0 transition-transform ${
                    openFAQ === 1 ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
            <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/20 transition-all">
              <button
                onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
                className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3"
              >
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-0">How long does implementation take?</h3>
                  {openFAQ === 2 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-base leading-relaxed">
                      Most projects are completed within 2-4 weeks, depending on complexity. We'll give you a specific timeline during your discovery call.
                    </p>
                  )}
                </div>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-white/60 flex-shrink-0 transition-transform ${
                    openFAQ === 2 ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
            <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/20 transition-all">
              <button
                onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
                className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3"
              >
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-0">Are there any monthly fees or subscriptions?</h3>
                  {openFAQ === 3 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-base leading-relaxed">
                      For Voice Agents: monthly subscription starting at $99/month with no contracts. Cancel anytime. For Chatbots: monthly subscription starting at $99/month with no contracts. Cancel anytime. For Workflow Automation: Custom one-time pricing based on your needs. Once built, you own it forever with no ongoing fees (unless you choose optional maintenance).
                    </p>
                  )}
                </div>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-white/60 flex-shrink-0 transition-transform ${
                    openFAQ === 3 ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
            <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/20 transition-all">
              <button
                onClick={() => setOpenFAQ(openFAQ === 4 ? null : 4)}
                className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3"
              >
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-0">How does billing work?</h3>
                  {openFAQ === 4 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-base leading-relaxed">
                      Payment plans are no longer offered. Voice Agents and Chatbots are simple monthly subscriptions—pay month-to-month with no contracts. Cancel anytime. Workflow Automation uses custom pricing discussed during your consultation with flexible payment terms tailored to your needs.
                    </p>
                  )}
                </div>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-white/60 flex-shrink-0 transition-transform ${
                    openFAQ === 4 ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
            <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/20 transition-all">
              <button
                onClick={() => setOpenFAQ(openFAQ === 5 ? null : 5)}
                className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3"
              >
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-0">What if I need changes later?</h3>
                  {openFAQ === 5 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-base leading-relaxed">
                      After launch, you can request additional workflows or modifications as needed. We offer flexible monthly maintenance packages for ongoing support and optimization, or one-off updates. Pricing depends on the scope of changes.
                    </p>
                  )}
                </div>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-white/60 flex-shrink-0 transition-transform ${
                    openFAQ === 5 ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
            <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/20 transition-all">
              <button
                onClick={() => setOpenFAQ(openFAQ === 6 ? null : 6)}
                className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3"
              >
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-0">Do I need technical knowledge?</h3>
                  {openFAQ === 6 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-base leading-relaxed">
                      Not at all! We handle all the technical implementation and provide training so you can manage your automations with confidence. No coding or technical skills required.
                    </p>
                  )}
                </div>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-white/60 flex-shrink-0 transition-transform ${
                    openFAQ === 6 ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
            <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/20 transition-all">
              <button
                onClick={() => setOpenFAQ(openFAQ === 7 ? null : 7)}
                className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3"
              >
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-0">What's included in all pricing plans?</h3>
                  {openFAQ === 7 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-base leading-relaxed">
                      Every plan includes: discovery call, strategy session, complete implementation, testing, training, documentation, and a support period (30-365 days depending on plan). No hidden fees or setup charges.
                    </p>
                  )}
                </div>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-white/60 flex-shrink-0 transition-transform ${
                    openFAQ === 7 ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
            <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/20 transition-all">
              <button
                onClick={() => setOpenFAQ(openFAQ === 8 ? null : 8)}
                className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3"
              >
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-0">What tools do you work with?</h3>
                  {openFAQ === 8 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-base leading-relaxed">
                      We work with 100+ popular business tools including Zapier, Make, Google Workspace, Microsoft 365, HubSpot, Salesforce, Slack, QuickBooks, Shopify, and many more. View our full <Link to="/services" className="text-indigo-400 hover:text-indigo-300">services page</Link> for details.
                    </p>
                  )}
                </div>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-white/60 flex-shrink-0 transition-transform ${
                    openFAQ === 8 ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
            <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/20 transition-all">
              <button
                onClick={() => setOpenFAQ(openFAQ === 9 ? null : 9)}
                className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3"
              >
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-0">How does the money-back guarantee work?</h3>
                  {openFAQ === 9 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-base leading-relaxed">
                      For Voice Agents & Chatbots: 14-day money-back guarantee on your first month's subscription. If you're not satisfied, we'll refund your payment. For Workflow Automation: 30-day money-back guarantee from project completion. We're confident you'll love our services and want you to feel completely risk-free.
                    </p>
                  )}
                </div>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-white/60 flex-shrink-0 transition-transform ${
                    openFAQ === 9 ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
            <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/20 transition-all">
              <button
                onClick={() => setOpenFAQ(openFAQ === 10 ? null : 10)}
                className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3"
              >
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-0">Which plan is right for my business?</h3>
                  {openFAQ === 10 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-base leading-relaxed">
                      Not sure? <Link to="/assessment" className="text-indigo-400 hover:text-indigo-300">Take our 2-minute assessment</Link> to get a personalized recommendation, or <Link to="/contact" className="text-indigo-400 hover:text-indigo-300">schedule a free consultation</Link> to discuss your specific needs.
                    </p>
                  )}
                </div>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-white/60 flex-shrink-0 transition-transform ${
                    openFAQ === 10 ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
            <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/20 transition-all">
              <button
                onClick={() => setOpenFAQ(openFAQ === 11 ? null : 11)}
                className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3"
              >
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-0">How does chatbot pricing work?</h3>
                  {openFAQ === 11 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-base leading-relaxed">
                      Chatbot pricing is subscription-based with three tiers: Basic ($99/month), Professional ($129/month), and Advanced ($299/month). All plans include NLP with your favorite AI model, and AI usage is billed separately. You can expand your chatbot capabilities with add-ons like additional messages, storage, and table rows. There are no setup fees or contracts—cancel anytime.
                    </p>
                  )}
                </div>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-white/60 flex-shrink-0 transition-transform ${
                    openFAQ === 11 ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="relative overflow-hidden rounded-3xl sm:rounded-[3rem] glass border border-white/10 p-8 sm:p-12 md:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-5xl sm:text-6xl md:text-7xl text-white mb-4 sm:mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-6 sm:mb-8">
                Schedule a free consultation to discuss which package is right for your business.
              </p>
              <Link
                to="/contact"
                className="inline-block btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 hover:scale-105 transition-all duration-300 text-lg sm:text-xl"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
