// Extrait un message d'erreur lisible d'une erreur remontée par le kit.
//
// Le kit encapsule les erreurs de l'API dans `SiteApiError` : `.message` ne vaut
// que « Site API error <status> », le vrai motif est dans `.body` (JSON du
// backend, forme { error, message, subErrors }). On l'extrait, en écartant les
// messages techniques génériques au profit d'un `fallback` clair.
export function apiErrorMessage(err: unknown, fallback: string): string {
  let raw =
    err instanceof Error ? err.message : typeof err === 'string' ? err : '';

  const body = (err as { body?: unknown })?.body;
  if (typeof body === 'string' && body.trim()) {
    try {
      const p = JSON.parse(body) as {
        error?: string;
        message?: string;
        subErrors?: unknown[];
      };
      const sub =
        Array.isArray(p.subErrors) && typeof p.subErrors[0] === 'string'
          ? (p.subErrors[0] as string)
          : '';
      raw = p.error || sub || p.message || raw;
    } catch {
      raw = body;
    }
  }

  raw = raw.trim();
  if (!raw || /^site api error/i.test(raw) || /^internal server error$/i.test(raw))
    return fallback;
  return raw;
}
