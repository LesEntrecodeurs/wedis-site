'use client';

import { useState } from 'react';
import Link from 'next/link';
import { toast } from 'sonner';
import { useAccount } from '@extracom/site-kit/react';
import type { RegisterInput, TermsDocument } from '@extracom/site-kit';

type FormState = Omit<RegisterInput, 'acceptTerms' | 'termsDocumentIds'>;

const EMPTY: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phoneNumber: '',
  companyName: '',
  address: '',
  zipCode: '',
  city: '',
  siret: '',
  taxId: '',
  gender: ''
};

// Traduit l'erreur backend en message lisible. Surface le message de la
// SiteApiError (souvent explicite : email déjà utilisé, SIRET invalide…) et
// mappe quelques cas courants sur un libellé plus clair.
function registerErrorMessage(err: unknown): string {
  const raw =
    err instanceof Error
      ? err.message
      : typeof err === 'string'
        ? err
        : '';
  const m = raw.toLowerCase();
  if (/e-?mail.*(exist|déjà|already|utilis)|(exist|déjà|already).*e-?mail/.test(m))
    return 'Un compte existe déjà avec cet e-mail. Essayez de vous connecter.';
  if (/mot de passe|password/.test(m) && /court|faible|weak|short|8/.test(m))
    return 'Mot de passe trop faible : au moins 8 caractères.';
  if (/siret/.test(m)) return 'Le SIRET saisi est invalide.';
  if (/tva|vat|taxid/.test(m)) return 'Le numéro de TVA intracommunautaire est invalide.';
  if (/e-?mail/.test(m)) return "L'adresse e-mail est invalide.";
  return raw.trim() || "L'inscription a échoué. Vérifiez les informations saisies.";
}

export function RegisterForm({ terms }: { terms: TermsDocument[] }) {
  const { register, isLoading } = useAccount();
  const [f, setF] = useState<FormState>(EMPTY);
  const [accept, setAccept] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const set =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setF((s) => ({ ...s, [k]: e.target.value }));

  if (done)
    return (
      <p className="rounded bg-green-50 p-4 text-green-800">
        Compte créé. Il sera actif après validation par un commercial.{' '}
        <Link href="/connexion" className="underline">
          Connexion
        </Link>
      </p>
    );

  return (
    <form
      className="space-y-5"
      onSubmit={async (e) => {
        e.preventDefault();
        setError(null);
        try {
          await register({
            ...f,
            acceptTerms: accept,
            termsDocumentIds: terms.map((t) => t.id)
          });
          setDone(true);
        } catch (err) {
          const msg = registerErrorMessage(err);
          setError(msg);
          toast.error(msg);
        }
      }}
    >
      <fieldset className="space-y-2">
        <legend className="mb-1 text-sm font-medium text-neutral-700">
          Vos coordonnées
        </legend>
        <div className="flex gap-2">
          <select
            className="field w-24"
            aria-label="Civilité"
            value={f.gender}
            onChange={set('gender')}
          >
            <option value="">Civilité</option>
            <option value="M">M.</option>
            <option value="Mme">Mme</option>
          </select>
          <input
            className="field flex-1"
            required
            placeholder="Prénom"
            value={f.firstName}
            onChange={set('firstName')}
          />
          <input
            className="field flex-1"
            required
            placeholder="Nom"
            value={f.lastName}
            onChange={set('lastName')}
          />
        </div>
        <input
          className="field"
          type="email"
          required
          placeholder="Email"
          value={f.email}
          onChange={set('email')}
        />
        <input
          className="field"
          type="tel"
          required
          placeholder="Téléphone"
          value={f.phoneNumber}
          onChange={set('phoneNumber')}
        />
        <input
          className="field"
          type="password"
          required
          minLength={8}
          placeholder="Mot de passe (8 caractères min.)"
          value={f.password}
          onChange={set('password')}
        />
      </fieldset>

      <fieldset className="space-y-2">
        <legend className="mb-1 text-sm font-medium text-neutral-700">
          Votre entreprise
        </legend>
        <input
          className="field"
          required
          placeholder="Raison sociale"
          value={f.companyName}
          onChange={set('companyName')}
        />
        <input
          className="field"
          required
          placeholder="Adresse"
          value={f.address}
          onChange={set('address')}
        />
        <div className="flex gap-2">
          <input
            className="field w-32"
            required
            placeholder="Code postal"
            value={f.zipCode}
            onChange={set('zipCode')}
          />
          <input
            className="field flex-1"
            required
            placeholder="Ville"
            value={f.city}
            onChange={set('city')}
          />
        </div>
        <div className="flex gap-2">
          <input
            className="field flex-1"
            required
            placeholder="SIRET"
            value={f.siret}
            onChange={set('siret')}
          />
          <input
            className="field flex-1"
            required
            placeholder="N° TVA intracom."
            value={f.taxId}
            onChange={set('taxId')}
          />
        </div>
      </fieldset>

      <label className="flex items-start gap-2 text-sm text-neutral-700">
        <input
          type="checkbox"
          required
          checked={accept}
          onChange={(e) => setAccept(e.target.checked)}
          className="mt-1"
        />
        <span>
          J'accepte les conditions
          {terms.map((t) => (
            <span key={t.id}>
              {' '}
              {t.url ? (
                <a
                  href={t.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  {t.type}
                </a>
              ) : (
                t.type
              )}
            </span>
          ))}
        </span>
      </label>

      {error && (
        <p
          role="alert"
          className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading || !accept}
        className="w-full rounded bg-[var(--brand)] py-2 text-white disabled:opacity-50"
      >
        {isLoading ? '…' : 'Créer mon compte'}
      </button>
      <p className="text-center text-sm text-neutral-500">
        Déjà un compte ?{' '}
        <Link href="/connexion" className="text-[var(--brand-dark)] underline">
          Se connecter
        </Link>
      </p>
    </form>
  );
}
