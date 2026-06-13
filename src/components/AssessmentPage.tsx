import React, { useState } from 'react';
import { ArrowRight, Bot, Phone, Zap, Check, Info } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { SEO } from './SEO';
import { StarsCanvas } from './StarBackground';
import { saveLeadData } from '../utils/leadData';

type ServiceCategory = 'automation' | 'chatbots' | 'voice-agents';

interface PainPoint {
  text: string;
  categories: ServiceCategory[];
}

const BATCH_SIZE = 6;

export function AssessmentPage() {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [revealCount, setRevealCount] = useState<number>(BATCH_SIZE);
  const [showResults, setShowResults] = useState(false);

  const painPoints: PainPoint[] = [
    { text: 'We need to handle customer inquiries 24/7 without hiring more staff', categories: ['chatbots', 'voice-agents'] },
    { text: 'Spending too much time on repetitive data entry and form filling', categories: ['automation'] },
    { text: 'Qualifying and routing leads automatically', categories: ['automation', 'chatbots'] },
    { text: 'We need to answer common questions instantly on our website', categories: ['chatbots'] },
    { text: 'Too much back-and-forth when scheduling appointments', categories: ['automation', 'chatbots'] },
    { text: 'Missing calls when our team is busy', categories: ['voice-agents'] },
    { text: 'Keeping up with follow-ups and reminders', categories: ['automation'] },
    { text: 'Processing orders and payments takes too much time', categories: ['automation'] },
    { text: 'Struggling to provide customer support during peak hours', categories: ['chatbots', 'voice-agents'] },
    { text: 'Our software tools don\'t talk to each other', categories: ['automation'] },
    { text: 'Screening and transferring calls based on customer needs', categories: ['voice-agents'] },
    { text: 'Our response time to customer inquiries is too slow', categories: ['chatbots', 'voice-agents'] },
    { text: 'We need to collect customer information before speaking to them', categories: ['chatbots', 'voice-agents'] },
    { text: 'Manually creating invoices and sending payment reminders', categories: ['automation'] },
    { text: 'We can\'t handle multiple customer conversations at once', categories: ['chatbots'] },
    { text: 'Customers get inconsistent answers to common questions', categories: ['chatbots', 'voice-agents'] },
    { text: 'Our team is buried in repetitive administrative tasks', categories: ['automation'] },
    { text: 'Website visitors leave without engaging with us', categories: ['chatbots'] },
    { text: 'Managing bookings and cancellations is overwhelming', categories: ['automation', 'chatbots'] },
    { text: 'Missing calls and messages after business hours', categories: ['voice-agents'] },
  ];

  const toggleOption = (index: number) => {
    setSelectedOptions(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleShowMore = () => {
    setRevealCount(prev => Math.min(prev + BATCH_SIZE, painPoints.length));
  };

  const handleStartOver = () => {
    setShowResults(false);
    setSelectedOptions([]);
    setRevealCount(BATCH_SIZE);
  };

  const getServiceRecommendations = () => {
    const categoryCounts: Record<ServiceCategory, number> = {
      'automation': 0,
      'chatbots': 0,
      'voice-agents': 0,
    };

    selectedOptions.forEach(index => {
      painPoints[index].categories.forEach(category => {
        categoryCounts[category]++;
      });
    });

    return categoryCounts;
  };

  const isComplete = showResults && selectedOptions.length > 0;
  const serviceRecommendations = isComplete ? getServiceRecommendations() : null;

  const handleContactNavigation = () => {
    if (serviceRecommendations) {
      // Save assessment data to localStorage
      const selectedChallenges = selectedOptions.map(index => painPoints[index].text);

      saveLeadData({
        source: 'assessment',
        assessment: {
          selectedChallenges,
          serviceRecommendations,
          timestamp: new Date().toISOString(),
        },
      });

      // Navigate to contact page
      navigate('/contact');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]">
      <SEO
        title="Free Automation Assessment"
        description="Discover which business processes you should automate first. Take our free assessment to identify time-saving opportunities in your business."
        path="/assessment"
        keywords="business assessment, automation assessment, workflow analysis, process evaluation, efficiency test"
      />
      {/* Spinning Stars Background */}
      <StarsCanvas />

      <div className="relative pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-[720px] relative z-10">
          {/* Progress */}
          <div className="flex items-center gap-4 mb-9 sm:mb-10">
            <span className="text-xs font-bold tracking-[0.14em] uppercase text-white/40 whitespace-nowrap">
              Step {isComplete ? 2 : 1} of 2
            </span>
            <div className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500 ease-out"
                style={{ width: isComplete ? '100%' : '50%' }}
              />
            </div>
          </div>

          {/* Selection step */}
          {!isComplete && (
            <>
              {/* Headline */}
              <div className="text-center mb-10 sm:mb-12">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold gradient-text px-2">
                  What challenges are you facing?
                </h1>
                <p className="text-base sm:text-lg text-white/60 mt-4">
                  Select all that apply.
                </p>
              </div>

              {/* Counter */}
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-white/90">Selected</span>
                <span
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                    selectedOptions.length > 0
                      ? 'text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-[0_6px_18px_-6px_rgba(139,92,246,0.6)]'
                      : 'text-white/50 bg-white/[0.06]'
                  }`}
                >
                  {selectedOptions.length} selected
                </span>
              </div>
              <div className="h-px bg-white/10 mt-3.5 mb-5" />

              {/* Cards */}
              <div className="assessment-list">
                {painPoints.slice(0, revealCount).map((point, index) => {
                  const isSel = selectedOptions.includes(index);
                  return (
                    <button
                      key={index}
                      onClick={() => toggleOption(index)}
                      aria-pressed={isSel}
                      className={`assessment-card ${
                        isSel ? 'assessment-card--selected' : ''
                      } flex items-center gap-4 p-4 sm:p-5 text-left w-full`}
                    >
                      <span className={`assessment-checkbox ${isSel ? 'assessment-checkbox--checked' : ''}`}>
                        <Check strokeWidth={3.5} />
                      </span>
                      <span
                        className={`text-base font-medium leading-snug ${
                          isSel ? 'text-white' : 'text-white/80'
                        }`}
                      >
                        {point.text}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Show more */}
              {revealCount < painPoints.length && (
                <div className="text-center mt-6">
                  <button
                    onClick={handleShowMore}
                    className="text-sm font-medium text-white/50 hover:text-white/80 transition-colors border-b border-white/20 pb-px"
                  >
                    Show more challenges
                  </button>
                </div>
              )}

              {/* Primary CTA */}
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => selectedOptions.length > 0 && setShowResults(true)}
                  disabled={selectedOptions.length === 0}
                  className={`btn-3d w-full max-w-[440px] inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ${
                    selectedOptions.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <span>See my recommendations</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Secondary text link */}
              <div className="text-center mt-5">
                <Link
                  to="/contact"
                  className="text-sm font-medium text-white/50 hover:text-white/80 transition-colors border-b border-white/20 pb-px"
                >
                  None of these apply
                </Link>
              </div>

              {/* Tip */}
              <div className="flex items-start gap-3 mt-12 max-w-[560px] mx-auto">
                <Info className="w-[19px] h-[19px] text-white/45 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="text-sm leading-relaxed text-white/45">
                  Select all the challenges that apply. We'll recommend the best solutions based on your needs.
                </p>
              </div>
            </>
          )}

          {/* Results */}
          {serviceRecommendations && isComplete && (
            <>
              {/* Header */}
              <div className="text-center mb-8 sm:mb-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold gradient-text px-2">
                  Your personalized recommendations
                </h1>
                <p className="text-white/60 text-base sm:text-lg mt-4">
                  Based on your selections, here are the services that can help transform your business.
                </p>
              </div>

              {/* Service Recommendations */}
              <div className="assessment-list mb-6">
                {serviceRecommendations.automation > 0 && (
                  <div className="assessment-card p-5 sm:p-6 rounded-[18px]">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex-shrink-0">
                        <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl sm:text-2xl font-semibold mb-2">Workflow Automation</h3>
                        <p className="text-white/60 text-base sm:text-lg mb-3">
                          Automate repetitive tasks, connect your tools, and streamline your operations.
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="h-2 flex-1 rounded-full bg-white/10 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-1000"
                              style={{ width: `${(serviceRecommendations.automation / selectedOptions.length) * 100}%` }}
                            />
                          </div>
                          <span className="text-white/50 text-sm">{serviceRecommendations.automation} match{serviceRecommendations.automation !== 1 ? 'es' : ''}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {serviceRecommendations.chatbots > 0 && (
                  <div className="assessment-card p-5 sm:p-6 rounded-[18px]">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex-shrink-0">
                        <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl sm:text-2xl font-semibold mb-2">AI Chatbots</h3>
                        <p className="text-white/60 text-base sm:text-lg mb-3">
                          Provide instant customer support, qualify leads, and answer questions 24/7.
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="h-2 flex-1 rounded-full bg-white/10 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-1000"
                              style={{ width: `${(serviceRecommendations.chatbots / selectedOptions.length) * 100}%` }}
                            />
                          </div>
                          <span className="text-white/50 text-sm">{serviceRecommendations.chatbots} match{serviceRecommendations.chatbots !== 1 ? 'es' : ''}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {serviceRecommendations['voice-agents'] > 0 && (
                  <div className="assessment-card p-5 sm:p-6 rounded-[18px]">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex-shrink-0">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl sm:text-2xl font-semibold mb-2">Voice Agents</h3>
                        <p className="text-white/60 text-base sm:text-lg mb-3">
                          Handle phone calls, schedule appointments, and provide phone support automatically.
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="h-2 flex-1 rounded-full bg-white/10 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-pink-500 to-rose-500 transition-all duration-1000"
                              style={{ width: `${(serviceRecommendations['voice-agents'] / selectedOptions.length) * 100}%` }}
                            />
                          </div>
                          <span className="text-white/50 text-sm">{serviceRecommendations['voice-agents']} match{serviceRecommendations['voice-agents'] !== 1 ? 'es' : ''}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Selected Items Summary */}
              <div className="assessment-card p-5 sm:p-6 rounded-[18px] mb-8">
                <h3 className="text-white text-base sm:text-lg font-semibold mb-4">Your selected challenges</h3>
                <div className="space-y-2.5">
                  {selectedOptions.map((index) => (
                    <div key={index} className="flex items-start gap-2.5 text-white/70 text-sm sm:text-base">
                      <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-1" strokeWidth={3} />
                      <span>{painPoints[index].text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/services"
                  className="flex-1 btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-4 rounded-full inline-flex items-center justify-center gap-2 text-base sm:text-lg font-semibold"
                >
                  <span>Explore our services</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button
                  onClick={handleContactNavigation}
                  className="flex-1 px-6 py-4 rounded-full btn-secondary transition-all text-base sm:text-lg font-semibold text-center"
                >
                  Get free consultation
                </button>
              </div>

              {/* Start over */}
              <div className="text-center mt-6">
                <button
                  onClick={handleStartOver}
                  className="text-sm font-medium text-white/50 hover:text-white/80 transition-colors border-b border-white/20 pb-px"
                >
                  Start over
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
