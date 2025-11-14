import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle2, Send, Users, TrendingUp } from 'lucide-react';
import { SEO } from './SEO';
import { StarsCanvas } from './StarBackground';
import { getLeadData, clearLeadData, formatLeadDetails } from '../utils/leadData';

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
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [leadSource, setLeadSource] = useState<'assessment' | 'pricing' | 'direct'>('direct');

  // Load lead data on mount
  useEffect(() => {
    const leadData = getLeadData();
    if (leadData) {
      const additionalDetails = formatLeadDetails(leadData);
      setFormData(prev => ({ ...prev, additionalDetails }));
      setLeadSource(leadData.source);
    }
  }, []);

  const interestOptions = [
    'Workflow Automation',
    'Email Automation',
    'Data Management',
    'Scheduling & Booking',
    'Document Processing',
    'Custom Integration',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Build the fields object with required fields first
      // Capitalize Source Page values to match Airtable Single Select options
      const sourcePageCapitalized = 
        leadSource === 'assessment' ? 'Assessment' :
        leadSource === 'pricing' ? 'Pricing' : 'Direct';
      
      const fields: Record<string, any> = {
        'Full Name': formData.name,
        'Email': formData.email,
        'Message': formData.message,
        'Source Page': sourcePageCapitalized,
        'Submitted At': new Date().toISOString(),
      };

      // Add optional fields only if they have values
      if (formData.phone) {
        fields['Phone'] = formData.phone;
      }
      if (formData.company) {
        fields['Company'] = formData.company;
      }
      if (formData.interests.length > 0) {
        fields['Interests'] = formData.interests.join(', ');
      }
      if (formData.additionalDetails) {
        fields['Additional Details'] = formData.additionalDetails;
      }

      // Add pricing-specific fields if available
      const leadData = getLeadData();
      if (leadData?.pricing) {
        if (leadData.pricing.planName) {
          fields['Selected Plan'] = leadData.pricing.planName;
        }
        if (leadData.pricing.serviceType) {
          fields['Service Type'] = 
            leadData.pricing.serviceType === 'automation' ? 'Automation' :
            leadData.pricing.serviceType === 'voice-agents' ? 'Voice Agents' : 'Chatbots';
        }
        if (leadData.pricing.paymentPlan) {
          fields['Payment Plan'] = leadData.pricing.paymentPlan;
        }
      }

      const airtableData = { fields };

      // Log the data being sent for debugging
      console.log('Sending to Airtable:', airtableData);

      const response = await fetch(
        `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_AIRTABLE_TABLE_ID}`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_AIRTABLE_PAT}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(airtableData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Airtable error details:', errorData);
        throw new Error(errorData.error?.message || 'Failed to submit form');
      }

      // Clear lead data from localStorage
      clearLeadData();
      
      // Show success message
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'An error occurred. Please try again.');
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
      {/* Spinning Stars Background */}
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white mb-3">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-5 py-4 rounded-2xl glass border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-3">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-5 py-4 rounded-2xl glass border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="john@company.com"
                      />
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
                        placeholder="+1 (555) 123-4567"
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
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-5 py-4 rounded-2xl glass border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                      placeholder="Tell us about your business and what you'd like to automate..."
                    />
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
                        ✓ Your {leadSource === 'assessment' ? 'assessment results' : 'plan selection'} has been automatically included
                      </p>
                    </div>
                  )}

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
