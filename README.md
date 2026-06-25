
  # Website Page Design

  This is a code bundle for Website Page Design. The original project is available at https://www.figma.com/design/r3rzGpJdnN73tGdFuWsLUY/Website-Page-Design.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Ecommerce chatbot landing page (`/chatbots-for-ecommerce`)

  A noindex campaign landing page used as the destination for cold-email outreach.
  It lives at `/chatbots-for-ecommerce` and is **not** linked from the main navigation.

  ### Required environment variables

  Copy `.env.example` to `.env.local` and fill in:

  | Variable | Where used | Description |
  |---|---|---|
  | `VITE_TURNSTILE_SITE_KEY` | Browser | Cloudflare Turnstile public site key |
  | `TURNSTILE_SECRET_KEY` | Server (`api/lead.ts`) | Cloudflare Turnstile secret key for token verification |
  | `N8N_WEBHOOK_URL` | Server (`api/lead.ts`) | n8n Webhook trigger URL — never exposed to the client |
  | `N8N_WEBHOOK_SECRET` | Server (`api/lead.ts`) | Sent as `x-webhook-token` header to authenticate the webhook call |
  | `VITE_BOOKING_URL` | Browser | Discovery-call booking link (Calendly / Cal.com) shown in the form success state |

  ### Testing the form locally

  1. Copy `.env.example` → `.env.local` and fill in all five variables above.
  2. For Turnstile in local testing, use the **always-passes test keys**:
     - Site key: `1x00000000000000000000AA`
     - Secret key: `1x0000000000000000000000000000000AA`
  3. Run `npm run dev` and open `http://localhost:3000/chatbots-for-ecommerce`.
  4. Fill the form and submit — the browser calls `POST /api/lead` via Vercel's dev proxy.
     To run Vercel's serverless functions locally, use `npx vercel dev` instead of `npm run dev`.
  5. Verify that your n8n workflow receives a payload with the exact keys:
     `name, email, company, website, message, page_url, referrer, submitted_at,`
     `utm_source, utm_medium, utm_campaign, utm_content, utm_term`.
  