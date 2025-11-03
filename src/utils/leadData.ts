// Lead Data Management Utility
// Manages localStorage for smart lead flow from assessment and pricing pages to contact form

export interface AssessmentLeadData {
  selectedChallenges: string[];
  serviceRecommendations: {
    automation: number;
    chatbots: number;
    'voice-agents': number;
  };
  timestamp: string;
}

export interface PricingLeadData {
  planName: string;
  serviceType: 'automation' | 'voice-agents' | 'chatbots';
  paymentPlan: string;
  price: string;
  timestamp: string;
}

export interface LeadData {
  source: 'assessment' | 'pricing' | 'direct';
  assessment?: AssessmentLeadData;
  pricing?: PricingLeadData;
}

const LEAD_DATA_KEY = 'automators_lead_data';

/**
 * Save lead data to localStorage
 */
export function saveLeadData(data: LeadData): void {
  try {
    localStorage.setItem(LEAD_DATA_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving lead data:', error);
  }
}

/**
 * Get lead data from localStorage
 */
export function getLeadData(): LeadData | null {
  try {
    const data = localStorage.getItem(LEAD_DATA_KEY);
    if (!data) return null;
    return JSON.parse(data) as LeadData;
  } catch (error) {
    console.error('Error getting lead data:', error);
    return null;
  }
}

/**
 * Clear lead data from localStorage
 */
export function clearLeadData(): void {
  try {
    localStorage.removeItem(LEAD_DATA_KEY);
  } catch (error) {
    console.error('Error clearing lead data:', error);
  }
}

/**
 * Format assessment data for "Additional Details" field
 */
export function formatAssessmentDetails(assessment: AssessmentLeadData): string {
  const { selectedChallenges, serviceRecommendations } = assessment;
  
  let details = '=== ASSESSMENT RESULTS ===\n\n';
  
  details += `Selected Challenges (${selectedChallenges.length}):\n`;
  selectedChallenges.forEach((challenge, index) => {
    details += `${index + 1}. ${challenge}\n`;
  });
  
  details += '\nRecommended Services:\n';
  if (serviceRecommendations.automation > 0) {
    details += `• Workflow Automation (${serviceRecommendations.automation} matches)\n`;
  }
  if (serviceRecommendations.chatbots > 0) {
    details += `• AI Chatbots (${serviceRecommendations.chatbots} matches)\n`;
  }
  if (serviceRecommendations['voice-agents'] > 0) {
    details += `• Voice Agents (${serviceRecommendations['voice-agents']} matches)\n`;
  }
  
  return details;
}

/**
 * Format pricing data for "Additional Details" field
 */
export function formatPricingDetails(pricing: PricingLeadData): string {
  const serviceTypeNames = {
    'automation': 'Workflow Automation',
    'voice-agents': 'AI Voice Agents',
    'chatbots': 'AI Chatbots'
  };
  
  let details = '=== PRICING SELECTION ===\n\n';
  details += `Service: ${serviceTypeNames[pricing.serviceType]}\n`;
  details += `Plan: ${pricing.planName}\n`;
  details += `Payment Plan: ${pricing.paymentPlan}\n`;
  details += `Price: ${pricing.price}\n`;
  
  return details;
}

/**
 * Format complete lead data for "Additional Details" field
 */
export function formatLeadDetails(leadData: LeadData): string {
  let details = '';
  
  if (leadData.assessment) {
    details += formatAssessmentDetails(leadData.assessment);
  }
  
  if (leadData.pricing) {
    if (details) details += '\n\n';
    details += formatPricingDetails(leadData.pricing);
  }
  
  if (!details) {
    details = 'Direct contact - no pre-assessment or plan selection';
  }
  
  return details;
}

