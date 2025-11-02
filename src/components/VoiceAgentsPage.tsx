import React, { useState } from 'react';
import { Phone, PhoneCall, Star, MessageCircle, Users, TrendingUp, Brain, CheckCircle, AlertTriangle, UserCheck, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function VoiceAgentsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
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
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "1997",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "url": "https://theautomators.com/services/voice-agents"
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
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="blob absolute top-20 left-1/4 w-96 h-96 bg-blue-500 rounded-full"></div>
        <div className="blob absolute bottom-40 right-1/4 w-80 h-80 bg-purple-500 rounded-full" style={{ animationDelay: '2s' }}></div>
      </div>

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
              className="px-8 py-4 rounded-full glass border border-white/20 text-white hover:bg-white/5 transition-all"
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
                <h2 className="text-5xl sm:text-6xl gradient-text mb-6">What Are AI Voice Agents?</h2>
                <p className="text-white/70 text-xl mb-6">
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
            <h2 className="text-5xl sm:text-6xl gradient-text mb-6">How AI Voice Agents Transform Your Business</h2>
            <p className="text-2xl text-white/60 max-w-3xl mx-auto">
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
                <h2 className="text-5xl sm:text-6xl gradient-text mb-4">How It Works In Practice</h2>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 mb-8">
                <p className="text-white/90 text-xl leading-relaxed mb-6">
                  <strong className="text-white">Imagine this scenario:</strong> When a client uses your service, and the job is completed, our Voice Agent automatically schedules a courtesy call.
                </p>
                <p className="text-white/80 text-xl leading-relaxed mb-6">
                  The agent speaks naturally and asks your client about their experience. If the client is satisfied, the agent politely asks them to leave a 5-star Google review — even offering to send a direct link via text message for convenience.
                </p>
                <p className="text-white/80 text-xl leading-relaxed">
                  If the experience wasn't good, the call is automatically escalated to one of your managers for a personal follow-up. This way, you can address issues before they become negative reviews, turning potentially bad situations into opportunities to demonstrate exceptional service.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/5">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-white mb-4">
                    <Star className="w-6 h-6" />
                  </div>
                  <h4 className="text-white mb-2">Happy Clients</h4>
                  <p className="text-white/60 text-base">Guided to leave 5-star reviews</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/5">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white mb-4">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h4 className="text-white mb-2">Issues Detected</h4>
                  <p className="text-white/60 text-base">Escalated to managers early</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/5">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white mb-4">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h4 className="text-white mb-2">Better Reputation</h4>
                  <p className="text-white/60 text-base">More positive feedback</p>
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
            <h2 className="text-5xl sm:text-6xl gradient-text mb-6">AI Voice Agent Use Cases</h2>
            <p className="text-2xl text-white/60 max-w-3xl mx-auto">
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
            <h3 className="text-3xl sm:text-4xl text-white mb-6 text-center">Custom Business Training</h3>
            <p className="text-white/70 text-xl mb-6">
              These Voice Agents can be trained on your specific business information, allowing them to answer client questions accurately, provide updates on orders or appointments, and even handle basic sales conversations — all without human involvement.
            </p>
            <p className="text-white/70 text-xl">
              Whether you need to confirm appointments, follow up on leads, provide service updates, or collect feedback, Voice Agents adapt to your unique business needs and workflows.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl gradient-text mb-3 sm:mb-4">Frequently Asked Questions</h2>
            <p className="text-base sm:text-xl text-white/60">
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
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-0">What are AI voice agents?</h3>
                  {openFAQ === 1 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-base leading-relaxed">
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
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-0">Do voice agents sound robotic?</h3>
                  {openFAQ === 2 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-base leading-relaxed">
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
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-0">Can voice agents handle complex conversations?</h3>
                  {openFAQ === 3 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-base leading-relaxed">
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
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-0">How much do AI voice agents cost?</h3>
                  {openFAQ === 4 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-base leading-relaxed">
                      Our AI Voice Agent services start at $1,997 for up to 100 calls/month. Professional plans ($3,997) include up to 500 calls/month with advanced features. We also offer custom Enterprise pricing for unlimited calls. <Link to="/pricing" className="text-indigo-400 hover:text-indigo-300">View detailed pricing</Link>.
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
                  className="px-8 py-4 rounded-full glass border border-white/20 text-white hover:bg-white/5 transition-all"
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

