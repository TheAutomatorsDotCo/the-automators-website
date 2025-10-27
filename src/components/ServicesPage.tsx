import React from 'react';
import { Workflow, Database, Mail, Calendar, Zap, Sparkles, Target, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';

export function ServicesPage() {
  const services = [
    {
      icon: <Workflow className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Workflow Automation',
      description: 'Connect your apps and automate repetitive workflows. From lead capture to customer onboarding.',
      benefits: ['Save 10-20 hours/week', 'Eliminate data entry', 'Reduce errors by 90%'],
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: <Phone className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Voice Agents',
      description: 'AI-powered Voice Agents that make real phone calls, handle customer conversations, and generate 5-star reviews automatically.',
      benefits: ['Automated follow-up calls', 'Natural conversations', 'More 5-star reviews'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'AI Chatbots',
      description: 'Intelligent chatbots that provide 24/7 customer support, qualify leads, and increase conversions across all channels.',
      benefits: ['24/7 availability', 'Instant responses', 'Lower support costs'],
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      icon: <Mail className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Email & Communication',
      description: 'Automate email sequences, notifications, and customer communication seamlessly.',
      benefits: ['Automated follow-ups', 'Personalized at scale', 'Higher response rates'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Data Management',
      description: 'Keep your data organized and synced across all platforms in real-time.',
      benefits: ['Real-time syncing', 'Clean organized data', 'Easy reporting'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Calendar className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Scheduling & Booking',
      description: 'Automate appointment scheduling, reminders, and calendar management effortlessly.',
      benefits: ['24/7 booking', 'Auto reminders', 'No double bookings'],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Discovery Call',
      description: 'We learn about your business, current processes, and pain points.',
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      step: '2',
      title: 'Strategy Session',
      description: 'We map out which processes to automate and create a custom plan.',
      icon: <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      step: '3',
      title: 'Implementation',
      description: 'We build and test your automation workflows with precision.',
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      step: '4',
      title: 'Training & Support',
      description: 'We train your team and provide ongoing support for success.',
      icon: <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]">
      <SEO
        title="Our Services"
        description="We specialize in automating tedious, time-consuming tasks. From workflow automation to data management, discover how we can transform your business."
        path="/services"
        keywords="automation services, workflow automation, email automation, data management, document processing, scheduling automation"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Business Process Automation",
          "provider": {
            "@type": "Organization",
            "name": "The Automators"
          },
          "areaServed": "Worldwide",
          "description": "Professional business automation services including workflow automation, email sequences, data management, and more"
        }}
      />
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="blob absolute top-20 left-10 sm:left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-500 rounded-full"></div>
        <div className="blob absolute bottom-20 sm:bottom-40 right-10 sm:right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-purple-500 rounded-full" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center relative z-10">
          <div className="h-6 sm:h-10 mb-4 sm:mb-6"></div>
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl gradient-text mb-4 sm:mb-6 max-w-4xl mx-auto">
            How We Can Help Transform Your Business
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto">
            We specialize in automating the tedious, time-consuming tasks that keep you from focusing on what really matters.
          </p>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20 sm:h-32"></div>

      {/* Services Grid */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={
                  index === 0 ? '/services/automation' : 
                  index === 1 ? '/services/voice-agents' : 
                  index === 2 ? '/services/chatbots' :
                  '/services'
                }
                className={`card-3d group relative overflow-hidden rounded-2xl sm:rounded-3xl glass border border-white/10 p-6 sm:p-8 hover:border-white/20 transition-all ${
                  index === 0 || index === 1 || index === 2 ? 'cursor-pointer' : ''
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                <div className={`relative inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-4 sm:mb-6`}>
                  {service.icon}
                </div>
                <h3 className="relative text-white mb-2 sm:mb-3">
                  {service.title}
                  {(index === 0 || index === 1 || index === 2) && (
                    <span className="ml-2 text-xs text-indigo-400">→</span>
                  )}
                </h3>
                <p className="relative text-white/60 mb-4 sm:mb-6 text-sm sm:text-base">{service.description}</p>
                <ul className="relative space-y-2 sm:space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mt-2"></div>
                      <span className="text-white/70 text-sm sm:text-base">{benefit}</span>
                    </li>
                  ))}
                </ul>
                {(index === 0 || index === 1 || index === 2) && (
                  <div className="relative mt-4 sm:mt-6 text-sm text-indigo-400 font-semibold">
                    Learn more →
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20 sm:h-32"></div>

      {/* How We Work Section */}
      <section className="relative pt-10 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl gradient-text mb-4 sm:mb-6">How We Work</h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              We partner with you to help figure out where the bottlenecks are, and then we solve them.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {process.map((item, index) => (
              <div key={index} className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center hover:border-white/20 transition-all">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white mb-4 sm:mb-6">
                  {item.icon}
                </div>
                <div className="text-xs sm:text-sm text-white/50 mb-1 sm:mb-2">Step {item.step}</div>
                <h3 className="text-white mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
            <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-4 sm:mb-6">
              Our team will spend the time needed with you and your team, to work on the right areas at the right time. We start on the areas that will make the most impact, and then work backward from there.
            </p>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              We free up your team to do what they're good at (adding maximum value to your business) while eliminating the mistakes humans make in doing day-to-day work.
            </p>
          </div>
        </div>
      </section>

      {/* About Our Team */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl gradient-text mb-4 sm:mb-6">Global Reach, Local Touch</h2>
                <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-4 sm:mb-6">
                  We are based in South Africa but can do work for companies worldwide, at affordable rates.
                </p>
                <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                  Our team has extensive experience building and turning around small businesses. We are also versed in copywriting, e-commerce, online marketing and implementing 80/20 strategies. We can help you improve your business in many ways.
                </p>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">Small Business Expertise</h4>
                    <p className="text-white/60 text-sm sm:text-base">Built and turned around multiple small businesses</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">Full-Service Support</h4>
                    <p className="text-white/60 text-sm sm:text-base">Copywriting, e-commerce, and online marketing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">80/20 Strategy</h4>
                    <p className="text-white/60 text-sm sm:text-base">Focus on high-impact areas that move the needle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20 sm:h-32"></div>

      {/* Affordable Pricing Philosophy */}
      <section className="relative pt-10 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl gradient-text mb-4 sm:mb-6">Affordable Pricing</h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto">
              We aim to automate your work at only 25% of the cost of hiring a human to do it, without all the costs of hiring and the mistakes humans can make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-white mb-2 sm:mb-3 text-base sm:text-lg">No Large Upfront Fees</h3>
                  <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                    We don't charge large up-front fees like others do - we believe we should get paid according to the value we add.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-xl font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-white mb-2 sm:mb-3 text-base sm:text-lg">Scales With Your Business</h3>
                  <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                    Our services expand with your business, and with flexible pricing plans, your costs scale down proportionally to any slow times.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-white mb-2 sm:mb-3 text-base sm:text-lg">No Contracts</h3>
                  <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                    We bill on a month-to-month basis. If we don't deliver exceptional value, we don't think you should be trapped by a contract.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white text-xl font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-white mb-2 sm:mb-3 text-base sm:text-lg">Value-Based Billing</h3>
                  <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                    We earn on the value we deliver. Your success is our success, and we're committed to proving it every month.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20 sm:h-32"></div>

      {/* Success Stories */}
      <section className="relative pt-10 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl gradient-text mb-4 sm:mb-6">Success Stories</h2>
            <p className="text-lg sm:text-xl text-white/60">Real results from businesses we've helped automate.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            <div className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
              <div className="text-4xl sm:text-5xl gradient-text mb-3 sm:mb-4">15hrs</div>
              <h4 className="text-white mb-2 text-base sm:text-lg">Saved Per Week</h4>
              <p className="text-white/60 text-sm sm:text-base">Marketing agency automated client onboarding and reporting</p>
            </div>
            <div className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
              <div className="text-4xl sm:text-5xl gradient-text mb-3 sm:mb-4">95%</div>
              <h4 className="text-white mb-2 text-base sm:text-lg">Fewer Errors</h4>
              <p className="text-white/60 text-sm sm:text-base">E-commerce business eliminated manual order processing</p>
            </div>
            <div className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
              <div className="text-4xl sm:text-5xl gradient-text mb-3 sm:mb-4">$50k</div>
              <h4 className="text-white mb-2 text-base sm:text-lg">Annual Savings</h4>
              <p className="text-white/60 text-sm sm:text-base">Consulting firm reduced admin overhead significantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20 sm:h-32"></div>

      {/* CTA */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="relative overflow-hidden rounded-3xl sm:rounded-[3rem] glass border border-white/10 p-8 sm:p-12 md:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-6">
                Ready to Reclaim Your Time?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8">
                Contact us now to set up a free 30-minute call so we can both get an idea of whether we might be a good match for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base"
                >
                  Schedule Free 30-Min Call
                </Link>
                <Link
                  to="/pricing"
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-full glass border border-white/20 text-white hover:bg-white/5 transition-all text-sm sm:text-base"
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
