import { SEO } from './SEO';
import { StarsCanvas } from './StarBackground';
import { ChatwootWidget } from './ChatwootWidget';

export function ChatTestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]">
      <SEO
        title="Chat Widget Test"
        description="Internal test page for the Chatwoot website widget."
        path="/chat-test"
        noindex
      />
      <StarsCanvas />
      <ChatwootWidget />

      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl gradient-text mb-6">
            Chat widget test
          </h1>
          <p className="text-lg text-white/70">
            The Chatwoot bubble should appear in the corner. Leave this page to unload the widget.
          </p>
        </div>
      </section>
    </div>
  );
}
