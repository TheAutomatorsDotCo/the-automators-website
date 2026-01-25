import React, { useEffect } from 'react';
import { SEO } from './SEO';
import { StarsCanvas } from './StarBackground';

export function TicketsPage() {
  useEffect(() => {
    // Load Fillout embed script
    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]">
      <SEO
        title="Tickets"
        description="Support tickets for The Automators."
        path="/tickets"
        keywords="tickets, support"
      />
      {/* Spinning Stars Background */}
      <StarsCanvas />

      {/* Hero Section */}
      <section className="relative pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center relative z-10">
          <div className="h-10 mb-6"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl gradient-text">
            Tickets
          </h1>
        </div>
      </section>

      {/* Fillout Form Section */}
      <section className="relative py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="glass border border-white/10 rounded-3xl p-4 sm:p-8 overflow-hidden">
            <div
              style={{ width: '100%', minHeight: '500px' }}
              data-fillout-id="sp9dCp4YsMus"
              data-fillout-embed-type="standard"
              data-fillout-inherit-parameters
              data-fillout-dynamic-resize
            />
          </div>
        </div>
      </section>
    </div>
  );
}
