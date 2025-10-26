import React from 'react';
import { Workflow, Zap, Clock, TrendingUp, ArrowLeft, Lightbulb, CheckCircle, Users, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { AutomationDemo } from './AutomationDemo';

export function AutomationPage() {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Save Time',
      description: 'Reclaim hours every day by eliminating repetitive tasks',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Increase Efficiency',
      description: 'Complete in seconds what used to take hours',
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Reduce Errors',
      description: 'Eliminate human error with consistent processes',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Scale Faster',
      description: 'Grow without growing your admin overhead',
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
        title="Workflow Automation Explained"
        description="Discover what workflow automation is and how it transforms your business. Like having a digital assistant that works 24/7, never makes mistakes, and never needs a break."
        path="/services/automation"
        keywords="workflow automation, business process automation, automated workflows, digital transformation, productivity automation"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "What is Workflow Automation?",
          "description": "A comprehensive guide to understanding workflow automation and its benefits for businesses",
          "author": {
            "@type": "Organization",
            "name": "The Automators"
          }
        }}
      />
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="blob absolute top-20 left-1/4 w-96 h-96 bg-indigo-500 rounded-full"></div>
        <div className="blob absolute bottom-40 right-1/4 w-80 h-80 bg-purple-500 rounded-full" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Back Button */}
      <div className="relative pt-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="container mx-auto">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Services</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
            <Workflow className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-white/80">Workflow Automation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl gradient-text mb-6 max-w-4xl mx-auto">
            What is Workflow Automation?
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Workflow automation is the process of using technology to complete repetitive business tasks without human intervention. 
            It's like having a digital assistant that works 24/7, never makes mistakes, and never needs a break.
          </p>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <AutomationDemo />

      {/* How It Works Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
              <Lightbulb className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-white/80">The Power of Automation</span>
            </div>
            <h2 className="text-4xl sm:text-5xl gradient-text mb-6">
              How Automation Transforms Your Business
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Automation isn't just about saving time—it's about transforming how your entire business operates.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="card-3d glass border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-white text-xl mb-3">{benefit.title}</h3>
                <p className="text-white/60">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
              <RefreshCw className="w-4 h-4 text-green-400" />
              <span className="text-sm text-white/80">Real Examples</span>
            </div>
            <h2 className="text-4xl sm:text-5xl gradient-text mb-6">
              Common Automation Use Cases
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Here are just a few examples of workflows we can automate for you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {examples.map((example, index) => (
              <div
                key={index}
                className="card-3d glass border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all"
              >
                <h3 className="text-white text-xl mb-3">{example.title}</h3>
                <p className="text-white/60 mb-4">{example.description}</p>
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
                  <Clock className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-400 font-semibold">{example.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Bottom Line Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="relative overflow-hidden rounded-[3rem] glass border border-indigo-500/30 p-12 sm:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
            <div className="relative z-10">
              <div className="inline-flex p-4 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white mb-8">
                <Zap className="w-12 h-12" />
              </div>
              <h2 className="text-3xl sm:text-4xl text-white mb-6">
                The Bottom Line
              </h2>
              <p className="text-xl text-white/80 mb-6 leading-relaxed">
                Automation takes the repetitive, time-consuming tasks off your plate so you can focus on what you do best—growing your business, serving your customers, and innovating.
              </p>
              <p className="text-xl text-white/80 leading-relaxed">
                It's not about replacing people—it's about empowering them to do more meaningful work while the robots handle the boring stuff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="relative overflow-hidden rounded-[3rem] glass border border-white/10 p-12 sm:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-4xl sm:text-5xl text-white mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Let's talk about which processes in your business could benefit from automation. Schedule a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-full"
                >
                  Schedule Free Consultation
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

