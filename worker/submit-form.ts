import type { Env } from './env';
import { apiJson, clientIp, readBody } from './http';
import { createRateLimiter } from './rate-limit';

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const isRateLimited = createRateLimiter(RATE_LIMIT_MAX, RATE_LIMIT_WINDOW_MS);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isGibberish(value: string): boolean {
  if (!value || value.trim().length === 0) return false;
  const lower = value.toLowerCase();
  const consonantRunMatch = lower.match(/[bcdfghjklmnpqrstvwxyz]{5,}/);
  if (consonantRunMatch) return true;
  const letters = lower.replace(/[^a-z]/g, '');
  if (letters.length < 6) return false;
  const vowels = (letters.match(/[aeiou]/g) || []).length;
  const vowelRatio = vowels / letters.length;
  return vowelRatio < 0.12;
}

async function verifyTurnstile(env: Env, token: string, remoteip?: string): Promise<boolean> {
  const secret = env.TURNSTILE_SECRET_KEY;
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

  const data = (await res.json()) as { success: boolean; 'error-codes'?: string[] };

  if (!data.success) {
    console.warn('Turnstile verification failed:', data['error-codes']);
  }

  return data.success === true;
}

function asString(value: unknown): string | undefined {
  return typeof value === 'string' ? value : undefined;
}

export async function handleSubmitForm(request: Request, env: Env): Promise<Response> {
  try {
    if (request.method !== 'POST') {
      return apiJson(request, { error: 'Method not allowed' }, 405);
    }

    const ip = clientIp(request);
    if (isRateLimited(ip)) {
      return apiJson(request, { error: 'Too many requests. Please try again later.' }, 429);
    }

    const body = await readBody(request);
    const name = asString(body.name);
    const email = asString(body.email);
    const phone = body.phone;
    const company = asString(body.company);
    const message = asString(body.message);
    const interests = body.interests;
    const additionalDetails = asString(body.additionalDetails);
    const leadSource = body.leadSource;
    const selectedPlan = body.selectedPlan;
    const serviceType = body.serviceType;
    const paymentPlan = body.paymentPlan;
    const caseStudy = body.caseStudy;
    const turnstileToken = asString(body.turnstileToken);
    const website = body.website;
    const url = body.url;

    if (website || url) {
      return apiJson(request, { success: true }, 200);
    }

    if (!turnstileToken) {
      return apiJson(
        request,
        { error: 'Security verification is required. Please complete the challenge.' },
        400,
      );
    }

    const remoteIp = ip === 'unknown' ? undefined : ip;
    const turnstileValid = await verifyTurnstile(env, turnstileToken, remoteIp);

    if (!turnstileValid) {
      return apiJson(
        request,
        { error: 'Security verification failed. Please refresh the page and try again.' },
        400,
      );
    }

    if (!name || name.trim().length < 2) {
      return apiJson(request, { error: 'Please provide a valid name (at least 2 characters).' }, 400);
    }

    if (!email || !EMAIL_REGEX.test(email.trim())) {
      return apiJson(request, { error: 'Please provide a valid email address.' }, 400);
    }

    if (!message || message.trim().length < 10) {
      return apiJson(request, { error: 'Please provide a message (at least 10 characters).' }, 400);
    }

    if (isGibberish(name.trim())) {
      return apiJson(
        request,
        { error: 'The name provided does not appear to be valid. Please enter your real name.' },
        400,
      );
    }

    if (company && isGibberish(company.trim())) {
      return apiJson(request, { error: 'The company name provided does not appear to be valid.' }, 400);
    }

    const webhookUrl = env.N8N_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error('[submit-form] N8N_WEBHOOK_URL is not set');
      return apiJson(
        request,
        { error: 'Form submission service is unavailable. Please contact us directly.' },
        500,
      );
    }

    const phoneText = typeof phone === 'string' ? phone.trim() || null : null;
    const payload = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phoneText,
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
      return apiJson(
        request,
        { error: 'Failed to submit form. Please try again or contact us directly.' },
        502,
      );
    }

    return apiJson(request, { success: true }, 200);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[submit-form] unhandled exception:', msg);
    return apiJson(
      request,
      { error: 'An unexpected error occurred. Please try again or contact us directly.' },
      500,
    );
  }
}
