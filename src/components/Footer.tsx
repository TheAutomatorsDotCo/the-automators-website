import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Assessment', path: '/assessment' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Workflow Automation', path: '/services/automation' },
    { name: 'AI Chatbots', path: '/services/chatbots' },
    { name: 'Voice Agents', path: '/services/voice-agents' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e] border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
          {/* Column 1 - Brand */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center space-x-3 group inline-block" style={{ marginTop: '1.5rem' }}>
              <div className="relative">
                <div className="w-10 h-10 flex items-center justify-center transform transition-transform group-hover:scale-110">
                  <img src="/logo.png" alt="The Automators Logo" className="w-full h-full" />
                </div>
                <div className="absolute inset-0 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" style={{ background: 'linear-gradient(135deg, #FF6B6B 0%, #C44569 50%, #5F27CD 100%)' }}></div>
              </div>
              <span className="text-white text-lg font-medium tracking-tight">The Automators</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed pr-4">
              Automating business processes to save you time and increase efficiency.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-white text-lg font-medium mb-5" style={{ marginTop: '1.5rem' }}>Quick Links</h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors text-sm inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-white text-lg font-medium mb-5" style={{ marginTop: '1.5rem' }}>Services</h3>
            <ul className="space-y-3.5">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors text-sm inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-white text-lg font-medium mb-5" style={{ marginTop: '1.5rem' }}>Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:sales@theautomators.co"
                  className="text-white/70 hover:text-white transition-colors text-sm flex items-center space-x-2 group"
                  aria-label="Email us at sales@theautomators.co"
                >
                  <Mail className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                  <span>sales@theautomators.co</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+27827706456"
                  className="text-white/70 hover:text-white transition-colors text-sm flex items-center space-x-2 group"
                  aria-label="Call us at +27 82 770 6456"
                >
                  <Phone className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <span>+27 82 770 6456</span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.facebook.com/theautomators.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition-colors text-sm group"
                  aria-label="Visit our Facebook page"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Facebook className="w-4 h-4 text-white" />
                  </div>
                  <span>Follow us on Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 sm:pt-10 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 gap-4">
            {/* Copyright */}
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} The Automators. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              <Link
                to="/terms"
                className="text-white/50 hover:text-white/70 transition-colors text-sm"
              >
                Terms
              </Link>
              <span className="text-white/30">|</span>
              <Link
                to="/privacy-policy"
                className="text-white/50 hover:text-white/70 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

