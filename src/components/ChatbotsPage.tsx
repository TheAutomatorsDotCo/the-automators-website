import React from 'react';
import { MessageCircle, Bot, Zap, Clock, TrendingUp, Shield, Users, CheckCircle, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { ChatbotDemos } from './ChatbotDemos';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ChatbotsPage() {
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
        title="AI Chatbots - Intelligent Customer Engagement"
        description="Deploy intelligent chatbots that provide 24/7 customer support, increase conversions, and free up your team. Interactive demos show real-world applications."
        path="/services/chatbots"
        keywords="chatbots, AI chatbot, customer support automation, conversational AI, chatbot development, automated customer service"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "AI Chatbot Development",
          "provider": {
            "@type": "Organization",
            "name": "The Automators"
          },
          "areaServed": "Worldwide",
          "description": "AI-powered chatbots for customer support, sales, and engagement across multiple channels"
        }}
      />
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="blob absolute top-20 left-1/4 w-96 h-96 bg-cyan-500 rounded-full"></div>
        <div className="blob absolute bottom-40 right-1/4 w-80 h-80 bg-purple-500 rounded-full" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
            <MessageCircle className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-white/80">AI Chatbots</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl gradient-text mb-6 max-w-4xl mx-auto">
            Intelligent Chatbots That Work 24/7
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
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="glass border border-white/10 rounded-3xl p-12 sm:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-white/80">Smart Automation</span>
                </div>
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
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-white/80">Powerful Features</span>
            </div>
            <h2 className="text-4xl sm:text-5xl gradient-text mb-6">Why Businesses Choose Chatbots</h2>
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl gradient-text mb-6">Common Use Cases</h2>
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

