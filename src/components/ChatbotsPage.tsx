import React, { useState } from 'react';
import { Bot, Zap, Clock, TrendingUp, Shield, Users, CheckCircle, Star, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { ChatbotDemos } from './ChatbotDemos';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ChatbotsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Availability',
      description: 'Your chatbot never sleeps. Provide instant responses to customer inquiries at any time, day or night.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Increase Conversions',
      description: 'Guide customers to the right products and answers, reducing friction and increasing sales.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Free Up Your Team',
      description: 'Let chatbots handle repetitive questions while your team focuses on complex issues and high-value tasks.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Consistent Answers',
      description: 'Ensure every customer gets accurate, on-brand responses every single time.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Improved Experience',
      description: 'Customers get immediate help without waiting in queue or navigating complex phone menus.',
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Instant Deployment',
      description: 'Deploy across multiple channels - website, Facebook Messenger, WhatsApp, and more.',
      gradient: 'from-violet-500 to-purple-500',
    },
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Answer FAQs, troubleshoot common issues, and escalate complex problems to human agents when needed.',
      icon: <Users className="w-6 h-6" />,
      examples: ['Return policies', 'Order status', 'Account questions', 'Product information'],
    },
    {
      title: 'E-commerce Sales',
      description: 'Recommend products, answer questions, process orders, and guide customers through the buying journey.',
      icon: <TrendingUp className="w-6 h-6" />,
      examples: ['Product recommendations', 'Size guides', 'Availability checks', 'Cart assistance'],
    },
    {
      title: 'Lead Qualification',
      description: 'Engage website visitors, collect contact information, qualify leads, and schedule consultations.',
      icon: <CheckCircle className="w-6 h-6" />,
      examples: ['Initial screening', 'Service matching', 'Appointment booking', 'Quote requests'],
    },
  ];

  const benefits = [
    { metric: '80%', label: 'Lower Support Costs', description: 'Reduce customer service expenses significantly' },
    { metric: '24/7', label: 'Always Available', description: 'Never miss a customer inquiry again' },
    { metric: '3x', label: 'Faster Response', description: 'Instant replies vs hours of wait time' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]">
      <SEO
        title="AI Chatbots for Business | 24/7 Customer Support"
        description="Custom AI chatbot development for businesses. 24/7 customer support, lead generation, and sales automation. Try interactive demos. Lower support costs by 80%."
        path="/services/chatbots"
        keywords="AI chatbots, chatbot development, AI chatbot for business, customer service chatbot, chatbot solutions, conversational AI chatbot, business chatbot"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI Chatbot Development",
            "provider": {
              "@type": "Organization",
              "name": "The Automators"
            },
            "areaServed": "Worldwide",
            "description": "AI-powered chatbots for customer support, sales, and engagement across multiple channels"
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI Chatbot Solutions",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android, Facebook, WhatsApp",
            "offers": {
              "@type": "Offer",
              "price": "1497",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "45"
            },
            "provider": {
              "@type": "Organization",
              "name": "The Automators"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Implement an AI Chatbot for Your Business",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Discovery",
                "text": "We learn about your business, customers, and common questions"
              },
              {
                "@type": "HowToStep",
                "name": "Design",
                "text": "We create conversation flows and train the AI on your data"
              },
              {
                "@type": "HowToStep",
                "name": "Deploy",
                "text": "We integrate the chatbot across your channels and test thoroughly"
              },
              {
                "@type": "HowToStep",
                "name": "Optimize",
                "text": "We monitor performance and continuously improve responses"
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What are AI chatbots?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI chatbots are intelligent virtual assistants that communicate with customers through natural conversation. They use natural language processing to understand questions, provide personalized help, and work across websites, social media, and messaging apps to deliver instant 24/7 support."
                }
              },
              {
                "@type": "Question",
                "name": "How do AI chatbots work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI chatbots use natural language processing (NLP) to understand customer messages, machine learning to improve responses over time, and conversational AI to provide personalized, context-aware answers. They can handle multiple conversations simultaneously and escalate complex issues to human agents when needed."
                }
              },
              {
                "@type": "Question",
                "name": "How much does a chatbot cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI chatbot development typically starts at $1,497 for a basic single-channel deployment. Professional multi-channel chatbots with advanced features start at $2,997. Enterprise solutions with unlimited capabilities are custom-priced based on your needs."
                }
              }
            ]
          }
        ]}
      />
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="blob absolute top-20 left-1/4 w-96 h-96 bg-cyan-500 rounded-full"></div>
        <div className="blob absolute bottom-40 right-1/4 w-80 h-80 bg-purple-500 rounded-full" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl gradient-text mb-6 max-w-4xl mx-auto">
            AI Chatbots That Provide 24/7 Customer Support
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-8">
            Deploy AI-powered chatbots that provide instant customer support, recommend products, qualify leads, and drive conversions - all while your team focuses on what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-3d bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white px-8 py-4 rounded-full"
            >
              Get Your Chatbot
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

      {/* Benefits Stats */}
      <section className="relative py-12 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl gradient-text mb-4">Proven Results with AI Chatbots</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              See the measurable impact AI chatbots have on customer support costs, availability, and response times
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 rounded-3xl glass border border-white/10">
                <div className="text-5xl sm:text-6xl gradient-text mb-4">{benefit.metric}</div>
                <h4 className="text-white font-semibold mb-2">{benefit.label}</h4>
                <p className="text-white/60 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Are Chatbots Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="glass border border-white/10 rounded-3xl p-10 sm:p-14">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl sm:text-5xl gradient-text mb-6">What Are AI Chatbots?</h2>
                <p className="text-white/70 text-lg mb-6">
                  AI chatbots are intelligent virtual assistants that communicate with your customers through natural conversation. Unlike simple automated responses, modern chatbots understand context, learn from interactions, and provide personalized help.
                </p>
                <p className="text-white/70 text-lg mb-6">
                  They work seamlessly across your website, social media channels, and messaging apps to provide instant support, answer questions, recommend products, and guide customers through your services.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-white/80"><strong className="text-white">Natural Language Processing:</strong> Understands questions in plain language</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-white/80"><strong className="text-white">Multi-Channel Deployment:</strong> Works on website, Facebook, WhatsApp, and more</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-white/80"><strong className="text-white">Smart Escalation:</strong> Routes complex issues to human agents when needed</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="float">
                  <div className="relative">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                      alt="AI Chatbot conversation"
                      className="w-full h-auto rounded-3xl"
                    />
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#0f0f1e]/70 to-transparent"></div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl bg-gradient-to-br from-cyan-500 to-purple-500 blur-2xl opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Chatbot Demos */}
      <ChatbotDemos />

      {/* Features Grid */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl gradient-text mb-6">Benefits of AI Chatbots for Business</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              From customer support to sales, chatbots deliver measurable results for businesses of all sizes.
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

      {/* Use Cases Section */}
      <section className="relative pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl gradient-text mb-6">AI Chatbot Use Cases & Applications</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              See how businesses across industries use chatbots to improve customer experience and drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="card-3d glass border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white mb-6">
                  {useCase.icon}
                </div>
                <h3 className="text-white mb-3 text-xl">{useCase.title}</h3>
                <p className="text-white/60 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  <p className="text-white/50 text-sm font-semibold mb-3">Examples:</p>
                  {useCase.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                      <span className="text-white/70 text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="relative overflow-hidden rounded-3xl glass border border-white/10 p-12 sm:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl gradient-text mb-6">How We Build Your Chatbot</h2>
                <p className="text-xl text-white/60">
                  A simple process that gets your chatbot live in days, not months.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white text-xl font-bold mb-4">
                    1
                  </div>
                  <h4 className="text-white mb-2 font-semibold">Discovery</h4>
                  <p className="text-white/60 text-sm">We learn about your business, customers, and common questions</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white text-xl font-bold mb-4">
                    2
                  </div>
                  <h4 className="text-white mb-2 font-semibold">Design</h4>
                  <p className="text-white/60 text-sm">We create conversation flows and train the AI on your data</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white text-xl font-bold mb-4">
                    3
                  </div>
                  <h4 className="text-white mb-2 font-semibold">Deploy</h4>
                  <p className="text-white/60 text-sm">We integrate the chatbot across your channels and test thoroughly</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white text-xl font-bold mb-4">
                    4
                  </div>
                  <h4 className="text-white mb-2 font-semibold">Optimize</h4>
                  <p className="text-white/60 text-sm">We monitor performance and continuously improve responses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl gradient-text mb-3 sm:mb-4">Frequently Asked Questions</h2>
            <p className="text-base sm:text-lg text-white/60">
              Everything you need to know about AI chatbot development and deployment
            </p>
          </div>
          <div className="space-y-2 sm:space-y-3">
            {/* FAQ 1 */}
            <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/20 transition-all">
              <button
                onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3"
              >
                <h3 className="text-white text-sm sm:text-base font-semibold">What are AI chatbots?</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-white/60 transition-transform flex-shrink-0 ${openFAQ === 1 ? 'rotate-180' : ''}`} />
              </button>
              {openFAQ === 1 && (
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <p className="text-white/70 text-sm leading-relaxed">
                    AI chatbots are intelligent virtual assistants that communicate with customers through natural conversation. They use natural language processing to understand questions, provide personalized help, and work across websites, social media, and messaging apps to deliver instant 24/7 support. Unlike simple scripted bots, modern AI chatbots understand context, learn from interactions, and can handle complex conversations.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/20 transition-all">
              <button
                onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3"
              >
                <h3 className="text-white text-sm sm:text-base font-semibold">How do AI chatbots work?</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-white/60 transition-transform flex-shrink-0 ${openFAQ === 2 ? 'rotate-180' : ''}`} />
              </button>
              {openFAQ === 2 && (
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <p className="text-white/70 text-sm leading-relaxed mb-3">
                    AI chatbots use natural language processing (NLP) to understand customer messages, machine learning to improve responses over time, and conversational AI to provide personalized, context-aware answers. They can handle multiple conversations simultaneously and escalate complex issues to human agents when needed.
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    The process works like this: customer sends a message → NLP analyzes the intent → chatbot retrieves relevant information → AI generates a personalized response → customer receives instant help.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/20 transition-all">
              <button
                onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3"
              >
                <h3 className="text-white text-sm sm:text-base font-semibold">How much does a chatbot cost?</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-white/60 transition-transform flex-shrink-0 ${openFAQ === 3 ? 'rotate-180' : ''}`} />
              </button>
              {openFAQ === 3 && (
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <p className="text-white/70 text-sm leading-relaxed">
                    AI chatbot development typically starts at $1,497 for a basic single-channel deployment. Professional multi-channel chatbots with advanced features start at $2,997. Enterprise solutions with unlimited capabilities are custom-priced based on your needs. Unlike subscription platforms, you pay once and own the chatbot forever. <Link to="/pricing" className="text-indigo-400 hover:text-indigo-300">View our detailed pricing</Link> for complete information.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/20 transition-all">
              <button
                onClick={() => setOpenFAQ(openFAQ === 4 ? null : 4)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3"
              >
                <h3 className="text-white text-sm sm:text-base font-semibold">What's the difference between chatbots and AI chatbots?</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-white/60 transition-transform flex-shrink-0 ${openFAQ === 4 ? 'rotate-180' : ''}`} />
              </button>
              {openFAQ === 4 && (
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <p className="text-white/70 text-sm leading-relaxed">
                    Traditional chatbots follow pre-programmed rules and scripts, offering limited responses to specific commands. AI chatbots use artificial intelligence and natural language processing to understand context, learn from conversations, and provide dynamic, personalized responses. They can handle unexpected questions, understand intent, and have more human-like conversations. Think of it as the difference between a phone menu and talking to an intelligent assistant.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/20 transition-all">
              <button
                onClick={() => setOpenFAQ(openFAQ === 5 ? null : 5)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3"
              >
                <h3 className="text-white text-sm sm:text-base font-semibold">How long does chatbot implementation take?</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-white/60 transition-transform flex-shrink-0 ${openFAQ === 5 ? 'rotate-180' : ''}`} />
              </button>
              {openFAQ === 5 && (
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <p className="text-white/70 text-sm leading-relaxed">
                    Most chatbot projects are completed in 2-3 weeks from start to deployment. The timeline includes discovery (understanding your needs), design (creating conversation flows and training the AI), deployment (integration and testing), and optimization (fine-tuning responses). Simple chatbots can be ready in as little as 1 week, while complex enterprise solutions may take 4-6 weeks depending on integrations and customization requirements.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 6 */}
            <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/20 transition-all">
              <button
                onClick={() => setOpenFAQ(openFAQ === 6 ? null : 6)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3"
              >
                <h3 className="text-white text-sm sm:text-base font-semibold">Can chatbots handle complex questions?</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-white/60 transition-transform flex-shrink-0 ${openFAQ === 6 ? 'rotate-180' : ''}`} />
              </button>
              {openFAQ === 6 && (
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <p className="text-white/70 text-sm leading-relaxed">
                    AI chatbots excel at handling routine to moderately complex questions—typically 60-80% of customer inquiries. They're trained on your specific business data, FAQs, and common scenarios. For complex issues that require human judgment, chatbots intelligently escalate to your team, providing context about the conversation so your staff can jump in seamlessly. This ensures customers always get the help they need while your team focuses on high-value interactions.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 7 */}
            <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/20 transition-all">
              <button
                onClick={() => setOpenFAQ(openFAQ === 7 ? null : 7)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3"
              >
                <h3 className="text-white text-sm sm:text-base font-semibold">What channels do chatbots work on?</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-white/60 transition-transform flex-shrink-0 ${openFAQ === 7 ? 'rotate-180' : ''}`} />
              </button>
              {openFAQ === 7 && (
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <p className="text-white/70 text-sm leading-relaxed mb-3">
                    We deploy AI chatbots across multiple channels so you can meet customers wherever they are:
                  </p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      <span>Website chat widgets (embedded on any page)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      <span>Facebook Messenger integration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      <span>WhatsApp Business automation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      <span>Instagram direct messages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      <span>SMS text messaging</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      <span>Slack and Microsoft Teams for internal support</span>
                    </li>
                  </ul>
                  <p className="text-white/70 text-sm leading-relaxed mt-3">
                    Multi-channel deployment means one chatbot can serve customers across all your platforms with consistent, synchronized conversations.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 8 */}
            <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/20 transition-all">
              <button
                onClick={() => setOpenFAQ(openFAQ === 8 ? null : 8)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3"
              >
                <h3 className="text-white text-sm sm:text-base font-semibold">Do I need technical skills to manage a chatbot?</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-white/60 transition-transform flex-shrink-0 ${openFAQ === 8 ? 'rotate-180' : ''}`} />
              </button>
              {openFAQ === 8 && (
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <p className="text-white/70 text-sm leading-relaxed">
                    No technical skills required. We build and deploy your chatbot as a done-for-you service. You'll get an easy-to-use dashboard where you can review conversations, update responses, and monitor performance—no coding needed. We also provide training and ongoing support. If you want to update conversation flows or add new features, we handle the technical implementation for you. It's automation without the complexity.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 9 */}
            <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/20 transition-all">
              <button
                onClick={() => setOpenFAQ(openFAQ === 9 ? null : 9)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3"
              >
                <h3 className="text-white text-sm sm:text-base font-semibold">Can chatbots integrate with my existing systems?</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-white/60 transition-transform flex-shrink-0 ${openFAQ === 9 ? 'rotate-180' : ''}`} />
              </button>
              {openFAQ === 9 && (
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <p className="text-white/70 text-sm leading-relaxed">
                    Yes! We integrate chatbots with your CRM (Salesforce, HubSpot, etc.), help desk software (Zendesk, Freshdesk), e-commerce platform (Shopify, WooCommerce), scheduling tools (Calendly), and more. This means your chatbot can pull customer data, create support tickets, update records, process orders, and sync information across your business systems. <Link to="/services/automation" className="text-indigo-400 hover:text-indigo-300">Learn about our automation integrations</Link> for more details.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 10 */}
            <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/20 transition-all">
              <button
                onClick={() => setOpenFAQ(openFAQ === 10 ? null : 10)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3"
              >
                <h3 className="text-white text-sm sm:text-base font-semibold">How do chatbots improve over time?</h3>
                <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-white/60 transition-transform flex-shrink-0 ${openFAQ === 10 ? 'rotate-180' : ''}`} />
              </button>
              {openFAQ === 10 && (
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <p className="text-white/70 text-sm leading-relaxed">
                    AI chatbots learn and improve through machine learning and ongoing optimization. As they handle conversations, they identify patterns, understand customer intent better, and refine responses. We also provide monthly analytics showing which questions are asked most, where conversations get stuck, and opportunities for improvement. Based on this data, we continuously update the chatbot's knowledge base, improve conversation flows, and add new capabilities—ensuring your chatbot gets smarter and more valuable over time.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <p className="text-white/60 mb-3 text-sm">Still have questions?</p>
            <Link
              to="/contact"
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors text-sm"
            >
              Contact us for answers →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="relative overflow-hidden rounded-[3rem] glass border border-white/10 p-12 sm:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
            <div className="relative z-10 text-center">
              <div className="inline-flex p-4 rounded-3xl bg-gradient-to-br from-cyan-500 to-purple-500 text-white mb-8">
                <Bot className="w-12 h-12" />
              </div>
              <h2 className="text-4xl sm:text-5xl text-white mb-6">
                Ready to Deploy Your Chatbot?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Let's build an intelligent chatbot that engages customers, answers questions, and drives results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-3d bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white px-8 py-4 rounded-full"
                >
                  Get Started Today
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

