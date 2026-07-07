'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LogIn } from 'lucide-react';
import { useAuth, useShopContext } from '@extracom/site-kit/react';
import { apiErrorMessage } from '@/lib/api-error';
import { AuthCard } from '@/components/site/AuthCard';

export default function ConnexionPage() {
  const { login } = useAuth();
  const { data: context } = useShopContext();
  const registrationOpen = context?.capabilities?.registrationOpen ?? false;
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pending, setPending] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  return (
    <AuthCard
      icon={LogIn}
      title="Connexion"
      subtitle="Accédez à votre espace professionnel Wédis."
      footer={
        <div className="space-y-1">
          {registrationOpen && (
            <p>
              Pas encore de compte ?{' '}
              <Link
                href="/inscription"
                className="font-medium text-[var(--brand-dark)] hover:underline"
              >
                Créer un compte
              </Link>
            </p>
          )}
          <p>
            <Link
              href="/mot-de-passe-oublie"
              className="font-medium text-[var(--brand-dark)] hover:underline"
            >
              Mot de passe oublié ?
            </Link>
          </p>
        </div>
      }
    >
      <form
        className="space-y-4"
        onSubmit={async (e) => {
          e.preventDefault();
          setPending(true);
          setErr(null);
          try {
            const res = await login({ email, password });
            if ('user' in res) {
              const redirect =
                new URLSearchParams(window.location.search).get('redirect') ||
                '/compte';
              router.push(redirect);
            } else {
              // Changement de mot de passe imposé → on bascule sur le flux reset.
              router.push(
                `/mot-de-passe-oublie?email=${encodeURIComponent(email)}`
              );
            }
          } catch (e) {
            setErr(apiErrorMessage(e, 'Identifiants invalides.'));
          } finally {
            setPending(false);
          }
        }}
      >
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="field"
        />
        <input
          type="password"
          required
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="field"
        />
        {err && (
          <p
            role="alert"
            className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
          >
            {err}
          </p>
        )}
        <button
          type="submit"
          disabled={pending}
          className="btn-primary w-full"
        >
          {pending ? '…' : 'Se connecter'}
        </button>
      </form>
    </AuthCard>
  );
}
