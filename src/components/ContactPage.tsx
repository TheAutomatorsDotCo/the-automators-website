import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle2, Send, Users, TrendingUp } from 'lucide-react';
import { SEO } from './SEO';
import { StarsCanvas } from './StarBackground';
import { getLeadData, clearLeadData, formatLeadDetails } from '../utils/leadData';

// Extend Window to include the Turnstile API
declare global {
  interface Window {
    turnstile?: {
      render: (container: string | HTMLElement, options: TurnstileOptions) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

interface TurnstileOptions {
  sitekey: string;
  callback: (token: string) => void;
  'expired-callback'?: () => void;
  'error-callback'?: () => void;
  theme?: 'light' | 'dark' | 'auto';
  size?: 'normal' | 'compact';
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    interests: [] as string[],
    additionalDetails: '',
  });
  // Honeypot field -- hidden from real users, auto-filled by bots
  const [honeypot, setHoneypot] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [leadSource, setLeadSource] = useState<'assessment' | 'pricing' | 'case-study' | 'direct'>('direct');

  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);

  // Load lead data on mount
  useEffect(() => {
    const leadData = getLeadData();
    if (leadData) {
      const additionalDetails = formatLeadDetails(leadData);
      setFormData(prev => ({ ...prev, additionalDetails }));
      setLeadSource(leadData.source);
    }
  }, []);

  // Load Cloudflare Turnstile script and render the widget
  useEffect(() => {
    const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
    if (!siteKey) return;

    const renderWidget = () => {
      if (window.turnstile && turnstileContainerRef.current && !turnstileWidgetId.current) {
        turnstileWidgetId.current = window.turnstile.render(turnstileContainerRef.current, {
          sitekey: siteKey,
          theme: 'dark',
          callback: (token: string) => setTurnstileToken(token),
          'expired-callback': () => setTurnstileToken(''),
          'error-callback': () => setTurnstileToken(''),
        });
      }
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      window.onTurnstileLoad = renderWidget;

      const existing = document.querySelector('script[data-turnstile]');
      if (!existing) {
        const script = document.createElement('script');
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onTurnstileLoad';
        script.async = true;
        script.defer = true;
        script.setAttribute('data-turnstile', 'true');
        document.head.appendChild(script);
      }
    }

    return () => {
      if (window.turnstile && turnstileWidgetId.current) {
        window.turnstile.remove(turnstileWidgetId.current);
        turnstileWidgetId.current = null;
      }
    };
  }, []);

  const interestOptions = [
    'Workflow Automation',
    'Email Automation',
    'Data Management',
    'Scheduling & Booking',
    'Document Processing',
    'Custom Integration',
  ];

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Please enter your name (at least 2 characters).';
    }

    if (!formData.email.trim() || !EMAIL_REGEX.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please enter a message (at least 10 characters).';
    }

    if (!turnstileToken) {
      errors.turnstile = 'Please complete the security verification below.';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const leadData = getLeadData();

      const payload: Record<string, unknown> = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || null,
        company: formData.company.trim() || null,
        message: formData.message.trim(),
        interests: formData.interests,
        additionalDetails: formData.additionalDetails.trim() || null,
        leadSource,
        turnstileToken,
        // Honeypot (submitted but expected empty -- server validates)
        website: honeypot,
        url: '',
      };

      if (leadData?.pricing) {
        payload.selectedPlan = leadData.pricing.planName || null;
        payload.serviceType = leadData.pricing.serviceType || null;
        payload.paymentPlan = leadData.pricing.paymentPlan || null;
      }

      if (leadData?.caseStudy) {
        payload.caseStudy = leadData.caseStudy.caseStudyName || null;
      }

      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json() as { success?: boolean; error?: string };

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit form. Please try again.');
      }

      clearLeadData();
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'An error occurred. Please try again.');
      // Reset Turnstile on failure so the user can re-verify
      if (window.turnstile && turnstileWidgetId.current) {
        window.turnstile.reset(turnstileWidgetId.current);
        setTurnstileToken('');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]">
        <StarsCanvas />
        <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-2xl relative z-10">
            <div className="glass border border-white/10 rounded-[3rem] p-16 text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-500 text-white mb-8 float">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-5xl gradient-text mb-6">Thank You!</h2>
              <p className="text-2xl text-white/70 mb-8">
                We've received your message and will get back to you within 24 hours. Check your email for a confirmation.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-full"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]">
      <SEO
        title="Contact Us"
        description="Schedule a free consultation to discuss your automation needs. We're here to help transform your business with intelligent automation solutions."
        path="/contact"
        keywords="contact automation company, schedule consultation, business automation inquiry, get automation quote"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact The Automators",
          "description": "Get in touch with The Automators for business automation solutions"
        }}
      />
      <StarsCanvas />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center relative z-10">
          <div className="h-10 mb-6"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl gradient-text mb-6">
            Let's Talk About Your Automation Needs
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Schedule a free consultation to discuss how we can help automate your business processes and save you time.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="card-3d glass border border-white/10 rounded-3xl p-8">
                <h3 className="text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                  <div>
                    <h4 className="text-white mb-1">Email</h4>
                    <p className="text-white/60">sales@theautomators.co</p>
                  </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white mb-1">Phone</h4>
                      <p className="text-white/60">+27 82 770 6456</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white mb-1">Business Hours</h4>
                      <p className="text-white/60">Mon-Fri: 9am - 6pm SAST</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white mb-1">Location</h4>
                      <p className="text-white/60">Remote-first team serving clients worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl glass border border-white/10 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10"></div>
                <div className="relative z-10">
                  <h4 className="text-white mb-3">Free Consultation</h4>
                  <p className="text-white/70">
                    Every engagement starts with a free 30-minute consultation to understand your needs and explore solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-3d glass border border-white/10 rounded-[2.5rem] p-10">
                <h3 className="text-white mb-8">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>

                  {/* Honeypot -- hidden from real users, caught on the server */}
                  <div style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true" tabIndex={-1}>
                    <label htmlFor="website">Leave this field empty</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white mb-3">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (validationErrors.name) setValidationErrors(prev => ({ ...prev, name: '' }));
                        }}
                        className={`w-full px-5 py-4 rounded-2xl glass border text-white placeholder-white/40 focus:outline-none transition-colors ${
                          validationErrors.name ? 'border-red-500' : 'border-white/10 focus:border-purple-500'
                        }`}
                        placeholder="John Doe"
                      />
                      {validationErrors.name && (
                        <p className="text-red-400 text-sm mt-1">{validationErrors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-white mb-3">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (validationErrors.email) setValidationErrors(prev => ({ ...prev, email: '' }));
                        }}
                        className={`w-full px-5 py-4 rounded-2xl glass border text-white placeholder-white/40 focus:outline-none transition-colors ${
                          validationErrors.email ? 'border-red-500' : 'border-white/10 focus:border-purple-500'
                        }`}
                        placeholder="john@company.com"
                      />
                      {validationErrors.email && (
                        <p className="text-red-400 text-sm mt-1">{validationErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white mb-3">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-5 py-4 rounded-2xl glass border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="+27 82 000 0000"
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-3">Company</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-5 py-4 rounded-2xl glass border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="Your Company Inc."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white mb-3">I'm interested in...</label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {interestOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleInterestToggle(option)}
                          className={`text-left px-5 py-3 rounded-2xl border-2 transition-all ${
                            formData.interests.includes(option)
                              ? 'border-purple-500 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-white'
                              : 'border-white/10 glass text-white/70 hover:border-white/20'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white mb-3">Message *</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (validationErrors.message) setValidationErrors(prev => ({ ...prev, message: '' }));
                      }}
                      rows={6}
                      className={`w-full px-5 py-4 rounded-2xl glass border text-white placeholder-white/40 focus:outline-none transition-colors resize-none ${
                        validationErrors.message ? 'border-red-500' : 'border-white/10 focus:border-purple-500'
                      }`}
                      placeholder="Tell us about your business and what you'd like to automate..."
                    />
                    {validationErrors.message && (
                      <p className="text-red-400 text-sm mt-1">{validationErrors.message}</p>
                    )}
                  </div>

                  {formData.additionalDetails && (
                    <div>
                      <label className="block text-white mb-3">Additional Details (Auto-populated)</label>
                      <textarea
                        value={formData.additionalDetails}
                        readOnly
                        rows={8}
                        className="w-full px-5 py-4 rounded-2xl glass border border-green-500/30 bg-green-500/5 text-white/80 resize-none cursor-not-allowed"
                      />
                      <p className="text-green-400/70 text-base mt-2">
                        ✓ Your {leadSource === 'assessment' ? 'assessment results' : leadSource === 'pricing' ? 'plan selection' : 'case study referral'} has been automatically included
                      </p>
                    </div>
                  )}

                  {/* Cloudflare Turnstile widget */}
                  <div>
                    <div ref={turnstileContainerRef} className="flex justify-start" />
                    {validationErrors.turnstile && (
                      <p className="text-red-400 text-sm mt-2">{validationErrors.turnstile}</p>
                    )}
                  </div>

                  {submitError && (
                    <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30">
                      <p className="text-red-400 text-center">{submitError}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-5 rounded-full inline-flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    {!isSubmitting && <Send className="w-5 h-5" />}
                  </button>

                  <p className="text-white/50 text-center">
                    We typically respond within 24 hours during business days
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="card-3d glass border border-white/10 rounded-3xl p-8 text-center">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-5xl gradient-text mb-2">200+</div>
              <h4 className="text-white mb-1">Happy Clients</h4>
              <p className="text-white/60">Businesses automated</p>
            </div>
            <div className="card-3d glass border border-white/10 rounded-3xl p-8 text-center">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-5xl gradient-text mb-2">98%</div>
              <h4 className="text-white mb-1">Satisfaction Rate</h4>
              <p className="text-white/60">Client satisfaction score</p>
            </div>
            <div className="card-3d glass border border-white/10 rounded-3xl p-8 text-center">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 text-white mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <div className="text-5xl gradient-text mb-2">24hr</div>
              <h4 className="text-white mb-1">Response Time</h4>
              <p className="text-white/60">Average response time</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
