import { SEO } from './SEO';
import { StarsCanvas } from './StarBackground';

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]">
      <SEO
        title="Privacy Policy"
        description="Privacy policy for The Automators' WhatsApp notification service. Learn how we collect, use, and protect your personal information."
        path="/privacy-policy"
        keywords="privacy policy, data protection, WhatsApp notifications, privacy statement"
      />
      {/* Spinning Stars Background */}
      <StarsCanvas />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center relative z-10">
          <div className="h-10 mb-6"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl gradient-text mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            How we collect, use, store, and disclose personal information when you interact with our WhatsApp notification service.
          </p>
          <p className="text-sm text-white/40 mt-4">
            Last Updated: 19 April 2026
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="glass border border-white/10 rounded-3xl p-8 sm:p-12 space-y-12">

            {/* Introduction */}
            <div>
              <p className="text-white/70 leading-relaxed">
                This Privacy Policy explains how The Automators ("we", "us", "our") collects, uses, stores,
                and discloses personal information when you interact with our WhatsApp notification service
                (the "Service"). By using the Service you agree to the practices described below.
              </p>
            </div>

            {/* 1. Who we are */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">1. Who we are</h2>
              <p className="text-white/70 leading-relaxed">
                The Service is operated by The Automators, based in South Africa. You can contact us at{' '}
                <a href="mailto:sales@theautomators.co" className="text-purple-400 hover:text-purple-300 underline">
                  sales@theautomators.co
                </a>.
              </p>
            </div>

            {/* 2. What information we collect */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">2. What information we collect</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We only collect the minimum information needed to deliver notifications over WhatsApp. Specifically:
              </p>

              <h3 className="text-xl text-white mb-3 mt-6">Information you or our customer provides to us</h3>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li>Your WhatsApp phone number</li>
                <li>Your name or contact label, if supplied</li>
                <li>Any message content you send to our WhatsApp business number</li>
                <li>Preferences such as opt in status, language, and notification categories</li>
              </ul>

              <h3 className="text-xl text-white mb-3 mt-6">Information we collect automatically</h3>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li>Timestamps of messages sent and received</li>
                <li>Delivery and read receipts returned by WhatsApp</li>
                <li>Technical metadata such as message IDs and status codes</li>
                <li>Basic logs used for troubleshooting and abuse prevention</li>
              </ul>

              <p className="text-white/70 leading-relaxed mt-4">
                We do not collect location data, contact lists, financial account details, or sensitive
                categories of personal data through the Service.
              </p>
            </div>

            {/* 3. How we use your information */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">3. How we use your information</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We use the information described above to:
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li>Deliver the WhatsApp notifications you or our customer has requested</li>
                <li>Respond to inbound messages you send to our business number</li>
                <li>Maintain a record of opt ins and opt outs</li>
                <li>Diagnose technical issues and prevent abuse of the Service</li>
                <li>Comply with our legal and regulatory obligations</li>
              </ul>
              <p className="text-white/70 leading-relaxed mt-4">
                We do not sell your personal information. We do not use your WhatsApp messages to train
                machine learning or AI models.
              </p>
            </div>

            {/* 4. Legal basis for processing */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">4. Legal basis for processing</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Where applicable law requires a legal basis for processing (for example the EU or UK GDPR), we rely on:
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li>Your consent, which you give by opting in to receive messages and which you can withdraw at any time</li>
                <li>Our legitimate interest in operating and securing the Service</li>
                <li>Performance of a contract when the Service is provided to a customer who has a relationship with you</li>
                <li>Compliance with legal obligations</li>
              </ul>
            </div>

            {/* 5. How we share your information */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">5. How we share your information</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We share information only with:
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li>
                  <span className="text-white">Meta Platforms, Inc.</span>, which operates the WhatsApp Business
                  Platform used to deliver messages
                </li>
                <li>
                  <span className="text-white">Infrastructure providers</span> that host our application and
                  database (for example our cloud hosting and database providers)
                </li>
                <li>
                  <span className="text-white">Authorities</span> when required by law, subpoena, or to protect
                  our rights or the safety of others
                </li>
              </ul>
              <p className="text-white/70 leading-relaxed mt-4">
                We do not share your data with advertisers or data brokers.
              </p>
            </div>

            {/* 6. International transfers */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">6. International transfers</h2>
              <p className="text-white/70 leading-relaxed">
                Our service providers may process your information outside of your country of residence.
                Where transfers occur, we rely on recognised safeguards such as Standard Contractual Clauses
                or equivalent mechanisms required by your local law.
              </p>
            </div>

            {/* 7. How long we keep your information */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">7. How long we keep your information</h2>
              <p className="text-white/70 leading-relaxed">
                We retain message records, opt in status, and related metadata for as long as needed to
                provide the Service and for a reasonable period afterwards for legal, audit, and dispute
                resolution purposes. Typical retention is 24 months after your last interaction, after
                which data is deleted or anonymised, except where longer retention is required by law.
              </p>
            </div>

            {/* 8. Your rights */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">8. Your rights</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Depending on where you live, you may have the right to:
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Correct inaccurate information</li>
                <li>Delete your information</li>
                <li>Withdraw your consent to receive messages</li>
                <li>Object to or restrict certain processing</li>
                <li>Port your information to another provider</li>
                <li>Lodge a complaint with your local data protection authority</li>
              </ul>
              <p className="text-white/70 leading-relaxed mt-4">
                To exercise any of these rights, email us at{' '}
                <a href="mailto:sales@theautomators.co" className="text-purple-400 hover:text-purple-300 underline">
                  sales@theautomators.co
                </a>
                . You can also stop receiving messages at any time by replying{' '}
                <span className="text-white">STOP</span> to any WhatsApp message from us.
              </p>
            </div>

            {/* 9. How to request data deletion */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">9. How to request data deletion</h2>
              <p className="text-white/70 leading-relaxed">
                To request deletion of your information, email{' '}
                <a href="mailto:sales@theautomators.co" className="text-purple-400 hover:text-purple-300 underline">
                  sales@theautomators.co
                </a>{' '}
                with the subject line "Data Deletion Request" and the WhatsApp phone number you would like
                removed. We will confirm deletion within 30 days.
              </p>
            </div>

            {/* 10. Security */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">10. Security</h2>
              <p className="text-white/70 leading-relaxed">
                We apply reasonable technical and organisational measures to protect your information,
                including encryption in transit, access controls, and audit logging. No system is perfectly
                secure, so we cannot guarantee absolute security.
              </p>
            </div>

            {/* 11. Children */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">11. Children</h2>
              <p className="text-white/70 leading-relaxed">
                The Service is not directed to children under 13 (or the equivalent minimum age in your
                jurisdiction). We do not knowingly collect personal information from children. If you
                believe a child has provided us information, please contact us and we will delete it.
              </p>
            </div>

            {/* 12. Third party services */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">12. Third party services</h2>
              <p className="text-white/70 leading-relaxed">
                Your use of WhatsApp is also governed by Meta's own terms and privacy policy, available at{' '}
                <a
                  href="https://www.whatsapp.com/legal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  https://www.whatsapp.com/legal
                </a>
                . We are not responsible for Meta's practices.
              </p>
            </div>

            {/* 13. Changes to this policy */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">13. Changes to this policy</h2>
              <p className="text-white/70 leading-relaxed">
                We may update this Privacy Policy from time to time. When we do, we will update the "Last
                updated" date at the top of this page. Material changes will be communicated through the
                Service or by other reasonable means.
              </p>
            </div>

            {/* 14. Contact us */}
            <div className="pt-8 border-t border-white/10">
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">14. Contact us</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Questions or concerns about this policy can be sent to:
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
