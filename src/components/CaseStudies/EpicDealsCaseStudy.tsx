import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageSquare, TrendingUp, CheckCircle, X, Clock, Shield, Users, Zap, ArrowRight, Quote, Package } from 'lucide-react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { SEO } from '../SEO';
import { StarsCanvas } from '../StarBackground';
import { saveLeadData } from '../../utils/leadData';
import { getRelatedCaseStudies } from './caseStudiesData';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

export function EpicDealsCaseStudy() {
  const [activeTab, setActiveTab] = useState('customer-service');
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // Save case study referral data
    saveLeadData({
      source: 'case-study',
      caseStudy: {
        caseStudyName: 'Epic Deals',
        timestamp: new Date().toISOString(),
      },
    });
    
    // Navigate to contact page
    navigate('/contact');
  };

  // Chart data
  const messagesData = {
    labels: ['Growing', 'Peak'],
    datasets: [{
      label: 'Monthly Messages',
      data: [8000, 15000],
      backgroundColor: ['#f59e0b', '#f97316'],
      borderColor: ['#f59e0b', '#f97316'],
      borderWidth: 2,
      borderRadius: 8,
    }],
  };

  const reliabilityData = {
    labels: ['Success', 'Errors'],
    datasets: [{
      data: [99.9, 0.1],
      backgroundColor: ['#10b981', '#1a1a2e'],
      borderColor: ['#10b981', '#2d2d44'],
      borderWidth: 2,
    }],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#1a1a2e',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#f59e0b',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
      },
    },
  };

  const doughnutOptions = {
    ...chartOptions,
    cutout: '70%',
  };

  const barOptions = {
    ...chartOptions,
    scales: {
      y: {
        beginAtZero: true,
        max: 18000,
        grid: {
          color: '#ffffff0d',
        },
        ticks: {
          color: '#fff',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#fff',
        },
      },
    },
  };

  const tabs = [
    { id: 'customer-service', label: '1. Customer Service' },
    { id: 'automation', label: '2. Trade-In Automation' },
    { id: 'efficiency', label: '3. Team Efficiency' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e] pt-32 pb-16 sm:pb-20">
      <SEO
        title="Epic Deals Case Study - Scaling Trust in South Africa's Tech Market"
        description="Discover how The Automators helped Epic Deals handle 5,697+ monthly messages with AI automation, achieving 99.9% reliability while competing with teams twice their size."
        path="/case-studies/epic-deals"
        type="article"
        keywords="AI chatbot case study, pre-owned tech marketplace automation, customer service automation, trade-in automation, South Africa tech business"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Epic Deals Case Study - Scaling Trust in South Africa's Tech Market",
            "author": { "@type": "Organization", "name": "The Automators" },
            "publisher": { "@type": "Organization", "name": "The Automators", "url": "https://theautomators.co" },
            "datePublished": "2025-11-03",
            "dateModified": "2026-02-06",
            "image": "https://theautomators.co/epic-deals-logo.png",
            "url": "https://theautomators.co/case-studies/epic-deals",
            "description": "Discover how The Automators helped Epic Deals handle 5,697+ monthly messages with AI automation, achieving 99.9% reliability while competing with teams twice their size."
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://theautomators.co/" },
              { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://theautomators.co/case-studies" },
              { "@type": "ListItem", "position": 3, "name": "Epic Deals" }
            ]
          }
        ]}
      />
      <StarsCanvas />

      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-6 sm:pb-8">
        <Link
          to="/case-studies"
          className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition-colors text-3xl sm:text-4xl"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Back to Case Studies</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-12 sm:pb-16 lg:pb-20 text-center">
        <div className="h-6 sm:h-10 mb-4 sm:mb-6"></div>
        <div className="flex justify-center mb-6 sm:mb-8">
          <img 
            src="/ed-logo.svg" 
            alt="Epic Deals - South Africa's leading pre-owned tech marketplace logo"
            width={300}
            height={72}
            loading="eager"
            className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
          />
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Epic Deals: <span className="gradient-text">Scaling Trust</span> in South Africa's Tech Market
        </h1>
        <p className="text-2xl sm:text-3xl lg:text-3xl text-white/70 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
          How intelligent automation helped South Africa's leading pre-owned tech marketplace compete with teams twice their size while maintaining the personal touch.
        </p>
        <a href="#impact" className="text-amber-400 font-medium text-2xl sm:text-3xl hover:text-amber-300 transition-colors">
          See the results ↓
        </a>
      </section>

      {/* Stats Grid */}
      <section id="impact" className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="h-6 sm:h-10 mb-4 sm:mb-6"></div>
            <h2 className="text-6xl sm:text-7xl lg:text-7xl font-bold gradient-text mb-4 sm:mb-6">The Results at a Glance</h2>
            <p className="text-3xl sm:text-4xl text-white/70 max-w-3xl mx-auto mb-10 sm:mb-12">
              Real automation delivers real results. Here's how we transformed Epic Deals' operations from stretched thin to scaling smart.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Messages Card with Chart */}
            <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10">
              <p className="text-6xl sm:text-7xl font-bold text-white mb-2">15,000+</p>
              <p className="text-3xl sm:text-4xl text-white/70 mb-4 sm:mb-6">Messages/Month</p>
              <div className="h-40 sm:h-48">
                <Bar data={messagesData} options={barOptions} />
              </div>
            </div>

            {/* Reliability Card */}
            <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10">
              <p className="text-6xl sm:text-7xl font-bold text-white mb-2">99.9%</p>
              <p className="text-3xl sm:text-4xl text-white/70 mb-4 sm:mb-6">Response Reliability</p>
              <div className="h-40 sm:h-48">
                <Doughnut data={reliabilityData} options={doughnutOptions} />
              </div>
            </div>

            {/* Products Card */}
            <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-center">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <Package className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400" />
              </div>
              <span className="text-6xl sm:text-7xl font-bold text-amber-400 mb-3 sm:mb-4 text-center">10,000+</span>
              <p className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center">Products Tracked</p>
              <p className="text-3xl sm:text-4xl text-white/70 text-center">AI recommends live products from their website in real-time.</p>
            </div>

            {/* Uptime Card */}
            <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-center">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-green-400" />
              </div>
              <span className="text-6xl sm:text-7xl font-bold text-green-400 mb-3 sm:mb-4 text-center">24/7</span>
              <p className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center">Always Online</p>
              <p className="text-3xl sm:text-4xl text-white/70 text-center">99.9% response reliability around the clock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-6 sm:h-10 mb-4 sm:mb-6"></div>
              <span className="text-amber-400 font-medium text-xl sm:text-2xl tracking-wider uppercase mb-4 block">The Challenge</span>
              <h2 className="text-6xl sm:text-7xl lg:text-7xl font-bold gradient-text mb-6 sm:mb-8">Growing Pains in a High-Trust Business</h2>
              <p className="text-3xl sm:text-4xl text-white/70 mb-8 sm:mb-10 leading-relaxed">
                Epic Deals transformed South Africa's fragmented used tech market into a trusted ecosystem. But rapid growth threatened what made them special.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="glass p-6 sm:p-8 rounded-2xl border border-white/10">
                <div className="flex items-center mb-4">
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mr-3 flex-shrink-0" />
                  <h3 className="text-3xl sm:text-4xl font-bold text-white">Volume vs. Quality</h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  With 10,000+ devices in inventory and thousands of customer inquiries monthly, maintaining personalized service became increasingly difficult.
                </p>
              </div>

              <div className="glass p-6 sm:p-8 rounded-2xl border border-white/10">
                <div className="flex items-center mb-4">
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mr-3 flex-shrink-0" />
                  <h3 className="text-3xl sm:text-4xl font-bold text-white">24/7 Expectations</h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Customers expected instant responses about pricing, device conditions, and trade-in values—at all hours.
                </p>
              </div>

              <div className="glass p-6 sm:p-8 rounded-2xl border border-white/10">
                <div className="flex items-center mb-4">
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mr-3 flex-shrink-0" />
                  <h3 className="text-3xl sm:text-4xl font-bold text-white">Limited Team Size</h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  With 29 employees managing retail, B2B operations, and technical repairs, human bandwidth was maxed out.
                </p>
              </div>

              <div className="glass p-6 sm:p-8 rounded-2xl border border-white/10">
                <div className="flex items-center mb-4">
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mr-3 flex-shrink-0" />
                  <h3 className="text-3xl sm:text-4xl font-bold text-white">Trust-Based Business Model</h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  In a market scarred by scams, every interaction had to reinforce reliability—manual errors or delays could damage reputation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section with Tabs */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="h-6 sm:h-10 mb-4 sm:mb-6"></div>
            <span className="text-amber-400 font-medium text-xl sm:text-2xl tracking-wider uppercase mb-4 block">The Solution</span>
            <h2 className="text-6xl sm:text-7xl lg:text-7xl font-bold gradient-text mb-4 sm:mb-6">Intelligent Automation That Enhances Humanity</h2>
            <p className="text-3xl sm:text-4xl text-white/70 max-w-3xl mx-auto mb-10 sm:mb-12">
              We built a custom AI-powered system that handles routine inquiries while preserving Epic Deals' signature personal touch.
            </p>
          </div>

          <div className="glass rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden">
            {/* Tabs */}
            <div className="flex flex-wrap border-b border-white/10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 sm:px-6 py-3 sm:py-4 font-medium transition-all text-3xl sm:text-4xl ${
                    activeTab === tab.id
                      ? 'text-amber-400 border-b-2 border-amber-400'
                      : 'text-white/60 hover:text-white/80'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6 sm:p-8 lg:p-12">
              {activeTab === 'customer-service' && (
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-3">AI-Powered Customer Service</h3>
                    <p className="text-3xl sm:text-4xl text-white/70 leading-relaxed mb-4">
                      A custom chatbot handles product specifications, pricing inquiries, grading explanations, and shipping details—delivering instant, accurate responses 24/7. It even recommends live products directly from their website, helping customers find exactly what they need.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-3">Seamless Escalation</h3>
                    <p className="text-3xl sm:text-4xl text-white/70 leading-relaxed mb-4">
                      The AI handles 95%+ of inquiries autonomously. For complex cases requiring human judgment, it seamlessly transfers to team members with full context preserved—no customer ever has to repeat themselves.
                    </p>
                  </div>
                  <div className="glass bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 sm:p-6">
                    <p className="text-3xl sm:text-4xl text-white/90 leading-relaxed">
                      <strong className="text-amber-400">The Result:</strong> Up to 15,000 monthly messages handled with zero handoff queue, empowering the team to focus on high-value customer interactions.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'automation' && (
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-3">Automated Trade-In Workflows</h3>
                    <p className="text-3xl sm:text-4xl text-white/70 leading-relaxed mb-4">
                      Intelligent automation streamlines the valuation process, managing real-time offers, condition assessments, and payment options while maintaining transparency. Customers get instant quotes without waiting for human availability.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-3">Inventory Management Intelligence</h3>
                    <p className="text-3xl sm:text-4xl text-white/70 leading-relaxed mb-4">
                      Automated systems track 10,000+ devices across multiple categories, updating availability and pricing in real-time across all channels. No more manual stock updates or pricing discrepancies.
                    </p>
                  </div>
                  <div className="glass bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 sm:p-6">
                    <p className="text-3xl sm:text-4xl text-white/90 leading-relaxed">
                      <strong className="text-amber-400">The Result:</strong> Trade-in inquiries processed instantly, 24/7, with consistent accuracy that builds customer trust.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'efficiency' && (
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-3">Process Elimination</h3>
                    <p className="text-3xl sm:text-4xl text-white/70 leading-relaxed mb-4">
                      By automating repetitive manual data entry and routine queries, the team focuses on high-value activities: technical diagnostics, quality control, and strategic growth. Normal work just disappeared.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-3">Competing at Scale</h3>
                    <p className="text-3xl sm:text-4xl text-white/70 leading-relaxed mb-4">
                      With automation handling the volume, Epic Deals' 29-person team now competes effectively with companies twice their size—without sacrificing the personal touch that defines their brand.
                    </p>
                  </div>
                  <div className="glass bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 sm:p-6">
                    <p className="text-3xl sm:text-4xl text-white/90 leading-relaxed">
                      <strong className="text-amber-400">The Result:</strong> Thousands of hours redirected to customer delight and strategic initiatives, enabling aggressive expansion plans.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Impact Metrics */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="h-6 sm:h-10 mb-4 sm:mb-6"></div>
            <span className="text-amber-400 font-medium text-xl sm:text-2xl tracking-wider uppercase mb-4 block">The Impact</span>
            <h2 className="text-6xl sm:text-7xl lg:text-7xl font-bold gradient-text mb-4 sm:mb-6">Measurable Results That Matter</h2>
            <p className="text-3xl sm:text-4xl text-white/70 max-w-3xl mx-auto mb-10 sm:mb-12">
              Automation didn't just save time—it transformed how Epic Deals operates and scales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10 text-center">
              <span className="text-5xl sm:text-6xl font-bold text-amber-400 mb-2 block">15,000+</span>
              <p className="text-2xl sm:text-3xl font-bold text-white mb-2">Monthly Messages</p>
              <p className="text-base sm:text-lg text-white/70">Handled seamlessly at peak volumes</p>
            </div>

            <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10 text-center">
              <span className="text-5xl sm:text-6xl font-bold text-green-400 mb-2 block">99.9%</span>
              <p className="text-2xl sm:text-3xl font-bold text-white mb-2">Response Reliability</p>
              <p className="text-base sm:text-lg text-white/70">Consistent, accurate answers every time</p>
            </div>

            <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10 text-center">
              <span className="text-5xl sm:text-6xl font-bold text-cyan-400 mb-2 block">10,000+</span>
              <p className="text-2xl sm:text-3xl font-bold text-white mb-2">Live Products</p>
              <p className="text-base sm:text-lg text-white/70">Recommended in real-time from their store</p>
            </div>

            <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10 text-center">
              <span className="text-5xl sm:text-6xl font-bold text-purple-400 mb-2 block">2x</span>
              <p className="text-2xl sm:text-3xl font-bold text-white mb-2">Team Efficiency</p>
              <p className="text-base sm:text-lg text-white/70">Competing with teams twice their size</p>
            </div>

            <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10 text-center">
              <span className="text-5xl sm:text-6xl font-bold text-pink-400 mb-2 block">1000s</span>
              <p className="text-2xl sm:text-3xl font-bold text-white mb-2">Hours Saved</p>
              <p className="text-base sm:text-lg text-white/70">Redirected to customer delight</p>
            </div>

            <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10 text-center">
              <span className="text-5xl sm:text-6xl font-bold text-emerald-400 mb-2 block">0</span>
              <p className="text-2xl sm:text-3xl font-bold text-white mb-2">Handoff Queue</p>
              <p className="text-base sm:text-lg text-white/70">AI handles 95%+ autonomously</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-orange-500/5">
              <div className="flex justify-center mb-6">
                <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-amber-400 opacity-50" />
              </div>
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl text-white text-center leading-relaxed mb-8">
                "Automation allowed us to compete with teams twice our size. Normal work just disappeared, and we could focus on what matters—getting every device right and delighting our customers."
              </blockquote>
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-white">Brad Eyre</p>
                <p className="text-lg sm:text-xl text-amber-400">Founder & CEO, Epic Deals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Outcomes Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-6 sm:h-10 mb-4 sm:mb-6"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div>
              <span className="text-amber-400 font-medium text-xl sm:text-2xl tracking-wider uppercase mb-4 block">Key Outcomes</span>
              <h2 className="text-5xl sm:text-6xl lg:text-6xl font-bold gradient-text mb-4 sm:mb-6">Beyond Cost Savings</h2>
              <p className="text-2xl sm:text-3xl text-white/70 mb-4 sm:mb-6 leading-relaxed">
                The transformation touched every part of the business. From customer service to operations, automation created infrastructure for unlimited growth.
              </p>
              <p className="text-2xl sm:text-3xl text-white/70 leading-relaxed">
                Epic Deals didn't just save money—they gained the capacity to pursue aggressive expansion and M&A strategies while maintaining the quality that built their reputation.
              </p>
            </div>
            <div className="glass p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">What We Achieved:</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-white/80 text-2xl sm:text-3xl">Scaled customer support by 23% month-over-month without adding headcount</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-white/80 text-2xl sm:text-3xl">Eliminated manual data entry and repetitive administrative tasks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-white/80 text-2xl sm:text-3xl">Maintained the personal touch that defines the Epic Deals brand</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-white/80 text-2xl sm:text-3xl">Created infrastructure to support aggressive expansion and M&A strategy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-white/80 text-2xl sm:text-3xl">Achieved 99.9%+ system reliability with minimal error rates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-white/80 text-2xl sm:text-3xl">Delivered ROI within the first month of implementation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-4">More Success Stories</h2>
            <p className="text-xl sm:text-2xl text-white/70 max-w-2xl mx-auto">See how we've helped other businesses transform their operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {getRelatedCaseStudies('epic-deals').map((study) => (
              <Link
                key={study.id}
                to={study.slug}
                className="group glass rounded-2xl border border-white/10 p-6 sm:p-8 hover:border-white/20 transition-all"
              >
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${study.gradient} text-white mb-4`}>
                  {study.company}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{study.title}</h3>
                <p className="text-white/70 mb-4 leading-relaxed">{study.description}</p>
                <span className="inline-flex items-center space-x-2 text-amber-400 font-medium text-sm group-hover:space-x-3 transition-all">
                  <span>Read Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">Ready to Scale Without Losing Your Soul?</h2>
              <p className="text-2xl sm:text-3xl lg:text-3xl text-white/80 max-w-2xl mx-auto mb-8 sm:mb-10">
                See how intelligent automation can help your business compete with companies twice your size—while keeping what makes you special.
              </p>
              <p className="text-xl sm:text-2xl text-amber-400 font-medium mb-8">
                Mention this case study when booking to claim your discount
              </p>
              
              <button
                onClick={handleGetStarted}
                className="btn-3d bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full inline-flex items-center justify-center space-x-3 text-xl sm:text-2xl font-bold hover:scale-105 transition-all shadow-lg hover:shadow-xl"
              >
                <span>Start Your Transformation</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
