import React from 'react';
import { SEO } from './SEO';
import { StarsCanvas } from './StarBackground';

export function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]">
      <SEO
        title="Terms and Conditions"
        description="Terms and conditions for using The Automators' services. Read our terms of service and usage guidelines."
        path="/terms"
        keywords="terms and conditions, terms of service, usage terms"
      />
      {/* Spinning Stars Background */}
      <StarsCanvas />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center relative z-10">
          <div className="h-10 mb-6"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl gradient-text mb-6">
            Terms and Conditions
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using our services.
          </p>
          <p className="text-sm text-white/40 mt-4">
            Last Updated: November 2, 2025
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="glass border border-white/10 rounded-3xl p-8 sm:p-12 space-y-12">
            
            {/* Acceptance of Terms */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">1. Acceptance of Terms</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                By accessing and using The Automators' services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not use 
                this service.
              </p>
              <p className="text-white/70 leading-relaxed">
                These Terms and Conditions govern your use of our website and services. By using our services, 
                you agree to comply with and be bound by these terms.
              </p>
            </div>

            {/* Use License */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">2. Use License</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Permission is granted to temporarily access and use The Automators' services for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
                and under this license you may not:
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on our services</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              <p className="text-white/70 leading-relaxed mt-4">
                This license shall automatically terminate if you violate any of these restrictions and may be 
                terminated by The Automators at any time.
              </p>
            </div>

            {/* Disclaimer */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">3. Disclaimer</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                The materials on The Automators' services are provided on an 'as is' basis. The Automators makes 
                no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, 
                without limitation, implied warranties or conditions of merchantability, fitness for a particular 
                purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="text-white/70 leading-relaxed">
                Further, The Automators does not warrant or make any representations concerning the accuracy, 
                likely results, or reliability of the use of the materials on its services or otherwise relating 
                to such materials or on any sites linked to these services.
              </p>
            </div>

            {/* Limitations */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">4. Limitations</h2>
              <p className="text-white/70 leading-relaxed">
                In no event shall The Automators or its suppliers be liable for any damages (including, without 
                limitation, damages for loss of data or profit, or due to business interruption) arising out of 
                the use or inability to use the materials on The Automators' services, even if The Automators or 
                an authorized representative has been notified orally or in writing of the possibility of such damage. 
                Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability 
                for consequential or incidental damages, these limitations may not apply to you.
              </p>
            </div>

            {/* Revisions and Errata */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">5. Revisions and Errata</h2>
              <p className="text-white/70 leading-relaxed">
                The materials appearing on The Automators' services could include technical, typographical, or 
                photographic errors. The Automators does not warrant that any of the materials on its services 
                are accurate, complete, or current. The Automators may make changes to the materials contained 
                on its services at any time without notice. However, The Automators does not make any commitment 
                to update the materials.
              </p>
            </div>

            {/* Links */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">6. Links</h2>
              <p className="text-white/70 leading-relaxed">
                The Automators has not reviewed all of the sites linked to its services and is not responsible 
                for the contents of any such linked site. The inclusion of any link does not imply endorsement 
                by The Automators of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            {/* Service Terms Modifications */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">7. Service Terms Modifications</h2>
              <p className="text-white/70 leading-relaxed">
                The Automators may revise these terms of service for its services at any time without notice. 
                By using these services, you are agreeing to be bound by the then current version of these 
                terms of service.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">8. Governing Law</h2>
              <p className="text-white/70 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with applicable laws, 
                and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            {/* Contact Information */}
            <div className="pt-8 border-t border-white/10">
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">Contact Us</h2>
              <p className="text-white/70 leading-relaxed mb-2">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <p className="text-white/60">
                Email: sales@theautomators.co.za
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

