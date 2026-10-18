import { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { getConsentChoice, type ConsentChoice } from './CookieConsent';

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

interface GoogleAnalyticsProps {
  measurementId: string;
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const location = useLocation();
  const [consent, setConsent] = useState<ConsentChoice>(null);
  const [gaLoaded, setGaLoaded] = useState(false);

  const handleConsentChange = useCallback((e: Event) => {
    const customEvent = e as CustomEvent<ConsentChoice>;
    setConsent(customEvent.detail);
  }, []);

  useEffect(() => {
    setConsent(getConsentChoice());

    window.addEventListener('cookie-consent-changed', handleConsentChange);
    return () => {
      window.removeEventListener('cookie-consent-changed', handleConsentChange);
    };
  }, [handleConsentChange]);

  useEffect(() => {
    if (consent !== 'accepted' || gaLoaded) return;

    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}', {
        page_path: window.location.pathname,
      });
    `;
    document.head.appendChild(script2);
    setGaLoaded(true);
  }, [consent, measurementId, gaLoaded]);

  useEffect(() => {
    if (consent !== 'accepted' || !gaLoaded || !window.gtag) return;

    window.gtag('config', measurementId, {
      page_path: location.pathname + location.search,
      page_title: document.title,
    });

    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search,
      page_title: document.title,
    });
  }, [location, measurementId, consent, gaLoaded]);

  return null;
}

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (getConsentChoice() !== 'accepted' || !window.gtag) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const trackFormSubmit = (formName: string) => {
  trackEvent('form_submit', 'engagement', formName);
};

export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('button_click', 'engagement', `${buttonName} - ${location}`);
};

export const trackCTAClick = (ctaName: string) => {
  trackEvent('cta_click', 'conversion', ctaName);
};
