import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LandingFooter } from './components/LandingFooter';
import { HomePage } from './components/HomePage';
import { AssessmentPage } from './components/AssessmentPage';
import { ServicesPage } from './components/ServicesPage';
import { AutomationPage } from './components/AutomationPage';
import { VoiceAgentsPage } from './components/VoiceAgentsPage';
import { ChatbotsPage } from './components/ChatbotsPage';
import { PricingPage } from './components/PricingPage';
import { PricingLandingPage } from './components/PricingLandingPage';
import { ContactPage } from './components/ContactPage';
import { CaseStudiesPage } from './components/CaseStudies/CaseStudiesPage';
import { PlatinumRepairsCaseStudy } from './components/CaseStudies/PlatinumRepairsCaseStudy';
import { DeviceDoctorCaseStudy } from './components/CaseStudies/DeviceDoctorCaseStudy';
import { InEnOmCaseStudy } from './components/CaseStudies/InEnOmCaseStudy';
import { EpicDealsCaseStudy } from './components/CaseStudies/EpicDealsCaseStudy';
import { TermsPage } from './components/TermsPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TicketsPage } from './components/TicketsPage';
import { EcommerceChatbotsLandingPage } from './components/EcommerceChatbotsLandingPage';
import { ChatTestPage } from './components/ChatTestPage';
import { ChatTestPage2 } from './components/ChatTestPage2';
import { NotFoundPage } from './components/NotFoundPage';
import { ScrollToTop } from './components/ScrollToTop';
import { GoogleAnalytics } from './components/GoogleAnalytics';

function AppShell() {
  const { pathname } = useLocation();
  const isLanding = pathname === '/chatbots-for-ecommerce';

  return (
    <div className="min-h-screen">
      <Header />
      <main>
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
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/tickets" element={<TicketsPage />} />
          {/* Campaign landing pages: not in nav, noindex */}
          <Route path="/chatbots-for-ecommerce" element={<EcommerceChatbotsLandingPage />} />
          {/* Internal Chatwoot widget tests: not in nav, noindex */}
          <Route path="/chat-test" element={<ChatTestPage />} />
          <Route path="/chat-test-2" element={<ChatTestPage2 />} />
          {/* 404 Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {isLanding ? <LandingFooter /> : <Footer />}
    </div>
  );
}

export default function App() {
  const GA_MEASUREMENT_ID = 'G-K061PHT292';

  return (
    <HelmetProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
        <ScrollToTop />
        <AppShell />
      </Router>
    </HelmetProvider>
  );
}
