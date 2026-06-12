import React, { useState } from 'react';
import { Phone, PhoneCall, Star, MessageCircle, Users, TrendingUp, Brain, CheckCircle, AlertTriangle, UserCheck, ChevronDown, DollarSign, Zap, Rocket, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { StarsCanvas } from './StarBackground';

export function VoiceAgentsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [currency, setCurrency] = useState<'USD' | 'ZAR' | 'EUR'>('USD');
  const features = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Natural Conversations',
      description: 'Our Voice Agents speak with human-sounding voices and understand natural language, creating genuine connections with your clients.',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: '5-Star Review Generation',
      description: 'Automatically request reviews from satisfied customers and boost your online reputation without manual follow-up.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Early Problem Detection',
      description: 'Identify unhappy clients immediately and escalate issues to your team before they become public negative reviews.',
      gradient: 'from-red-500 to-rose-500',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Custom Training',
      description: 'Voice Agents trained on your business information can answer questions, provide updates, and handle conversations accurately.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Smart Conversations',
      description: 'Handle basic sales conversations, appointment scheduling, and customer inquiries automatically, 24/7.',
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Seamless Integration',
      description: 'Voice Agents work within your existing automation workflows, triggering calls at precisely the right moment.',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const useCases = [
    {
      icon: <PhoneCall className="w-6 h-6" />,
      title: 'Post-Service Follow-Up',
      description: 'Automatically call customers after service completion to check satisfaction and request reviews.',
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: 'Appointment Reminders',
      description: 'Reduce no-shows with personalized voice reminders that clients can respond to naturally.',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Lead Qualification',
      description: 'Let Voice Agents handle initial sales conversations and qualify leads before they reach your team.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]">
      <SEO
        title="AI Voice Agents | Automated Phone Calls & Reviews"
        description="Deploy AI Voice Agents that make real phone calls, follow up with customers, and generate 5-star reviews automatically. Human-sounding voices, natural conversations, 24/7 availability."
        path="/services/voice-agents"
        keywords="AI voice agents, AI phone automation, automated phone calls, voice AI for business, AI calling service, conversational AI agents, automated customer calls"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "AI Voice Agents",
            "description": "AI-powered voice agents that make real phone calls, handle customer conversations, and automate review generation",
            "brand": {
              "@type": "Organization",
              "name": "The Automators"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "99",
              "highPrice": "Custom",
              "availability": "https://schema.org/InStock",
              "url": "https://theautomators.co/services/voice-agents"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "50"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI Voice Agent Automation",
            "provider": {
              "@type": "Organization",
              "name": "The Automators"
            },
            "areaServed": "Worldwide",
            "description": "AI-powered Voice Agents that make real phone calls, handle customer conversations, and automate review generation"
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What are AI voice agents?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI voice agents are intelligent virtual assistants that can make real phone calls to your customers. They use natural language processing and human-sounding voices to have conversations, answer questions, and complete tasks like requesting reviews or scheduling appointments."
                }
              },
              {
                "@type": "Question",
                "name": "How do AI voice agents sound?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Modern AI voice agents use advanced text-to-speech technology to sound remarkably human. They understand context, respond naturally to questions, and adapt their conversation based on customer responses—creating genuine, helpful interactions."
                }
              },
              {
                "@type": "Question",
                "name": "What can AI voice agents do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI voice agents can handle post-service follow-ups, request customer reviews, send appointment reminders, qualify leads, provide service updates, answer basic questions, and escalate complex issues to human team members when needed."
                }
              }
            ]
          }
        ]}
      />
      {/* Spinning Stars Background */}
      <StarsCanvas />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl gradient-text mb-6 max-w-4xl mx-auto">
            AI Voice Agents That Call Your Customers For You
          </h1>
          <p className="text-2xl text-white/60 max-w-3xl mx-auto mb-8">
            Our AI-powered Voice Agents make real phone calls at specific points in your workflow, speaking naturally with human-sounding voices to improve customer experience and generate more 5-star reviews automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-3d bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full"
            >
              Schedule a Demo
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 rounded-full btn-secondary transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* What Are Voice Agents Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="glass border border-white/10 rounded-3xl p-8 sm:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-6xl sm:text-7xl gradient-text mb-6">What Are AI Voice Agents?</h2>
                <p className="text-white/70 text-2xl mb-6">
                  Voice Agents are AI-powered virtual assistants that integrate seamlessly into your automation systems. They can make real phone calls to your clients at specific points in your workflow, handling conversations naturally with human-sounding voices.
                </p>
                <p className="text-white/70 text-xl mb-6">
                  Unlike simple robocalls or text-to-speech systems, our Voice Agents understand context, respond to questions, and adapt their conversations based on what your client says — creating genuine, helpful interactions that strengthen customer relationships.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-white/80"><strong className="text-white">Natural Language Understanding:</strong> Responds intelligently to customer questions and concerns</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-white/80"><strong className="text-white">Human-Sounding Voices:</strong> Natural speech that creates genuine connections</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-white/80"><strong className="text-white">Workflow Integration:</strong> Triggers automatically at the perfect moment in your business process</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="float">
                  <div className="relative">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                      alt="AI Voice Agent making a phone call"
                      className="w-full h-auto rounded-3xl"
                    />
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#0f0f1e]/70 to-transparent"></div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-500 blur-2xl opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl sm:text-7xl gradient-text mb-6">How AI Voice Agents Transform Your Business</h2>
            <p className="text-3xl text-white/60 max-w-3xl mx-auto">
              From review generation to customer support, Voice Agents handle conversations that drive results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-3d group relative overflow-hidden rounded-3xl glass border border-white/10 p-8 hover:border-white/20 transition-all"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                <div className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="relative text-white mb-3">{feature.title}</h3>
                <p className="relative text-white/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Example Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="relative overflow-hidden rounded-3xl glass border border-white/10 p-8 sm:p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-6xl sm:text-7xl gradient-text mb-4">How It Works In Practice</h2>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 mb-8">
                <p className="text-white/90 text-2xl leading-relaxed mb-6">
                  <strong className="text-white">Imagine this scenario:</strong> When a client uses your service, and the job is completed, our Voice Agent automatically schedules a courtesy call.
                </p>
                <p className="text-white/80 text-2xl leading-relaxed mb-6">
                  The agent speaks naturally and asks your client about their experience. If the client is satisfied, the agent politely asks them to leave a 5-star Google review — even offering to send a direct link via text message for convenience.
                </p>
                <p className="text-white/80 text-2xl leading-relaxed">
                  If the experience wasn't good, the call is automatically escalated to one of your managers for a personal follow-up. This way, you can address issues before they become negative reviews, turning potentially bad situations into opportunities to demonstrate exceptional service.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/5">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-white mb-4">
                    <Star className="w-6 h-6" />
                  </div>
                  <h4 className="text-white mb-2">Happy Clients</h4>
                  <p className="text-white/60 text-lg">Guided to leave 5-star reviews</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/5">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white mb-4">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h4 className="text-white mb-2">Issues Detected</h4>
                  <p className="text-white/60 text-lg">Escalated to managers early</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/5">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white mb-4">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h4 className="text-white mb-2">Better Reputation</h4>
                  <p className="text-white/60 text-lg">More positive feedback</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Use Cases Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl sm:text-7xl gradient-text mb-6">AI Voice Agent Use Cases</h2>
            <p className="text-3xl text-white/60 max-w-3xl mx-auto">
              This is just one example of how Voice Agents can boost positive feedback, identify unhappy clients early, and help businesses maintain great relationships. The possibilities are endless.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="card-3d glass border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-white mb-3">{useCase.title}</h3>
                <p className="text-white/60">{useCase.description}</p>
              </div>
            ))}
          </div>

          <div className="glass border border-white/10 rounded-3xl p-8 sm:p-12">
            <h3 className="text-4xl sm:text-5xl text-white mb-6 text-center">Custom Business Training</h3>
            <p className="text-white/70 text-2xl mb-6">
              These Voice Agents can be trained on your specific business information, allowing them to answer client questions accurately, provide updates on orders or appointments, and even handle basic sales conversations — all without human involvement.
            </p>
            <p className="text-white/70 text-xl">
              Whether you need to confirm appointments, follow up on leads, provide service updates, or collect feedback, Voice Agents adapt to your unique business needs and workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl sm:text-7xl gradient-text mb-6">Voice Agent Pricing Plans</h2>
            <p className="text-3xl text-white/60 max-w-3xl mx-auto mb-8">
              Simple monthly subscription pricing. Scale your calling capacity as you grow. No setup fees, cancel anytime.
            </p>
            
            {/* Currency Toggle */}
            <div className="flex items-center justify-center gap-3 sm:gap-4">
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

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {/* Starter Plan */}
            <div className="card-3d relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] glass border border-white/10 hover:border-white/20 transition-all">
              <div className="p-6 sm:p-8">
                <div className="mb-4 sm:mb-6">
                  <img src="/voice-starter.png" alt="Voice Starter" className="w-12 h-12 sm:w-16 sm:h-16" />
                </div>
                <h3 className="text-white mb-2 text-2xl sm:text-3xl">Starter</h3>
                <div className="mb-4 sm:mb-6">
                  <div className="text-4xl sm:text-5xl text-white mb-2">
                    {currency === 'USD' && '$99'}
                    {currency === 'EUR' && '€94'}
                    {currency === 'ZAR' && 'R 1,782'}
                    <span className="text-white/50 ml-2 text-lg sm:text-xl">/month</span>
                  </div>
                </div>
                <p className="text-white/60 mb-6 sm:mb-8 text-lg sm:text-xl">Perfect for small businesses with consistent but moderate call volume. Ideal for internal tools and basic automation needs.</p>
                
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">200 call minutes per month</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">5 calls at the same time</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">1 standard agent personality</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">Basic scripted conversations</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">Surveys & simple reminders</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">Setup & maintenance included</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">Basic call logs</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">Email support (24-hour response)</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">Extra minutes: $0.36/minute</span>
                  </li>
                </ul>

                <Link
                  to="/pricing"
                  className="block w-full py-3 sm:py-4 px-6 rounded-full text-center font-semibold transition-all duration-300 text-lg sm:text-xl glass border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 hover:scale-105"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="card-3d relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] glass border border-purple-500 lg:scale-105 transition-all">
              <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1.5 px-4 text-center">
                <span className="text-white font-medium text-xs sm:text-sm tracking-wider uppercase">Most Popular</span>
              </div>
              <div className="p-6 sm:p-8">
                <div className="mb-4 sm:mb-6">
                  <img src="/professional-icon.png" alt="Professional" className="w-12 h-12 sm:w-16 sm:h-16" />
                </div>
                <h3 className="text-white mb-2 text-2xl sm:text-3xl">Professional</h3>
                <div className="mb-4 sm:mb-6">
                  <div className="text-4xl sm:text-5xl text-white mb-2">
                    {currency === 'USD' && '$199'}
                    {currency === 'EUR' && '€189'}
                    {currency === 'ZAR' && 'R 3,582'}
                    <span className="text-white/50 ml-2 text-lg sm:text-xl">/month</span>
                  </div>
                </div>
                <p className="text-white/60 mb-6 sm:mb-8 text-lg sm:text-xl">Growing businesses requiring superior audio quality for regional service and moderate-to-high call volume. Professional-grade features included.</p>
                
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">550 call minutes per month</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">10 calls at the same time</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">3 unique agent personalities</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">Advanced multi-step conversations</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">Lead qualification & upselling</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">Crystal-clear audio quality</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">Setup & maintenance included</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">CRM & Helpdesk sync (HubSpot, Zapier, Sheets)</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">Priority chat support (4-hour response)</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">Extra minutes: $0.28/minute</span>
                  </li>
                </ul>

                <Link
                  to="/pricing"
                  className="block w-full py-3 sm:py-4 px-6 rounded-full text-center font-semibold transition-all duration-300 text-lg sm:text-xl btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 hover:scale-105"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Custom Plan */}
            <div className="card-3d relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] glass border border-white/10 hover:border-white/20 transition-all">
              <div className="p-6 sm:p-8">
                <div className="mb-4 sm:mb-6">
                  <img src="/enterprise-icon.png" alt="Custom" className="w-12 h-12 sm:w-16 sm:h-16" />
                </div>
                <h3 className="text-white mb-2 text-2xl sm:text-3xl">Custom</h3>
                <div className="mb-4 sm:mb-6">
                  <span className="text-4xl sm:text-5xl text-white">Custom</span>
                </div>
                <p className="text-white/60 mb-6 sm:mb-8 text-lg sm:text-xl">Enterprise-grade voice AI for high-volume operations. Low-latency performance with dedicated support for mission-critical applications.</p>
                
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">Unlimited call minutes</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">15+ calls at the same time</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">Unlimited agents & custom voices</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">AI learning & real-time adaptation</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">Ultra-fast voice responses</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">Full API access & custom integrations</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">Advanced dashboards & analytics</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">Dedicated support & account manager</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-lg sm:text-xl">Extra minutes: $0.05/minute</span>
                  </li>
                </ul>

                <Link
                  to="/contact"
                  className="block w-full py-3 sm:py-4 px-6 rounded-full text-center font-semibold transition-all duration-300 text-lg sm:text-xl glass border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Add-ons */}
          <div className="text-center mb-8">
            <h3 className="text-4xl sm:text-5xl gradient-text mb-4">Add-Ons</h3>
            <p className="text-xl text-white/60">Scale your voice agent capabilities with these optional add-ons</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="card-3d glass border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
                    <Phone className="w-4 h-4" />
                  </div>
                  <h4 className="text-white text-lg">Additional Minutes</h4>
                </div>
                <span className="text-purple-400 font-semibold text-lg">
                  {currency === 'USD' && '$50'}
                  {currency === 'EUR' && '€48'}
                  {currency === 'ZAR' && 'R 900'}
                </span>
              </div>
              <p className="text-white/60 text-base">Per 500 minutes</p>
            </div>

            <div className="card-3d glass border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
                    <Star className="w-4 h-4" />
                  </div>
                  <h4 className="text-white text-lg">Extra Agent</h4>
                </div>
                <span className="text-purple-400 font-semibold text-lg">
                  {currency === 'USD' && '$99/mo'}
                  {currency === 'EUR' && '€94/mo'}
                  {currency === 'ZAR' && 'R 1,782/mo'}
                </span>
              </div>
              <p className="text-white/60 text-base">Add custom voice personality</p>
            </div>

            <div className="card-3d glass border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <h4 className="text-white text-lg">CRM Setup</h4>
                </div>
                <span className="text-purple-400 font-semibold text-lg">
                  {currency === 'USD' && '$297'}
                  {currency === 'EUR' && '€282'}
                  {currency === 'ZAR' && 'R 5,346'}
                </span>
              </div>
              <p className="text-white/60 text-base">One-time setup fee</p>
            </div>

            <div className="card-3d glass border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <h4 className="text-white text-lg">Voice Training</h4>
                </div>
                <span className="text-purple-400 font-semibold text-lg">
                  {currency === 'USD' && '$497'}
                  {currency === 'EUR' && '€472'}
                  {currency === 'ZAR' && 'R 8,946'}
                </span>
              </div>
              <p className="text-white/60 text-base">One-time training fee</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl gradient-text mb-3 sm:mb-4">Frequently Asked Questions</h2>
            <p className="text-lg sm:text-2xl text-white/60">
              Everything you need to know about AI Voice Agents
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/20 transition-all">
              <button
                onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
                className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3"
              >
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-0">What are AI voice agents?</h3>
                  {openFAQ === 1 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-lg leading-relaxed">
                      AI voice agents are intelligent virtual assistants that can make real phone calls to your customers. They use natural language processing and human-sounding voices to have conversations, answer questions, and complete tasks like requesting reviews or scheduling appointments. <Link to="/services/automation" className="text-indigo-400 hover:text-indigo-300">Learn more about automation workflows</Link>.
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
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-0">Do voice agents sound robotic?</h3>
                  {openFAQ === 2 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-lg leading-relaxed">
                      Not at all! Modern AI voice agents use advanced text-to-speech technology to sound remarkably human. They understand context, respond naturally to questions, and adapt their conversation based on customer responses—creating genuine, helpful interactions that most customers can't distinguish from a human agent.
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
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-0">Can voice agents handle complex conversations?</h3>
                  {openFAQ === 3 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-lg leading-relaxed">
                      AI voice agents excel at structured conversations like follow-ups, appointment reminders, review requests, and lead qualification. For complex issues or upset customers, they intelligently escalate to your team. They're designed to handle 80% of routine calls, freeing your team for situations that require human judgment.
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
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-0">How much do AI voice agents cost?</h3>
                  {openFAQ === 4 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-lg leading-relaxed">
                      Our AI Voice Agent services start at $99/month for the Starter plan (200 minutes). Professional plans are $199/month (550 minutes) with advanced features including crystal-clear audio quality. We also offer custom Enterprise pricing for unlimited minutes and high-volume operations. No contracts, cancel anytime. <Link to="/pricing" className="text-indigo-400 hover:text-indigo-300">View detailed pricing</Link>.
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
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-0">What happens if a customer has a question the agent can't answer?</h3>
                  {openFAQ === 5 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-base leading-relaxed">
                      Voice agents are trained on your business information and can handle most common questions. If they encounter something they can't answer, they gracefully acknowledge it and either take a message for your team or transfer the call to a human staff member. You maintain full control over escalation rules.
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
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-0">How long does it take to set up voice agents?</h3>
                  {openFAQ === 6 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-base leading-relaxed">
                      Initial setup typically takes 1-2 weeks. This includes training the AI on your business, creating conversation scripts, testing calls, and integration with your existing systems. Once launched, voice agents are available 24/7 and can start making calls immediately.
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
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-0">Can voice agents speak multiple languages?</h3>
                  {openFAQ === 7 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-base leading-relaxed">
                      Yes! AI voice agents can be configured to speak multiple languages and can even detect the customer's preferred language and switch automatically. This makes them ideal for businesses serving diverse customer bases.
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
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-0">Are voice agents available 24/7?</h3>
                  {openFAQ === 8 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-base leading-relaxed">
                      Absolutely! Unlike human staff, AI voice agents work around the clock without breaks, holidays, or sick days. They can make calls at optimal times based on your customer data, even outside business hours, ensuring maximum reach and response rates.
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
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-0">What's the difference between voice agents and IVR systems?</h3>
                  {openFAQ === 9 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-base leading-relaxed">
                      IVR systems use pre-recorded menus and button presses ("Press 1 for..."). AI voice agents have natural, two-way conversations, understanding spoken responses and adapting in real-time. They're much more engaging and effective for tasks requiring interaction, like review requests or feedback collection.
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
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-0">Can customers tell it's an AI?</h3>
                  {openFAQ === 10 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-base leading-relaxed">
                      With modern voice AI technology, most customers can't tell the difference, especially for routine calls like follow-ups and reminders. We're transparent when required by law, but the voice quality and conversation flow are so natural that customers focus on the message, not the messenger.
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
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <p className="text-white/60 mb-3 text-base">Ready to deploy AI Voice Agents?</p>
            <Link
              to="/contact"
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors text-base"
            >
              Schedule a demo call to hear them in action →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="relative overflow-hidden rounded-[3rem] glass border border-white/10 p-12 sm:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20"></div>
            <div className="relative z-10 text-center">
              <div className="inline-flex p-4 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-500 text-white mb-8">
                <Phone className="w-12 h-12" />
              </div>
              <h2 className="text-5xl sm:text-6xl text-white mb-6">
                Ready to Try Voice Agents?
              </h2>
              <p className="text-2xl text-white/70 mb-8">
                Discover how Voice Agents can transform your customer experience, generate more positive reviews, and free up your team to focus on what matters most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-3d bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full"
                >
                  Schedule a Demo Call
                </Link>
                <Link
                  to="/assessment"
                  className="px-8 py-4 rounded-full btn-secondary transition-all"
                >
                  Take Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

