import React, { useState, useEffect } from 'react';
import { Clock, Check, TrendingUp, RotateCcw, User, Bot, DollarSign, Users } from 'lucide-react';

interface Message {
  type: 'bot' | 'user';
  text: string;
  timestamp: number;
}

interface DemoState {
  messages: Message[];
  step: number;
  isAnimating: boolean;
  statsShown: boolean;
  resolvedCount: number;
}

export function ChatbotDemos() {
  const [demo1State, setDemo1State] = useState<DemoState>({
    messages: [{ type: 'bot', text: "Hi there! I'm your virtual assistant. How can I help you today?\n(1) Shipping, (2) Returns, (3) Products", timestamp: 0 }],
    step: 0,
    isAnimating: false,
    statsShown: false,
    resolvedCount: 0,
  });

  const [demo2State, setDemo2State] = useState<DemoState>({
    messages: [{ type: 'bot', text: "I see you're looking at the 'Explorer' Bag. Can I help you find the perfect match?", timestamp: 0 }],
    step: 0,
    isAnimating: false,
    statsShown: false,
    resolvedCount: 0,
  });

  const [showValueHighlight1, setShowValueHighlight1] = useState(false);
  const [showValueHighlight2, setShowValueHighlight2] = useState(false);

  const runDemo1 = async () => {
    if (demo1State.isAnimating) return;
    
    setDemo1State(prev => ({ ...prev, isAnimating: true, step: 1 }));
    
    // Step 1: User question
    await new Promise(resolve => setTimeout(resolve, 300));
    setDemo1State(prev => ({
      ...prev,
      messages: [...prev.messages, { type: 'user', text: "What's your holiday return policy?", timestamp: Date.now() }],
    }));

    // Step 2: Bot response
    await new Promise(resolve => setTimeout(resolve, 800));
    setDemo1State(prev => ({
      ...prev,
      step: 2,
      messages: [...prev.messages, { 
        type: 'bot', 
        text: "Our holiday return window is extended to January 15th for all purchases made in November and December. Full policy details are available on our returns page.", 
        timestamp: Date.now() 
      }],
    }));

    // Step 3: Show value highlight
    await new Promise(resolve => setTimeout(resolve, 600));
    setShowValueHighlight1(true);
    setDemo1State(prev => ({
      ...prev,
      step: 3,
      statsShown: true,
      resolvedCount: prev.resolvedCount + 1,
    }));

    await new Promise(resolve => setTimeout(resolve, 2000));
    setDemo1State(prev => ({ ...prev, isAnimating: false }));
  };

  const runDemo2 = async () => {
    if (demo2State.isAnimating) return;
    
    setDemo2State(prev => ({ ...prev, isAnimating: true, step: 1 }));
    
    // Step 1: User question
    await new Promise(resolve => setTimeout(resolve, 300));
    setDemo2State(prev => ({
      ...prev,
      messages: [...prev.messages, { type: 'user', text: "I need something for a 15-inch laptop and a water bottle pocket.", timestamp: Date.now() }],
    }));

    // Step 2: Bot response with recommendation
    await new Promise(resolve => setTimeout(resolve, 800));
    setDemo2State(prev => ({
      ...prev,
      step: 2,
      messages: [...prev.messages, { 
        type: 'bot', 
        text: "Great! Based on your criteria, I recommend the 'Navigator' Backpack. It fits a 15-inch laptop and has a reinforced side pocket for bottles.", 
        timestamp: Date.now() 
      }],
    }));

    // Step 3: Show product card and value highlight
    await new Promise(resolve => setTimeout(resolve, 600));
    setShowValueHighlight2(true);
    setDemo2State(prev => ({
      ...prev,
      step: 3,
      statsShown: true,
    }));

    await new Promise(resolve => setTimeout(resolve, 2000));
    setDemo2State(prev => ({ ...prev, isAnimating: false }));
  };

  const resetDemo1 = () => {
    setDemo1State({
      messages: [{ type: 'bot', text: "Hi there! I'm your virtual assistant. How can I help you today?\n(1) Shipping, (2) Returns, (3) Products", timestamp: Date.now() }],
      step: 0,
      isAnimating: false,
      statsShown: false,
      resolvedCount: demo1State.resolvedCount,
    });
    setShowValueHighlight1(false);
  };

  const resetDemo2 = () => {
    setDemo2State({
      messages: [{ type: 'bot', text: "I see you're looking at the 'Explorer' Bag. Can I help you find the perfect match?", timestamp: Date.now() }],
      step: 0,
      isAnimating: false,
      statsShown: false,
      resolvedCount: 0,
    });
    setShowValueHighlight2(false);
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl gradient-text mb-4">
            Meet Your Always-On Team: Interactive Chatbot Demos
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            See how intelligent chatbots can transform customer experience and drive results 24/7.
          </p>
        </div>

        {/* Two Demo Containers */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">{/* Demo 1: Support & FAQ Chatbot */}
          <div className="card-3d glass border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl text-white flex items-center">
                  <Users className="w-5 h-5 mr-2 text-purple-400" />
                  Support & FAQ Bot
                </h3>
                <button
                  onClick={resetDemo1}
                  className="p-2 rounded-lg glass border border-white/10 hover:border-white/20 transition-all"
                  title="Reset Demo"
                >
                  <RotateCcw className="w-4 h-4 text-white/60" />
                </button>
              </div>
              <p className="text-white/60 text-sm mb-3">
                Instant, 24/7 customer service that filters common questions and saves staff time.
              </p>
              
              {/* Stats Counter */}
              {demo1State.statsShown && (
                <div className="flex items-center space-x-3 mb-3 animate-fade-in">
                  <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20">
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-white">Resolved: {demo1State.resolvedCount}</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-white">5 min saved</span>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Window */}
            <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] rounded-2xl border border-white/10 overflow-hidden">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">Support Assistant</div>
                    <div className="text-white/70 text-xs flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-400 mr-1"></div>
                      Always online
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div className="p-4 min-h-[320px] max-h-[320px] overflow-y-auto space-y-3">
                {demo1State.messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.type === 'bot'
                          ? 'bg-white/10 text-white rounded-tl-none'
                          : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-tr-none'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                  </div>
                ))}

                {/* Value Highlight Animation */}
                {showValueHighlight1 && demo1State.step === 3 && (
                  <div className="animate-fade-in bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-xl p-4">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-semibold mb-1">24/7 Availability</p>
                        <p className="text-white/70 text-xs">
                          This instant resolution saved 5 minutes of staff time. Clients get answers instantly, 365 days a year.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="border-t border-white/10 p-3">
                <button
                  onClick={runDemo1}
                  disabled={demo1State.isAnimating}
                  className={`w-full py-3 rounded-xl text-white text-sm font-semibold transition-all ${
                    demo1State.isAnimating
                      ? 'bg-white/5 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600'
                  }`}
                >
                  {demo1State.step === 0 ? 'Click to Ask a Question' : demo1State.isAnimating ? 'Processing...' : 'Ask Another Question'}
                </button>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10">
              <p className="text-white/80 text-sm">
                <strong className="text-white">Benefit:</strong> Clients get answers instantly, 365 days a year, freeing up your team for complex issues.
              </p>
            </div>
          </div>

          {/* Demo 2: E-commerce Recommendation Chatbot */}
          <div className="card-3d glass border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl text-white flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-cyan-400" />
                  E-commerce Recommendation Bot
                </h3>
                <button
                  onClick={resetDemo2}
                  className="p-2 rounded-lg glass border border-white/10 hover:border-white/20 transition-all"
                  title="Reset Demo"
                >
                  <RotateCcw className="w-4 h-4 text-white/60" />
                </button>
              </div>
              <p className="text-white/60 text-sm mb-3">
                Guides customers to the right product, increasing engagement and driving sales.
              </p>

              {/* Stats Counter */}
              {demo2State.statsShown && (
                <div className="flex items-center space-x-3 mb-3 animate-fade-in">
                  <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-white">Sales +1</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-white">Engagement ↑</span>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Window */}
            <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] rounded-2xl border border-white/10 overflow-hidden">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-cyan-600 to-teal-600 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">Shopping Assistant</div>
                    <div className="text-white/70 text-xs flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-400 mr-1"></div>
                      Ready to help
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div className="p-4 min-h-[320px] max-h-[320px] overflow-y-auto space-y-3">
                {demo2State.messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.type === 'bot'
                          ? 'bg-white/10 text-white rounded-tl-none'
                          : 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-tr-none'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                  </div>
                ))}

                {/* Product Card */}
                {demo2State.step >= 2 && (
                  <div className="animate-scale-in">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-4 cursor-pointer hover:border-cyan-400/50 transition-all">
                      <div className="flex space-x-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">🎒</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold text-sm mb-1">Navigator Backpack</h4>
                          <p className="text-white/60 text-xs mb-2">Fits 15" laptop • Water bottle pocket</p>
                          <div className="flex items-center justify-between">
                            <span className="text-cyan-400 font-bold">$89.99</span>
                            <button className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-xs rounded-lg hover:from-cyan-600 hover:to-teal-600 transition-all">
                              View Product →
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Value Highlight Animation */}
                {showValueHighlight2 && demo2State.step === 3 && (
                  <div className="animate-fade-in bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 rounded-xl p-4">
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-semibold mb-1">Targeted Engagement</p>
                        <p className="text-white/70 text-xs">
                          Direct link to the recommended product removes search friction and drives sales.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="border-t border-white/10 p-3">
                <button
                  onClick={runDemo2}
                  disabled={demo2State.isAnimating}
                  className={`w-full py-3 rounded-xl text-white text-sm font-semibold transition-all ${
                    demo2State.isAnimating
                      ? 'bg-white/5 cursor-not-allowed'
                      : 'bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600'
                  }`}
                >
                  {demo2State.step === 0 ? 'Click for Recommendation' : demo2State.isAnimating ? 'Processing...' : 'Get Another Recommendation'}
                </button>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10">
              <p className="text-white/80 text-sm">
                <strong className="text-white">Benefit:</strong> Reduces bounce rate and instantly puts the most relevant product in front of the customer, driving sales.
              </p>
            </div>
          </div>
        </div>

        {/* Overall Benefits */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-2xl glass border border-white/10">
            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 text-white mb-3">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="text-white font-semibold mb-2">24/7 Availability</h4>
            <p className="text-white/60 text-sm">Never miss a customer inquiry, even outside business hours</p>
          </div>
          <div className="text-center p-6 rounded-2xl glass border border-white/10">
            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 text-white mb-3">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-white font-semibold mb-2">Increased Conversions</h4>
            <p className="text-white/60 text-sm">Guide customers to the perfect product with personalized recommendations</p>
          </div>
          <div className="text-center p-6 rounded-2xl glass border border-white/10">
            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-white mb-3">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="text-white font-semibold mb-2">Free Up Your Team</h4>
            <p className="text-white/60 text-sm">Let bots handle routine questions while staff focus on complex issues</p>
          </div>
        </div>
      </div>
    </section>
  );
}

