import type { Env } from './env';
import { apiJson } from './http';
import { handleSubmitForm } from './submit-form';
import { handleUnsubscribe } from './unsubscribe';

function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const path = normalizePath(new URL(request.url).pathname);

    if (path === '/api/submit-form') {
      return handleSubmitForm(request, env);
    }

    if (path === '/api/unsubscribe') {
      return handleUnsubscribe(request, env);
    }

    if (path.startsWith('/api/')) {
      return apiJson(request, { error: 'Not found' }, 404);
    }

    return env.ASSETS.fetch(request);
  },
};
