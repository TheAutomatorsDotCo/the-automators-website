import React from 'react';
import { MessageSquare, ArrowRight, Zap, Shield, TrendingUp, Clock, Sparkles, Cpu, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HomePage() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Automated Workflows',
      description: 'Streamline your business processes with intelligent automation that works 24/7.',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Save Time',
      description: 'Reclaim hours every week by eliminating repetitive tasks and manual data entry.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Reduce Errors',
      description: 'Minimize human error with consistent, reliable automated processes.',
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Scale Faster',
      description: 'Grow your business without growing your admin overhead.',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]">
      <SEO
        title="Business Automation Solutions"
        description="Don't let mind-numbing business admin take all the joy from your work. Automate workflows, save time, and focus on what matters with The Automators."
        path="/"
        keywords="business automation, workflow automation, process automation, save time, increase efficiency, automate business processes"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "The Automators",
          "description": "Business automation solutions that help companies save time and increase efficiency",
          "url": "https://theautomators.com",
          "logo": "https://theautomators.com/logo.png",
          "sameAs": [
            "https://linkedin.com/company/theautomators"
          ]
        }}
      />
      {/* Animated Background Blobs - Hidden on mobile for performance */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <div className="blob absolute top-20 left-20 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-indigo-500 rounded-full"></div>
        <div className="blob absolute top-40 sm:top-60 right-10 sm:right-20 w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-purple-500 rounded-full" style={{ animationDelay: '2s' }}></div>
        <div className="blob absolute bottom-20 left-1/4 sm:left-1/3 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-pink-500 rounded-full" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full glass border border-white/10">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-white/80">Automation That Actually Works</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl gradient-text leading-tight">
                Let's Automate The Moving Pieces
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl">
                Don't let the mind-numbing, never-ending whirlwind of business admin take all the joy and freedom from your work.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/services"
                  className="group btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <span>How We Help</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/assessment"
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-full glass border border-white/20 text-white hover:bg-white/5 transition-all text-center text-sm sm:text-base"
                >
                  Take Assessment
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl gradient-text font-bold">200+</div>
                  <div className="text-xs sm:text-sm text-white/60 mt-1">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl gradient-text font-bold">15hrs</div>
                  <div className="text-xs sm:text-sm text-white/60 mt-1">Saved/Week</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl gradient-text font-bold">98%</div>
                  <div className="text-xs sm:text-sm text-white/60 mt-1">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right 3D Visual */}
            <div className="relative order-1 lg:order-2">
              <div className="float">
                <ImageWithFallback
                  src="/homehero.png"
                  alt="3D automation illustration"
                  className="w-full h-auto max-w-md mx-auto lg:max-w-full"
                />
              </div>
              
              {/* Floating Elements - Adjusted for responsiveness */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-500 blur-xl sm:blur-2xl opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-20 h-20 sm:w-32 sm:h-32 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-pink-500 to-rose-500 blur-xl sm:blur-2xl opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Chatbot Button - Responsive positioning */}
        <button className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 btn-3d bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-full shadow-2xl flex items-center space-x-2 z-40 text-sm sm:text-base">
          <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden sm:inline">Chat with AI</span>
          <span className="sm:hidden">Chat</span>
        </button>
      </section>

      {/* Features Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 pb-24 sm:pb-32 lg:pb-48 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full glass border border-white/10 mb-4 sm:mb-6">
              <Cpu className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-white/80">Powerful Features</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl gradient-text mb-4 sm:mb-6 px-4">
              Why Automate Your Business?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/60 max-w-3xl mx-auto px-4">
              Stop spending your valuable time on repetitive tasks. Focus on what matters most.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-3d group relative overflow-hidden rounded-2xl sm:rounded-3xl glass border border-white/10 p-6 sm:p-8 hover:border-white/20 transition-all"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className={`inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.gradient} text-white mb-4 sm:mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-white mb-2 sm:mb-3 text-base sm:text-lg font-semibold">{feature.title}</h3>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative pt-32 sm:pt-48 lg:pt-64 pb-24 sm:pb-32 lg:pb-48 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto relative z-10">
          <div className="relative overflow-hidden rounded-3xl sm:rounded-[3rem] glass border border-white/10 p-8 sm:p-12 lg:p-16 xl:p-20">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20"></div>
            <div className="relative z-10 text-center">
              <div className="inline-flex p-3 sm:p-4 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white mb-6 sm:mb-8">
                <Rocket className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6 px-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-white/70 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
                Join hundreds of businesses that have automated their workflows and reclaimed their time.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg mx-auto">
                <Link
                  to="/assessment"
                  className="btn-3d bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:shadow-xl transition-all"
                >
                  Take the Assessment
                </Link>
                <Link
                  to="/pricing"
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-full glass border border-white/20 text-white hover:bg-white/5 transition-all text-sm sm:text-base font-semibold"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
