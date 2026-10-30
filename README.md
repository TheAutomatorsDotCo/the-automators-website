
  # Website Page Design

  This is a code bundle for Website Page Design. The original project is available at https://www.figma.com/design/r3rzGpJdnN73tGdFuWsLUY/Website-Page-Design.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Ecommerce chatbot landing page (`/chatbots-for-ecommerce`)

  A noindex campaign landing page used as the destination for cold-email outreach.
  It lives at `/chatbots-for-ecommerce` and is **not** linked from the main navigation.

  The page does not submit a lead form. The contact page posts to `POST /api/submit-form`, and the unsubscribe page posts to `POST /api/unsubscribe`. Both run in the Cloudflare Worker.

  ### Environment variables

  Copy `.env.example` to `.env.local` for local Vite builds. Values without the `VITE_` prefix are Worker secrets and are never shipped to the browser. See `.env.example`.
  