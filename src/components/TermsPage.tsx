import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { StarsCanvas } from './StarBackground';

export function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]">
      <SEO
        title="Terms of Service"
        description="Terms of Service for The Automators' WhatsApp notification service. Read our terms of service and acceptable use guidelines."
        path="/terms"
        keywords="terms of service, terms and conditions, WhatsApp notifications, acceptable use"
      />
      {/* Spinning Stars Background */}
      <StarsCanvas />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center relative z-10">
          <div className="h-10 mb-6"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl gradient-text mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Please read these terms carefully before using our WhatsApp notification service.
          </p>
          <p className="text-sm text-white/40 mt-4">
            Last Updated: 19 April 2026
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="glass border border-white/10 rounded-3xl p-8 sm:p-12 space-y-12">

            {/* Introduction */}
            <div>
              <p className="text-white/70 leading-relaxed">
                These Terms of Service ("Terms") govern your access to and use of the WhatsApp notification
                service (the "Service") provided by The Automators ("we", "us", "our"). By using the Service
                you agree to these Terms. If you do not agree, do not use the Service.
              </p>
            </div>

            {/* 1. The Service */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">1. The Service</h2>
              <p className="text-white/70 leading-relaxed">
                The Service delivers notifications and related messages to recipients through the WhatsApp
                Business Platform operated by Meta Platforms, Inc. The Service may also receive and process
                messages that recipients send back to our WhatsApp business number.
              </p>
            </div>

            {/* 2. Eligibility */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">2. Eligibility</h2>
              <p className="text-white/70 leading-relaxed">
                You must be at least 13 years old, or the minimum age of digital consent in your country,
                to use the Service. By using the Service you represent that you meet this requirement and
                have the authority to accept these Terms on behalf of any organisation you represent.
              </p>
            </div>

            {/* 3. Account and access */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">3. Account and access</h2>
              <p className="text-white/70 leading-relaxed">
                Some features of the Service are provided to business customers under a separate agreement.
                If you are an end recipient, you interact with the Service simply by opting in to receive
                messages from our WhatsApp business number. You are responsible for keeping your phone
                number and contact details accurate.
              </p>
            </div>

            {/* 4. Acceptable use */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">4. Acceptable use</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                You agree not to use the Service to:
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li>Violate any law, regulation, or third party right</li>
                <li>Send unsolicited marketing or spam</li>
                <li>Impersonate another person or misrepresent your identity</li>
                <li>Transmit malware, phishing links, or otherwise harmful content</li>
                <li>Interfere with, probe, or attempt to compromise the Service or its infrastructure</li>
                <li>Circumvent rate limits, messaging tiers, or other restrictions</li>
                <li>Violate WhatsApp's Business Messaging Policy, Commerce Policy, or Business Terms</li>
              </ul>
              <p className="text-white/70 leading-relaxed mt-4">
                We may suspend or terminate access to the Service if we believe you have breached this section.
              </p>
            </div>

            {/* 5. Opt in and opt out */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">5. Opt in and opt out</h2>
              <p className="text-white/70 leading-relaxed">
                Recipients must opt in before we send them business initiated messages. You can opt out
                at any time by replying <span className="text-white">STOP</span> to any WhatsApp message
                from us. You can opt back in by replying <span className="text-white">START</span>. We
                will honour opt out requests promptly.
              </p>
            </div>

            {/* 6. Fees */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">6. Fees</h2>
              <p className="text-white/70 leading-relaxed">
                If you are a business customer, fees for the Service are described in your order form or
                commercial agreement. End recipients are not charged by us for messages, although standard
                carrier data charges from your mobile provider may apply.
              </p>
            </div>

            {/* 7. Third party services */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">7. Third party services</h2>
              <p className="text-white/70 leading-relaxed">
                The Service relies on the WhatsApp Business Platform. Your use of WhatsApp is also subject
                to Meta's terms available at{' '}
                <a
                  href="https://www.whatsapp.com/legal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  https://www.whatsapp.com/legal
                </a>
                . We are not responsible for outages, limitations, or changes to WhatsApp that affect the Service.
              </p>
            </div>

            {/* 8. Intellectual property */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">8. Intellectual property</h2>
              <p className="text-white/70 leading-relaxed">
                We and our licensors own all rights in the Service, including the underlying software,
                content, trademarks, and logos. You are granted a limited, non exclusive, non transferable
                right to use the Service for its intended purpose. No other rights are granted.
              </p>
            </div>

            {/* 9. Privacy */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">9. Privacy</h2>
              <p className="text-white/70 leading-relaxed">
                Our collection and use of personal information is described in our{' '}
                <Link to="/privacy-policy" className="text-purple-400 hover:text-purple-300 underline">
                  Privacy Policy
                </Link>
                . By using the Service you acknowledge the practices described there.
              </p>
            </div>

            {/* 10. Disclaimers */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">10. Disclaimers</h2>
              <p className="text-white/70 leading-relaxed">
                The Service is provided on an "as is" and "as available" basis. To the maximum extent
                permitted by law, we disclaim all warranties, express or implied, including warranties
                of merchantability, fitness for a particular purpose, non infringement, and uninterrupted
                or error free operation. We do not guarantee that any particular message will be delivered,
                read, or acted upon.
              </p>
            </div>

            {/* 11. Limitation of liability */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">11. Limitation of liability</h2>
              <p className="text-white/70 leading-relaxed">
                To the maximum extent permitted by law, we and our affiliates will not be liable for any
                indirect, incidental, special, consequential, or punitive damages, or for any loss of
                profits, revenue, data, or goodwill, arising out of or relating to your use of the Service.
                Our total liability for any claim arising out of or relating to the Service will not exceed
                the greater of the fees you paid us in the 12 months before the claim arose, or one hundred
                US dollars.
              </p>
            </div>

            {/* 12. Indemnification */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">12. Indemnification</h2>
              <p className="text-white/70 leading-relaxed">
                If you use the Service as a business customer, you agree to defend, indemnify, and hold
                harmless The Automators and its affiliates from any claims, damages, liabilities, costs,
                and expenses (including reasonable legal fees) arising from your use of the Service, your
                content, or your breach of these Terms.
              </p>
            </div>

            {/* 13. Termination */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">13. Termination</h2>
              <p className="text-white/70 leading-relaxed">
                We may suspend or terminate your access to the Service at any time if we believe you have
                violated these Terms, if required by law, or if continued provision of the Service becomes
                impractical. You may stop using the Service at any time. Sections that by their nature
                should survive termination will survive, including sections on intellectual property,
                disclaimers, limitation of liability, and indemnification.
              </p>
            </div>

            {/* 14. Changes to the Service or these Terms */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">14. Changes to the Service or these Terms</h2>
              <p className="text-white/70 leading-relaxed">
                We may update the Service and these Terms from time to time. When we update the Terms we
                will revise the "Last updated" date above and, for material changes, provide reasonable
                notice through the Service or by other means. Your continued use of the Service after an
                update means you accept the updated Terms.
              </p>
            </div>

            {/* 15. Governing law and disputes */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">15. Governing law and disputes</h2>
              <p className="text-white/70 leading-relaxed">
                These Terms are governed by the laws of the Republic of South Africa, without regard to
                its conflict of laws rules. Any dispute arising out of or relating to these Terms or the
                Service will be brought exclusively in the courts of South Africa, and you consent to
                personal jurisdiction there. Nothing in this section prevents either party from seeking
                injunctive relief in any court of competent jurisdiction.
              </p>
            </div>

            {/* 16. Miscellaneous */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">16. Miscellaneous</h2>
              <p className="text-white/70 leading-relaxed">
                These Terms, together with any order form or commercial agreement, are the entire agreement
                between you and us regarding the Service. If any provision is found unenforceable, the
                remaining provisions will remain in full force. Our failure to enforce a provision is not
                a waiver of our right to do so later. You may not assign these Terms without our written
                consent. We may assign these Terms to an affiliate or in connection with a merger,
                acquisition, or sale of assets.
              </p>
            </div>

            {/* 17. Contact */}
            <div className="pt-8 border-t border-white/10">
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">17. Contact</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Questions about these Terms can be sent to:
              </p>
              <div className="text-white/60 space-y-2">
                <p className="text-white">The Automators</p>
                <p>South Africa</p>
                <p>
                  Email:{' '}
                  <a href="mailto:sales@theautomators.co" className="text-purple-400 hover:text-purple-300 underline">
                    sales@theautomators.co
                  </a>
                </p>
                <p>Phone: +27 82 770 6456</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
