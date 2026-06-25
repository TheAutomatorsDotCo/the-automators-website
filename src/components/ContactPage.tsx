import React, { useState, useEffect, useRef } from 'react';
import {
  Mail, Phone, MapPin, Clock, CheckCircle2, Send, Users, TrendingUp,
  Calendar, Shield, CheckCircle, X, ArrowDown,
} from 'lucide-react';
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

const DISCOVERY_CALL_URL = 'https://calendar.app.google/nzwvc4fVpzkPqmAX6';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ---------------------------------------------------------------------------
// Book button — matches ecommerce page CTA style
// ---------------------------------------------------------------------------

function BookButton({ label = 'Book a free discovery call', className = '' }: { label?: string; className?: string }) {
  return (
    <a
      href={DISCOVERY_CALL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-full inline-flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${className}`}
    >
      <Calendar className="w-5 h-5" />
      <span>{label}</span>
    </a>
  );
}

// ---------------------------------------------------------------------------
// Sticky booking bar — appears after scrolling, dismissible
// ---------------------------------------------------------------------------

function StickyBookBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 450);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const show = visible && !dismissed;

  return (
    <div
      className={`fixed bottom-8 right-6 z-50 flex items-center gap-3 glass border border-white/20 rounded-full px-4 py-2.5 shadow-2xl shadow-black/40 motion-safe:transition-all motion-safe:duration-300 ${
        show ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-hidden={!show}
    >
      <a
        href={DISCOVERY_CALL_URL}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={show ? 0 : -1}
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-sm font-semibold px-5 py-2 rounded-full inline-flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
      >
        <Calendar className="w-4 h-4" />
        Book a free discovery call
      </a>
      <button
        onClick={() => setDismissed(true)}
        tabIndex={show ? 0 : -1}
        className="text-white/50 hover:text-white/80 transition-colors p-1 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        aria-label="Dismiss booking prompt"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

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
  const [honeypot, setHoneypot] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [leadSource, setLeadSource] = useState<'assessment' | 'pricing' | 'case-study' | 'direct'>('direct');

  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);

  useEffect(() => {
    const leadData = getLeadData();
    if (leadData) {
      const additionalDetails = formatLeadDetails(leadData);
      setFormData(prev => ({ ...prev, additionalDetails }));
      setLeadSource(leadData.source);
    }
  }, []);

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

    // #region agent log
    fetch('http://127.0.0.1:7826/ingest/d8afe84f-de4c-4333-a3a9-72e206ed07ea',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'c019bd'},body:JSON.stringify({sessionId:'c019bd',location:'ContactPage.tsx:validateForm-passed',message:'Form passed validation',data:{turnstileTokenPresent:!!turnstileToken,turnstileTokenLength:turnstileToken.length},timestamp:Date.now(),hypothesisId:'H-D'})}).catch(()=>{});
    // #endregion

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

      // #region agent log
      const rawText = await response.text();
      fetch('http://127.0.0.1:7826/ingest/d8afe84f-de4c-4333-a3a9-72e206ed07ea',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'c019bd'},body:JSON.stringify({sessionId:'c019bd',location:'ContactPage.tsx:handleSubmit',message:'API response captured',data:{status:response.status,statusText:response.statusText,bodyFirst200:rawText.slice(0,200),turnstileTokenPresent:!!turnstileToken,turnstileTokenLength:turnstileToken.length},timestamp:Date.now(),hypothesisId:'H-A,H-C,H-D'})}).catch(()=>{});
      let data: { success?: boolean; error?: string };
      try { data = JSON.parse(rawText); } catch { data = { error: `Non-JSON response (${response.status}): ${rawText.slice(0, 100)}` }; }
      // #endregion

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit form. Please try again.');
      }

      clearLeadData();
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'An error occurred. Please try again.');
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
                We've received your message and will get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  Send Another Message
                </button>
                <BookButton label="Book a discovery call" />
              </div>
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
        description="Book a free discovery call or send us a message. We're here to help transform your business with intelligent automation solutions."
        path="/contact"
        keywords="contact automation company, schedule consultation, book discovery call, business automation inquiry, get automation quote"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact The Automators",
          "description": "Get in touch with The Automators for business automation solutions",
        }}
      />
      <StarsCanvas />
      <StickyBookBar />

      {/* ================================================================
          HERO
      ================================================================= */}
      <section className="relative pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-white/70 text-sm mb-8">
            <Calendar className="w-4 h-4 text-indigo-400" />
            <span>Free 30-minute discovery call (no obligation)</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl gradient-text mb-6">
            Let's Talk About Your Automation Needs
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
            Book a free discovery call and we'll map out exactly how to automate your business, or send us a message below if you'd prefer.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <BookButton label="Book a free discovery call" className="text-lg px-10 py-5" />
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white/90 transition-colors text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
            >
              or send us a message
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================
          PRIMARY CTA — booking card (mirrors ecommerce page pattern)
      ================================================================= */}
      <section className="relative py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl relative z-10">
          <div className="relative overflow-hidden rounded-[2.5rem] glass border border-white/10 p-10 sm:p-14 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white mb-6">
                <Calendar className="w-8 h-8" />
              </div>
              <h2 className="text-3xl sm:text-4xl gradient-text mb-4">
                Book Your Free Discovery Call
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Tell us about your business. We'll show you exactly what automation can do for your revenue and operations (no pitch, just clarity).
              </p>

              <BookButton label="Book my free discovery call" className="text-lg px-10 py-5" />

              <div className="flex items-center justify-center gap-6 mt-8 text-white/60 text-sm flex-wrap">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 30 minutes</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> No obligation</span>
                <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> No pressure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          CONTACT FORM & INFO
      ================================================================= */}
      <section id="contact-form" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl gradient-text mb-3">Or Send Us a Message</h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Prefer to write it out? Fill in the form and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info sidebar */}
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
                      <p className="text-white/60">Mon–Fri: 9am – 6pm SAST</p>
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

              {/* Discovery call prompt card */}
              <div className="relative overflow-hidden rounded-3xl glass border border-white/10 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
                <div className="relative z-10">
                  <h4 className="text-white mb-3">Prefer a call?</h4>
                  <p className="text-white/70 mb-5 text-sm leading-relaxed">
                    Book a free 30-minute discovery call and we'll walk through your automation opportunities together.
                  </p>
                  <a
                    href={DISCOVERY_CALL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full cursor-pointer hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  >
                    <Calendar className="w-4 h-4" />
                    Book a discovery call
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-3d glass border border-white/10 rounded-[2.5rem] p-10">
                <h3 className="text-white mb-8">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>

                  {/* Honeypot — hidden from real users, caught on the server */}
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
                          className={`text-left px-5 py-3 rounded-2xl border-2 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
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
                    className="w-full btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-5 rounded-full inline-flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    {!isSubmitting && <Send className="w-5 h-5" />}
                  </button>

                  <p className="text-white/50 text-center text-sm">
                    We typically respond within 24 hours during business days
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          TRUST INDICATORS
      ================================================================= */}
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
