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
import { ScrollToTop } from './components/ScrollToTop';
import { GoogleAnalytics } from './components/GoogleAnalytics';

export default function App() {
  // Replace with your actual Google Analytics 4 Measurement ID when ready to launch
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: Add your GA4 Measurement ID

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
              <Route path="/contact" element={<ContactPage />} />
              {/* 404 redirect to home */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </HelmetProvider>
  );
}
