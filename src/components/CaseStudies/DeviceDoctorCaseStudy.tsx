import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, MessageSquare, DollarSign, CheckCircle, X, Package, Zap, ArrowRight } from 'lucide-react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { SEO } from '../SEO';
import { StarsCanvas } from '../StarBackground';
import { saveLeadData } from '../../utils/leadData';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

export function DeviceDoctorCaseStudy() {
  const [activeTab, setActiveTab] = useState('claim-processing');
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // Save case study referral data
    saveLeadData({
      source: 'case-study',
      caseStudy: {
        caseStudyName: 'Device Doctor',
        timestamp: new Date().toISOString(),
      },
    });
    
    // Navigate to contact page
    navigate('/contact');
  };

  // Chart data
  const timeSavedData = {
    labels: ['Time Saved', 'Other Tasks'],
    datasets: [{
      data: [30, 70],
      backgroundColor: ['#06b6d4', '#1a1a2e'],
      borderColor: ['#06b6d4', '#2d2d44'],
      borderWidth: 2,
    }],
  };

  const inquiriesData = {
    labels: ['Before', 'After'],
    datasets: [{
      label: 'Daily Inquiries',
      data: [23, 3],
      backgroundColor: ['#ef4444', '#10b981'],
      borderColor: ['#ef4444', '#10b981'],
      borderWidth: 2,
      borderRadius: 8,
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
        borderColor: '#06b6d4',
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
        max: 25,
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
    { id: 'claim-processing', label: '1. Claim Processing' },
    { id: 'communication', label: '2. Communication' },
    { id: 'inventory', label: '3. Inventory Management' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e] pt-32">
      <SEO
        title="Device Doctor Case Study - Hundreds of Hours Saved Through Automation"
        description="See how The Automators helped Device Doctor revolutionize operations, reduce inquiries by 87%, and save hundreds of hours weekly with AI automation and workflow optimization."
        path="/case-studies/device-doctor"
        keywords="electronics repair automation, insurance claim automation, business process automation, workflow automation case study, AI chatbot results"
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
            src="/dd-logo.png" 
            alt="Device Doctor logo"
            className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
          />
        </div>
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Device Doctor: <span className="gradient-text">Hundreds of Hours</span> Saved Weekly
        </h1>
        <p className="text-3xl sm:text-4xl lg:text-4xl text-white/70 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
          Operating in the high-stakes world of insured electronics repair, Device Doctor needed flawless, rapid service. We revolutionized their operations with intelligent automation that handles hundreds of claims monthly while delivering precision and efficiency at every touchpoint.
        </p>
        <a href="#impact" className="text-cyan-400 font-medium text-3xl sm:text-4xl hover:text-cyan-300 transition-colors">
          See the transformation ↓
        </a>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="h-6 sm:h-10 mb-4 sm:mb-6"></div>
            <h2 className="text-6xl sm:text-7xl lg:text-7xl font-bold gradient-text mb-4 sm:mb-6">The Tangible Impact</h2>
            <p className="text-3xl sm:text-4xl text-white/70 max-w-3xl mx-auto mb-10 sm:mb-12">
              Real automation delivers real results. Here's how we transformed Device Doctor's operations from manual bottlenecks into streamlined workflows that scale effortlessly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Time Saved Card with Chart */}
            <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-6xl sm:text-7xl font-bold text-white mb-2">30%</h3>
              <p className="text-3xl sm:text-4xl text-white/70 mb-4 sm:mb-6">Manager's Time Freed Up</p>
              <div className="h-40 sm:h-48">
                <Doughnut data={timeSavedData} options={doughnutOptions} />
              </div>
            </div>

            {/* Inquiries Reduction Card with Chart */}
            <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-6xl sm:text-7xl font-bold text-white mb-2">87%</h3>
              <p className="text-3xl sm:text-4xl text-white/70 mb-4 sm:mb-6">Reduction in Daily Inquiries</p>
              <div className="h-40 sm:h-48">
                <Bar data={inquiriesData} options={barOptions} />
              </div>
            </div>

            {/* Weekly Hours Saved Card */}
            <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-center">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" />
              </div>
              <span className="text-6xl sm:text-7xl font-bold text-cyan-400 mb-3 sm:mb-4 text-center">100+</span>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center">Hours Saved Weekly</h3>
              <p className="text-3xl sm:text-4xl text-white/70 text-center">Our automation handles hundreds of manual tasks every week, freeing the team to focus on what truly matters.</p>
            </div>

            {/* Cost Savings Card */}
            <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-center">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <DollarSign className="w-10 h-10 sm:w-12 sm:h-12 text-green-400" />
              </div>
              <span className="text-6xl sm:text-7xl font-bold text-green-400 mb-3 sm:mb-4 text-center">R12,000</span>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center">Saved Per Month</h3>
              <p className="text-3xl sm:text-4xl text-white/70 text-center">Reduced operational costs through streamlined processes, automated follow-ups, and efficient resource management.</p>
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
              <h2 className="text-6xl sm:text-7xl lg:text-7xl font-bold gradient-text mb-6 sm:mb-8">The Challenge</h2>
              <p className="text-3xl sm:text-4xl text-white/70 mb-8 sm:mb-10 leading-relaxed">
                In insured electronics repair, efficiency isn't optional—it's survival. Device Doctor faced mounting pressure from manual processes that couldn't scale with demand.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="glass p-6 sm:p-8 rounded-2xl border border-white/10">
                <div className="flex items-center mb-4">
                  <X className="w-6 h-6 text-red-400 mr-3 flex-shrink-0" />
                  <h3 className="text-3xl sm:text-4xl font-bold text-white">Manual Claim Processing</h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Hundreds of monthly claims arriving in various formats (PDFs, emails, forms) required tedious manual data extraction, causing delays and potential errors.
                </p>
              </div>

              <div className="glass p-6 sm:p-8 rounded-2xl border border-white/10">
                <div className="flex items-center mb-4">
                  <X className="w-6 h-6 text-red-400 mr-3 flex-shrink-0" />
                  <h3 className="text-3xl sm:text-4xl font-bold text-white">Communication Overload</h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  23 daily routine inquiries overwhelmed admin and reception staff, pulling them away from essential, high-value work.
                </p>
              </div>

              <div className="glass p-6 sm:p-8 rounded-2xl border border-white/10">
                <div className="flex items-center mb-4">
                  <X className="w-6 h-6 text-red-400 mr-3 flex-shrink-0" />
                  <h3 className="text-3xl sm:text-4xl font-bold text-white">Follow-Up Fatigue</h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Manually tracking claims, chasing client responses, and monitoring courier deliveries consumed massive amounts of time and led to missed issues.
                </p>
              </div>

              <div className="glass p-6 sm:p-8 rounded-2xl border border-white/10">
                <div className="flex items-center mb-4">
                  <X className="w-6 h-6 text-red-400 mr-3 flex-shrink-0" />
                  <h3 className="text-3xl sm:text-4xl font-bold text-white">Slow Parts Sourcing</h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Manually requesting quotes from suppliers and managing inventory was inefficient, extending repair turnaround times significantly.
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
            <h2 className="text-6xl sm:text-7xl lg:text-7xl font-bold gradient-text mb-4 sm:mb-6">The Solution: Industry-First Automation</h2>
            <p className="text-3xl sm:text-4xl text-white/70 max-w-3xl mx-auto mb-10 sm:mb-12">
              We didn't offer generic solutions. Using the 80/20 rule, we identified and automated the processes delivering the biggest impact, transforming bottlenecks into competitive advantages.
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
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-white/60 hover:text-white/80'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6 sm:p-8 lg:p-12">
              {activeTab === 'claim-processing' && (
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-3">Automated Data Extraction & Integration</h3>
                    <p className="text-3xl sm:text-4xl text-white/70 leading-relaxed mb-4">
                      Our system automatically extracts and formats essential information from any claim format—PDF, email, or form—and seamlessly integrates it into Device Doctor's workshop management system. No more manual data entry, no more errors.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-3">Streamlined Client Onboarding</h3>
                    <p className="text-3xl sm:text-4xl text-white/70 leading-relaxed mb-4">
                      As soon as claim data is saved, clients are instantly contacted via email and SMS with clear next steps. Our smart forms use conditional logic to automatically book couriers, share office details, or schedule mobile technicians based on client choices and their specific location.
                    </p>
                  </div>
                  <div className="glass bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 sm:p-6">
                    <p className="text-white/90 leading-relaxed">
                      <strong className="text-cyan-400">The Result:</strong> A 24/7 automated workflow that processes hundreds of claims monthly with minimal manual effort, leading to faster resolutions and happier clients.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'communication' && (
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">AI Chatbot: 24/7 Inquiry Resolution</h3>
                    <p className="text-2xl sm:text-3xl text-white/70 leading-relaxed mb-4">
                      We conducted an 80/20 analysis of common inquiries and built an AI chatbot that handles the vast majority instantly. It provides accurate responses on claim status, repair processes, and booking options around the clock. For complex issues, it seamlessly hands off to human team members with all context preserved.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Automatic Follow-ups & Escalation</h3>
                    <p className="text-2xl sm:text-3xl text-white/70 leading-relaxed mb-4">
                      Our system monitors client interactions (email opens, form completions) and sends polite, automated reminders to clients who haven't responded. After a set time without response, claims are automatically flagged and escalated to a manager. Real-time courier tracking ensures delivery delays are immediately flagged.
                    </p>
                  </div>
                  <div className="glass bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 sm:p-6">
                    <p className="text-white/90 leading-relaxed">
                      <strong className="text-cyan-400">The Result:</strong> Daily inquiries dropped from 23 to just 3, freeing reception staff and giving a skilled manager 30% more capacity to focus on strategic work.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'inventory' && (
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Automated Quote Management</h3>
                    <p className="text-2xl sm:text-3xl text-white/70 leading-relaxed mb-4">
                      When a specialized part is needed, our system automatically sends quote requests to multiple pre-approved suppliers. Automated reminders are sent to suppliers who don't respond, eliminating the time spent chasing quotes manually.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Centralized Quote Comparison</h3>
                    <p className="text-2xl sm:text-3xl text-white/70 leading-relaxed mb-4">
                      All quotes are automatically collected in a central hub, making it easy for the team to compare options side-by-side and make informed decisions quickly. This ensures the best pricing while minimizing repair turnaround times.
                    </p>
                  </div>
                  <div className="glass bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 sm:p-6">
                    <p className="text-white/90 leading-relaxed">
                      <strong className="text-cyan-400">The Result:</strong> Faster part sourcing, enhanced cost control through competitive quoting, and dramatically less manual administrative work.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-6 sm:h-10 mb-4 sm:mb-6"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div>
              <h2 className="text-5xl sm:text-6xl lg:text-6xl font-bold gradient-text mb-4 sm:mb-6">Built by Industry Insiders</h2>
              <p className="text-2xl sm:text-3xl text-white/70 mb-4 sm:mb-6 leading-relaxed">
                The Automators was founded by the same visionary who built Device Doctor into a trusted name in the industry. We understand these challenges because we've lived them firsthand—scaling operations, managing client expectations, and navigating the complexities of insured electronics repair.
              </p>
              <p className="text-2xl sm:text-3xl text-white/70 leading-relaxed">
                Unlike generic automation firms, we bring deep industry insights to every project. We apply proven business principles like the 80/20 rule to focus on the processes that deliver maximum impact. We deliver solutions that work in the real world, not just in theory.
              </p>
            </div>
            <div className="glass p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">With our help:</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-white/80 text-2xl sm:text-3xl">Your team will focus on high-value strategic work instead of repetitive tasks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-white/80 text-2xl sm:text-3xl">Your clients will experience faster, more reliable service at every touchpoint</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-white/80 text-2xl sm:text-3xl">Your operations will scale effortlessly without proportional cost increases</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-white/80 text-2xl sm:text-3xl">Your business will run smoothly with dramatically improved profitability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">Ready to Transform Your Operations?</h2>
              <div className="max-w-md mx-auto text-2xl sm:text-3xl space-y-2 sm:space-y-3 mb-8 sm:mb-10">
                <p className="text-white/70">
                  Manual processes slowing you down
                </p>
                <p className="text-white/70">
                  Team overwhelmed by routine inquiries
                </p>
                <p className="text-white/70">
                  High operational costs cutting into profits
                </p>
                <p className="text-white/70">
                  Inconsistent customer experience
                </p>
              </div>
              <p className="text-2xl sm:text-3xl lg:text-3xl text-white/80 mb-6">
                Let us help you achieve the same results. Our solutions are budget-friendly, require no long-term contracts, and are designed to empower your business from day one.
              </p>
              <p className="text-xl sm:text-2xl text-cyan-400 font-medium mb-8">
                Mention this case study when booking to claim your discount
              </p>
              
              <button
                onClick={handleGetStarted}
                className="btn-3d bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full inline-flex items-center justify-center space-x-3 text-xl sm:text-2xl font-bold hover:scale-105 transition-all shadow-lg hover:shadow-xl"
              >
                <span>Get 50% Off</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

