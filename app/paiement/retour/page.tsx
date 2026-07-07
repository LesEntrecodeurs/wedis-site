import Link from 'next/link';
import { CheckCircle2, XCircle } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function RetourPaiementPage({
  searchParams
}: {
  searchParams: Promise<{ paymentStatus?: string }>;
}) {
  const { paymentStatus } = await searchParams;
  const success = paymentStatus === 'success';

  return (
    <div className="mx-auto max-w-md py-12 sm:py-16">
      <div className="card flex flex-col items-center p-8 text-center sm:p-10">
        <span
          className={`mb-5 flex h-14 w-14 items-center justify-center rounded-full ${
            success
              ? 'bg-green-50 text-green-600'
              : 'bg-red-50 text-red-600'
          }`}
        >
          {success ? (
            <CheckCircle2 className="h-7 w-7" />
          ) : (
            <XCircle className="h-7 w-7" />
          )}
        </span>
        <h1 className="text-2xl font-bold text-[var(--brand-slate)]">
          {success ? 'Paiement réussi' : 'Paiement non abouti'}
        </h1>
        <p className="mt-3 text-sm text-neutral-600">
          {success
            ? 'Votre commande a été enregistrée. Merci pour votre confiance !'
            : 'Le paiement a échoué ou a été annulé. Aucun montant n’a été débité.'}
        </p>
        <Link
          href={success ? '/compte' : '/panier'}
          className="btn-primary mt-8"
        >
          {success ? 'Voir mon compte' : 'Retour au panier'}
        </Link>
      </div>
    </div>
  );
}
