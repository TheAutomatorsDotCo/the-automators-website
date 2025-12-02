import React from 'react';
import { Link } from 'react-router-dom';
import { Workflow, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { SEO } from './SEO';
import { StarsCanvas } from './StarBackground';

const categories = [
  {
    id: 'automation',
    name: 'Workflow Automation',
    description: 'Custom automation solutions tailored to your unique business processes. Streamline operations, eliminate manual tasks, and scale efficiently.',
    icon: Workflow,
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    glowColor: 'shadow-purple-500/50',
    borderColor: 'border-purple-500/30',
    hoverBorder: 'hover:border-purple-500/60',
    pricing: 'Custom Pricing',
    path: '/pricing/automation',
  },
  {
    id: 'voice-agents',
    name: 'AI Voice Agents',
    description: 'AI-powered phone calls that sound natural. Automate customer follow-ups, appointment reminders, lead qualification, and review generation.',
    icon: Phone,
    gradient: 'from-pink-500 via-rose-500 to-orange-500',
    glowColor: 'shadow-pink-500/50',
    borderColor: 'border-pink-500/30',
    hoverBorder: 'hover:border-pink-500/60',
    pricing: 'From $99/month',
    path: '/pricing/voice-agents',
  },
  {
    id: 'chatbots',
    name: 'AI Chatbots',
    description: 'Intelligent 24/7 customer support across website, WhatsApp, and Facebook. Handle inquiries, qualify leads, and boost conversions automatically.',
    icon: MessageCircle,
    gradient: 'from-cyan-500 via-teal-500 to-emerald-500',
    glowColor: 'shadow-cyan-500/50',
    borderColor: 'border-cyan-500/30',
    hoverBorder: 'hover:border-cyan-500/60',
    pricing: 'From $99/month',
    path: '/pricing/chatbots',
  },
];

export function PricingLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]">
      <SEO
        title="Pricing | Automation, Voice Agents & Chatbots"
        description="Explore transparent pricing for our automation services. Choose from Workflow Automation, AI Voice Agents, or AI Chatbots. Custom solutions starting at $99/month."
        path="/pricing"
        keywords="automation pricing, voice agent pricing, chatbot pricing, AI services cost, business automation pricing"
      />
      <StarsCanvas />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center relative z-10">
          <div className="h-6 sm:h-10 mb-4 sm:mb-6"></div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl gradient-text mb-6">
            Choose Your Service
          </h1>
          <p className="text-xl sm:text-2xl text-white/60 max-w-3xl mx-auto mb-4">
            Select a service category below to explore detailed pricing options tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="relative pb-32 sm:pb-40 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.id}
                  to={category.path}
                  className={`group relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] glass border-2 ${category.borderColor} ${category.hoverBorder} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${category.glowColor} flex flex-col h-full`}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Card content */}
                  <div className="relative p-8 sm:p-10 flex flex-col flex-1">
                    {/* Icon and Title Combined */}
                    <div className={`inline-flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br ${category.gradient} text-white mb-6 self-start shadow-lg ${category.glowColor}`}>
                      <IconComponent className="w-8 h-8 flex-shrink-0" />
                      <h2 className="text-xl sm:text-2xl font-semibold">
                        {category.name}
                      </h2>
                    </div>
                    
                    {/* Description */}
                    <p className="text-white/60 text-lg mb-8">
                      {category.description}
                    </p>
                    
                    {/* Spacer - pushes bottom section to card bottom */}
                    <div className="flex-1"></div>
                    
                    {/* Bottom section: Pricing + CTA - always at bottom */}
                    <div className="space-y-6 mt-auto">
                      {/* Pricing badge */}
                      <div>
                        <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.gradient} bg-opacity-20 text-white font-semibold text-lg`}>
                          {category.pricing}
                        </span>
                      </div>
                      
                      {/* CTA */}
                      <div className="flex items-center text-white group-hover:text-purple-300 transition-colors">
                        <span className="font-semibold text-lg">View Pricing</span>
                        <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative pt-32 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl relative z-10 text-center">
          <div className="glass border border-white/10 rounded-3xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl text-white mb-4">Not sure which service you need?</h3>
            <p className="text-white/60 text-lg mb-6">
              Take our quick assessment to get personalized recommendations based on your business challenges.
            </p>
            <Link
              to="/assessment"
              className="inline-block btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 hover:scale-105 transition-all duration-300"
            >
              Take Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
