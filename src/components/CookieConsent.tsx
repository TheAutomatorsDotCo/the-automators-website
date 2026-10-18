import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const CONSENT_KEY = 'ta_cookie_consent';

export type ConsentChoice = 'accepted' | 'declined' | null;

export function getConsentChoice(): ConsentChoice {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem(CONSENT_KEY);
  if (stored === 'accepted' || stored === 'declined') return stored;
  return null;
}

export function setConsentChoice(choice: 'accepted' | 'declined') {
  localStorage.setItem(CONSENT_KEY, choice);
  window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: choice }));
}

export function clearConsentChoice() {
  localStorage.removeItem(CONSENT_KEY);
  window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: null }));
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [choice, setChoice] = useState<ConsentChoice>(null);

  useEffect(() => {
    const stored = getConsentChoice();
    setChoice(stored);
    if (stored === null) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setConsentChoice('accepted');
    setChoice('accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    setConsentChoice('declined');
    setChoice('declined');
    setVisible(false);
  };

  if (!visible || choice !== null) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="mx-auto max-w-3xl">
        <div className="glass border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex-shrink-0">
                <Cookie className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  We use cookies for analytics to understand how visitors use our site.
                  You can accept or decline analytics cookies.
                  The chat widget uses functional cookies that do not require consent.{' '}
                  <Link to="/privacy-policy" className="text-purple-400 hover:text-purple-300 underline">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <button
                onClick={handleDecline}
                className="flex-1 sm:flex-none px-4 py-2 rounded-full border border-white/20 text-white/80 hover:bg-white/5 text-sm transition-colors"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 sm:flex-none px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm hover:opacity-90 transition-opacity"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CookieSettingsButton() {
  const handleClick = () => {
    clearConsentChoice();
    window.location.reload();
  };

  return (
    <button
      onClick={handleClick}
      className="text-white/50 hover:text-white/70 transition-colors text-sm"
    >
      Cookie Settings
    </button>
  );
}
