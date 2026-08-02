import { useEffect } from 'react';

const DEFAULT_BASE_URL = 'https://chat.theautomators.co';
const SCRIPT_ID = 'chatwoot-sdk';
const DOM_SELECTORS = [
  '#cw-bubble-holder',
  '#cw-widget-holder',
  '.woot-widget-holder',
  '.woot--bubble-holder',
];

declare global {
  interface Window {
    chatwootSettings?: {
      position?: 'left' | 'right';
      type?: 'standard' | 'expanded_bubble';
      launcherTitle?: string;
    };
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
 * Loads the Chatwoot website SDK only while mounted.
 * Intended for the /chat-test page — do not mount sitewide without an explicit decision.
 */
export function ChatwootWidget() {
  useEffect(() => {
    const websiteToken = import.meta.env.VITE_CHATWOOT_WEBSITE_TOKEN;
    const baseUrl = import.meta.env.VITE_CHATWOOT_BASE_URL || DEFAULT_BASE_URL;

    if (!websiteToken) {
      console.warn('[Chatwoot] VITE_CHATWOOT_WEBSITE_TOKEN is not set; widget will not load.');
      return;
    }

    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = `${baseUrl.replace(/\/$/, '')}/packs/js/sdk.js`;
      script.async = true;
      document.body.appendChild(script);
    }

    // Must be set before chatwootSDK.run() — controls bubble position/style/title
    window.chatwootSettings = {
      position: 'right',
      type: 'expanded_bubble',
      launcherTitle: 'Need help? ',
    };

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
