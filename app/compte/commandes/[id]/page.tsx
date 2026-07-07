'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, Download, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';
import { useDocument, useCart } from '@extracom/site-kit/react';
import { getDocumentPdfAction } from '@extracom/site-kit/server';
import { formatPrice, formatDate } from '@extracom/site-kit';
import { PageLoader } from '@/components/site/Loader';

async function downloadPdf(documentId: string, type: string, filename: string) {
  const { base64, contentType } = await getDocumentPdfAction(documentId, type);
  const bytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
  const url = URL.createObjectURL(new Blob([bytes], { type: contentType }));
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export default function DocumentPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const typeParam = useSearchParams().get('type') ?? undefined;
  const { data: doc, isLoading } = useDocument(
    decodeURIComponent(id),
    typeParam
  );
  const { reorder } = useCart();
  const router = useRouter();
  const [downloading, setDownloading] = useState(false);

  if (isLoading) return <PageLoader label="Chargement du document…" />;
  if (!doc) return <p>Document introuvable.</p>;

  // Code type pour le PDF/lignes : param d'URL en priorité, sinon celui du doc.
  const typeCode = typeParam ?? doc.typeCode?.toString() ?? '';

  return (
    <div className="max-w-xl">
      <Link
        href="/compte/commandes"
        className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-[var(--brand-dark)] hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Mes commandes
      </Link>

      <header className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
        <h1 className="text-2xl font-bold text-[var(--brand-slate)]">
          {doc.reference}
        </h1>
        <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600">
          {doc.type}
        </span>
        {doc.status && (
          <span className="rounded-full bg-[var(--brand-light)] px-2 py-0.5 text-xs font-medium text-[var(--brand-dark)]">
            {doc.status}
          </span>
        )}
      </header>
      <p className="mt-1 text-sm text-neutral-500">{formatDate(doc.date)}</p>

      {doc.deliveryAddress && (
        <p className="mt-1 text-sm text-neutral-500">
          Livraison : {doc.deliveryAddress}
        </p>
      )}

      <div className="card mt-5 text-sm">
        <ul className="divide-y divide-neutral-100">
          {doc.lines.map((l, i) => (
            <li
              // biome-ignore lint/suspicious/noArrayIndexKey: référence produit non garantie unique sur la commande
              key={`${l.reference}-${i}`}
              className="flex justify-between gap-4 p-4"
            >
              <span className="text-neutral-700">
                {l.label ?? l.reference}{' '}
                <span className="text-neutral-400">× {l.quantity}</span>
              </span>
              <span className="shrink-0 font-medium">
                {formatPrice(l.lineTotalInclVat ?? null)}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between border-t border-neutral-200 p-4 text-lg font-semibold text-[var(--brand-slate)]">
          <span>Total TTC</span>
          <span>{formatPrice(doc.totalInclVat ?? null)}</span>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={async () => {
            await reorder(doc.orderReference ?? doc.reference);
            router.push('/panier');
          }}
          className="btn-primary"
        >
          <RotateCcw className="h-4 w-4" />
          Recommander
        </button>
        <button
          type="button"
          disabled={downloading}
          onClick={async () => {
            setDownloading(true);
            try {
              await downloadPdf(doc.id, typeCode, `${doc.reference}.pdf`);
            } catch {
              toast.error('Le téléchargement du PDF a échoué.');
            } finally {
              setDownloading(false);
            }
          }}
          className="btn-outline"
        >
          <Download className="h-4 w-4" />
          {downloading ? 'Préparation…' : 'Télécharger le PDF'}
        </button>
      </div>
    </div>
  );
}
