import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';
import { SEO } from '../SEO';

interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  description: string;
  stats: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
  slug: string;
  gradient: string;
}

export function CaseStudiesPage() {
  const caseStudies: CaseStudy[] = [
    {
      id: 'platinum-repairs',
      title: 'Saving Hundreds of Hours Weekly',
      company: 'Platinum Repairs',
      industry: 'Electronics Repair & Insurance',
      description: 'How we helped Platinum Repairs automate their entire workflow, reduce daily inquiries by 87%, and save thousands in operational costs.',
      stats: [
        {
          label: 'Time Saved',
          value: '30%',
          icon: <TrendingUp className="w-6 h-6" />,
        },
        {
          label: 'Inquiry Reduction',
          value: '87%',
          icon: <Zap className="w-6 h-6" />,
        },
        {
          label: 'Monthly Savings',
          value: 'R12,000',
          icon: <Users className="w-6 h-6" />,
        },
      ],
      slug: '/case-studies/platinum-repairs',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      id: 'device-doctor',
      title: 'Operations Revolutionized',
      company: 'Device Doctor',
      industry: 'Electronics Repair & Insurance',
      description: 'Discover how Device Doctor saved hundreds of hours weekly through automated claim processing, AI chatbots, and intelligent inventory management.',
      stats: [
        {
          label: 'Time Saved',
          value: '30%',
          icon: <TrendingUp className="w-6 h-6" />,
        },
        {
          label: 'Inquiry Reduction',
          value: '87%',
          icon: <Zap className="w-6 h-6" />,
        },
        {
          label: 'Weekly Hours Saved',
          value: '100+',
          icon: <Users className="w-6 h-6" />,
        },
      ],
      slug: '/case-studies/device-doctor',
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      id: 'in-en-om',
      title: 'Complete Digital Ecosystem',
      company: 'IN&OM Suid-Afrika',
      industry: 'Community Platform & Business Directory',
      description: 'We built a comprehensive business platform combining directory, job portal, marketplace, and community sections—all powered by automation and modern technology.',
      stats: [
        {
          label: 'Major Features',
          value: '15+',
          icon: <TrendingUp className="w-6 h-6" />,
        },
        {
          label: 'Pages Developed',
          value: '13+',
          icon: <Zap className="w-6 h-6" />,
        },
        {
          label: 'Monthly Automations',
          value: '15,000',
          icon: <Users className="w-6 h-6" />,
        },
      ],
      slug: '/case-studies/in-en-om',
      gradient: 'from-green-500 to-emerald-500',
    },
    // Add more case studies here as you create them
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e] pt-32">
      <SEO
        title="Case Studies - Real Business Automation Success Stories"
        description="See how The Automators has helped businesses save time, reduce costs, and scale operations with AI automation, chatbots, and workflow optimization."
        path="/case-studies"
        keywords="automation case studies, business automation success stories, AI implementation examples, workflow automation results, automation ROI"
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Real Results from <span className="gradient-text">Real Businesses</span>
          </h1>
          <p className="text-3xl lg:text-3xl text-white/70 mb-8 leading-relaxed">
            Discover how we've helped businesses like yours save time, reduce costs, and scale operations through intelligent automation. These aren't just numbers—they're transformations.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-32">
        <div className="grid grid-cols-1 gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              to={study.slug}
              className="group glass rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all"
            >
              <div className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Content */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className={`px-4 py-1 rounded-full text-base font-medium bg-gradient-to-r ${study.gradient} text-white`}>
                        {study.industry}
                      </span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                      {study.company}
                    </h2>
                    <p className="text-3xl text-white/80 mb-4">{study.title}</p>
                    <p className="text-white/70 leading-relaxed mb-6">{study.description}</p>
                    <div className="inline-flex items-center space-x-2 text-indigo-400 font-medium group-hover:space-x-3 transition-all">
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-col justify-center space-y-4">
                    {study.stats.map((stat, index) => (
                      <div key={index} className="flex items-center space-x-4 bg-white/5 rounded-2xl p-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${study.gradient} flex items-center justify-center text-white flex-shrink-0`}>
                          {stat.icon}
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-white">{stat.value}</div>
                          <div className="text-base text-white/60">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-12 text-center">
          <div className="glass rounded-3xl border border-white/10 p-12">
            <h3 className="text-3xl font-bold text-white mb-4">More Success Stories Coming Soon</h3>
            <p className="text-white/70 mb-6">
              We're working with incredible businesses across various industries. Check back soon for more case studies.
            </p>
            <Link
              to="/contact"
              className="inline-block btn-3d bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium"
            >
              Become Our Next Success Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

