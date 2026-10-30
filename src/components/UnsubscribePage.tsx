import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MailX, CheckCircle2, AlertCircle } from 'lucide-react';
import { SEO } from './SEO';

type State = 'confirm' | 'working' | 'done' | 'error';

export function UnsubscribePage() {
  const { search } = useLocation();
  const { e, t } = useMemo(() => {
    const p = new URLSearchParams(search);
    return { e: (p.get('e') || '').trim(), t: (p.get('t') || '').trim() };
  }, [search]);
  // Show the confirm card whenever the link has both params. GET never
  // unsubscribes; only a button POST can, and the API rejects a bad token.
  const hasParams = Boolean(e && t);
  const [state, setState] = useState<State>(hasParams ? 'confirm' : 'error');

  async function confirm() {
    if (!hasParams || state === 'working') return;
    setState('working');
    try {
      const res = await fetch('/api/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ e, t }),
      });
      setState(res.ok ? 'done' : 'error');
    } catch {
      setState('error');
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e] pt-32">
      <SEO
        title="Unsubscribe"
        description="Unsubscribe from The Automators emails."
        path="/unsubscribe"
        noindex
      />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-xl mx-auto glass rounded-2xl p-10 border border-white/10 text-center">
          {(state === 'confirm' || state === 'working') && (
            <>
              <MailX className="w-14 h-14 mx-auto mb-6 text-pink-400" />
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Unsubscribe from our emails?</h1>
              <p className="text-lg text-white/70 mb-10 leading-relaxed">
                Click the button below and we&rsquo;ll never email <span className="text-white font-semibold break-all">{e}</span> again.
              </p>
              <button
                type="button"
                onClick={confirm}
                disabled={state === 'working'}
                className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg disabled:opacity-60 disabled:hover:scale-100"
              >
                {state === 'working' ? 'Unsubscribing…' : 'Unsubscribe'}
              </button>
            </>
          )}
          {state === 'done' && (
            <>
              <CheckCircle2 className="w-14 h-14 mx-auto mb-6 text-emerald-400" />
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">You&rsquo;re unsubscribed</h1>
              <p className="text-lg text-white/70 leading-relaxed">
                We won&rsquo;t email you again. Sorry for the interruption, and all the best with the store.
              </p>
            </>
          )}
          {state === 'error' && (
            <>
              <AlertCircle className="w-14 h-14 mx-auto mb-6 text-amber-400" />
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">We couldn&rsquo;t process that link</h1>
              <p className="text-lg text-white/70 leading-relaxed">
                Please just reply &ldquo;no thanks&rdquo; to our email, or write to{' '}
                <a href="mailto:sales@theautomators.co" className="underline text-white">sales@theautomators.co</a>, and we&rsquo;ll remove you straight away.
              </p>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
