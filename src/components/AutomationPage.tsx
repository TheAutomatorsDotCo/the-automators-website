import React, { useState } from 'react';
import { Zap, Clock, TrendingUp, ArrowLeft, CheckCircle, Users, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { AutomationDemo } from './AutomationDemo';
import { StarsCanvas } from './StarBackground';

export function AutomationPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const benefits = [
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Save Time',
      description: 'Automate workflows to reclaim 10-20 hours per week. What used to take days now completes in seconds with workflow automation software.',
    },
    {
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Increase Efficiency',
      description: 'Workflow automation solutions complete tasks 10x faster than manual processes, letting you focus on high-value work.',
    },
    {
      icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Reduce Errors',
      description: 'Eliminate 90% of human errors with consistent, reliable automated workflows that follow the same process every time.',
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Scale Faster',
      description: 'Business process automation lets you handle 3x more volume without hiring additional staff or growing admin overhead.',
    },
  ];

  const examples = [
    {
      title: 'Lead Management',
      description: 'New leads are automatically captured, added to your CRM, and routed to the right team member',
      time: '15-30 min saved per lead',
    },
    {
      title: 'Client Onboarding',
      description: 'Welcome emails, document collection, task assignment, and calendar scheduling all happen automatically',
      time: '1-2 hours saved per client',
    },
    {
      title: 'Invoice Processing',
      description: 'Invoices are generated, sent, tracked, and recorded without any manual intervention',
      time: '30-45 min saved per invoice',
    },
    {
      title: 'Report Generation',
      description: 'Data is collected from multiple sources, formatted, and delivered to stakeholders on schedule',
      time: '2-4 hours saved per report',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]">
      <SEO
        title="Workflow Automation: Complete Guide & Examples | 2024"
        description="Learn what workflow automation is, see real examples in action, and discover how it saves 15+ hours/week. Interactive demo included. Save time, reduce errors, scale faster."
        path="/services/automation"
        keywords="workflow automation, business workflow automation, automated workflows, workflow automation software, workflow automation solutions, business process automation"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "What is Workflow Automation?",
            "description": "A comprehensive guide to understanding workflow automation and its benefits for businesses",
            "author": {
              "@type": "Organization",
              "name": "The Automators"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How Workflow Automation Works",
            "description": "Step-by-step guide to understanding workflow automation",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Trigger",
                "text": "An event occurs that starts the automation (e.g., form submission, email received, scheduled time)"
              },
              {
                "@type": "HowToStep",
                "name": "Processing",
                "text": "Data is automatically processed and routed to the right systems without manual intervention"
              },
              {
                "@type": "HowToStep",
                "name": "Actions",
                "text": "Automated actions are executed such as sending emails, creating records, updating databases, or generating notifications"
              },
              {
                "@type": "HowToStep",
                "name": "Completion",
                "text": "Workflow completes successfully and logs results for tracking and reporting"
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is workflow automation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Workflow automation is the process of using technology to complete repetitive business tasks without human intervention. It's like having a digital assistant that works 24/7, never makes mistakes, and never needs a break."
                }
              },
              {
                "@type": "Question",
                "name": "How does workflow automation save time?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Workflow automation eliminates manual, repetitive tasks that can take hours each day. For example, lead management automation can save 15-30 minutes per lead, while client onboarding can save 1-2 hours per client."
                }
              },
              {
                "@type": "Question",
                "name": "What are workflow automation examples?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Common workflow automation examples include: lead management (automatic CRM updates), client onboarding (welcome emails and document collection), invoice processing (automated generation and tracking), and report generation (scheduled data collection and delivery)."
                }
              }
            ]
          }
        ]}
      />
      {/* Spinning Stars Background */}
      <StarsCanvas />

      {/* Back Button */}
      <div className="relative pt-20 sm:pt-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="container mx-auto">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition-colors text-lg sm:text-xl"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Back to Services</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center relative z-10">
          <div className="h-16 sm:h-20 mb-4 sm:mb-6"></div>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl gradient-text mb-4 sm:mb-6 max-w-4xl mx-auto">
            What is Workflow Automation?
          </h1>
          <p className="text-2xl sm:text-3xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Workflow automation is the process of using technology to complete repetitive business tasks without human intervention. 
            It's like having a digital assistant that works 24/7, never makes mistakes, and never needs a break.
          </p>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <AutomationDemo />

      {/* How It Works Section */}
      <section className="relative pt-10 sm:pt-16 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="h-4 sm:h-6 mb-3 sm:mb-4"></div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl gradient-text mb-4 sm:mb-6">
              How Automation Transforms Your Business
            </h2>
            <p className="text-2xl sm:text-3xl text-white/60 max-w-3xl mx-auto">
              Automation isn't just about saving time—it's about transforming how your entire business operates.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all"
              >
                <div className="inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white mb-4 sm:mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-white text-2xl sm:text-3xl mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-white/60 text-lg sm:text-xl">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className="relative pt-16 sm:pt-20 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="h-6 sm:h-10 mb-4 sm:mb-6"></div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl gradient-text mb-4 sm:mb-6">
              Common Automation Use Cases
            </h2>
            <p className="text-2xl sm:text-3xl text-white/60 max-w-3xl mx-auto">
              Here are just a few examples of workflows we can automate for you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {examples.map((example, index) => (
              <div
                key={index}
                className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-white/20 transition-all"
              >
                <h3 className="text-white text-2xl sm:text-3xl mb-2 sm:mb-3">{example.title}</h3>
                <p className="text-white/60 mb-3 sm:mb-4 text-lg sm:text-xl">{example.description}</p>
                <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" />
                  <span className="text-base sm:text-lg text-green-400 font-semibold">{example.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl gradient-text mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl sm:text-2xl text-white/60">
              Everything you need to know about workflow automation
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/20 transition-all">
              <button
                onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
                className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3"
              >
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-0">What is workflow automation?</h3>
                  {openFAQ === 1 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-lg leading-relaxed">
                      Workflow automation is the process of using technology to complete repetitive business tasks without human intervention. It's like having a digital assistant that works 24/7, never makes mistakes, and never needs a break. Common examples include lead capture, client onboarding, invoice processing, and report generation.
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
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-0">How does workflow automation save time?</h3>
                  {openFAQ === 2 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-lg leading-relaxed">
                      Workflow automation eliminates manual, repetitive tasks that can take hours each day. For example, lead management automation can save 15-30 minutes per lead, while client onboarding can save 1-2 hours per client. Most businesses reclaim 10-20 hours per week through automation.
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
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-0">What tasks can be automated with workflow automation?</h3>
                  {openFAQ === 3 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-lg leading-relaxed">
                      Almost any repetitive task can be automated: data entry, email sequences, CRM updates, document generation, appointment scheduling, social media posting, invoice creation, report generation, lead routing, customer notifications, and much more. If you do it more than once, it can probably be automated.
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
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-0">How much does workflow automation cost?</h3>
                  {openFAQ === 4 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-lg leading-relaxed">
                      Our workflow automation services start at $997 for basic automations. Professional plans with up to 10 workflows are $2,497, and we offer custom Enterprise pricing for larger needs. <Link to="/pricing" className="text-indigo-400 hover:text-indigo-300">View our detailed pricing</Link> for complete information.
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
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-0">Is workflow automation right for small businesses?</h3>
                  {openFAQ === 5 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-lg leading-relaxed">
                      Absolutely! Small businesses benefit the most from automation because every hour saved has a bigger impact. Automation lets small teams compete with larger companies by handling more work without hiring additional staff. Our affordable pricing makes automation accessible to businesses of all sizes.
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
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-0">Do I need coding skills to use workflow automation?</h3>
                  {openFAQ === 6 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-lg leading-relaxed">
                      Not at all! We build and implement all your workflow automation for you. You don't need any technical knowledge or coding skills. We handle all the technical work and provide training so you can manage your automations confidently.
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
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-0">What's the difference between workflow automation and RPA?</h3>
                  {openFAQ === 7 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-lg leading-relaxed">
                      Workflow automation connects different applications and systems to automate business processes. RPA (Robotic Process Automation) mimics human actions on computers. We use workflow automation which is more flexible, easier to maintain, and better suited for most small to medium businesses.
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
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-0">What are the best workflow automation tools?</h3>
                  {openFAQ === 8 && (
                    <p className="text-white/70 mt-2 sm:mt-3 text-base leading-relaxed">
                      Popular workflow automation software includes Zapier, Make (Integromat), Microsoft Power Automate, and N8n. We work with all major platforms and recommend the best tools for your specific needs. Learn more about our <Link to="/services" className="text-indigo-400 hover:text-indigo-300">automation services</Link>.
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
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <p className="text-white/60 mb-3 text-base">Ready to automate your workflows?</p>
            <Link
              to="/assessment"
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors text-base"
            >
              Take our 2-minute assessment to get started →
            </Link>
          </div>
        </div>
      </section>

      {/* The Bottom Line Section */}
      <section className="relative pt-16 sm:pt-20 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="relative overflow-hidden rounded-3xl sm:rounded-[3rem] glass border border-indigo-500/30 p-8 sm:p-12 lg:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
            <div className="relative z-10">
              <div className="inline-flex p-3 sm:p-4 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white mb-6 sm:mb-8">
                <Zap className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-6">
                Why Workflow Automation Matters
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-4 sm:mb-6 leading-relaxed">
                Automation takes the repetitive, time-consuming tasks off your plate so you can focus on what you do best—growing your business, serving your customers, and innovating.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed">
                It's not about replacing people—it's about empowering them to do more meaningful work while the robots handle the boring stuff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="relative overflow-hidden rounded-3xl sm:rounded-[3rem] glass border border-white/10 p-8 sm:p-12 md:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl text-white mb-4 sm:mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-6 sm:mb-8">
                Let's talk about which processes in your business could benefit from automation. Schedule a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg"
                >
                  Schedule Free Consultation
                </Link>
                <Link
                  to="/assessment"
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-full glass border border-white/20 text-white hover:bg-white/5 transition-all text-base sm:text-lg"
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

