import React, { useState } from 'react';
import { FileText, Database, MessageCircle, Mail, Calendar, CheckCircle, Play } from 'lucide-react';

export function AutomationDemo() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);

  const startAnimation = () => {
    if (isAnimating) return;
    
    console.log('🚀 Starting automation workflow...');
    setIsAnimating(true);
    setActiveStep(-1);

    // Step 0: Initial trigger
    setTimeout(() => {
      console.log('📝 Step 0: Lead Form Submitted');
      setActiveStep(0);
    }, 200);
    
    // Step 1: Data Processing (CRM)
    setTimeout(() => {
      console.log('💾 Step 1: CRM Processing');
      setActiveStep(1);
    }, 1200);
    
    // Step 2: WhatsApp Notification
    setTimeout(() => {
      console.log('💬 Step 2: WhatsApp Message');
      setActiveStep(2);
    }, 2400);
    
    // Step 3: Email Alert
    setTimeout(() => {
      console.log('📧 Step 3: Manager Email Alert');
      setActiveStep(3);
    }, 3600);
    
    // Step 4: Task Creation
    setTimeout(() => {
      console.log('📅 Step 4: Task Scheduled');
      setActiveStep(4);
    }, 4800);
    
    // Step 5: Completion
    setTimeout(() => {
      console.log('✅ Step 5: Workflow Complete!');
      setActiveStep(5);
    }, 6000);
    
    // Keep workflow visible (don't reset)
    setTimeout(() => {
      console.log('🎉 All steps completed - ready to run again');
      setIsAnimating(false);
      // activeStep stays at 5 to show completion
    }, 7500);
  };

  const steps = [
    {
      id: 0,
      icon: FileText,
      title: 'Lead Form Submitted',
      description: 'A new lead fills out your form',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 1,
      icon: Database,
      title: 'CRM is Updated',
      description: 'Client record automatically created in CRM',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      id: 2,
      icon: MessageCircle,
      title: 'Client is Notified',
      description: 'Welcome message sent via WhatsApp',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 3,
      icon: Mail,
      title: 'Manager is Alerted',
      description: 'Email alert sent to Sales Manager',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 4,
      icon: Calendar,
      title: 'Task is Scheduled',
      description: 'Follow-up task added to calendar',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 5,
      icon: CheckCircle,
      title: 'Workflow Complete!',
      description: 'Entire process completed in 10 seconds',
      color: 'from-emerald-500 to-green-500',
    },
  ];

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="h-10 mb-6"></div>
          <h2 className="text-4xl sm:text-5xl gradient-text mb-6">
            See Automation in Action
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Watch how a single form submission triggers a complete automated workflow in seconds
          </p>
        </div>

        {/* Demo Container */}
        <div className="relative overflow-hidden rounded-[3rem] glass border border-white/10 p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5"></div>
          
          <div className="relative z-10">
            {/* Start Button */}
            <div className="flex justify-center mb-12">
              <div className="text-center">
                <button
                  onClick={startAnimation}
                  disabled={isAnimating}
                  className={`btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-10 py-5 rounded-full inline-flex items-center space-x-3 text-lg ${
                    isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                  } transition-all`}
                >
                  <Play className="w-6 h-6" />
                  <span>{activeStep === 5 ? 'Run Workflow Again' : 'Start Automation Workflow'}</span>
                </button>
                
                {/* Progress Indicator */}
                {isAnimating && activeStep >= 0 && activeStep < 5 && (
                  <div className="mt-4 inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-white/20">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse"></div>
                    <span className="text-sm text-white/80">
                      Step {activeStep + 1} of 6
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Workflow Steps - Simple Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
              {steps.map((step) => (
                <div key={step.id} className="relative">
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -left-3 z-20">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white transition-all duration-500 ${
                      activeStep === step.id 
                        ? `bg-gradient-to-br ${step.color} scale-125 shadow-lg` 
                        : activeStep > step.id
                          ? 'bg-green-500'
                          : 'bg-white/20'
                    }`}>
                      {activeStep > step.id ? '✓' : step.id + 1}
                    </div>
                  </div>

                  {/* Step Card */}
                  <div
                    className={`relative h-full transition-all duration-500 ${
                      activeStep === step.id
                        ? 'scale-105'
                        : activeStep > step.id || (activeStep === 5 && step.id < 5)
                          ? 'scale-100 opacity-100'
                          : isAnimating 
                            ? 'scale-95 opacity-50'
                            : 'scale-100 opacity-100'
                    }`}
                  >
                    <div className={`glass rounded-2xl p-6 h-full transition-all duration-500 ${
                      activeStep === step.id 
                        ? 'border-2 border-white/50 shadow-2xl bg-white/5' 
                        : activeStep > step.id || (activeStep === 5 && step.id < 5)
                          ? 'border border-green-500/30 bg-green-500/5'
                          : 'border border-white/10'
                    }`}>
                      {/* Icon */}
                      <div className="flex justify-center mb-4">
                        <div
                          className={`p-4 rounded-xl bg-gradient-to-br ${step.color} transition-all duration-500 ${
                            activeStep === step.id ? 'scale-110 shadow-lg' : 'scale-100'
                          }`}
                        >
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className={`text-center text-base font-semibold mb-2 transition-colors duration-500 ${
                        activeStep === step.id ? 'text-white' : 'text-white/80'
                      }`}>
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className={`text-center text-sm transition-all duration-500 ${
                        activeStep === step.id 
                          ? 'text-white/90' 
                          : 'text-white/60'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Time Savings Message - Shows when workflow is complete */}
            <div
              className={`transition-all duration-700 ${
                activeStep === 5
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 pointer-events-none'
              }`}
            >
              <div className="glass border border-indigo-500/30 rounded-2xl p-6 sm:p-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-lg sm:text-xl text-white/90 mb-2">
                  <span className="gradient-text font-semibold">Just imagine:</span> A simple workflow like this can save you{' '}
                  <span className="text-white font-semibold">15 minutes to an hour</span> of manual work{' '}
                  <span className="text-white font-semibold">every time</span> it's used.
                </p>
                <p className="text-sm text-white/60">
                  Multiply that across your team and across all your repetitive processes...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

