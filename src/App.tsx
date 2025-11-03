import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { AssessmentPage } from './components/AssessmentPage';
import { ServicesPage } from './components/ServicesPage';
import { AutomationPage } from './components/AutomationPage';
import { VoiceAgentsPage } from './components/VoiceAgentsPage';
import { ChatbotsPage } from './components/ChatbotsPage';
import { PricingPage } from './components/PricingPage';
import { ContactPage } from './components/ContactPage';
import { CaseStudiesPage } from './components/CaseStudies/CaseStudiesPage';
import { PlatinumRepairsCaseStudy } from './components/CaseStudies/PlatinumRepairsCaseStudy';
import { DeviceDoctorCaseStudy } from './components/CaseStudies/DeviceDoctorCaseStudy';
import { InEnOmCaseStudy } from './components/CaseStudies/InEnOmCaseStudy';
import { TermsPage } from './components/TermsPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { ScrollToTop } from './components/ScrollToTop';
import { GoogleAnalytics } from './components/GoogleAnalytics';

export default function App() {
  // Google Analytics 4 Measurement ID
  const GA_MEASUREMENT_ID = 'G-K061PHT292';

  return (
    <HelmetProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
        <ScrollToTop />
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
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/case-studies/platinum-repairs" element={<PlatinumRepairsCaseStudy />} />
              <Route path="/case-studies/device-doctor" element={<DeviceDoctorCaseStudy />} />
              <Route path="/case-studies/in-en-om" element={<InEnOmCaseStudy />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              {/* 404 redirect to home */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </HelmetProvider>
  );
}
