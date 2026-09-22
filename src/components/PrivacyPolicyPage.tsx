import type { ReactNode } from 'react';
import { SEO } from './SEO';
import { StarsCanvas } from './StarBackground';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

const PRIVACY_EMAIL = 'braam@theautomators.co';

function PrivacyEmail() {
  return (
    <a href={`mailto:${PRIVACY_EMAIL}`} className="text-purple-400 hover:text-purple-300 underline">
      {PRIVACY_EMAIL}
    </a>
  );
}

function PrivacyPhone() {
  return (
    <a href="tel:+27827706456" className="text-purple-400 hover:text-purple-300 underline">
      +27 82 770 6456
    </a>
  );
}

const headClass = 'text-white px-3 py-3 align-bottom';
const cellClass = 'text-white/70 align-top px-3 py-3 leading-relaxed';
const rowClass = 'border-white/10 hover:bg-white/5';

function PolicyTable({ children }: { children: ReactNode }) {
  return (
    <div className="w-full" style={{ overflowX: 'auto' }}>
      <Table className="text-sm" style={{ minWidth: '36rem' }}>
        {children}
      </Table>
    </div>
  );
}

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]">
      <SEO
        title="Privacy Policy"
        description="How The Automators (Pty) Ltd collects, uses and protects personal information on our website, for clients and partners, and through WhatsApp, under POPIA."
        path="/privacy-policy"
        keywords="privacy policy, POPIA, data protection, The Automators, personal information, WhatsApp notifications"
      />
      <StarsCanvas />

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center relative z-10">
          <div className="h-10 mb-6"></div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl gradient-text mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            How we handle personal information when you visit our website, contact us, work with us,
            receive WhatsApp notifications, or chat with a bot we run.
          </p>
          <p className="text-sm text-white/40 mt-4">
            Last updated: 22 September 2026
          </p>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="glass border border-white/10 rounded-3xl p-8 sm:p-12 space-y-8">

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">1. Who we are</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                The Automators (Pty) Ltd, registration number 2025/800843/07 ("we", "us"), builds workflow
                automations, AI chatbots, voice agents and custom business systems.
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li>
                  <span className="text-white">Address:</span> 1 Vergenoegd Bordeaux Estate, Ametis Street,
                  Klerksdorp, North West, 2572, South Africa
                </li>
                <li>
                  <span className="text-white">Information Officer:</span> Braam Raubenheimer
                </li>
                <li>
                  <span className="text-white">Privacy requests:</span> <PrivacyEmail /> | <PrivacyPhone />
                </li>
                <li>
                  <span className="text-white">Information Regulator registration:</span> 2026-061974
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">2. What this policy covers</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                This policy explains how we handle personal information when you visit our website, contact
                us or book a call, when you or your organisation are a client, supplier or partner of ours,
                when you receive messages through our WhatsApp notification service, and when you chat with
                a bot we run for ourselves.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                It follows the Protection of Personal Information Act 4 of 2013 (POPIA) and, where they
                apply, the EU and UK General Data Protection Regulations (GDPR). Under POPIA, information
                about companies and other organisations can also be personal information, so this policy
                covers it too.
              </p>
              <p className="text-white/70 leading-relaxed">
                <span className="text-white">When we work for a client, the client is in charge.</span> If we
                build or run a system for a client, the client decides why and how the personal information
                in it is used. The client is the "responsible party" (the "controller" under GDPR) and we
                are its "operator" (its "processor"). Section 9 explains what we commit to in that role. If
                your information is in a system we run for one of our clients, please contact that client
                first. We will help them respond.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">3. What we collect, and where it comes from</h2>
              <PolicyTable>
                <TableHeader>
                  <TableRow className={rowClass}>
                    <TableHead className={headClass}>When</TableHead>
                    <TableHead className={headClass}>What</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className={rowClass}>
                    <TableCell className={cellClass}>You visit our website</TableCell>
                    <TableCell className={cellClass}>
                      Pages viewed, device and browser type, approximate location from your IP address,
                      collected through Google Analytics cookies
                    </TableCell>
                  </TableRow>
                  <TableRow className={rowClass}>
                    <TableCell className={cellClass}>You contact us or book a call</TableCell>
                    <TableCell className={cellClass}>
                      Your name, email address, phone number, organisation and role, your message, and your
                      answers to the booking questions
                    </TableCell>
                  </TableRow>
                  <TableRow className={rowClass}>
                    <TableCell className={cellClass}>You are a client, supplier or partner</TableCell>
                    <TableCell className={cellClass}>
                      Contact details of the people we deal with, what we discuss and agree, proposals,
                      contracts, invoices and payment records
                    </TableCell>
                  </TableRow>
                  <TableRow className={rowClass}>
                    <TableCell className={cellClass}>You receive our WhatsApp notifications</TableCell>
                    <TableCell className={cellClass}>
                      Your WhatsApp number, the name or label you or our customer supplied, messages sent
                      and received, your opt-in and opt-out choices, and delivery data such as timestamps
                      and read receipts
                    </TableCell>
                  </TableRow>
                  <TableRow className={rowClass}>
                    <TableCell className={cellClass}>You chat with our own bot</TableCell>
                    <TableCell className={cellClass}>
                      The messages you send and any contact details you choose to give
                    </TableCell>
                  </TableRow>
                </TableBody>
              </PolicyTable>
              <p className="text-white/70 leading-relaxed mt-4">
                Most of it comes from you. Some comes from your organisation (for example when a client
                names you as its contact), from public business sources such as your company's website, or
                from our customers when they ask us to send you WhatsApp notifications.
              </p>
              <p className="text-white/70 leading-relaxed mt-4">
                Giving us your information is voluntary. If you don't, we may not be able to reply to you,
                hold a call, deliver a service or pay you.
              </p>
              <p className="text-white/70 leading-relaxed mt-4">
                We don't ask for special personal information (such as health, religious beliefs, race,
                biometric data or criminal records) or identity numbers for our own purposes. Please don't
                send them to us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">4. Why we use it</h2>
              <PolicyTable>
                <TableHeader>
                  <TableRow className={rowClass}>
                    <TableHead className={headClass}>Purpose</TableHead>
                    <TableHead className={headClass}>
                      Basis under POPIA section 11 (and GDPR article 6 where it applies)
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className={rowClass}>
                    <TableCell className={cellClass}>Reply to enquiries and hold calls you book</TableCell>
                    <TableCell className={cellClass}>
                      You asked us to, or it is a step towards a contract with you
                    </TableCell>
                  </TableRow>
                  <TableRow className={rowClass}>
                    <TableCell className={cellClass}>Deliver, support and invoice our services</TableCell>
                    <TableCell className={cellClass}>
                      Performance of our contract with you or your organisation
                    </TableCell>
                  </TableRow>
                  <TableRow className={rowClass}>
                    <TableCell className={cellClass}>Keep accounting and tax records</TableCell>
                    <TableCell className={cellClass}>Legal obligation</TableCell>
                  </TableRow>
                  <TableRow className={rowClass}>
                    <TableCell className={cellClass}>Understand how our website is used and improve it</TableCell>
                    <TableCell className={cellClass}>
                      Our legitimate interest, and your consent to analytics cookies where the law requires it
                    </TableCell>
                  </TableRow>
                  <TableRow className={rowClass}>
                    <TableCell className={cellClass}>Keep our systems and your information secure</TableCell>
                    <TableCell className={cellClass}>Our legitimate interest and legal obligations</TableCell>
                  </TableRow>
                  <TableRow className={rowClass}>
                    <TableCell className={cellClass}>Send WhatsApp notifications</TableCell>
                    <TableCell className={cellClass}>
                      Your consent, or the instruction of our customer who is responsible for them
                    </TableCell>
                  </TableRow>
                </TableBody>
              </PolicyTable>
              <p className="text-white/70 leading-relaxed mt-4">
                We don't sell personal information. We don't use it to train our own artificial intelligence
                or machine learning models. Where a chat reply is generated for us, it may be produced by an
                AI model provider reached through OpenRouter, and we send only what is needed to produce
                that reply.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">5. Direct marketing</h2>
              <p className="text-white/70 leading-relaxed">
                We send marketing by email, SMS or WhatsApp only to people who have agreed to receive it,
                or to our existing clients about services similar to ones they already use, as section 69 of
                POPIA allows. Every message tells you how to opt out, and you can opt out at any time by
                replying or by emailing us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">6. Who we share it with</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Only with the service providers we need to run the business, who are bound by contract to
                protect it and use it only for us:
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li>
                  <span className="text-white">Google</span> for email, calendar, video calls and website analytics
                </li>
                <li>
                  <span className="text-white">Brevo</span> for call bookings and email we send to people who have opted in
                </li>
                <li>
                  <span className="text-white">Zoho</span> for invoicing and accounting
                </li>
                <li>
                  <span className="text-white">Hetzner Online</span> for the servers that run our automation platform, in Germany
                </li>
                <li>
                  A specialist infrastructure partner who maintains our automation server
                </li>
                <li>
                  <span className="text-white">Cloudflare</span> for our domain's DNS and security
                </li>
                <li>
                  <span className="text-white">Supabase</span> for database hosting
                </li>
                <li>
                  <span className="text-white">Meta Platforms</span> for the WhatsApp Business Platform
                </li>
                <li>
                  <span className="text-white">AI model providers</span>, reached through OpenRouter, when a chatbot needs to generate a reply
                </li>
                <li>
                  <span className="text-white">Our accountants and professional advisers</span>
                </li>
                <li>
                  <span className="text-white">Authorities</span>, only when the law requires it
                </li>
              </ul>
              <p className="text-white/70 leading-relaxed mt-4">
                We don't share personal information with advertisers or data brokers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">7. Information that leaves South Africa</h2>
              <p className="text-white/70 leading-relaxed">
                Some of these providers store or process information outside South Africa, including in the
                European Union, the United Kingdom and the United States. We only send personal information
                across the border where section 72 of POPIA allows it: the recipient is bound by a law,
                binding corporate rules or an agreement that gives it adequate protection (such as the GDPR,
                or standard contractual clauses), or you have agreed, or it is needed to perform a contract
                with you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">8. How we protect it</h2>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li>
                  Access is limited to people who need it, each with their own account. We use multi-factor
                  authentication on systems that hold personal information.
                </li>
                <li>Information is encrypted in transit, and at rest where our providers support it.</li>
                <li>
                  Everyone who works for us is bound to confidentiality in their contract, including after
                  they leave.
                </li>
                <li>
                  Where possible, systems we build for clients run in accounts the client owns and controls,
                  so the client can see and remove our access at any time.
                </li>
                <li>Our platforms keep logs of access and changes.</li>
                <li>
                  By default our automation server doesn't store the information passing through successful
                  runs, only from failed runs, which we keep for a limited time to fix errors.
                </li>
                <li>
                  If we believe personal information we are responsible for has been accessed or acquired by
                  someone without authority, we notify the Information Regulator and the people affected as
                  soon as reasonably possible, as section 22 of POPIA requires. When we are acting for a
                  client, we tell the client immediately so it can do the same.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">9. When we act for our clients</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                When we build or run a system for a client, we:
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li>
                  process personal information only on the client's documented instructions and for the
                  client's purposes
                </li>
                <li>
                  keep it confidential and secure, as sections 20 and 21 of POPIA require, and article 28 of
                  the GDPR where it applies
                </li>
                <li>work under a written agreement with the client</li>
                <li>tell the client immediately about any suspected security compromise</li>
                <li>use other service providers for the client's data only with the client's agreement</li>
                <li>help the client respond to requests from the people whose information it is</li>
                <li>
                  return or delete the information when the work ends, unless the law requires us to keep it
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">10. How long we keep it</h2>
              <PolicyTable>
                <TableHeader>
                  <TableRow className={rowClass}>
                    <TableHead className={headClass}>Information</TableHead>
                    <TableHead className={headClass}>How long</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className={rowClass}>
                    <TableCell className={cellClass}>Enquiries that don't lead to work</TableCell>
                    <TableCell className={cellClass}>Up to 24 months after our last contact</TableCell>
                  </TableRow>
                  <TableRow className={rowClass}>
                    <TableCell className={cellClass}>Client and supplier records, contracts, invoices</TableCell>
                    <TableCell className={cellClass}>
                      As long as tax and company law requires, currently five to seven years depending on the
                      record
                    </TableCell>
                  </TableRow>
                  <TableRow className={rowClass}>
                    <TableCell className={cellClass}>WhatsApp notification data</TableCell>
                    <TableCell className={cellClass}>24 months after your last interaction</TableCell>
                  </TableRow>
                  <TableRow className={rowClass}>
                    <TableCell className={cellClass}>Website analytics</TableCell>
                    <TableCell className={cellClass}>14 months</TableCell>
                  </TableRow>
                </TableBody>
              </PolicyTable>
              <p className="text-white/70 leading-relaxed mt-4">
                After that we delete it or remove anything that identifies you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">11. Your rights</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                You can ask us whether we hold personal information about you and for a copy, ask us to
                correct or delete it, object to how we use it (including for direct marketing), and withdraw
                consent you have given. If the GDPR applies to you, you can also ask us to restrict
                processing or to give you your information in a portable format.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                Email our Information Officer at <PrivacyEmail /> with your request. We will confirm who you
                are before acting and reply within 30 days.
              </p>
              <p className="text-white/70 leading-relaxed">
                If you're unhappy with how we've handled your information, you can complain to the
                Information Regulator, or to your local data protection authority if the GDPR applies to you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">12. The Information Regulator</h2>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li>
                  <span className="text-white">Address:</span> Woodmead North Office Park, 54 Maxwell Drive,
                  Woodmead, Johannesburg, 2191
                </li>
                <li>
                  <span className="text-white">Postal:</span> PO Box 31533, Braamfontein, Johannesburg, 2017
                </li>
                <li>
                  <span className="text-white">Complaints:</span>{' '}
                  <a
                    href="mailto:POPIAComplaints@inforegulator.org.za"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    POPIAComplaints@inforegulator.org.za
                  </a>
                </li>
                <li>
                  <span className="text-white">General enquiries:</span>{' '}
                  <a
                    href="mailto:enquiries@inforegulator.org.za"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    enquiries@inforegulator.org.za
                  </a>
                  {' '}| 0800 017 160
                </li>
                <li>
                  <span className="text-white">Website:</span>{' '}
                  <a
                    href="https://www.inforegulator.org.za"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    www.inforegulator.org.za
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">13. Children</h2>
              <p className="text-white/70 leading-relaxed">
                Our website and services are not aimed at children, and we don't knowingly collect
                children's information for our own purposes. Some systems we run for clients may hold
                information about children. There we act only on the client's instructions, and the client
                is responsible for the lawful basis, as sections 34 and 35 of POPIA require.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">14. Cookies</h2>
              <p className="text-white/70 leading-relaxed">
                Our website uses Google Analytics cookies to understand how visitors use it. You can block
                or delete cookies in your browser settings, or install{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  Google's Analytics opt-out browser add-on
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">15. Our WhatsApp notification service</h2>
              <p className="text-white/70 leading-relaxed">
                Reply <span className="text-white">STOP</span> to any message to stop receiving them. To
                have your information deleted, email <PrivacyEmail /> with the subject "Data Deletion
                Request" and the phone number concerned. We confirm deletion within 30 days. Your use of
                WhatsApp itself is covered by Meta's terms at{' '}
                <a
                  href="https://www.whatsapp.com/legal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  whatsapp.com/legal
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">16. Changes to this policy</h2>
              <p className="text-white/70 leading-relaxed">
                When we change this policy we update the date at the top, and we tell our clients about any
                material change.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">17. Contact</h2>
              <div className="text-white/60 space-y-2">
                <p className="text-white">The Automators (Pty) Ltd</p>
                <p>Information Officer: Braam Raubenheimer</p>
                <p>
                  Email: <PrivacyEmail />
                </p>
                <p>
                  Phone: <PrivacyPhone />
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
