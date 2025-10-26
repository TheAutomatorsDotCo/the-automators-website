import React from 'react';
import { Phone, PhoneCall, Star, MessageCircle, Users, TrendingUp, Zap, Sparkles, Brain, CheckCircle, AlertTriangle, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function VoiceAgentsPage() {
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
        title="Voice Agents - AI-Powered Phone Automation"
        description="AI Voice Agents that make real phone calls, generate 5-star reviews, and handle customer conversations naturally. Automate follow-ups and improve customer experience."
        path="/services/voice-agents"
        keywords="voice agents, AI phone calls, automated calling, review generation, customer follow-up, AI voice automation, conversational AI"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "AI Voice Agent Automation",
          "provider": {
            "@type": "Organization",
            "name": "The Automators"
          },
          "areaServed": "Worldwide",
          "description": "AI-powered Voice Agents that make real phone calls, handle customer conversations, and automate review generation"
        }}
      />
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="blob absolute top-20 left-1/4 w-96 h-96 bg-blue-500 rounded-full"></div>
        <div className="blob absolute bottom-40 right-1/4 w-80 h-80 bg-purple-500 rounded-full" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
            <Phone className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-white/80">AI Voice Agents</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl gradient-text mb-6 max-w-4xl mx-auto">
            Voice Agents That Call Your Clients For You
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-8">
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="glass border border-white/10 rounded-3xl p-12 sm:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-white/80">How It Works</span>
                </div>
                <h2 className="text-4xl sm:text-5xl gradient-text mb-6">What Are Voice Agents?</h2>
                <p className="text-white/70 text-lg mb-6">
                  Voice Agents are AI-powered virtual assistants that integrate seamlessly into your automation systems. They can make real phone calls to your clients at specific points in your workflow, handling conversations naturally with human-sounding voices.
                </p>
                <p className="text-white/70 text-lg mb-6">
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
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-white/80">Powerful Features</span>
            </div>
            <h2 className="text-4xl sm:text-5xl gradient-text mb-6">How Voice Agents Transform Your Business</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="relative overflow-hidden rounded-3xl glass border border-white/10 p-12 sm:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-white/80">Real-World Example</span>
                </div>
                <h2 className="text-4xl sm:text-5xl gradient-text mb-4">How It Works In Practice</h2>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 mb-8">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  <strong className="text-white">Imagine this scenario:</strong> When a client uses your service, and the job is completed, our Voice Agent automatically schedules a courtesy call.
                </p>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  The agent speaks naturally and asks your client about their experience. If the client is satisfied, the agent politely asks them to leave a 5-star Google review — even offering to send a direct link via text message for convenience.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  If the experience wasn't good, the call is automatically escalated to one of your managers for a personal follow-up. This way, you can address issues before they become negative reviews, turning potentially bad situations into opportunities to demonstrate exceptional service.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/5">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-white mb-4">
                    <Star className="w-6 h-6" />
                  </div>
                  <h4 className="text-white mb-2">Happy Clients</h4>
                  <p className="text-white/60 text-sm">Guided to leave 5-star reviews</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/5">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white mb-4">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h4 className="text-white mb-2">Issues Detected</h4>
                  <p className="text-white/60 text-sm">Escalated to managers early</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/5">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white mb-4">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h4 className="text-white mb-2">Better Reputation</h4>
                  <p className="text-white/60 text-sm">More positive feedback</p>
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
            <h2 className="text-4xl sm:text-5xl gradient-text mb-6">Beyond Review Generation</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
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
            <h3 className="text-2xl sm:text-3xl text-white mb-6 text-center">Custom Business Training</h3>
            <p className="text-white/70 text-lg mb-6">
              These Voice Agents can be trained on your specific business information, allowing them to answer client questions accurately, provide updates on orders or appointments, and even handle basic sales conversations — all without human involvement.
            </p>
            <p className="text-white/70 text-lg">
              Whether you need to confirm appointments, follow up on leads, provide service updates, or collect feedback, Voice Agents adapt to your unique business needs and workflows.
            </p>
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
              <h2 className="text-4xl sm:text-5xl text-white mb-6">
                Ready to Try Voice Agents?
              </h2>
              <p className="text-xl text-white/70 mb-8">
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

