import React from 'react';
import { MessageSquare, ArrowRight, Zap, Shield, TrendingUp, Clock, Rocket, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HomePage() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Automated Workflows',
      description: 'Streamline your business processes with intelligent automation that works 24/7.',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Save Time',
      description: 'Reclaim hours every week by eliminating repetitive tasks and manual data entry.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Reduce Errors',
      description: 'Minimize human error with consistent, reliable automated processes.',
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Scale Faster',
      description: 'Grow your business without growing your admin overhead.',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const testimonials = [
    {
      name: 'Dr Candice. E',
      title: 'Medical Doctor',
      image: '/candice.png',
      quote: 'I still can\'t believe how much of the work could be automated. Things run so smoothly now. Most of what we considered "normal work" has disappeared and our team couldn\'t go back to doing things the old way.',
      link: null,
    },
    {
      name: 'Melany',
      title: 'CFO - Platinum Repairs',
      image: '/melany.png',
      quote: 'Your services have helped us save thousands of hours over the past year. The automation has helped us drastically improve the service we deliver to our clients, without us having to increase our headcount.',
      link: 'https://platinumrepairs.co.za/',
    },
    {
      name: 'Brad',
      title: 'Founder - EpicDeals.co.za',
      image: '/brad.png',
      quote: 'The Automators\' team has helped tremendously with our ecommerce business. So much of the tedious work we all had to do has now disappeared through automation. We can compete with teams twice our size!',
      link: 'https://epicdeals.co.za/',
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
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="blob absolute top-20 left-20 w-96 h-96 bg-indigo-500 rounded-full"></div>
        <div className="blob absolute top-60 right-20 w-80 h-80 bg-purple-500 rounded-full" style={{ animationDelay: '2s' }}></div>
        <div className="blob absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="h-10"></div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl gradient-text leading-tight">
                Let's Automate The Moving Pieces
              </h1>
              
              <p className="text-xl text-white/70 leading-relaxed">
                Don't let the mind-numbing, never-ending whirlwind of business admin take all the joy and freedom from your work.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="group btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-full inline-flex items-center justify-center space-x-2"
                >
                  <span>How We Help</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/assessment"
                  className="px-8 py-4 rounded-full glass border border-white/20 text-white hover:bg-white/5 transition-all"
                >
                  Take Assessment
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl gradient-text">200+</div>
                  <div className="text-sm text-white/60 mt-1">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl gradient-text">15hrs</div>
                  <div className="text-sm text-white/60 mt-1">Saved/Week</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl gradient-text">98%</div>
                  <div className="text-sm text-white/60 mt-1">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right 3D Visual */}
            <div className="relative">
              <div className="float">
                <ImageWithFallback
                  src="/homehero.png"
                  alt="3D automation illustration"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-500 blur-2xl opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-3xl bg-gradient-to-br from-pink-500 to-rose-500 blur-2xl opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Chatbot Button */}
        <button className="fixed bottom-8 right-8 btn-3d bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-4 rounded-full shadow-2xl flex items-center space-x-2 z-40">
          <MessageSquare className="w-5 h-5" />
          <span>Chat with AI</span>
        </button>
      </section>

      {/* Features Section */}
      <section className="relative pt-10 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="h-10 mb-6"></div>
            <h2 className="text-4xl sm:text-5xl gradient-text mb-6">
              Why Automate Your Business?
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Stop spending your valuable time on repetitive tasks. Focus on what matters most.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-3d group relative overflow-hidden rounded-3xl glass border border-white/10 p-8 hover:border-white/20 transition-all"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-white mb-3">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl gradient-text">
              What Our Clients Think:
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Animated gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
                
                {/* Card */}
                <div className="relative h-full overflow-hidden rounded-[2rem] bg-[#1a1a2e]/80 backdrop-blur-xl border border-white/10 p-8 group-hover:border-white/20 group-hover:bg-[#1a1a2e]/90 transition-all flex flex-col">
                  {/* Decorative gradient blob */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500"></div>
                  
                  {/* Profile Image - Centered */}
                  <div className="relative z-10 flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-white/20 group-hover:ring-purple-500/60 transition-all">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Quote with decorative quotes */}
                  <div className="relative z-10 mb-6 flex-1">
                    <Quote className="w-10 h-10 text-purple-500/20 mb-4" />
                    <p className="text-white/80 leading-relaxed text-[15px] italic">
                      {testimonial.quote}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>

                  {/* Author Info & Stars */}
                  <div className="relative z-10">
                    <div className="text-center mb-3">
                      <h4 className="text-white font-semibold text-base mb-1">{testimonial.name}</h4>
                      {testimonial.link ? (
                        <a 
                          href={testimonial.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/50 text-sm hover:text-purple-400 transition-colors inline-block"
                        >
                          {testimonial.title}
                        </a>
                      ) : (
                        <p className="text-white/50 text-sm">{testimonial.title}</p>
                      )}
                    </div>
                    
                    {/* Stars - Centered */}
                    <div className="flex gap-1 justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-pink-500 text-pink-500" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto relative z-10">
          <div className="relative overflow-hidden rounded-[3rem] glass border border-white/10 p-12 sm:p-20">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20"></div>
            <div className="relative z-10 text-center">
              <div className="inline-flex p-4 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white mb-8">
                <Rocket className="w-12 h-12" />
              </div>
              <h2 className="text-4xl sm:text-5xl text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
                Join hundreds of businesses that have automated their workflows and reclaimed their time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/assessment"
                  className="btn-3d bg-white text-gray-900 px-8 py-4 rounded-full"
                >
                  Take the Assessment
                </Link>
                <Link
                  to="/pricing"
                  className="px-8 py-4 rounded-full glass border border-white/20 text-white hover:bg-white/5 transition-all"
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
