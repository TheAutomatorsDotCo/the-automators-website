import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Globe, Package, CheckCircle, Zap, Users, ShoppingBag } from 'lucide-react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { SEO } from '../SEO';
import { StarsCanvas } from '../StarBackground';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

export function InEnOmCaseStudy() {
  const [activeTab, setActiveTab] = useState('platform');

  // Chart data
  const featuresData = {
    labels: ['Features Delivered', 'Target'],
    datasets: [{
      label: 'Platform Features',
      data: [15, 15],
      backgroundColor: ['#10b981', '#1a1a2e'],
      borderColor: ['#10b981', '#2d2d44'],
      borderWidth: 2,
      borderRadius: 8,
    }],
  };

  const integrationsData = {
    labels: ['Complete', 'In Progress'],
    datasets: [{
      data: [100, 0],
      backgroundColor: ['#f59e0b', '#1a1a2e'],
      borderColor: ['#f59e0b', '#2d2d44'],
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
        borderColor: '#10b981',
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
        max: 20,
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
    { id: 'platform', label: '1. Platform Features' },
    { id: 'technical', label: '2. Technical Excellence' },
    { id: 'business', label: '3. Business Model' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e] pt-32">
      <SEO
        title="IN&OM Suid-Afrika Case Study - Comprehensive Business Platform Development"
        description="Discover how The Automators built a comprehensive business platform for IN&OM Suid-Afrika, featuring directory, job portal, marketplace, and community sections with full automation integration."
        path="/case-studies/in-en-om"
        keywords="web platform development, business directory development, job portal development, marketplace platform, React Firebase development, subscription platform"
      />
      <StarsCanvas />

      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-6 sm:pb-8">
        <Link
          to="/case-studies"
          className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition-colors text-2xl sm:text-3xl"
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
            src="/in-en-om-logo.png" 
            alt="IN&OM Suid-Afrika logo"
            className="h-24 sm:h-32 lg:h-40 w-auto object-contain"
          />
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          IN&OM Suid-Afrika: A <span className="gradient-text">Complete Digital Ecosystem</span>
        </h1>
        <p className="text-2xl sm:text-3xl lg:text-3xl text-white/70 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
          We built a comprehensive business platform for the Afrikaans-speaking community in South Africa, combining a business directory, job portal, marketplace, and community sections—all powered by intelligent automation and modern technology.
        </p>
        <a href="#impact" className="text-green-400 font-medium text-2xl sm:text-3xl hover:text-green-300 transition-colors">
          See what we delivered ↓
        </a>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="h-6 sm:h-10 mb-4 sm:mb-6"></div>
            <h2 className="text-5xl sm:text-6xl lg:text-6xl font-bold gradient-text mb-4 sm:mb-6">Project Delivery</h2>
            <p className="text-2xl sm:text-3xl text-white/70 max-w-3xl mx-auto mb-10 sm:mb-12">
              A complete end-to-end platform built from the ground up, delivering multiple revenue streams and serving an entire community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Features Card with Chart */}
            <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-5xl sm:text-6xl font-bold text-white mb-2">15+</h3>
              <p className="text-2xl sm:text-3xl text-white/70 mb-4 sm:mb-6">Major Features Built</p>
              <div className="h-40 sm:h-48">
                <Bar data={featuresData} options={barOptions} />
              </div>
            </div>

            {/* Integration Card with Chart */}
            <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-5xl sm:text-6xl font-bold text-white mb-2">100%</h3>
              <p className="text-2xl sm:text-3xl text-white/70 mb-4 sm:mb-6">Integration Complete</p>
              <div className="h-40 sm:h-48">
                <Doughnut data={integrationsData} options={doughnutOptions} />
              </div>
            </div>

            {/* Pages Card */}
            <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-center">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-green-400" />
              </div>
              <span className="text-5xl sm:text-6xl font-bold text-green-400 mb-3 sm:mb-4 text-center">13+</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center">Pages Developed</h3>
              <p className="text-2xl sm:text-3xl text-white/70 text-center">From homepage to admin panel, fully responsive across all devices.</p>
            </div>

            {/* Automation Card */}
            <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-center">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400" />
              </div>
              <span className="text-5xl sm:text-6xl font-bold text-amber-400 mb-3 sm:mb-4 text-center">15,000</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center">Monthly Automations</h3>
              <p className="text-2xl sm:text-3xl text-white/70 text-center">Automated email communications and feedback via webhook integration.</p>
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
              <h2 className="text-5xl sm:text-6xl lg:text-6xl font-bold gradient-text mb-6 sm:mb-8">The Challenge</h2>
              <p className="text-2xl sm:text-3xl text-white/70 mb-8 sm:mb-10 leading-relaxed">
                IN&OM Suid-Afrika needed a comprehensive digital platform to serve the Afrikaans-speaking business community. The challenge was to combine multiple complex systems into one cohesive, user-friendly platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="glass p-6 sm:p-8 rounded-2xl border border-white/10">
                <div className="flex items-center mb-4">
                  <Package className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Multi-Feature Platform</h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Building a business directory, job portal, marketplace, and community hub—all in one platform with seamless navigation.
                </p>
              </div>

              <div className="glass p-6 sm:p-8 rounded-2xl border border-white/10">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Subscription Management</h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Creating a flexible subscription system allowing businesses to purchase multiple packages with seamless payment integration.
                </p>
              </div>

              <div className="glass p-6 sm:p-8 rounded-2xl border border-white/10">
                <div className="flex items-center mb-4">
                  <ShoppingBag className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Content Management</h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Developing an intuitive system for businesses to manage profiles, offers, job listings, and marketplace items independently.
                </p>
              </div>

              <div className="glass p-6 sm:p-8 rounded-2xl border border-white/10">
                <div className="flex items-center mb-4">
                  <Zap className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Automation Integration</h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Integrating automated email communications triggered by platform events with a monthly capacity of 15,000 runs.
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
            <h2 className="text-5xl sm:text-6xl lg:text-6xl font-bold gradient-text mb-4 sm:mb-6">The Solution: A Complete Digital Ecosystem</h2>
            <p className="text-2xl sm:text-3xl text-white/70 max-w-3xl mx-auto mb-10 sm:mb-12">
              We delivered a fully-featured, scalable platform built with modern technology and best practices, designed to grow with the business.
            </p>
          </div>

          <div className="glass rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden">
            {/* Tabs */}
            <div className="flex flex-wrap border-b border-white/10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 sm:px-6 py-3 sm:py-4 font-medium transition-all text-2xl sm:text-3xl ${
                    activeTab === tab.id
                      ? 'text-green-400 border-b-2 border-green-400'
                      : 'text-white/60 hover:text-white/80'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6 sm:p-8 lg:p-12">
              {activeTab === 'platform' && (
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Business Directory & Profiles</h3>
                    <p className="text-2xl sm:text-3xl text-white/70 leading-relaxed mb-4">
                      Businesses can create comprehensive profiles with image uploads, social media integration, and detailed information. The directory features advanced search and filtering, making it easy for users to discover services.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Job Portal (Werksgeleenthede)</h3>
                    <p className="text-2xl sm:text-3xl text-white/70 leading-relaxed mb-4">
                      A complete job listing and application system with automated workflows. Employers can post positions, and job seekers can apply directly through the platform with automatic notification systems.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Marketplace (Markplein) & Special Offers</h3>
                    <p className="text-2xl sm:text-3xl text-white/70 leading-relaxed mb-4">
                      Businesses can list products and special offers (Winskopies) with image management and automatic optimization. Users can browse, filter, and discover deals from the community.
                    </p>
                  </div>
                  <div className="glass bg-green-500/10 border border-green-500/20 rounded-xl p-4 sm:p-6">
                    <p className="text-white/90 leading-relaxed">
                      <strong className="text-green-400">The Result:</strong> A complete platform serving multiple business needs in one unified, easy-to-use system with mobile-first design.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'technical' && (
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Modern Technology Stack</h3>
                    <p className="text-2xl sm:text-3xl text-white/70 leading-relaxed mb-4">
                      Built with React 18.3, TypeScript, and Vite for blazing-fast performance. TailwindCSS and ShadCN/UI ensure a beautiful, consistent design. Firebase Firestore provides a robust, scalable database with real-time capabilities.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Secure Authentication & Payments</h3>
                    <p className="text-2xl sm:text-3xl text-white/70 leading-relaxed mb-4">
                      Firebase Authentication manages user security with protected routes. PayFast integration enables seamless subscription payments with automatic success/failure handling and revenue tracking.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Advanced Features & Optimization</h3>
                    <p className="text-2xl sm:text-3xl text-white/70 leading-relaxed mb-4">
                      Automatic image optimization, real-time search and filtering, role-based access control, and webhook-triggered email automations. The admin panel provides complete control over content, users, and revenue tracking.
                    </p>
                  </div>
                  <div className="glass bg-green-500/10 border border-green-500/20 rounded-xl p-4 sm:p-6">
                    <p className="text-white/90 leading-relaxed">
                      <strong className="text-green-400">The Result:</strong> A lightning-fast, secure, and scalable platform built with enterprise-grade technology.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'business' && (
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Subscription Revenue Model</h3>
                    <p className="text-2xl sm:text-3xl text-white/70 leading-relaxed mb-4">
                      The platform generates revenue through four monthly subscription packages. Businesses can purchase multiple packages to access different features, creating flexible revenue streams that scale with the community.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Targeted Community Focus</h3>
                    <p className="text-2xl sm:text-3xl text-white/70 leading-relaxed mb-4">
                      Designed specifically for the Afrikaans-speaking business community in South Africa, the platform addresses unique cultural and language needs while providing comprehensive business tools and community engagement.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Scalable Growth Strategy</h3>
                    <p className="text-2xl sm:text-3xl text-white/70 leading-relaxed mb-4">
                      The architecture supports unlimited growth. As more businesses join, the platform becomes more valuable to the community, creating a network effect that drives organic growth and recurring revenue.
                    </p>
                  </div>
                  <div className="glass bg-green-500/10 border border-green-500/20 rounded-xl p-4 sm:p-6">
                    <p className="text-white/90 leading-relaxed">
                      <strong className="text-green-400">The Result:</strong> A sustainable business model that grows with the community while serving real business needs.
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
              <h2 className="text-5xl sm:text-6xl lg:text-6xl font-bold gradient-text mb-4 sm:mb-6">Full-Stack Development Excellence</h2>
              <p className="text-2xl sm:text-3xl text-white/70 mb-4 sm:mb-6 leading-relaxed">
                We don't just automate processes—we build complete digital platforms from the ground up. The IN&OM Suid-Afrika project showcases our ability to deliver complex, multi-featured platforms that combine beautiful design with powerful functionality.
              </p>
              <p className="text-2xl sm:text-3xl text-white/70 leading-relaxed">
                From concept to deployment, we handled every aspect: frontend development, backend architecture, database design, payment integration, automation setup, and ongoing support. One team, one vision, delivered on time.
              </p>
            </div>
            <div className="glass p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">With our help:</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-white/80 text-2xl sm:text-3xl">Launch complete digital platforms that serve your entire community</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-white/80 text-2xl sm:text-3xl">Build scalable subscription-based revenue streams</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-white/80 text-2xl sm:text-3xl">Integrate automation to reduce manual work and improve user experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-white/80 text-2xl sm:text-3xl">Get enterprise-grade technology at accessible pricing</span>
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">Ready to Build Your Digital Platform?</h2>
              <div className="max-w-md mx-auto text-2xl sm:text-3xl space-y-2 sm:space-y-3 mb-8 sm:mb-10">
                <p className="text-white/70">
                  Need a complete web platform built from scratch
                </p>
                <p className="text-white/70">
                  Want to launch a subscription-based business
                </p>
                <p className="text-white/70">
                  Looking for full-stack development expertise
                </p>
                <p className="text-white/70">
                  Need automation integrated into your platform
                </p>
              </div>
              <p className="text-2xl sm:text-3xl lg:text-3xl text-white/80 mb-4">
                Whether you need automation, a complete platform, or both—we've got you covered. No long-term contracts, just results.
              </p>
              <p className="text-2xl sm:text-3xl text-green-400 font-medium">
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

