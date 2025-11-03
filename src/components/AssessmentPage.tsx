import React, { useState, useEffect } from 'react';
import { ArrowRight, AlertCircle, Bot, Phone, Zap, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { SEO } from './SEO';
import { StarsCanvas } from './StarBackground';
import { saveLeadData } from '../utils/leadData';

type ServiceCategory = 'automation' | 'chatbots' | 'voice-agents';

interface PainPoint {
  text: string;
  categories: ServiceCategory[];
}

export function AssessmentPage() {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [availableOptions, setAvailableOptions] = useState<number[]>([]);
  const [visibleOptions, setVisibleOptions] = useState<number[]>([]);
  const [fadingOut, setFadingOut] = useState<number | null>(null);

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

  // Initialize available options on mount
  useEffect(() => {
    const allIndices = painPoints.map((_, index) => index);
    setAvailableOptions(allIndices);
    setVisibleOptions(allIndices.slice(0, 4));
  }, []);

  const handleSelectOption = (index: number) => {
    // Start fade out animation
    setFadingOut(index);
    
    // After fade animation, update state
    setTimeout(() => {
      setSelectedOptions(prev => [...prev, index]);
      
      // Find next available option
      const nextAvailable = availableOptions.find(
        i => i !== index && !visibleOptions.includes(i) && !selectedOptions.includes(i)
      );
      
      // Update visible options
      setVisibleOptions(prev => {
        const updated = prev.filter(i => i !== index);
        if (nextAvailable !== undefined) {
          updated.push(nextAvailable);
        }
        return updated;
      });
      
      // Update available options
      setAvailableOptions(prev => prev.filter(i => i !== index));
      
      setFadingOut(null);
    }, 500);
  };

  const handleNext = () => {
    // Skip current visible options and show next batch
    const newAvailable = availableOptions.filter(i => !visibleOptions.includes(i));
    setAvailableOptions(newAvailable);
    setVisibleOptions(newAvailable.slice(0, 4));
  };

  const progress = (selectedOptions.length / painPoints.length) * 100;
  const isComplete = selectedOptions.length > 0 && availableOptions.length === 0;

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
        <div className="container mx-auto max-w-4xl relative z-10">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <div className="h-8 sm:h-10 mb-3 sm:mb-4"></div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl gradient-text mb-3 sm:mb-4 px-4">
              What challenges are you facing?
            </h1>
            <p className="text-base sm:text-lg lg:text-lg text-white/60 px-4">
              Select all that apply. Click on any option that resonates with your business needs.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-4 sm:mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-base sm:text-base text-white/60">Selected</span>
              <span className="text-base sm:text-base text-white font-medium">
                {selectedOptions.length} option{selectedOptions.length !== 1 ? 's' : ''}
              </span>
            </div>
            <div className="h-2 sm:h-3 rounded-full glass border border-white/10 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Assessment Options */}
          {!isComplete && (
            <>
              <div className="glass border border-white/10 rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-6 lg:p-8 mb-4 min-h-[350px] sm:min-h-[400px]">
                <div className="space-y-3 sm:space-y-3">
                  {visibleOptions.map((index) => {
                    return (
                      <button
                        key={index}
                        onClick={() => handleSelectOption(index)}
                        disabled={fadingOut === index}
                        className={`w-full border border-white/10 glass rounded-xl sm:rounded-xl p-4 sm:p-5 transition-all duration-500 hover:border-white/30 hover:bg-white/5 text-left group ${
                          fadingOut === index 
                            ? 'opacity-0 scale-95' 
                            : 'opacity-100 scale-100'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="flex-1 text-base sm:text-lg text-white leading-snug">
                            {painPoints[index].text}
                          </span>
                          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white/40 group-hover:text-white/80 group-hover:translate-x-1 transition-all flex-shrink-0" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
              
              {/* Next Button */}
              {visibleOptions.length > 0 && (
                <div className="flex justify-center mb-8">
                  <button
                    onClick={handleNext}
                    className="px-6 sm:px-8 py-3 sm:py-4 rounded-full glass border border-white/20 text-white hover:bg-white/5 transition-all text-base sm:text-lg inline-flex items-center gap-2"
                  >
                    <span>None of these apply</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              )}
            </>
          )}

          {/* Results */}
          {serviceRecommendations && isComplete && (
            <div className="glass border border-white/10 rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-6 lg:p-8 mb-8">
              {/* Header */}
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl gradient-text mb-3">
                  Your Personalized Recommendations
                </h2>
                <p className="text-white/70 text-base sm:text-lg">
                  Based on your selections, here are the services that can help transform your business
                </p>
              </div>

              {/* Service Recommendations */}
              <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
                {serviceRecommendations.automation > 0 && (
                  <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/30">
                    <div className="flex items-start space-x-3 sm:space-x-4 mb-3">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500">
                        <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl sm:text-2xl mb-2">Workflow Automation</h3>
                        <p className="text-white/70 text-base sm:text-lg mb-3">
                          Automate repetitive tasks, connect your tools, and streamline your operations.
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="h-2 flex-1 rounded-full bg-white/10 overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-1000"
                              style={{ width: `${(serviceRecommendations.automation / selectedOptions.length) * 100}%` }}
                            />
                          </div>
                          <span className="text-white/60 text-sm">{serviceRecommendations.automation} match{serviceRecommendations.automation !== 1 ? 'es' : ''}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {serviceRecommendations.chatbots > 0 && (
                  <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
                    <div className="flex items-start space-x-3 sm:space-x-4 mb-3">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500">
                        <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl sm:text-2xl mb-2">AI Chatbots</h3>
                        <p className="text-white/70 text-base sm:text-lg mb-3">
                          Provide instant customer support, qualify leads, and answer questions 24/7.
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="h-2 flex-1 rounded-full bg-white/10 overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-1000"
                              style={{ width: `${(serviceRecommendations.chatbots / selectedOptions.length) * 100}%` }}
                            />
                          </div>
                          <span className="text-white/60 text-sm">{serviceRecommendations.chatbots} match{serviceRecommendations.chatbots !== 1 ? 'es' : ''}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {serviceRecommendations['voice-agents'] > 0 && (
                  <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/30">
                    <div className="flex items-start space-x-3 sm:space-x-4 mb-3">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xl sm:text-2xl mb-2">Voice Agents</h3>
                        <p className="text-white/70 text-base sm:text-lg mb-3">
                          Handle phone calls, schedule appointments, and provide phone support automatically.
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="h-2 flex-1 rounded-full bg-white/10 overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-pink-500 to-rose-500 transition-all duration-1000"
                              style={{ width: `${(serviceRecommendations['voice-agents'] / selectedOptions.length) * 100}%` }}
                            />
                          </div>
                          <span className="text-white/60 text-sm">{serviceRecommendations['voice-agents']} match{serviceRecommendations['voice-agents'] !== 1 ? 'es' : ''}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Selected Items Summary */}
              <div className="mb-6 sm:mb-8 p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                <h3 className="text-white text-lg sm:text-xl mb-3 sm:mb-4">Your Selected Challenges:</h3>
                <div className="space-y-2">
                  {selectedOptions.map((index) => (
                    <div key={index} className="flex items-start space-x-2 text-white/70 text-sm sm:text-base">
                      <span className="text-purple-400 mt-1">✓</span>
                      <span>{painPoints[index].text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/services"
                  className="flex-1 btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-full inline-flex items-center justify-center space-x-2 text-base sm:text-lg"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <button
                  onClick={handleContactNavigation}
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full glass border border-white/20 text-white hover:bg-white/5 transition-all text-base sm:text-lg text-center"
                >
                  Get Free Consultation
                </button>
              </div>
            </div>
          )}

          {/* Info Box */}
          {!isComplete && (
            <div className="glass border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-xl">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <img src="/assessment-info.png" alt="Assessment Info" className="w-12 h-12 sm:w-16 sm:h-16" />
                </div>
                <p className="text-white/80 text-base sm:text-lg lg:text-lg">
                  <span className="text-white font-medium">Tip:</span> Select all the challenges that apply to your business. We'll recommend the best solutions based on your specific needs.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
