import React from 'react';
import { SEO } from './SEO';
import { StarsCanvas } from './StarBackground';

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]">
      <SEO
        title="Privacy Policy"
        description="Privacy policy for The Automators. Learn how we collect, use, and protect your personal information."
        path="/privacy-policy"
        keywords="privacy policy, data protection, privacy statement"
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
            Your privacy is important to us. This policy outlines how we handle your information.
          </p>
          <p className="text-sm text-white/40 mt-4">
            Last Updated: November 2, 2025
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="glass border border-white/10 rounded-3xl p-8 sm:p-12 space-y-12">
            
            {/* Introduction */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">Introduction</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                At The Automators, we are committed to protecting your privacy and ensuring the security of your 
                personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard 
                your information when you use our services.
              </p>
              <p className="text-white/70 leading-relaxed">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy 
                policy, please do not access or use our services.
              </p>
            </div>

            {/* Information Collection */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">1. Information We Collect</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We may collect information about you in a variety of ways. The information we may collect via 
                our services includes:
              </p>
              
              <h3 className="text-xl text-white mb-3 mt-6">Personal Data</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Personally identifiable information, such as your name, email address, phone number, and company 
                information, that you voluntarily give to us when you contact us or when you choose to participate 
                in various activities related to our services.
              </p>

              <h3 className="text-xl text-white mb-3 mt-6">Derivative Data</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Information our servers automatically collect when you access our services, such as your IP address, 
                browser type, operating system, access times, and the pages you have viewed directly before and 
                after accessing our services.
              </p>

              <h3 className="text-xl text-white mb-3 mt-6">Financial Data</h3>
              <p className="text-white/70 leading-relaxed">
                Financial information, such as data related to your payment method (e.g., valid credit card number, 
                card brand, expiration date) that we may collect when you purchase, order, return, exchange, or 
                request information about our services. We store only very limited, if any, financial information 
                that we collect. All financial information is stored by our payment processor and you are encouraged 
                to review their privacy policy and contact them directly for responses to your questions.
              </p>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">2. How We Use Your Information</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We use the information we collect or receive to:
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Understand and analyze how you use our services</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you, either directly or through one of our partners, including for customer service, 
                    to provide you with updates and other information relating to the service, and for marketing and 
                    promotional purposes</li>
                <li>Process your transactions and manage your orders</li>
                <li>Send you emails and other communications</li>
                <li>Find and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Information Protection */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">3. How We Protect Your Information</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We use administrative, technical, and physical security measures to help protect your personal 
                information. While we have taken reasonable steps to secure the personal information you provide 
                to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, 
                and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
              <p className="text-white/70 leading-relaxed">
                Any information disclosed online is vulnerable to interception and misuse by unauthorized parties. 
                Therefore, we cannot guarantee complete security if you provide personal information.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We may use cookies, web beacons, tracking pixels, and other tracking technologies on our services 
                to help customize the service and improve your experience. When you access our services, your 
                personal information is not collected through the use of tracking technology. Most browsers are 
                set to accept cookies by default.
              </p>
              <p className="text-white/70 leading-relaxed">
                You can remove or reject cookies, but be aware that such action could affect the availability and 
                functionality of our services. You may not decline web beacons. However, they can be rendered 
                ineffective by declining all cookies or by modifying your web browser's settings to notify you 
                each time a cookie is tendered, permitting you to accept or decline cookies on an individual basis.
              </p>
            </div>

            {/* Third-Party Disclosure */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">5. Disclosure of Your Information</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We may share information we have collected about you in certain situations. Your information may 
                be disclosed as follows:
              </p>

              <h3 className="text-xl text-white mb-3 mt-6">By Law or to Protect Rights</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                If we believe the release of information about you is necessary to respond to legal process, to 
                investigate or remedy potential violations of our policies, or to protect the rights, property, 
                and safety of others, we may share your information as permitted or required by any applicable 
                law, rule, or regulation.
              </p>

              <h3 className="text-xl text-white mb-3 mt-6">Third-Party Service Providers</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                We may share your information with third parties that perform services for us or on our behalf, 
                including payment processing, data analysis, email delivery, hosting services, customer service, 
                and marketing assistance.
              </p>

              <h3 className="text-xl text-white mb-3 mt-6">Business Transfers</h3>
              <p className="text-white/70 leading-relaxed">
                We may share or transfer your information in connection with, or during negotiations of, any 
                merger, sale of company assets, financing, or acquisition of all or a portion of our business 
                to another company.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">6. Third-Party Websites</h2>
              <p className="text-white/70 leading-relaxed">
                Our services may contain links to third-party websites and applications of interest, including 
                advertisements and external services, that are not affiliated with us. Once you have used these 
                links to leave our services, any information you provide to these third parties is not covered 
                by this Privacy Policy, and we cannot guarantee the safety and privacy of your information. 
                Before visiting and providing any information to any third-party websites, you should inform 
                yourself of the privacy policies and practices (if any) of the third party responsible for that 
                website, and should take those steps necessary to, in your discretion, protect the privacy of 
                your information.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">7. Your Privacy Rights</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Depending on your location and applicable law, you may have the following rights regarding your 
                personal information:
              </p>
              <ul className="text-white/70 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li>The right to access – You have the right to request copies of your personal data</li>
                <li>The right to rectification – You have the right to request that we correct any information 
                    you believe is inaccurate or complete information you believe is incomplete</li>
                <li>The right to erasure – You have the right to request that we erase your personal data, 
                    under certain conditions</li>
                <li>The right to restrict processing – You have the right to request that we restrict the 
                    processing of your personal data, under certain conditions</li>
                <li>The right to object to processing – You have the right to object to our processing of 
                    your personal data, under certain conditions</li>
                <li>The right to data portability – You have the right to request that we transfer the data 
                    that we have collected to another organization, or directly to you, under certain conditions</li>
              </ul>
              <p className="text-white/70 leading-relaxed mt-4">
                If you make a request, we have one month to respond to you. If you would like to exercise any 
                of these rights, please contact us.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">8. Children's Privacy</h2>
              <p className="text-white/70 leading-relaxed">
                We do not knowingly solicit information from or market to children under the age of 13. If we 
                learn that we have collected personal information from a child under age 13 without verification 
                of parental consent, we will delete that information as quickly as possible. If you believe we 
                might have any information from or about a child under 13, please contact us.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div>
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-white/70 leading-relaxed">
                We may update this Privacy Policy from time to time in order to reflect, for example, changes 
                to our practices or for other operational, legal, or regulatory reasons. We will notify you of 
                any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date 
                at the top of this Privacy Policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="pt-8 border-t border-white/10">
              <h2 className="text-2xl sm:text-3xl gradient-text mb-4">Contact Us</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="text-white/60 space-y-2">
                <p>Email: sales@theautomators.co.za</p>
                <p>Phone: +27 82 770 6456</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

