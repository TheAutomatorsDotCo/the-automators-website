import { Link } from 'react-router-dom';
import { SEO } from './SEO';

const linkClass = 'text-purple-400 hover:text-purple-300 underline';

export function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]">
      <SEO
        title="Terms of Service"
        description="Terms of Service for The Automators' WhatsApp notification service. Read our terms of service and acceptable use guidelines."
        path="/terms"
        keywords="terms of service, terms and conditions, WhatsApp notifications, acceptable use"
      />

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center relative z-10">
          <div className="h-10 mb-6"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl gradient-text mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            These terms apply to everyone who uses our website, talks to us about a project, or uses a
            service we provide.
          </p>
          <p className="text-sm text-white/40 mt-4">
            Last updated: 19 October 2026
          </p>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="glass border border-white/10 rounded-3xl p-8 sm:p-12 space-y-8">

            <div>
              <p className="text-white/70 leading-relaxed">
                These terms apply to everyone who uses our website, talks to us about a project, or uses a
                service we provide. Please read them carefully. Section 16 limits our responsibility to you
                and asks business clients to cover certain claims. We've written it in plain language so it's
                easy to follow.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">1. Who we are</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                The Automators (Pty) Ltd, registration number 2025/800843/07, is a private company
                registered in South Africa ("The Automators", "we", "us", "our").
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                We build AI chatbots, voice agents, workflow automations and system integrations for
                businesses.
              </p>
              <p className="text-white/70 leading-relaxed">
                Our physical address is 1 Vergenoegd Bordeaux Estate, Ametis Street, Klerksdorp, North
                West, 2572, South Africa.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">2. Accepting these terms</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                By using our website, booking a demo or assessment, accepting a quote or proposal, or using
                any of our services, you agree to these terms.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                If you're accepting for a company or other organisation, you confirm that you're allowed to
                bind it, and "you" means that organisation.
              </p>
              <p className="text-white/70 leading-relaxed">
                If you don't agree, please don't use our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">3. Our services</h2>
              <p className="text-white/70 leading-relaxed mb-4">We offer:</p>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4 mb-4">
                <li>AI chatbots that answer questions on websites, WhatsApp and other messaging channels</li>
                <li>voice agents that handle phone calls</li>
                <li>workflow automation that takes repetitive tasks off your team</li>
                <li>system integrations that connect the software you already use</li>
              </ul>
              <p className="text-white/70 leading-relaxed">
                What we build for you, how long it takes and what it costs is set out in your proposal or
                project agreement (see section 6). These terms cover the general rules that apply to all our
                work.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">4. Using our website</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                You may use our website to learn about us, contact us and book a demo or assessment. When you
                use it, you agree not to:
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4 mb-4">
                <li>break any law or anyone else's rights</li>
                <li>send spam, malware, phishing links or other harmful content</li>
                <li>try to get into parts of the website or our systems you're not meant to access</li>
                <li>
                  copy, scrape or reuse our content for commercial purposes without our written permission
                </li>
                <li>interfere with how the website works, or try to overload it</li>
                <li>pretend to be someone else</li>
              </ul>
              <p className="text-white/70 leading-relaxed mb-4">
                The content on our website is general information about our services. It isn't an offer, and
                it isn't advice for your specific situation.
              </p>
              <p className="text-white/70 leading-relaxed">
                We may link to other websites. We don't control them and aren't responsible for their
                content.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">5. Demos and assessments</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We may offer a free demo or assessment so you can see what we could build for you. For
                example, we may build a sample chatbot using your public product or service information.
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li>A demo is a sample only. It shows what's possible, not a finished product.</li>
                <li>It may contain mistakes, and it may not stay available after the demo.</li>
                <li>
                  Any recommendations we make in an assessment are based on the information you give us at the
                  time.
                </li>
                <li>A demo or assessment doesn't commit either of us to a project.</li>
                <li>You confirm that you're allowed to share any information you give us for the demo.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">6. Quotes, proposals and project agreements</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Before we start a project, we send you a quote, proposal or project agreement. It sets out the
                scope, deliverables, timeline, fees and payment terms for that project.
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li>
                  A quote or proposal is valid for the period stated on it, or for 30 days from the date we
                  send it if no period is stated.
                </li>
                <li>
                  A project starts once you've signed or accepted the proposal or agreement in writing, and
                  paid any amount it says is due before work starts.
                </li>
                <li>Changes to the scope must be agreed in writing and may change the fees and timeline.</li>
                <li>
                  If a signed proposal or project agreement conflicts with these terms, the signed proposal
                  or agreement takes precedence for that project.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">7. Payment</h2>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4 mb-4">
                <li>
                  Fees, payment dates and any amount due before work starts are set out in your proposal or
                  project agreement.
                </li>
                <li>
                  We invoice as set out in your project agreement. You agree to pay each invoice in full by
                  its due date.
                </li>
                <li>
                  Prices exclude third-party costs unless your agreement says otherwise. Some platforms charge
                  you directly (see section 9).
                </li>
                <li>
                  If a payment is late, we may pause work, pause or suspend the services we run for you, and
                  charge interest on the overdue amount from the due date until paid, at the rate set out in
                  your agreement or, if none is set, at the rate prescribed under the Prescribed Rate of
                  Interest Act 55 of 1975.
                </li>
                <li>Pausing work for late payment may affect agreed timelines.</li>
                <li>
                  If you dispute an invoice, tell us in writing before its due date so we can sort it out.
                  Please pay any part you don't dispute.
                </li>
              </ul>
              <p className="text-white/70 leading-relaxed">
                The Automators is not registered for VAT, so we don't charge VAT on our fees. If we register
                in future, we'll tell you, and VAT will be added to fees invoiced after the registration date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">8. Your responsibilities</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                To get good results, we need your help. You agree to:
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4 mb-4">
                <li>give us accurate, complete and up-to-date information</li>
                <li>give us the access we need on time, such as accounts, logins, systems and content</li>
                <li>review our work and give approvals and feedback within a reasonable time</li>
                <li>use our services lawfully and only for legitimate business purposes</li>
                <li>
                  get the consents your customers need to give, for example before you send them marketing or
                  WhatsApp messages, and keep records of those consents
                </li>
                <li>make sure you have the right to use any content, data, images or trademarks you give us</li>
                <li>
                  keep your own passwords and accounts secure, and tell us promptly if you think one has been
                  compromised
                </li>
                <li>follow the terms and policies of any third-party platform the service uses</li>
              </ul>
              <p className="text-white/70 leading-relaxed">
                If you delay information, access or approvals, timelines may move, and extra work caused by
                the delay may be charged as agreed in your project agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">9. Third-party platforms</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Our services rely on platforms run by other companies. These include messaging platforms
                (such as WhatsApp), AI model providers, telephony providers, and hosting and automation
                infrastructure.
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li>Your use of these platforms is also subject to their own terms and policies.</li>
                <li>
                  Some platforms charge fees directly, for example per message or per minute. Unless your
                  agreement says otherwise, you pay those fees.
                </li>
                <li>
                  These providers can change their prices, features, rules or availability at any time. Their
                  outages, limits and changes are outside our control.
                </li>
                <li>
                  If a platform change affects your service, we'll tell you and work with you on the best way
                  forward. Any extra work needed may be quoted separately.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">10. AI output</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Our chatbots and voice agents use artificial intelligence to understand questions and
                generate answers.
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li>
                  AI can get things wrong. It can misunderstand a question, give an incomplete or outdated
                  answer, or state something false with confidence.
                </li>
                <li>
                  You should review how your chatbot or voice agent answers, especially for prices, stock,
                  policies and anything with legal, financial, medical or safety impact.
                </li>
                <li>AI output is not professional advice of any kind.</li>
                <li>
                  You're responsible for the business information the AI uses, and for keeping it up to date.
                </li>
                <li>
                  We set up handover to a person where it's agreed in your project, so that questions the AI
                  shouldn't handle reach your team.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">11. Availability and support</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We use reasonable efforts to keep the services we run available and working properly. We can't
                promise that any service, our website or any third-party platform will run without
                interruption or errors.
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li>
                  We may need to pause a service for maintenance, updates or security reasons. Where we can,
                  we'll give you notice.
                </li>
                <li>Support and any service levels are set out in your project agreement or support plan.</li>
                <li>
                  Our support hours are Monday to Friday, 08:00 to 17:00 SAST, excluding South African public
                  holidays, unless your agreement says otherwise.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">12. Intellectual property</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Your data and content stay yours. This includes your business information, customer data,
                product data, brand, logos and any content you give us. You give us permission to use it only
                to provide our services to you.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                We keep ownership of our own tools, templates, code libraries, prompts, methods, workflows and
                know-how, including anything we developed before or outside your project and general
                improvements we make while working.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                When you've paid in full, you get the rights to use your deliverables as set out in your
                project agreement. If your project agreement doesn't say otherwise, you get a non-exclusive,
                non-transferable licence to use the deliverables for your own business for as long as you use
                our services or the deliverables. Our underlying tools, templates and workflows stay ours.
              </p>
              <p className="text-white/70 leading-relaxed">
                Our website, its content, our name and our logo belong to us. You may not use them without our
                written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">13. Confidentiality</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Each of us will keep the other's confidential information private. Confidential information
                includes business plans, pricing, customer information, system access details and anything
                marked or clearly meant to be confidential.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">We will each:</p>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4 mb-4">
                <li>use the other's confidential information only for the project or service</li>
                <li>
                  share it only with people who need it for the work and who are bound to keep it confidential
                </li>
                <li>protect it with reasonable care</li>
              </ul>
              <p className="text-white/70 leading-relaxed mb-4">
                This doesn't apply to information that is already public through no fault of the receiving
                party, that the receiving party already had or developed independently, or that the law or a
                court requires to be disclosed.
              </p>
              <p className="text-white/70 leading-relaxed">
                These duties continue after our work together ends.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">14. Privacy and POPIA</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We handle personal information in line with the Protection of Personal Information Act 4 of
                2013 (POPIA). Our{' '}
                <Link to="/privacy-policy" className={linkClass}>
                  Privacy Policy
                </Link>{' '}
                explains what we collect, why, who we share it with and your rights.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                When we build or run a system for you, you decide how the personal information in it is used.
                You're the responsible party under POPIA and we act as your operator. We process that
                information only on your instructions and keep it secure, as our Privacy Policy explains.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                You're responsible for having a lawful reason to collect and use your customers' personal
                information, and for the consents and notices your customers need.
              </p>
              <p className="text-white/70 leading-relaxed">
                Our Information Officer is Braam Raubenheimer. Privacy requests can be sent to
                braam@theautomators.co. Our Information Regulator registration number is 2026-061974.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">15. WhatsApp notification service</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                This section applies to the WhatsApp notification service we provide (the "WhatsApp Service").
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">15.1 What it is</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                The WhatsApp Service delivers notifications and related messages to recipients through the
                WhatsApp Business Platform run by Meta Platforms, Inc. It may also receive and process
                messages that recipients send back to our WhatsApp business number.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">15.2 Who may use it</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                You must be at least 13 years old, or the minimum age of digital consent in your country, to
                use the WhatsApp Service. By using it you confirm that you meet this requirement, and that
                you're allowed to accept these terms for any organisation you represent.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">15.3 Business customers and recipients</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Some features of the WhatsApp Service are provided to business customers under a separate
                agreement. If you're a recipient, you use the WhatsApp Service simply by opting in to receive
                messages from our WhatsApp business number. You're responsible for keeping your phone number
                and contact details accurate.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">15.4 Acceptable use</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                You agree not to use the WhatsApp Service to:
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4 mb-4">
                <li>break any law, regulation or anyone else's rights</li>
                <li>send unsolicited marketing or spam</li>
                <li>pretend to be someone else or misrepresent who you are</li>
                <li>send malware, phishing links or other harmful content</li>
                <li>
                  interfere with, probe or try to compromise the WhatsApp Service or its infrastructure
                </li>
                <li>get around rate limits, messaging tiers or other restrictions</li>
                <li>break WhatsApp's Business Messaging Policy, Commerce Policy or Business Terms</li>
              </ul>
              <p className="text-white/70 leading-relaxed mb-6">
                We may suspend or end access to the WhatsApp Service if we believe you've broken this section.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">15.5 Opting in and out</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Recipients must opt in before we send them business-initiated messages. You can opt out at any
                time by replying STOP to any WhatsApp message from us, and opt back in by replying START. We
                act on opt-out requests promptly.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">15.6 Fees</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                If you're a business customer, fees for the WhatsApp Service are set out in your order form or
                agreement. We don't charge recipients for messages, but your mobile provider's standard data
                charges may apply.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">15.7 WhatsApp's own terms</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                The WhatsApp Service relies on the WhatsApp Business Platform. Your use of WhatsApp is also
                subject to{' '}
                <a
                  href="https://www.whatsapp.com/legal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Meta's WhatsApp terms
                </a>
                . We're not responsible for outages, limits or changes to WhatsApp that affect the WhatsApp
                Service, and we can't promise that any particular message will be delivered, read or acted on.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">15.8 Other terms that apply</h3>
              <p className="text-white/70 leading-relaxed">
                Sections 12 (intellectual property), 14 (privacy), 16 (liability and indemnity), 17 (ending
                our agreement) and 19 (law and disputes) also apply to the WhatsApp Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">16. Limitation of liability and indemnity</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Please read this section carefully. It limits our responsibility to you.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">16.1 What we're not liable for</h3>
              <p className="text-white/70 leading-relaxed mb-4">As far as the law allows:</p>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4 mb-6">
                <li>
                  our website, demos and services are provided "as is" and "as available", apart from
                  anything we expressly promise in your project agreement
                </li>
                <li>
                  we're not liable for indirect or consequential loss, such as loss of profit, revenue,
                  business, data or goodwill
                </li>
                <li>
                  we're not liable for loss caused by third-party platforms (section 9), AI output you didn't
                  review (section 10), wrong or late information or access from you (section 8), or events
                  outside our reasonable control, such as load shedding, internet or network outages, natural
                  disasters or changes in law
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">16.2 Our maximum liability</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                As far as the law allows, our total liability for all claims about a project or service is
                limited to the greater of the fees you paid us for that project or service in the 12 months
                before the claim arose, or R2,000.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">16.3 What we don't exclude</h3>
              <p className="text-white/70 leading-relaxed mb-4">Nothing in these terms limits or excludes:</p>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4 mb-4">
                <li>liability for our gross negligence, fraud or wilful misconduct</li>
                <li>liability for death or bodily injury caused by our negligence</li>
                <li>
                  any right you have, or any liability we have, that the law doesn't allow us to limit or
                  exclude, including your rights under the Consumer Protection Act 68 of 2008 where it
                  applies to you
                </li>
              </ul>
              <p className="text-white/70 leading-relaxed mb-6">
                If the Consumer Protection Act applies to you, these terms must be read so that they comply
                with it, and any part that doesn't comply won't apply to you.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">16.4 Indemnity (business clients)</h3>
              <p className="text-white/70 leading-relaxed">
                If you use our services as a business, you agree to cover The Automators against claims,
                losses, damages, costs and expenses (including reasonable legal fees) that arise from your use
                of the services, your content or data, your customers' consents, or your breach of these
                terms. This doesn't apply to the extent that the claim was caused by our own breach or
                negligence.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">17. Ending our agreement</h2>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li>
                  Either of us may end a project or service as set out in your project agreement, including
                  any notice period it sets. If no notice period is set, either of us may end an ongoing
                  service by giving 30 days' written notice.
                </li>
                <li>
                  Either of us may end it immediately by written notice if the other seriously breaches these
                  terms or the agreement and doesn't fix the breach within 14 days after receiving written
                  notice.
                </li>
                <li>
                  We may suspend or end services if you don't pay on time (section 7), if you use them
                  unlawfully or against section 4 or 15.4, or if the law or a platform provider requires it.
                </li>
                <li>
                  If the Consumer Protection Act applies to a fixed-term agreement you have with us, you may
                  cancel as that Act allows.
                </li>
                <li>
                  When our work ends, you pay for work done and costs incurred up to the end date. We'll help
                  you get your data back, and then return or delete it as our Privacy Policy explains.
                </li>
                <li>
                  Sections that by their nature should continue after the end will continue. These include
                  intellectual property, confidentiality, privacy, liability and indemnity, and payment of
                  amounts owed.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">18. Changes to these terms</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We may update these terms from time to time. When we do, we'll change the "Last updated" date
                at the top. For important changes, we'll give reasonable notice on our website or by email to
                clients.
              </p>
              <p className="text-white/70 leading-relaxed">
                If you keep using our website or services after an update, you accept the updated terms.
                Changes don't affect a signed project agreement unless both of us agree in writing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">19. Law and disputes</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                These terms are governed by the laws of the Republic of South Africa.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                If there's a dispute, we'll first try to resolve it by talking to each other in good faith. If
                that doesn't work, either of us may take it to the Magistrate's Court with jurisdiction, which
                we both agree to even if the amount is more than that court would normally hear, or to the
                North West Division of the High Court, Mahikeng. If the Consumer Protection Act applies to
                you, this doesn't limit your right to approach a consumer court, ombud or the National
                Consumer Commission.
              </p>
              <p className="text-white/70 leading-relaxed">
                Nothing in this section stops either of us from asking a court for urgent relief.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">20. General</h2>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li>
                  These terms, together with any signed proposal, project agreement or order form, are the
                  whole agreement between us about their subject.
                </li>
                <li>If any part of these terms can't be enforced, the rest still applies.</li>
                <li>If we don't enforce a right straight away, we haven't given it up.</li>
                <li>
                  You may not transfer your rights or duties under these terms without our written consent. We
                  may transfer ours to a company that takes over our business, and we'll tell you if we do.
                </li>
                <li>
                  Notices under these terms may be given by email to the addresses we use for each other.
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">21. Contact us</h2>
              <div className="text-white/70 leading-relaxed space-y-1 mb-4">
                <p>The Automators (Pty) Ltd</p>
                <p>1 Vergenoegd Bordeaux Estate, Ametis Street, Klerksdorp, North West, 2572, South Africa</p>
                <p>Service area: South Africa</p>
                <p>Hours: Monday to Friday, 08:00 to 17:00 SAST</p>
              </div>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li>
                  Email:{' '}
                  <a href="mailto:sales@theautomators.co" className={linkClass}>
                    sales@theautomators.co
                  </a>
                </li>
                <li>
                  WhatsApp:{' '}
                  <a
                    href="https://wa.me/27790299611"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    079 029 9611
                  </a>
                </li>
                <li>
                  Calls only:{' '}
                  <a href="tel:+27827706456" className={linkClass}>
                    082 770 6456
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
