import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BarChart3, TrendingUp, MessageSquare, DollarSign, CheckCircle } from 'lucide-react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { SEO } from '../SEO';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

export function PlatinumRepairsCaseStudy() {
  const [activeTab, setActiveTab] = useState('client-comms');

  // Chart data
  const timeSavedData = {
    labels: ['Time Saved', 'Other Tasks'],
    datasets: [{
      data: [30, 70],
      backgroundColor: ['#6366f1', '#1a1a2e'],
      borderColor: ['#6366f1', '#2d2d44'],
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
        borderColor: '#6366f1',
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
    { id: 'client-comms', label: '1. Client Communication' },
    { id: 'operations', label: '2. Operational Efficiency' },
    { id: 'philosophy', label: '3. Our Philosophy' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e] pt-32">
      <SEO
        title="Platinum Repairs Case Study - How We Save Hundreds of Hours Weekly"
        description="Discover how The Automators helped Platinum Repairs save hundreds of hours every week with AI automation, chatbots, and voice agents. Real results, real ROI."
        path="/case-studies/platinum-repairs"
        keywords="automation case study, business automation results, AI chatbot case study, workflow automation ROI, business process automation success"
      />

      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-6 sm:pb-8">
        <Link
          to="/case-studies"
          className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition-colors text-sm sm:text-base"
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
            src="/pr-logo.png" 
            alt="Platinum Repairs logo"
            className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          We Help Platinum Repairs Save <span className="gradient-text">Hundreds</span> of Hours Every Week
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
          Our client, Platinum Repairs, operates in the high-stakes insured electronics repair industry. We built the automation backbone that allows them to meet incredibly high expectations for precision, communication, and efficiency, helping them win multiple service awards from leading insurers.
        </p>
        <a href="#impact" className="text-indigo-400 font-medium text-base sm:text-lg hover:text-indigo-300 transition-colors">
          See the results ↓
        </a>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="h-6 sm:h-10 mb-4 sm:mb-6"></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4 sm:mb-6">The Tangible Impact</h2>
            <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto mb-10 sm:mb-12">
              Our automations aren't just about processes; they deliver real, measurable results. Here's a snapshot of the value we've unlocked for Platinum Repairs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Time Saved Card with Chart */}
            <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">30%</h3>
              <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6">Manager's Time Freed Up</p>
              <div className="h-40 sm:h-48">
                <Doughnut data={timeSavedData} options={doughnutOptions} />
              </div>
            </div>

            {/* Inquiries Reduction Card with Chart */}
            <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">87%</h3>
              <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6">Reduction in Daily Inquiries</p>
              <div className="h-40 sm:h-48">
                <Bar data={inquiriesData} options={barOptions} />
              </div>
            </div>

            {/* AI Chats Card */}
            <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-center">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <MessageSquare className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-400" />
              </div>
              <span className="text-4xl sm:text-5xl font-bold text-indigo-400 mb-3 sm:mb-4 text-center">200+</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center">AI Chats Monthly</h3>
              <p className="text-sm sm:text-base text-white/70 text-center">Our chatbot successfully handles over 200 client chats every month, providing instant answers 24/7.</p>
            </div>

            {/* Cost Savings Card */}
            <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-center">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <DollarSign className="w-10 h-10 sm:w-12 sm:h-12 text-green-400" />
              </div>
              <span className="text-4xl sm:text-5xl font-bold text-green-400 mb-3 sm:mb-4 text-center">R12,000</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center">Saved Per Month</h3>
              <p className="text-sm sm:text-base text-white/70 text-center">By reducing manual tasks and streamlining support, we save Platinum Repairs an estimated R12,000 in monthly operational costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section with Tabs */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="h-6 sm:h-10 mb-4 sm:mb-6"></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4 sm:mb-6">Our Solutions in Action</h2>
            <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto mb-10 sm:mb-12">
              We've implemented thousands of automations, big and small, to keep communication and systems perfectly in sync. Explore our key strategies, grouped by how they transform the business.
            </p>
          </div>

          <div className="glass rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden">
            {/* Tabs */}
            <div className="flex flex-wrap border-b border-white/10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 sm:px-6 py-3 sm:py-4 font-medium transition-all text-sm sm:text-base ${
                    activeTab === tab.id
                      ? 'text-indigo-400 border-b-2 border-indigo-400'
                      : 'text-white/60 hover:text-white/80'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6 sm:p-8 lg:p-12">
              {activeTab === 'client-comms' && (
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">AI Chatbot & Voice Agents</h3>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                      Our AI chatbot resolves the majority of common client questions 24/7, handling over 200 chats per month and reducing daily inquiries from 23 to just 3. For proactive outreach, our <strong className="text-white">AI Voice Agent calls clients</strong> to drive Google reviews and ensures every courtesy call is followed up, creating a seamless, professional experience that saves the team valuable time.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Automatic Emails & Follow-ups</h3>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                      Nothing slips through the cracks. If a client hasn't responded, our system sends polite reminders. It tracks courier progress in real-time and automatically flags any claim that stalls—whether due to client inaction, courier delays, or internal issues—escalating to a manager when necessary.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'operations' && (
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Insurance Claim Processing</h3>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                      We built a system that automatically extracts and formats data from hundreds of monthly claims—regardless of PDF, email, or form format. This data flows directly into the workshop system, and clients are instantly contacted via email and SMS with dynamic, location-aware smart forms to arrange assessments or repairs, 24/7.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Inventory & Parts Management</h3>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                      When a specialised part is needed, the system automatically requests quotes from multiple pre-approved suppliers. It sends timely follow-ups if suppliers don't respond and centralizes all quotes, allowing the team to compare options and reduce repair turnaround times without manually chasing suppliers.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'philosophy' && (
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Thousands of Automations</h3>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                      The solutions you see are just the highlights. The real power comes from the <strong className="text-white">thousands of micro-automations</strong> working tirelessly in the background. They keep communication logs updated, sync data between systems, and handle the small, repetitive tasks that would otherwise consume countless hours of admin time.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Our 80/20 Approach</h3>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                      We're not your average "online" automation agency. We're led by seasoned business leaders who have personally scaled operations. We leverage principles like the 80/20 rule to focus on delivering maximum value through intelligent, efficient solutions that solve the most critical 20% of problems causing 80% of the bottlenecks.
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4 sm:mb-6">Born from Your Exact Challenges</h2>
              <p className="text-base sm:text-lg text-white/70 mb-4 sm:mb-6 leading-relaxed">
                The Automators was founded by the same visionary who built Platinum Repairs. We've spent years perfecting the art of automating workflows for fast-paced, high-stakes businesses because we've lived those challenges firsthand.
              </p>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                Unlike generic firms, we bring deep industry insights to the table. We've personally navigated the challenges of client communication, process optimization, and scaling operations. We deliver solutions that work in the real world, not just in theory.
              </p>
            </div>
            <div className="glass p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">With our help:</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-white/80 text-base sm:text-lg">Your clients will enjoy smoother, faster service.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-white/80 text-base sm:text-lg">Your team will have time to focus on what truly matters.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-white/80 text-base sm:text-lg">Your business will run smoothly and improve profitability.</span>
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
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">Are you tired of these bottlenecks?</h2>
              <div className="max-w-md mx-auto text-base sm:text-lg space-y-2 sm:space-y-3 mb-8 sm:mb-10">
                <p className="text-white/70">
                  Slow operations from manual tasks
                </p>
                <p className="text-white/70">
                  Missed leads from clunky systems
                </p>
                <p className="text-white/70">
                  High admin costs cutting into profits
                </p>
                <p className="text-white/70">
                  Inconsistent customer service
                </p>
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-4">
                Let us help you streamline. Our solutions are budget-friendly, require no long-term contracts, and are designed to empower your business.
              </p>
              <p className="text-sm sm:text-base text-indigo-400 font-medium">
                Book a chat below and get 50% off your first 3 months (mention this case study for your discount)
              </p>
            </div>
            
            {/* Airtable Form Embed */}
            <div className="max-w-3xl mx-auto">
              <iframe 
                className="airtable-embed rounded-xl" 
                src="https://airtable.com/embed/appOPjh4b6moMoFw6/pagxWsYdS1xQWlg6h/form" 
                frameBorder="0" 
                onMouseWheel="" 
                width="100%" 
                height="1080" 
                style={{ background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.1)' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

