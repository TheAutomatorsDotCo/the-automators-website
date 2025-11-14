import React, { useState } from 'react';
import { Workflow, Database, Mail, Calendar, Zap, Sparkles, Target, CheckCircle, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { StarsCanvas } from './StarBackground';

export function ServicesPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What types of businesses do you serve?',
      answer: 'We work with businesses of all sizes across various industries including e-commerce, healthcare, professional services, real estate, and more. Our automation solutions are tailored to each business\'s unique needs.',
    },
    {
      question: 'How long does automation implementation take?',
      answer: 'Implementation typically takes 1-4 weeks depending on complexity. Simple workflow automation can be completed in days, while comprehensive AI solutions may take a few weeks. We provide a clear timeline during your strategy session.',
    },
    {
      question: 'What tools do you integrate with?',
      answer: 'We integrate with popular platforms including Zapier, Make (Integromat), Google Workspace, Microsoft 365, Salesforce, HubSpot, Slack, QuickBooks, Xero, WooCommerce, Shopify, and many more.',
    },
    {
      question: 'What are your payment terms?',
      answer: 'We offer flexible payment options for our automation services. You can pay in full upfront (best value) or choose 6, 12, or 18-month payment plans. Once your automation is paid for, you own it forever. Optional monthly maintenance packages are available if you want ongoing optimization and support.',
    },
    {
      question: 'How much does automation cost?',
      answer: 'Our automation services cost approximately 25% of hiring a full-time employee for the same tasks. Pricing varies based on complexity and scope. Visit our pricing page for detailed information or schedule a free consultation for a custom quote.',
    },
    {
      question: 'What ROI can I expect from automation?',
      answer: 'Most clients save 15+ hours per week and see ROI within 2-3 months. Benefits include reduced labor costs, fewer errors, faster processing times, and the ability to scale without adding headcount.',
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes! We provide comprehensive training for your team and ongoing support to ensure your automations continue running smoothly. We\'re available to make adjustments and add new automations as your business grows.',
    },
    {
      question: 'Can you automate processes in my specific industry?',
      answer: 'Yes! We have experience across multiple industries and can automate industry-specific processes. During our discovery call, we\'ll assess your unique workflows and create a custom automation strategy.',
    },
  ];

  const services = [
    {
      icon: <img src="/services-automation.png" alt="Workflow Automation" className="w-12 h-12 sm:w-16 sm:h-16" />,
      title: 'Workflow Automation',
      description: 'Connect your apps and automate repetitive workflows. From lead capture to customer onboarding.',
      benefits: ['Save 10-20 hours/week', 'Eliminate data entry', 'Reduce errors by 90%'],
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: <img src="/services-voice-agents.png" alt="Voice Agents" className="w-12 h-12 sm:w-16 sm:h-16" />,
      title: 'Voice Agents',
      description: 'AI-powered Voice Agents that make real phone calls, handle customer conversations, and generate 5-star reviews automatically.',
      benefits: ['Automated follow-up calls', 'Natural conversations', 'More 5-star reviews'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <img src="/services-chatbots.png" alt="AI Chatbots" className="w-12 h-12 sm:w-16 sm:h-16" />,
      title: 'AI Chatbots',
      description: 'Intelligent chatbots that provide 24/7 customer support, qualify leads, and increase conversions across all channels.',
      benefits: ['24/7 availability', 'Instant responses', 'Lower support costs'],
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      icon: <img src="/services-email.png" alt="Email & Communication" className="w-12 h-12 sm:w-16 sm:h-16" />,
      title: 'Email & Communication',
      description: 'Automate email sequences, notifications, and customer communication seamlessly.',
      benefits: ['Automated follow-ups', 'Personalized at scale', 'Higher response rates'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <img src="/services-data.png" alt="Data Management" className="w-12 h-12 sm:w-16 sm:h-16" />,
      title: 'Data Management',
      description: 'Keep your data organized and synced across all platforms in real-time.',
      benefits: ['Real-time syncing', 'Clean organized data', 'Easy reporting'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <img src="/services-booking.png" alt="Scheduling & Booking" className="w-12 h-12 sm:w-16 sm:h-16" />,
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
      duration: '30 minutes',
      link: '/contact',
    },
    {
      step: '2',
      title: 'Strategy Session',
      description: 'We map out which processes to automate and create a custom plan.',
      icon: <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />,
      duration: '1-2 hours',
    },
    {
      step: '3',
      title: 'Implementation',
      description: 'We build and test your automation workflows with precision.',
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      duration: '1-4 weeks',
    },
    {
      step: '4',
      title: 'Training & Support',
      description: 'We train your team and provide ongoing support for success.',
      icon: <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />,
      duration: 'Ongoing',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]">
      <SEO
        title="Business Automation Services | Workflow & AI Solutions"
        description="Professional automation services: Workflow automation, AI Voice Agents, and Chatbots. Save 15+ hours/week at 25% the cost of hiring. Flexible payment options. Get started today."
        path="/services"
        keywords="business automation services, workflow automation services, automation consulting services, business process automation services, automation solutions provider"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "The Automators",
            "description": "Professional business automation services including workflow automation, AI voice agents, chatbots, and more",
            "provider": {
              "@type": "Organization",
              "name": "The Automators"
            },
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Automation Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Workflow Automation",
                    "description": "Connect your apps and automate repetitive workflows"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Voice Agents",
                    "description": "AI-powered phone calls and customer conversations"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Chatbots",
                    "description": "Intelligent 24/7 customer support chatbots"
                  }
                }
              ]
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Service",
                  "name": "Workflow Automation",
                  "description": "Connect your apps and automate repetitive workflows. From lead capture to customer onboarding.",
                  "provider": {
                    "@type": "Organization",
                    "name": "The Automators"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Service",
                  "name": "AI Voice Agents",
                  "description": "AI-powered Voice Agents that make real phone calls and handle customer conversations",
                  "provider": {
                    "@type": "Organization",
                    "name": "The Automators"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Service",
                  "name": "AI Chatbots",
                  "description": "Intelligent chatbots that provide 24/7 customer support and qualify leads",
                  "provider": {
                    "@type": "Organization",
                    "name": "The Automators"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "Service",
                  "name": "Email & Communication Automation",
                  "description": "Automate email sequences, notifications, and customer communication",
                  "provider": {
                    "@type": "Organization",
                    "name": "The Automators"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 5,
                "item": {
                  "@type": "Service",
                  "name": "Data Management",
                  "description": "Keep your data organized and synced across all platforms in real-time",
                  "provider": {
                    "@type": "Organization",
                    "name": "The Automators"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 6,
                "item": {
                  "@type": "Service",
                  "name": "Scheduling & Booking Automation",
                  "description": "Automate appointment scheduling, reminders, and calendar management",
                  "provider": {
                    "@type": "Organization",
                    "name": "The Automators"
                  }
                }
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What types of businesses do you serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We work with businesses of all sizes across various industries including e-commerce, healthcare, professional services, real estate, and more. Our automation solutions are tailored to each business's unique needs."
                }
              },
              {
                "@type": "Question",
                "name": "How long does automation implementation take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Implementation typically takes 1-4 weeks depending on complexity. Simple workflow automation can be completed in days, while comprehensive AI solutions may take a few weeks."
                }
              },
              {
                "@type": "Question",
                "name": "How much does automation cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our automation services cost approximately 25% of hiring a full-time employee for the same tasks. Pricing varies based on complexity and scope."
                }
              },
              {
                "@type": "Question",
                "name": "What ROI can I expect from automation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most clients save 15+ hours per week and see ROI within 2-3 months. Benefits include reduced labor costs, fewer errors, faster processing times, and the ability to scale without adding headcount."
                }
              }
            ]
          }
        ]}
      />
      {/* Spinning Stars Background */}
      <StarsCanvas />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center relative z-10">
          <div className="h-6 sm:h-10 mb-4 sm:mb-6"></div>
          <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl gradient-text mb-4 sm:mb-6 max-w-4xl mx-auto">
            Professional Business Automation Services
          </h1>
          <p className="text-2xl sm:text-3xl text-white/60 max-w-3xl mx-auto">
            We specialize in automating the tedious, time-consuming tasks that keep you from focusing on what really matters. From workflow automation to AI-powered solutions, we help businesses save time and reduce costs.
          </p>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20 sm:h-32"></div>

      {/* Services Grid */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-5xl sm:text-6xl md:text-7xl gradient-text mb-4 sm:mb-6">Our Automation Services</h2>
            <p className="text-2xl sm:text-3xl text-white/60 max-w-3xl mx-auto">
              The Automators offers comprehensive business automation services designed to eliminate repetitive tasks and streamline operations.
            </p>
          </div>
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
                <div className="relative mb-4 sm:mb-6">
                  {service.icon}
                </div>
                <h3 className="relative text-white mb-2 sm:mb-3">
                  {service.title}
                  {(index === 0 || index === 1 || index === 2) && (
                    <span className="ml-2 text-sm text-indigo-400">→</span>
                  )}
                </h3>
                <p className="relative text-white/60 mb-4 sm:mb-6 text-lg sm:text-xl">{service.description}</p>
                <ul className="relative space-y-2 sm:space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mt-2"></div>
                      <span className="text-white/70 text-lg sm:text-xl">{benefit}</span>
                    </li>
                  ))}
                </ul>
                {(index === 0 || index === 1 || index === 2) && (
                  <div className="relative mt-4 sm:mt-6 text-base text-indigo-400 font-semibold">
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
            <h2 className="text-5xl sm:text-6xl md:text-7xl gradient-text mb-4 sm:mb-6">How We Work</h2>
            <p className="text-2xl sm:text-3xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              We partner with you to help figure out where the bottlenecks are, and then we solve them.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {process.map((item, index) => (
              <div key={index} className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center hover:border-white/20 transition-all">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white mb-4 sm:mb-6">
                  {item.icon}
                </div>
                <div className="text-base sm:text-lg text-white/50 mb-1 sm:mb-2">Step {item.step}</div>
                <h3 className="text-white mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-white/60 text-lg sm:text-xl mb-2">{item.description}</p>
                {item.duration && (
                  <div className="text-sm text-indigo-400 font-semibold">{item.duration}</div>
                )}
              </div>
            ))}
          </div>

          <div className="glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-4 sm:mb-6">
              Our team will spend the time needed with you and your team, to work on the right areas at the right time. We start on the areas that will make the most impact, and then work backward from there.
            </p>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
              We free up your team to do what they're good at (adding maximum value to your business) while eliminating the mistakes humans make in doing day-to-day work.
            </p>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20 sm:h-32"></div>

      {/* About Our Team */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <h2 className="text-5xl sm:text-6xl gradient-text mb-4 sm:mb-6">Global Reach, Local Touch</h2>
                <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-4 sm:mb-6">
                  We are based in South Africa but can do work for companies worldwide, at affordable rates.
                </p>
                <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
                  Our team has extensive experience building and turning around small businesses. We are also versed in copywriting, e-commerce, online marketing and implementing 80/20 strategies. We can help you improve your business in many ways.
                </p>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-lg sm:text-xl">Small Business Expertise</h4>
                    <p className="text-white/60 text-lg sm:text-xl">Built and turned around multiple small businesses</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-lg sm:text-xl">Full-Service Support</h4>
                    <p className="text-white/60 text-lg sm:text-xl">Copywriting, e-commerce, and online marketing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-lg sm:text-xl">80/20 Strategy</h4>
                    <p className="text-white/60 text-lg sm:text-xl">Focus on high-impact areas that move the needle</p>
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
            <h2 className="text-5xl sm:text-6xl md:text-7xl gradient-text mb-4 sm:mb-6">Affordable Pricing</h2>
            <p className="text-2xl sm:text-3xl text-white/60 max-w-3xl mx-auto mb-6">
              We aim to automate your work at only 25% of the cost of hiring a human to do it, without all the costs of hiring and the mistakes humans can make.
            </p>
            <Link
              to="/pricing"
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors text-lg sm:text-xl"
            >
              View detailed automation pricing →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <img src="/services-tick-purple.png" alt="No Large Upfront Fees" className="w-12 h-12 sm:w-16 sm:h-16" />
                </div>
                <div>
                  <h3 className="text-white mb-2 sm:mb-3 text-lg sm:text-xl">No Large Upfront Fees</h3>
                  <p className="text-white/70 leading-relaxed text-lg sm:text-xl">
                    We don't charge large up-front fees like others do - we believe we should get paid according to the value we add.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <img src="/services-tick-cyan.png" alt="Scales With Your Business" className="w-12 h-12 sm:w-16 sm:h-16" />
                </div>
                <div>
                  <h3 className="text-white mb-2 sm:mb-3 text-lg sm:text-xl">Scales With Your Business</h3>
                  <p className="text-white/70 leading-relaxed text-lg sm:text-xl">
                    Our services expand with your business, and with flexible pricing plans, your costs scale down proportionally to any slow times.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <img src="/services-tick-pink.png" alt="Flexible Payment Plans" className="w-12 h-12 sm:w-16 sm:h-16" />
                </div>
                <div>
                  <h3 className="text-white mb-2 sm:mb-3 text-lg sm:text-xl">Flexible Payment Plans</h3>
                  <p className="text-white/70 leading-relaxed text-lg sm:text-xl">
                    Choose to pay in full or spread over 6, 12, or 18 months. Own your automation forever with payment options that work for your business.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <img src="/services-tick-orange.png" alt="Value-Based Billing" className="w-12 h-12 sm:w-16 sm:h-16" />
                </div>
                <div>
                  <h3 className="text-white mb-2 sm:mb-3 text-lg sm:text-xl">Value-Based Billing</h3>
                  <p className="text-white/70 leading-relaxed text-lg sm:text-xl">
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
            <h2 className="text-5xl sm:text-6xl md:text-7xl gradient-text mb-4 sm:mb-6">Success Stories</h2>
            <p className="text-2xl sm:text-3xl text-white/60">Real results from businesses we've helped automate.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            <div className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
              <div className="text-5xl sm:text-6xl gradient-text mb-3 sm:mb-4">15hrs</div>
              <h4 className="text-white mb-2 text-lg sm:text-xl">Saved Per Week</h4>
              <p className="text-white/60 text-lg sm:text-xl">Marketing agency automated client onboarding and reporting</p>
            </div>
            <div className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
              <div className="text-5xl sm:text-6xl gradient-text mb-3 sm:mb-4">95%</div>
              <h4 className="text-white mb-2 text-lg sm:text-xl">Fewer Errors</h4>
              <p className="text-white/60 text-lg sm:text-xl">E-commerce business eliminated manual order processing</p>
            </div>
            <div className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all">
              <div className="text-5xl sm:text-6xl gradient-text mb-3 sm:mb-4">$50k</div>
              <h4 className="text-white mb-2 text-lg sm:text-xl">Annual Savings</h4>
              <p className="text-white/60 text-lg sm:text-xl">Consulting firm reduced admin overhead significantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-12 sm:h-20"></div>

      {/* FAQ Section */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl gradient-text mb-3 sm:mb-4">Frequently Asked Questions</h2>
            <p className="text-lg sm:text-xl text-white/60">
              Everything you need to know about our automation services
            </p>
          </div>

          <div className="space-y-2 sm:space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/20 transition-all"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3"
                >
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg sm:text-xl mb-0">
                      {faq.question}
                    </h3>
                    {openFAQ === index && (
                      <p className="text-white/70 mt-2 sm:mt-3 text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-white/60 flex-shrink-0 transition-transform ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <p className="text-white/60 mb-3 text-base">Still have questions?</p>
            <Link
              to="/contact"
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors text-base"
            >
              Contact us for answers →
            </Link>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-8 sm:h-12"></div>

      {/* CTA */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="relative overflow-hidden rounded-3xl sm:rounded-[3rem] glass border border-white/10 p-8 sm:p-12 md:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-5xl sm:text-6xl md:text-7xl text-white mb-4 sm:mb-6">
                Ready to Reclaim Your Time?
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-6 sm:mb-8">
                Contact us now to set up a free 30-minute call so we can both get an idea of whether we might be a good match for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl"
                >
                  Schedule Free 30-Min Call
                </Link>
                <Link
                  to="/pricing"
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-full glass border border-white/20 text-white hover:bg-white/5 transition-all text-lg sm:text-xl"
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
