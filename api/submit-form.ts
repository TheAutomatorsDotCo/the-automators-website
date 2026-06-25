import type { VercelRequest, VercelResponse } from '@vercel/node';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Detects strings that look like random character sequences (e.g. "ABSqJcevQrLnXAspQA")
function isGibberish(value: string): boolean {
  if (!value || value.trim().length === 0) return false;
  const lower = value.toLowerCase();
  // Count consecutive consonants; real names rarely have more than 4 in a row
  const consonantRunMatch = lower.match(/[bcdfghjklmnpqrstvwxyz]{5,}/);
  if (consonantRunMatch) return true;
  // Check vowel ratio: real words typically have vowels >= 15% of letters
  const letters = lower.replace(/[^a-z]/g, '');
  if (letters.length < 6) return false;
  const vowels = (letters.match(/[aeiou]/g) || []).length;
  const vowelRatio = vowels / letters.length;
  return vowelRatio < 0.12;
}

async function verifyTurnstile(token: string, remoteip?: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error('TURNSTILE_SECRET_KEY is not set');
    return false;
  }

  const formData = new URLSearchParams();
  formData.append('secret', secret);
  formData.append('response', token);
  if (remoteip) formData.append('remoteip', remoteip);

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: formData.toString(),
  });

  const data = await res.json() as { success: boolean; 'error-codes'?: string[] };

  if (!data.success) {
    console.warn('Turnstile verification failed:', data['error-codes']);
  }

  return data.success === true;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const {
      name,
      email,
      phone,
      company,
      message,
      interests,
      additionalDetails,
      leadSource,
      selectedPlan,
      serviceType,
      paymentPlan,
      caseStudy,
      turnstileToken,
      // Honeypot fields -- should always be empty for real users
      website,
      url,
    } = req.body || {};

    // --- Honeypot check ---
    if (website || url) {
      return res.status(200).json({ success: true });
    }

    // --- Turnstile verification ---
    if (!turnstileToken) {
      return res.status(400).json({ error: 'Security verification is required. Please complete the challenge.' });
    }

    const remoteIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0].trim() || req.socket?.remoteAddress;
    const turnstileValid = await verifyTurnstile(turnstileToken, remoteIp);

    if (!turnstileValid) {
      return res.status(400).json({ error: 'Security verification failed. Please refresh the page and try again.' });
    }

    // --- Server-side input validation ---
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({ error: 'Please provide a valid name (at least 2 characters).' });
    }

    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return res.status(400).json({ error: 'Please provide a message (at least 10 characters).' });
    }

    if (isGibberish(name.trim())) {
      return res.status(400).json({ error: 'The name provided does not appear to be valid. Please enter your real name.' });
    }

    if (company && isGibberish(company.trim())) {
      return res.status(400).json({ error: 'The company name provided does not appear to be valid.' });
    }

    // --- Forward to n8n webhook ---
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error('[submit-form] N8N_WEBHOOK_URL is not set');
      return res.status(500).json({ error: 'Form submission service is unavailable. Please contact us directly.' });
    }

    const payload = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || null,
      company: company?.trim() || null,
      message: message.trim(),
      interests: Array.isArray(interests) ? interests : [],
      additionalDetails: additionalDetails?.trim() || null,
      leadSource: leadSource || 'direct',
      selectedPlan: selectedPlan || null,
      serviceType: serviceType || null,
      paymentPlan: paymentPlan || null,
      caseStudy: caseStudy || null,
      submittedAt: new Date().toISOString(),
      sourceIp: remoteIp || null,
    };

    const n8nResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!n8nResponse.ok) {
      const errorText = await n8nResponse.text();
      console.error('[submit-form] n8n webhook error:', n8nResponse.status, errorText);
      return res.status(502).json({ error: 'Failed to submit form. Please try again or contact us directly.' });
    }

    return res.status(200).json({ success: true });

  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[submit-form] unhandled exception:', msg);
    return res.status(500).json({ error: 'An unexpected error occurred. Please try again or contact us directly.' });
  }
}
