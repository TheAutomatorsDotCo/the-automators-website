import React, { useState } from 'react';
import { CheckCircle2, Circle, ArrowRight, Target, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from './SEO';

export function AssessmentPage() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

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

  const toggleItem = (index: number) => {
    setSelectedItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const getResult = () => {
    const count = selectedItems.length;
    if (count === 0) {
      return {
        title: 'Looking Good!',
        message: 'Your business seems to be running smoothly, but there\'s always room for optimization.',
        color: 'from-green-500 to-emerald-500',
        icon: '✨',
      };
    } else if (count <= 3) {
      return {
        title: 'Minor Improvements Needed',
        message: 'You have some pain points that automation could solve quickly.',
        color: 'from-yellow-500 to-orange-500',
        icon: '⚡',
      };
    } else if (count <= 6) {
      return {
        title: 'Your Business Is Controlling You',
        message: 'Automation could save you significant time and reduce stress.',
        color: 'from-orange-500 to-red-500',
        icon: '🔥',
      };
    } else {
      return {
        title: 'Your Business Definitely Owns You',
        message: 'You\'re drowning in admin work. It\'s time to take back control with automation.',
        color: 'from-red-500 to-rose-600',
        icon: '🚨',
      };
    }
  };

  const result = selectedItems.length > 0 ? getResult() : null;

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

      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
              <Target className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-white/80">Self Assessment</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl gradient-text mb-6">
              Does Your Business Own You?
            </h1>
            <p className="text-xl text-white/60">
              Check all that apply to your current situation. Be honest – this is for your benefit.
            </p>
          </div>

          {/* Assessment Checklist */}
          <div className="glass border border-white/10 rounded-[2.5rem] p-8 sm:p-12 mb-8">
            <div className="space-y-3">
              {painPoints.map((item, index) => (
                <button
                  key={index}
                  onClick={() => toggleItem(index)}
                  className={`card-3d w-full text-left p-5 rounded-2xl border-2 transition-all ${
                    selectedItems.includes(index)
                      ? 'border-purple-500 bg-gradient-to-r from-purple-500/10 to-pink-500/10'
                      : 'border-white/10 glass hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-0.5">
                      {selectedItems.includes(index) ? (
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full border-2 border-white/20 flex items-center justify-center">
                          <Circle className="w-4 h-4 text-white/40" />
                        </div>
                      )}
                    </div>
                    <span className="flex-1 text-white">{item}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Results */}
            {result && (
              <div className="mt-10 p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`text-4xl p-4 rounded-2xl bg-gradient-to-br ${result.color}`}>
                    {result.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-2xl mb-2">{result.title}</h3>
                    <p className="text-white/70 text-lg">{result.message}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/services"
                    className="flex-1 btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-4 rounded-full inline-flex items-center justify-center space-x-2"
                  >
                    <span>See How We Can Help</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="flex-1 px-6 py-4 rounded-full glass border border-white/20 text-white hover:bg-white/5 transition-all"
                  >
                    Get Free Consultation
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Info Box */}
          <div className="glass border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/80 text-lg">
                <span className="text-white">Good news:</span> Every item you checked can be solved with the right automation strategy. We've helped hundreds of businesses just like yours reclaim their time and sanity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
