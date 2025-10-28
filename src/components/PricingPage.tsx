import React, { useState, useEffect } from 'react';
import { Check, Zap, Rocket, Crown, Star, Shield, DollarSign, Phone, MessageCircle, Workflow, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';

export function PricingPage() {
  const [activeTab, setActiveTab] = useState<'automation' | 'voice-agents' | 'chatbots'>('automation');
  const [currency, setCurrency] = useState<'USD' | 'ZAR'>('USD');
  const [paymentPlan, setPaymentPlan] = useState<'once-off' | '6-months' | '12-months' | '18-months'>('once-off');
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  
  // Payment plan multipliers
  const paymentMultipliers = {
    'once-off': 1.0,
    '6-months': 1.15,
    '12-months': 1.25,
    '18-months': 1.35
  };
  
  // Payment plan options
  const paymentOptions = [
    { value: 'once-off', label: 'Pay in Full', badge: 'Best Value', icon: '💎' },
    { value: '6-months', label: '6 Monthly Payments', badge: '', icon: '📅' },
    { value: '12-months', label: '12 Monthly Payments', badge: '', icon: '📅' },
    { value: '18-months', label: '18 Monthly Payments', badge: '', icon: '📅' },
  ];
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(null);
    if (openDropdown !== null) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [openDropdown]);
  
  // Exchange rate: 1 USD = 18 ZAR (approximate)
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
      }
      return `$${Math.round(monthlyPrice).toLocaleString()}/mo`;
    }
    
    if (currency === 'ZAR') {
      const zarPrice = Math.round(totalPrice * 18);
      return `R ${zarPrice.toLocaleString()}`;
    }
    
    return `$${Math.round(totalPrice).toLocaleString()}`;
  };
  
  const automationPlans = [
    {
      name: 'Starter',
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      price: '$997',
      period: 'one-time',
      description: 'Perfect for small businesses just getting started with automation',
      features: [
        'Up to 3 automated workflows',
        'Basic integrations (Gmail, Sheets, Calendar)',
        '2 revision rounds',
        'Email support',
        'Setup & training video',
        '30 days of support',
      ],
      highlighted: false,
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      name: 'Professional',
      icon: <Rocket className="w-6 h-6 sm:w-8 sm:h-8" />,
      price: '$2,497',
      period: 'one-time',
      description: 'For growing businesses ready to scale with automation',
      features: [
        'Up to 10 automated workflows',
        'Advanced integrations (CRM, Zapier, APIs)',
        'Unlimited revisions',
        'Priority email & chat support',
        'Live training session',
        '90 days of support',
        'Custom reporting dashboard',
        'Process documentation',
      ],
      highlighted: true,
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    },
    {
      name: 'Enterprise',
      icon: <Crown className="w-6 h-6 sm:w-8 sm:h-8" />,
      price: 'Custom',
      period: 'pricing',
      description: 'For established businesses needing comprehensive automation',
      features: [
        'Unlimited workflows',
        'Enterprise integrations & custom APIs',
        'Dedicated automation specialist',
        '24/7 priority support',
        'On-site training (if needed)',
        '1 year of support',
        'Advanced analytics & reporting',
        'Monthly optimization reviews',
        'Custom development available',
      ],
      highlighted: false,
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const voiceAgentsPlans = [
    {
      name: 'Starter',
      icon: <Phone className="w-6 h-6 sm:w-8 sm:h-8" />,
      price: '$1,997',
      period: 'one-time + usage',
      description: 'Get started with AI voice agents for your business',
      features: [
        'Up to 100 calls/month',
        'Basic voice agent setup',
        'Post-service follow-up workflow',
        'Review generation system',
        'Manager escalation logic',
        '2 revision rounds',
        'Email support',
        '30 days of support',
      ],
      highlighted: false,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Professional',
      icon: <Rocket className="w-6 h-6 sm:w-8 sm:h-8" />,
      price: '$3,997',
      period: 'one-time + usage',
      description: 'Scale your customer engagement with advanced voice AI',
      features: [
        'Up to 500 calls/month',
        'Advanced voice agent training',
        'Multiple call workflows',
        'Custom business training',
        'Appointment reminder system',
        'Lead qualification flows',
        'Unlimited revisions',
        'Priority support',
        '90 days of support',
      ],
      highlighted: true,
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    },
    {
      name: 'Enterprise',
      icon: <Crown className="w-6 h-6 sm:w-8 sm:h-8" />,
      price: 'Custom',
      period: 'pricing',
      description: 'Enterprise-grade voice AI with unlimited capabilities',
      features: [
        'Unlimited calls',
        'Fully custom voice agents',
        'Multi-language support',
        'Advanced NLP training',
        'CRM integration',
        'Dedicated voice specialist',
        '24/7 priority support',
        'Monthly optimization',
        'Custom development',
      ],
      highlighted: false,
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const chatbotsPlans = [
    {
      name: 'Starter',
      icon: <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />,
      price: '$1,497',
      period: 'one-time',
      description: 'Perfect for businesses starting with AI chatbots',
      features: [
        'Single chatbot deployment',
        '1 channel (website OR messenger)',
        'Up to 50 FAQs trained',
        'Basic conversation flows',
        'Lead capture forms',
        'Email support',
        '2 revision rounds',
        '30 days of support',
      ],
      highlighted: false,
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      name: 'Professional',
      icon: <Rocket className="w-6 h-6 sm:w-8 sm:h-8" />,
      price: '$2,997',
      period: 'one-time',
      description: 'Multi-channel chatbots with advanced features',
      features: [
        'Multi-channel deployment',
        '3 channels (website, Facebook, WhatsApp)',
        'Unlimited FAQs & training',
        'Advanced conversation logic',
        'Product recommendation engine',
        'CRM integration',
        'Analytics dashboard',
        'Unlimited revisions',
        '90 days of support',
      ],
      highlighted: true,
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    },
    {
      name: 'Enterprise',
      icon: <Crown className="w-6 h-6 sm:w-8 sm:h-8" />,
      price: 'Custom',
      period: 'pricing',
      description: 'Enterprise chatbots with AI and machine learning',
      features: [
        'Unlimited channels',
        'Advanced AI & machine learning',
        'Multi-language support',
        'Custom integrations',
        'Sentiment analysis',
        'Dedicated chatbot specialist',
        '24/7 priority support',
        'Monthly AI training',
        'Custom development',
      ],
      highlighted: false,
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const plans = activeTab === 'automation' 
    ? automationPlans 
    : activeTab === 'voice-agents' 
    ? voiceAgentsPlans 
    : chatbotsPlans;

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

  // Convert addon prices (no payment plan applied)
  const convertAddonPrice = (price: string): string => {
    if (price.includes('Starting')) {
      if (currency === 'ZAR') {
        const match = price.match(/\$(\d+)/);
        if (match) {
          const zarPrice = Math.round(parseFloat(match[1]) * 18);
          return `Starting at R ${zarPrice.toLocaleString()}`;
        }
      }
      return price;
    }
    
    if (price.includes('/mo')) {
      const numPrice = parseFloat(price.replace(/[$,/mo]/g, ''));
      if (currency === 'ZAR') {
        const zarPrice = Math.round(numPrice * 18);
        return `R ${zarPrice.toLocaleString()}/mo`;
      }
      return price;
    }
    
    // For regular addon prices, just convert currency without payment plan
    const numPrice = parseFloat(price.replace(/[$,]/g, ''));
    if (currency === 'ZAR') {
      const zarPrice = Math.round(numPrice * 18);
      return `R ${zarPrice.toLocaleString()}`;
    }
    return price;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]">
      <SEO
        title="Workflow Automation Pricing: From $997 | No Contracts"
        description="Transparent automation pricing starting at $997. Workflow automation, AI Voice Agents, and Chatbots. Pay once, own forever. No contracts. Payment plans available."
        path="/pricing"
        keywords="automation pricing, workflow automation pricing, business automation cost, automation services pricing, chatbot pricing, voice agent pricing"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Business Automation Services",
            "description": "Professional automation services with flexible one-time pricing",
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "997",
              "highPrice": "9997",
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
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "All packages include revision rounds. After that, you can purchase additional workflows or monthly maintenance for ongoing support."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need technical knowledge?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Not at all! We handle all the technical implementation and provide training so you can manage your automations with confidence."
                }
              },
              {
                "@type": "Question",
                "name": "How much does workflow automation cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Workflow automation pricing starts at $997 for our Starter plan with up to 3 workflows. Our Professional plan is $2,497 for up to 10 workflows, and we offer custom Enterprise pricing for unlimited workflows."
                }
              }
            ]
          }
        ]}
      />
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="blob absolute top-20 right-10 sm:right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-500 rounded-full"></div>
        <div className="blob absolute bottom-20 left-10 sm:left-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-pink-500 rounded-full" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center relative z-10">
          <div className="h-6 sm:h-10 mb-4 sm:mb-6"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl gradient-text mb-4 sm:mb-6">
            Transparent Automation Pricing Plans
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto mb-4">
            One-time investment, lifetime value. No monthly subscriptions – just automation that works for you forever.
          </p>
          <p className="text-base sm:text-lg text-indigo-400 font-semibold mb-8 sm:mb-12">
            Starting at $997
          </p>

          {/* Currency Toggle */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <button
              onClick={() => setCurrency('USD')}
              className={`flex items-center space-x-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 text-sm sm:text-base ${
                currency === 'USD'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-2 border-purple-300/50 shadow-lg shadow-purple-500/50'
                  : 'glass border border-white/10 text-white/60 hover:text-white hover:border-white/20'
              }`}
            >
              <DollarSign className="w-4 h-4" />
              <span className="font-medium">USD</span>
            </button>
            <button
              onClick={() => setCurrency('ZAR')}
              className={`flex items-center space-x-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 text-sm sm:text-base ${
                currency === 'ZAR'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white border-2 border-emerald-300/50 shadow-lg shadow-green-500/50'
                  : 'glass border border-white/10 text-white/60 hover:text-white hover:border-white/20'
              }`}
            >
              <span className="font-bold text-sm">R</span>
              <span className="font-medium">ZAR</span>
            </button>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            <button
              onClick={() => setActiveTab('automation')}
              className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full transition-all text-[11px] sm:text-base ${
                activeTab === 'automation'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-2 border-purple-300/50 shadow-lg shadow-purple-500/50'
                  : 'glass border border-white/10 text-white/60 hover:text-white hover:border-white/20'
              }`}
            >
              <Workflow className="w-3 h-3 sm:w-5 sm:h-5" />
              <span>Automation</span>
            </button>
            <button
              onClick={() => setActiveTab('voice-agents')}
              className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full transition-all text-[11px] sm:text-base ${
                activeTab === 'voice-agents'
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white border-2 border-pink-300/50 shadow-lg shadow-pink-500/50'
                  : 'glass border border-white/10 text-white/60 hover:text-white hover:border-white/20'
              }`}
            >
              <Phone className="w-3 h-3 sm:w-5 sm:h-5" />
              <span>Voice Agents</span>
            </button>
            <button
              onClick={() => setActiveTab('chatbots')}
              className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full transition-all text-[11px] sm:text-base ${
                activeTab === 'chatbots'
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white border-2 border-teal-300/50 shadow-lg shadow-cyan-500/50'
                  : 'glass border border-white/10 text-white/60 hover:text-white hover:border-white/20'
              }`}
            >
              <MessageCircle className="w-3 h-3 sm:w-5 sm:h-5" />
              <span>Chatbots</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative pt-10 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl gradient-text mb-3 sm:mb-4">
              {activeTab === 'automation' && 'Workflow Automation Pricing'}
              {activeTab === 'voice-agents' && 'AI Voice Agent Pricing'}
              {activeTab === 'chatbots' && 'AI Chatbot Pricing'}
            </h2>
            <p className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto">
              {activeTab === 'automation' && 'Automate your workflows with one-time pricing. No subscriptions, just automation that works forever.'}
              {activeTab === 'voice-agents' && 'AI-powered phone calls and customer conversations. Pay once, use forever with flexible usage plans.'}
              {activeTab === 'chatbots' && 'Intelligent 24/7 customer support. One-time setup fee, own your chatbot forever.'}
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
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
                    <span className="text-white font-medium text-[10px] sm:text-xs tracking-wider uppercase">Most Popular</span>
                  </div>
                )}
                <div className="p-6 sm:p-8">
                  <div className={`inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${plan.gradient} text-white mb-4 sm:mb-6`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-white mb-2 text-lg sm:text-xl">{plan.name}</h3>
                  
                  {/* Payment Plan Selector */}
                  {plan.price !== 'Custom' && (
                    <div className="mb-3 sm:mb-4 relative">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenDropdown(openDropdown === index ? null : index);
                        }}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm rounded-lg sm:rounded-xl bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20 text-white font-medium hover:from-white/15 hover:to-white/10 hover:border-white/30 transition-all cursor-pointer shadow-lg backdrop-blur-sm flex items-center justify-between"
                      >
                        <span className="flex items-center gap-2 sm:gap-3">
                          <span className="mr-1">{paymentOptions.find(opt => opt.value === paymentPlan)?.icon}</span>
                          <span>{paymentOptions.find(opt => opt.value === paymentPlan)?.label}</span>
                          {paymentOptions.find(opt => opt.value === paymentPlan)?.badge && (
                            <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full ${
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
                              <span className="flex items-center gap-2 sm:gap-3">
                                <span className="mr-1">{option.icon}</span>
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
                    {paymentPlan !== 'once-off' && plan.price !== 'Custom' ? (
                      <div>
                        <div className="text-3xl sm:text-4xl text-white mb-2">{convertPrice(plan.price, true)}</div>
                        <div className="text-xs sm:text-sm text-white/50">
                          Total: {convertPrice(plan.price)} over {paymentPlan.split('-')[0]} months
                        </div>
                      </div>
                    ) : (
                      <div>
                        <span className="text-3xl sm:text-4xl text-white">{convertPrice(plan.price)}</span>
                        {plan.period !== 'pricing' && (
                          <span className="text-white/50 ml-2 text-xs sm:text-sm">{plan.period}</span>
                        )}
                      </div>
                    )}
                  </div>
                  <p className="text-white/60 mb-6 sm:mb-8 text-sm sm:text-base">{plan.description}</p>
                  
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 sm:space-x-3">
                        <div className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center mt-0.5`}>
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <span className="text-white/70 text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block w-full py-3 sm:py-4 px-6 rounded-full text-center font-semibold transition-all duration-300 text-sm sm:text-base ${
                      plan.highlighted
                        ? 'btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 hover:scale-105'
                        : 'glass border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 hover:scale-105'
                    }`}
                  >
                    {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
                  </Link>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl gradient-text mb-4 sm:mb-6">Add-Ons</h2>
            <p className="text-lg sm:text-xl text-white/60">Enhance your automation package with these optional services</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {addons.map((addon, index) => (
              <div
                key={index}
                className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all"
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
                      {addon.icon}
                    </div>
                    <h4 className="text-white text-base sm:text-lg">{addon.name}</h4>
                  </div>
                  <span className="text-purple-400 font-semibold text-sm sm:text-base">{convertAddonPrice(addon.price)}</span>
                </div>
                <p className="text-white/60 text-sm sm:text-base">{addon.description}</p>
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
              <h2 className="text-3xl sm:text-4xl gradient-text mb-4 sm:mb-6">30-Day Money-Back Guarantee</h2>
              <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-12">
                We're confident you'll love your automation. If you're not completely satisfied within 30 days, we'll refund your investment – no questions asked.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h4 className="text-white mb-1 sm:mb-2 text-sm sm:text-base">No Long-Term Contracts</h4>
                  <p className="text-white/60 text-xs sm:text-sm">Pay once, own it forever</p>
                </div>
                <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h4 className="text-white mb-1 sm:mb-2 text-sm sm:text-base">Transparent Pricing</h4>
                  <p className="text-white/60 text-xs sm:text-sm">No hidden fees or surprises</p>
                </div>
                <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h4 className="text-white mb-1 sm:mb-2 text-sm sm:text-base">Proven Results</h4>
                  <p className="text-white/60 text-xs sm:text-sm">Join 200+ happy clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative pt-10 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl gradient-text text-center mb-12 sm:mb-16">Frequently Asked Questions</h2>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
              <h3 className="text-white mb-2 sm:mb-3 text-base sm:text-lg font-semibold">How much does workflow automation cost?</h3>
              <p className="text-white/60 text-sm sm:text-base">
                Workflow automation pricing starts at $997 for our Starter plan with up to 3 workflows. Our Professional plan is $2,497 for up to 10 workflows, and we offer custom Enterprise pricing for unlimited workflows. <Link to="/services/automation" className="text-indigo-400 hover:text-indigo-300">Learn more about workflow automation</Link>.
              </p>
            </div>
            <div className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
              <h3 className="text-white mb-2 sm:mb-3 text-base sm:text-lg font-semibold">How long does implementation take?</h3>
              <p className="text-white/60 text-sm sm:text-base">
                Most projects are completed within 2-4 weeks, depending on complexity. We'll give you a specific timeline during your discovery call.
              </p>
            </div>
            <div className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
              <h3 className="text-white mb-2 sm:mb-3 text-base sm:text-lg font-semibold">Are there any monthly fees or subscriptions?</h3>
              <p className="text-white/60 text-sm sm:text-base">
                No! Our pricing is one-time. You pay once and own your automation forever. No monthly subscriptions, no recurring fees. The only exception is our optional Monthly Maintenance add-on if you want ongoing optimization.
              </p>
            </div>
            <div className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
              <h3 className="text-white mb-2 sm:mb-3 text-base sm:text-lg font-semibold">What are payment plans and how do they work?</h3>
              <p className="text-white/60 text-sm sm:text-base">
                We offer flexible payment plans (6, 12, or 18 months) with a small premium. This is NOT a subscription – you're still paying for a one-time purchase, just spreading it out. You own your automation forever regardless of how you pay.
              </p>
            </div>
            <div className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
              <h3 className="text-white mb-2 sm:mb-3 text-base sm:text-lg font-semibold">What if I need changes later?</h3>
              <p className="text-white/60 text-sm sm:text-base">
                All packages include revision rounds during implementation. After launch, you can purchase additional workflows ($297 each) or monthly maintenance ($497/mo) for ongoing support and optimization.
              </p>
            </div>
            <div className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
              <h3 className="text-white mb-2 sm:mb-3 text-base sm:text-lg font-semibold">Do I need technical knowledge?</h3>
              <p className="text-white/60 text-sm sm:text-base">
                Not at all! We handle all the technical implementation and provide training so you can manage your automations with confidence. No coding or technical skills required.
              </p>
            </div>
            <div className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
              <h3 className="text-white mb-2 sm:mb-3 text-base sm:text-lg font-semibold">What's included in all pricing plans?</h3>
              <p className="text-white/60 text-sm sm:text-base">
                Every plan includes: discovery call, strategy session, complete implementation, testing, training, documentation, and a support period (30-365 days depending on plan). No hidden fees or setup charges.
              </p>
            </div>
            <div className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
              <h3 className="text-white mb-2 sm:mb-3 text-base sm:text-lg font-semibold">What tools do you work with?</h3>
              <p className="text-white/60 text-sm sm:text-base">
                We work with 100+ popular business tools including Zapier, Make, Google Workspace, Microsoft 365, HubSpot, Salesforce, Slack, QuickBooks, Shopify, and many more. View our full <Link to="/services" className="text-indigo-400 hover:text-indigo-300">services page</Link> for details.
              </p>
            </div>
            <div className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
              <h3 className="text-white mb-2 sm:mb-3 text-base sm:text-lg font-semibold">How does the 30-day money-back guarantee work?</h3>
              <p className="text-white/60 text-sm sm:text-base">
                If you're not satisfied within 30 days of project completion, we'll refund your investment – no questions asked. We're confident you'll love your automation, but want you to feel completely risk-free.
              </p>
            </div>
            <div className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
              <h3 className="text-white mb-2 sm:mb-3 text-base sm:text-lg font-semibold">Which plan is right for my business?</h3>
              <p className="text-white/60 text-sm sm:text-base">
                Not sure? <Link to="/assessment" className="text-indigo-400 hover:text-indigo-300">Take our 2-minute assessment</Link> to get a personalized recommendation, or <Link to="/contact" className="text-indigo-400 hover:text-indigo-300">schedule a free consultation</Link> to discuss your specific needs.
              </p>
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8">
                Schedule a free consultation to discuss which package is right for your business.
              </p>
              <Link
                to="/contact"
                className="inline-block btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
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
