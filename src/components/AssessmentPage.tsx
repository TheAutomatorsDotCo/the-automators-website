import React, { useState, useEffect } from 'react';
import { CheckCircle2, X, ArrowRight, AlertCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';

type AnswerType = 'yes' | 'no' | null;

export function AssessmentPage() {
  const [answers, setAnswers] = useState<Record<number, AnswerType>>({});
  const [currentBatch, setCurrentBatch] = useState(0);
  const [isAnimating, setIsAnimating] = useState<number | null>(null);

  const painPoints = [
    'Spending hours on manual data entry',
    'Juggling multiple software systems that don\'t talk to each other',
    'Missing important deadlines because tasks fall through the cracks',
    'Working evenings and weekends to keep up with admin',
    'Struggling to onboard new team members because processes aren\'t documented',
    'Making errors due to repetitive, mind-numbing tasks',
    'Unable to find important documents when you need them',
    'Spending more time on admin than on your core business',
    'Feeling overwhelmed by the sheer volume of daily tasks',
    'Losing customers due to slow response times',
  ];

  const handleAnswer = (index: number, answer: AnswerType) => {
    setAnswers((prev) => ({ ...prev, [index]: answer }));
    
    // Show the answer briefly before fading out
    setTimeout(() => {
      setIsAnimating(index);
    }, 400);
    
    setTimeout(() => {
      setIsAnimating(null);
    }, 1200);
  };

  const getVisibleQuestions = () => {
    const startIndex = currentBatch * 4;
    const visibleIndices = [];
    
    for (let i = startIndex; i < painPoints.length && visibleIndices.length < 4; i++) {
      if (answers[i] === undefined) {
        visibleIndices.push(i);
      }
    }
    
    return visibleIndices;
  };

  const visibleQuestions = getVisibleQuestions();
  const totalAnswered = Object.keys(answers).length;
  const yesCount = Object.values(answers).filter(a => a === 'yes').length;
  const progress = (totalAnswered / painPoints.length) * 100;
  const automationNeed = (yesCount / painPoints.length) * 100;

  // Auto advance to next batch when current batch is complete
  useEffect(() => {
    if (visibleQuestions.length === 0 && totalAnswered < painPoints.length) {
      setTimeout(() => {
        setCurrentBatch(prev => prev + 1);
      }, 800);
    }
  }, [visibleQuestions.length, totalAnswered, painPoints.length]);

  const getResult = () => {
    if (yesCount === 0) {
      return {
        title: 'Looking Good!',
        message: 'Your business seems to be running smoothly, but there\'s always room for optimization.',
        color: 'from-green-500 to-emerald-500',
        icon: '✨',
        needLevel: 'Low',
      };
    } else if (yesCount <= 3) {
      return {
        title: 'Minor Improvements Needed',
        message: 'You have some pain points that automation could solve quickly.',
        color: 'from-yellow-500 to-orange-500',
        icon: '⚡',
        needLevel: 'Moderate',
      };
    } else if (yesCount <= 6) {
      return {
        title: 'Your Business Is Controlling You',
        message: 'Automation could save you significant time and reduce stress.',
        color: 'from-orange-500 to-red-500',
        icon: '🔥',
        needLevel: 'High',
      };
    } else {
      return {
        title: 'Your Business Definitely Owns You',
        message: 'You\'re drowning in admin work. It\'s time to take back control with automation.',
        color: 'from-red-500 to-rose-600',
        icon: '🚨',
        needLevel: 'Critical',
      };
    }
  };

  const result = totalAnswered === painPoints.length ? getResult() : null;
  const isComplete = totalAnswered === painPoints.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]">
      <SEO
        title="Free Automation Assessment"
        description="Discover which business processes you should automate first. Take our free assessment to identify time-saving opportunities in your business."
        path="/assessment"
        keywords="business assessment, automation assessment, workflow analysis, process evaluation, efficiency test"
      />
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="blob absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full"></div>
        <div className="blob absolute bottom-40 left-20 w-80 h-80 bg-indigo-500 rounded-full" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl relative z-10">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <div className="h-8 sm:h-10 mb-3 sm:mb-4"></div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl gradient-text mb-3 sm:mb-4 px-4">
              Does Your Business Own You?
            </h1>
            <p className="text-base sm:text-lg lg:text-lg text-white/60 px-4">
              Answer each question honestly. Tap ✓ if yes or ✗ if no.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-4 sm:mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-base sm:text-base text-white/60">Progress</span>
              <span className="text-base sm:text-base text-white font-medium">
                {totalAnswered} / {painPoints.length}
              </span>
            </div>
            <div className="h-2 sm:h-3 rounded-full glass border border-white/10 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Automation Need Meter */}
          <div className="glass border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 sm:mb-6">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-500 ${
                automationNeed > 60 ? 'text-red-400' :
                automationNeed > 30 ? 'text-orange-400' :
                totalAnswered > 0 ? 'text-green-400' : 'text-white/40'
              }`} />
              <span className="text-white font-medium text-base sm:text-base">Automation Need Level</span>
            </div>
            <div className="h-6 sm:h-8 rounded-full glass border border-white/10 overflow-hidden mb-1.5">
              <div 
                className={`h-full transition-all duration-500 ease-out ${
                  automationNeed > 60 ? 'bg-gradient-to-r from-orange-500 to-red-500' :
                  automationNeed > 30 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                  'bg-gradient-to-r from-green-500 to-emerald-500'
                }`}
                style={{ width: `${automationNeed}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-white/50">
              <span>Low Need</span>
              <span>{Math.round(automationNeed)}%</span>
              <span>Critical Need</span>
            </div>
          </div>

          {/* Assessment Questions */}
          {!isComplete && (
            <div className="glass border border-white/10 rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-6 lg:p-8 mb-8 min-h-[350px] sm:min-h-[400px]">
              <div className="space-y-3 sm:space-y-3">
                {visibleQuestions.map((index) => {
                  const answer = answers[index];
                  const isAnswered = answer !== undefined;
                  
                  return (
                    <div
                      key={index}
                      className={`border border-white/10 glass rounded-xl sm:rounded-xl p-3 sm:p-4 transition-all duration-700 hover:border-white/20 ${
                        isAnimating === index 
                          ? 'opacity-0 scale-95' 
                          : 'opacity-100 scale-100'
                      } ${
                        isAnswered && !isAnimating
                          ? answer === 'yes' 
                            ? 'bg-green-500/10 border-green-500/30'
                            : 'bg-red-500/10 border-red-500/30'
                          : ''
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="flex-1 text-base sm:text-lg text-white leading-snug">
                          {painPoints[index]}
                        </span>
                        <div className="flex gap-2 sm:gap-2 flex-shrink-0">
                          <button
                            onClick={() => handleAnswer(index, 'yes')}
                            disabled={isAnswered}
                            className={`glass border border-white/20 hover:border-white/40 hover:bg-white/10 text-white w-11 h-11 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-all group disabled:opacity-50 ${
                              answer === 'yes' ? 'bg-green-500/20 border-green-500/50' : ''
                            }`}
                            aria-label="Yes"
                          >
                            <CheckCircle2 className={`w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-all ${
                              answer === 'yes' ? 'text-green-400' : 'text-white/80 group-hover:text-white'
                            }`} />
                          </button>
                          <button
                            onClick={() => handleAnswer(index, 'no')}
                            disabled={isAnswered}
                            className={`glass border border-white/20 hover:border-white/40 hover:bg-white/10 text-white w-11 h-11 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-all group disabled:opacity-50 ${
                              answer === 'no' ? 'bg-red-500/20 border-red-500/50' : ''
                            }`}
                            aria-label="No"
                          >
                            <X className={`w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-all ${
                              answer === 'no' ? 'text-red-400' : 'text-white/80 group-hover:text-white'
                            }`} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {visibleQuestions.length === 0 && totalAnswered < painPoints.length && (
                <div className="flex items-center justify-center h-[300px]">
                  <div className="text-center">
                    <div className="animate-spin w-8 h-8 sm:w-12 sm:h-12 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-white/60 text-base sm:text-lg">Loading next questions...</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Results */}
          {result && isComplete && (
            <div className="glass border border-white/10 rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-6 lg:p-8 mb-8">
              <div className="mb-6 sm:mb-8 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl">
                <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className={`text-3xl sm:text-4xl lg:text-4xl p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${result.color}`}>
                    {result.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-xl sm:text-2xl lg:text-2xl mb-1 sm:mb-2">{result.title}</h3>
                    <p className="text-white/70 text-base sm:text-lg lg:text-lg">{result.message}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="glass border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
                    <div className="text-3xl sm:text-4xl lg:text-4xl font-bold text-green-400 mb-1">
                      {yesCount}
                    </div>
                    <div className="text-base sm:text-base text-white/60">Pain Points</div>
                  </div>
                  <div className="glass border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
                    <div className="text-3xl sm:text-4xl lg:text-4xl font-bold text-purple-400 mb-1">
                      {Math.round(automationNeed)}%
                    </div>
                    <div className="text-base sm:text-base text-white/60">Need Level</div>
                  </div>
                  <div className="glass border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
                    <div className="text-xl sm:text-2xl lg:text-2xl font-bold text-orange-400 mb-1">
                      {result.needLevel}
                    </div>
                    <div className="text-base sm:text-base text-white/60">Priority</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link
                    to="/services"
                    className="flex-1 btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-full inline-flex items-center justify-center space-x-2 text-base sm:text-lg"
                  >
                    <span>See How We Can Help</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full glass border border-white/20 text-white hover:bg-white/5 transition-all text-base sm:text-lg text-center"
                  >
                    Get Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Info Box */}
          <div className="glass border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-xl">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500">
                <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <p className="text-white/80 text-base sm:text-lg lg:text-lg">
                <span className="text-white font-medium">Good news:</span> Every item you checked can be solved with the right automation strategy. We've helped hundreds of businesses just like yours reclaim their time and sanity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
