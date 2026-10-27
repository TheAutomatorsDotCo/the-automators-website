import { lazy, Suspense, useCallback, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LandingFooter } from './components/LandingFooter';
import { ScrollToTop } from './components/ScrollToTop';
import { GoogleAnalytics } from './components/GoogleAnalytics';
import { ChatwootWidget } from './components/ChatwootWidget';
import { CookieConsent } from './components/CookieConsent';
import { MobileCTA } from './components/MobileCTA';

const LazyStarsCanvas = lazy(() =>
  import('./components/StarBackground').then((m) => ({ default: m.StarsCanvas }))
);

const LEGAL_FORM_ROUTES = ['/privacy-policy', '/terms', '/contact', '/tickets', '/unsubscribe'];

function ConditionalStars() {
  const { pathname } = useLocation();
  const [shouldLoad, setShouldLoad] = useState(false);

  const isLegalOrForm = LEGAL_FORM_ROUTES.includes(pathname);

  useEffect(() => {
    if (isLegalOrForm) {
      setShouldLoad(false);
      return;
    }

    if ('requestIdleCallback' in window) {
      const id = (window as unknown as { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(
        () => setShouldLoad(true),
        { timeout: 2000 }
      );
      return () => (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(id);
    } else {
      const timer = setTimeout(() => setShouldLoad(true), 100);
      return () => clearTimeout(timer);
    }
  }, [pathname, isLegalOrForm]);

  if (isLegalOrForm || !shouldLoad) return null;

  return (
    <Suspense fallback={null}>
      <LazyStarsCanvas />
    </Suspense>
  );
}

const HomePage = lazy(() => import('./components/HomePage').then(m => ({ default: m.HomePage })));
const AssessmentPage = lazy(() => import('./components/AssessmentPage').then(m => ({ default: m.AssessmentPage })));
const ServicesPage = lazy(() => import('./components/ServicesPage').then(m => ({ default: m.ServicesPage })));
const AutomationPage = lazy(() => import('./components/AutomationPage').then(m => ({ default: m.AutomationPage })));
const VoiceAgentsPage = lazy(() => import('./components/VoiceAgentsPage').then(m => ({ default: m.VoiceAgentsPage })));
const ChatbotsPage = lazy(() => import('./components/ChatbotsPage').then(m => ({ default: m.ChatbotsPage })));
const PricingPage = lazy(() => import('./components/PricingPage').then(m => ({ default: m.PricingPage })));
const PricingLandingPage = lazy(() => import('./components/PricingLandingPage').then(m => ({ default: m.PricingLandingPage })));
const ContactPage = lazy(() => import('./components/ContactPage').then(m => ({ default: m.ContactPage })));
const ThankYouPage = lazy(() => import('./components/ThankYouPage').then(m => ({ default: m.ThankYouPage })));
const CaseStudiesPage = lazy(() => import('./components/CaseStudies/CaseStudiesPage').then(m => ({ default: m.CaseStudiesPage })));
const PlatinumRepairsCaseStudy = lazy(() => import('./components/CaseStudies/PlatinumRepairsCaseStudy').then(m => ({ default: m.PlatinumRepairsCaseStudy })));
const DeviceDoctorCaseStudy = lazy(() => import('./components/CaseStudies/DeviceDoctorCaseStudy').then(m => ({ default: m.DeviceDoctorCaseStudy })));
const InEnOmCaseStudy = lazy(() => import('./components/CaseStudies/InEnOmCaseStudy').then(m => ({ default: m.InEnOmCaseStudy })));
const EpicDealsCaseStudy = lazy(() => import('./components/CaseStudies/EpicDealsCaseStudy').then(m => ({ default: m.EpicDealsCaseStudy })));
const TermsPage = lazy(() => import('./components/TermsPage').then(m => ({ default: m.TermsPage })));
const PrivacyPolicyPage = lazy(() => import('./components/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TicketsPage = lazy(() => import('./components/TicketsPage').then(m => ({ default: m.TicketsPage })));
const EcommerceChatbotsLandingPage = lazy(() => import('./components/EcommerceChatbotsLandingPage').then(m => ({ default: m.EcommerceChatbotsLandingPage })));
const UnsubscribePage = lazy(() => import('./components/UnsubscribePage').then(m => ({ default: m.UnsubscribePage })));
const NotFoundPage = lazy(() => import('./components/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

function PageLoader() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e] flex items-center justify-center">
      <div className="animate-pulse text-white/50">Loading...</div>
    </div>
  );
}

function AppShell() {
  const { pathname } = useLocation();
  const isLanding = pathname === '/chatbots-for-ecommerce';
  const showMobileCTA = !isLanding && pathname !== '/thank-you' && pathname !== '/unsubscribe';
  const [ctaVisible, setCtaVisible] = useState(false);
  const handleCtaVisibility = useCallback((visible: boolean) => {
    setCtaVisible(visible);
  }, []);

  return (
    <div className={ctaVisible ? 'min-h-screen sticky-cta-pad' : 'min-h-screen'}>
      <ConditionalStars />
      <Header />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/assessment" element={<AssessmentPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/automation" element={<AutomationPage />} />
            <Route path="/services/voice-agents" element={<VoiceAgentsPage />} />
            <Route path="/services/chatbots" element={<ChatbotsPage />} />
            <Route path="/pricing" element={<PricingLandingPage />} />
            <Route path="/pricing/automation" element={<PricingPage category="automation" />} />
            <Route path="/pricing/voice-agents" element={<PricingPage category="voice-agents" />} />
            <Route path="/pricing/chatbots" element={<PricingPage category="chatbots" />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/platinum-repairs" element={<PlatinumRepairsCaseStudy />} />
            <Route path="/case-studies/device-doctor" element={<DeviceDoctorCaseStudy />} />
            <Route path="/case-studies/in-en-om" element={<InEnOmCaseStudy />} />
            <Route path="/case-studies/epic-deals" element={<EpicDealsCaseStudy />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/tickets" element={<TicketsPage />} />
            {/* Campaign landing pages: not in nav, noindex */}
            <Route path="/chatbots-for-ecommerce" element={<EcommerceChatbotsLandingPage />} />
            {/* Confirm-only unsubscribe: GET never unsubscribes; POST is /api/unsubscribe */}
            <Route path="/unsubscribe" element={<UnsubscribePage />} />
            {/* 404 Page - explicit route for prerendering */}
            <Route path="/404" element={<NotFoundPage />} />
            {/* Catch-all 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      {isLanding ? <LandingFooter /> : <Footer />}
      {showMobileCTA && <MobileCTA onVisibilityChange={handleCtaVisibility} />}
    </div>
  );
}

export default function App() {
  const GA_MEASUREMENT_ID = 'G-K061PHT292';

  return (
    <HelmetProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
        <ChatwootWidget />
        <ScrollToTop />
        <AppShell />
        <CookieConsent />
      </Router>
    </HelmetProvider>
  );
}
