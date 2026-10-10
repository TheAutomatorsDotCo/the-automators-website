import { useEffect } from 'react';

const DEFAULT_BASE_URL = 'https://chat.theautomators.co';
/** Public website inbox token from the live /chat-test widget. */
const DEFAULT_WEBSITE_TOKEN = 'GKSNCK4J6MBzyfVGSMyKHSzk';
const SCRIPT_ID = 'chatwoot-sdk';
const DOM_SELECTORS = [
  '#cw-bubble-holder',
  '#cw-widget-holder',
  '.woot-widget-holder',
  '.woot--bubble-holder',
];

type ChatwootSettings = {
  position?: 'left' | 'right';
  type?: 'standard' | 'expanded_bubble';
  launcherTitle?: string;
  unavailableMessage?: string;
};

const SITE_SETTINGS: ChatwootSettings = {
  position: 'right',
  type: 'expanded_bubble',
  launcherTitle: 'Need help? ',
  unavailableMessage: 'Our team is offline right now but Otto is here to help',
};

declare global {
  interface Window {
    chatwootSettings?: ChatwootSettings;
    chatwootSDK?: {
      run: (config: { websiteToken: string; baseUrl: string }) => void;
    };
    $chatwoot?: {
      toggle?: (state?: 'open' | 'close') => void;
      reset?: () => void;
    };
  }
}

function removeChatwootDom() {
  for (const selector of DOM_SELECTORS) {
    document.querySelectorAll(selector).forEach((el) => el.remove());
  }
}

function cleanupChatwoot(script?: HTMLScriptElement | null) {
  try {
    window.$chatwoot?.toggle?.('close');
    window.$chatwoot?.reset?.();
  } catch {
    // Widget may not be fully initialized
  }

  removeChatwootDom();

  if (script?.parentNode) {
    script.parentNode.removeChild(script);
  } else {
    document.getElementById(SCRIPT_ID)?.remove();
  }

  delete window.$chatwoot;
  delete window.chatwootSDK;
  delete window.chatwootSettings;
}

/**
 * Loads the Chatwoot website SDK once for the whole site.
 * Stays mounted for the session so route changes do not reload the widget.
 */
export function ChatwootWidget() {
  useEffect(() => {
    const websiteToken =
      import.meta.env.VITE_CHATWOOT_WEBSITE_TOKEN || DEFAULT_WEBSITE_TOKEN;
    const baseUrl = (
      import.meta.env.VITE_CHATWOOT_BASE_URL || DEFAULT_BASE_URL
    ).replace(/\/$/, '');

    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = `${baseUrl}/packs/js/sdk.js`;
      script.async = true;
      document.body.appendChild(script);
    }

    // Must be set before chatwootSDK.run() — controls bubble position/style/title
    window.chatwootSettings = SITE_SETTINGS;

    const runSdk = () => {
      window.chatwootSDK?.run({ websiteToken, baseUrl });
    };

    if (window.chatwootSDK) {
      runSdk();
    } else {
      script.addEventListener('load', runSdk);
    }

    return () => {
      script?.removeEventListener('load', runSdk);
      cleanupChatwoot(script);
    };
  }, []);

  return null;
}
