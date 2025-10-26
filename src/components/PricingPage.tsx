import React, { useState } from 'react';
import { Check, Zap, Rocket, Crown, Star, Shield, DollarSign, Phone, MessageCircle, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';

export function PricingPage() {
  const [activeTab, setActiveTab] = useState<'automation' | 'voice-agents' | 'chatbots'>('automation');
  
  const automationPlans = [
    {
      name: 'Starter',
      icon: <Zap className="w-8 h-8" />,
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
      icon: <Rocket className="w-8 h-8" />,
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
      icon: <Crown className="w-8 h-8" />,
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
      icon: <Phone className="w-8 h-8" />,
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
      icon: <Rocket className="w-8 h-8" />,
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
      icon: <Crown className="w-8 h-8" />,
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
      icon: <MessageCircle className="w-8 h-8" />,
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
      icon: <Rocket className="w-8 h-8" />,
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
      icon: <Crown className="w-8 h-8" />,
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
      icon: <Zap className="w-5 h-5" />,
    },
    {
      name: 'Monthly Maintenance',
      price: '$497/mo',
      description: 'Ongoing support, updates, and optimization',
      icon: <Shield className="w-5 h-5" />,
    },
    {
      name: 'Training Session',
      price: '$397',
      description: 'Additional 1-hour training for your team',
      icon: <Star className="w-5 h-5" />,
    },
    {
      name: 'Custom Integration',
      price: 'Starting at $797',
      description: 'Connect to unique or proprietary systems',
      icon: <DollarSign className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]">
      <SEO
        title="Pricing Plans"
        description="Transparent pricing for business automation services. From starter packages to enterprise solutions, find the perfect automation plan for your business needs."
        path="/pricing"
        keywords="automation pricing, workflow automation cost, business automation packages, automation services pricing"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Business Automation Services",
          "description": "Professional automation services with flexible pricing plans",
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "lowPrice": "997",
            "highPrice": "9997"
          }
        }}
      />
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="blob absolute top-20 right-1/4 w-96 h-96 bg-indigo-500 rounded-full"></div>
        <div className="blob absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500 rounded-full" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
            <DollarSign className="w-4 h-4 text-green-400" />
            <span className="text-sm text-white/80">Pricing Plans</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl gradient-text mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12">
            One-time investment, lifetime value. No monthly subscriptions – just automation that works for you forever.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab('automation')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                activeTab === 'automation'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                  : 'glass border border-white/10 text-white/60 hover:text-white hover:border-white/20'
              }`}
            >
              <Workflow className="w-5 h-5" />
              <span>Automation</span>
            </button>
            <button
              onClick={() => setActiveTab('voice-agents')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                activeTab === 'voice-agents'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                  : 'glass border border-white/10 text-white/60 hover:text-white hover:border-white/20'
              }`}
            >
              <Phone className="w-5 h-5" />
              <span>Voice Agents</span>
            </button>
            <button
              onClick={() => setActiveTab('chatbots')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                activeTab === 'chatbots'
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white'
                  : 'glass border border-white/10 text-white/60 hover:text-white hover:border-white/20'
              }`}
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chatbots</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`card-3d relative overflow-hidden rounded-[2.5rem] glass border transition-all ${
                  plan.highlighted 
                    ? 'border-purple-500 lg:scale-105' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                )}
                {plan.highlighted && (
                  <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.gradient} text-white mb-6`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-white mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl text-white">{plan.price}</span>
                    {plan.period !== 'pricing' && (
                      <span className="text-white/50 ml-2">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-white/60 mb-8">{plan.description}</p>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center mt-0.5`}>
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white/70">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full py-4 rounded-full transition-all ${
                      plan.highlighted
                        ? 'btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white'
                        : 'glass border border-white/20 text-white hover:bg-white/5'
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl gradient-text mb-6">Add-Ons</h2>
            <p className="text-xl text-white/60">Enhance your automation package with these optional services</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {addons.map((addon, index) => (
              <div
                key={index}
                className="card-3d glass border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
                      {addon.icon}
                    </div>
                    <h4 className="text-white">{addon.name}</h4>
                  </div>
                  <span className="text-purple-400">{addon.price}</span>
                </div>
                <p className="text-white/60">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="relative overflow-hidden rounded-[3rem] glass border border-white/10 p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10"></div>
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-500 text-white mb-8">
                <Shield className="w-10 h-10" />
              </div>
              <h2 className="text-4xl gradient-text mb-6">30-Day Money-Back Guarantee</h2>
              <p className="text-xl text-white/70 mb-12">
                We're confident you'll love your automation. If you're not completely satisfied within 30 days, we'll refund your investment – no questions asked.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="card-3d glass border border-white/10 rounded-2xl p-6">
                  <h4 className="text-white mb-2">No Long-Term Contracts</h4>
                  <p className="text-white/60">Pay once, own it forever</p>
                </div>
                <div className="card-3d glass border border-white/10 rounded-2xl p-6">
                  <h4 className="text-white mb-2">Transparent Pricing</h4>
                  <p className="text-white/60">No hidden fees or surprises</p>
                </div>
                <div className="card-3d glass border border-white/10 rounded-2xl p-6">
                  <h4 className="text-white mb-2">Proven Results</h4>
                  <p className="text-white/60">Join 200+ happy clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl relative z-10">
          <h2 className="text-4xl sm:text-5xl gradient-text text-center mb-16">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="card-3d glass border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all">
              <h4 className="text-white mb-3">How long does implementation take?</h4>
              <p className="text-white/60">
                Most projects are completed within 2-4 weeks, depending on complexity. We'll give you a specific timeline during your discovery call.
              </p>
            </div>
            <div className="card-3d glass border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all">
              <h4 className="text-white mb-3">What if I need changes later?</h4>
              <p className="text-white/60">
                All packages include revision rounds. After that, you can purchase additional workflows or monthly maintenance for ongoing support.
              </p>
            </div>
            <div className="card-3d glass border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all">
              <h4 className="text-white mb-3">Do I need technical knowledge?</h4>
              <p className="text-white/60">
                Not at all! We handle all the technical implementation and provide training so you can manage your automations with confidence.
              </p>
            </div>
            <div className="card-3d glass border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all">
              <h4 className="text-white mb-3">What tools do you work with?</h4>
              <p className="text-white/60">
                We work with 100+ popular business tools including Zapier, Make, Google Workspace, Microsoft 365, HubSpot, Salesforce, and many more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="relative overflow-hidden rounded-[3rem] glass border border-white/10 p-12 sm:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-4xl sm:text-5xl text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Schedule a free consultation to discuss which package is right for your business.
              </p>
              <Link
                to="/contact"
                className="btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-full"
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
