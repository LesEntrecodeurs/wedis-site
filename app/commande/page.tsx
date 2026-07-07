'use client';

import { useState } from 'react';
import Link from 'next/link';
import { toast } from 'sonner';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  useCart,
  useDelivery,
  usePayment,
  useCheckout,
  useAuth,
  useCompany,
  useShopContext
} from '@extracom/site-kit/react';
import { formatPrice } from '@extracom/site-kit';
import { AddressForm } from '@/components/site/AddressForm';
import { AuthGate } from '@/components/site/AuthGate';
import { CartSkeleton, Spinner } from '@/components/site/Loader';
import { CheckoutStepper } from '@/components/site/CheckoutStepper';
import { apiErrorMessage } from '@/lib/api-error';

export default function CommandePage() {
  return (
    <AuthGate message="Connectez-vous pour passer commande.">
      <CommandeContent />
    </AuthGate>
  );
}

function CommandeContent() {
  const { cart, isLoading, setDelivery, setComment } = useCart();
  const { options, addAddress } = useDelivery();
  const { start, isLoading: paying } = usePayment();
  const {
    createOrder,
    validateWithoutPayment,
    isLoading: ordering
  } = useCheckout();
  const { user } = useAuth();
  const { activeId } = useCompany();
  const { data: context } = useShopContext();
  const [step, setStep] = useState(0);
  const [showAdd, setShowAdd] = useState(false);
  const [confirmedRef, setConfirmedRef] = useState<string | null>(null);
  const [created, setCreated] = useState(false);
  const [isQuote, setIsQuote] = useState(false);
  const [reference, setReference] = useState('');
  const [comment, setCommentValue] = useState('');

  const persistComment = async () => {
    if (comment.trim()) await setComment(comment.trim());
  };

  const activeMembership = user?.memberships.find(
    (m) =>
      m.customerId === activeId &&
      (!context?.shopName || m.shopName === context.shopName)
  );
  const caps = activeMembership?.capabilities;
  const canQuote = caps?.canQuote ?? false;
  const canOrderDirect =
    (caps?.canOrder && caps?.canCheckoutWithoutPayment) ?? false;
  const shopCaps = context?.capabilities;
  const paymentEnabled = shopCaps?.paymentEnabled ?? false;
  const deliveryEnabled = shopCaps?.deliveryEnabled ?? true;

  if (confirmedRef !== null) return <Confirmation isQuote={isQuote} created={created} reference={confirmedRef} />;
  if (isLoading) return <CartSkeleton />;
  if (!cart || cart.lines.length === 0)
    return (
      <p>
        Panier vide.{' '}
        <Link href="/catalogue" className="text-[var(--brand-dark)] underline">
          Catalogue
        </Link>
      </p>
    );

  const steps = deliveryEnabled
    ? ['Panier', 'Livraison', 'Récapitulatif']
    : ['Panier', 'Récapitulatif'];
  const deliveryStep = deliveryEnabled ? 1 : -1;
  const reviewStep = steps.length - 1;
  const selectedAddress = (options?.addresses ?? []).find(
    (a) => a.id === cart.deliveryAddressId
  );
  const hasDelivery = !!cart.deliveryAddressId;
  const deliveryOk = !deliveryEnabled || hasDelivery;

  const pay = async () => {
    await persistComment();
    const { redirectUrl } = await start({});
    if (redirectUrl) window.location.href = redirectUrl;
  };

  const runOrder = async (
    fn: () => Promise<{ reference?: string } | void>,
    quote: boolean,
    validated: boolean,
    fallback: string
  ) => {
    try {
      await persistComment();
      const res = await fn();
      setIsQuote(quote);
      setCreated(validated);
      setConfirmedRef((res as { reference?: string })?.reference ?? '');
    } catch (e) {
      toast.error(apiErrorMessage(e, fallback));
    }
  };

  const total = formatPrice(cart.totals?.totalInclVat ?? null);

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="mb-6 text-xl font-semibold">Passer commande</h1>
      <CheckoutStepper steps={steps} current={step} onStep={setStep} />

      {step === 0 && (
        <section className="card p-5">
          <ul className="divide-y divide-neutral-100 text-sm">
            {cart.lines.map((l) => (
              <li key={l.id} className="flex justify-between gap-4 py-2.5">
                <span>
                  {l.label ?? l.reference}
                  {l.variantLabel ? ` — ${l.variantLabel}` : ''}
                  <span className="text-neutral-400"> × {l.quantity}</span>
                </span>
                <span className="shrink-0 font-medium">
                  {formatPrice(l.lineTotalInclVat ?? l.unitPrice * l.quantity)}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex justify-between border-t border-neutral-100 pt-3 text-lg font-semibold">
            <span>Total TTC</span>
            <span>{total}</span>
          </div>
        </section>
      )}

      {step === deliveryStep && (
        <section>
          <h2 className="mb-3 font-medium">Adresse de livraison</h2>
          <ul className="space-y-2">
            {(options?.addresses ?? []).map((a) => (
              <li key={a.id}>
                <label
                  className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 text-sm transition ${
                    cart.deliveryAddressId === a.id
                      ? 'border-[var(--brand)] bg-[var(--brand-light)]'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="delivery"
                    checked={cart.deliveryAddressId === a.id}
                    onChange={() => setDelivery({ deliveryAddressId: a.id })}
                  />
                  <span>
                    {a.label ? `${a.label} — ` : ''}
                    {a.line1}, {a.postalCode} {a.city}
                  </span>
                </label>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            {showAdd ? (
              <div className="card p-4">
                <AddressForm
                  submitLabel="Utiliser cette adresse"
                  onCancel={() => setShowAdd(false)}
                  onSubmit={async (addr) => {
                    const createdAddr = await addAddress(addr);
                    await setDelivery({ deliveryAddressId: createdAddr.id });
                    setShowAdd(false);
                  }}
                />
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowAdd(true)}
                className="text-sm font-medium text-[var(--brand-dark)] hover:underline"
              >
                + Ajouter une adresse
              </button>
            )}
          </div>
        </section>
      )}

      {step === reviewStep && (
        <section className="space-y-5">
          <div className="card p-5">
            <div className="flex justify-between text-sm">
              <span className="text-neutral-500">Total TTC</span>
              <span className="text-lg font-semibold">{total}</span>
            </div>
            {deliveryEnabled && (
              <p className="mt-2 text-sm text-neutral-500">
                Livraison :{' '}
                {selectedAddress
                  ? `${selectedAddress.line1}, ${selectedAddress.postalCode} ${selectedAddress.city}`
                  : '—'}
              </p>
            )}
          </div>
          <div>
            <label className="text-sm text-neutral-600">
              Référence de commande
            </label>
            <input
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              placeholder="Votre référence (bon de commande…)"
              className="field mt-1"
            />
          </div>
          <div>
            <label className="text-sm text-neutral-600">Commentaire</label>
            <textarea
              value={comment}
              onChange={(e) => setCommentValue(e.target.value.slice(0, 69))}
              placeholder="Note pour la préparation (69 caractères max)"
              rows={2}
              className="field mt-1 resize-none"
            />
            <p className="mt-0.5 text-right text-xs text-neutral-400">
              {comment.length}/69
            </p>
          </div>
          {!deliveryOk && (
            <p role="alert" className="text-sm text-red-600">
              Choisissez une adresse de livraison à l'étape précédente.
            </p>
          )}
        </section>
      )}

      <div className="mt-8 flex items-center gap-3">
        {step > 0 && (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="btn-outline inline-flex items-center gap-1"
          >
            <ChevronLeft className="size-4" /> Retour
          </button>
        )}

        {step < reviewStep ? (
          <button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            disabled={step === deliveryStep && !deliveryOk}
            className="btn-primary ml-auto inline-flex items-center gap-1 disabled:opacity-50"
            title={
              step === deliveryStep && !deliveryOk
                ? 'Choisissez une adresse de livraison'
                : ''
            }
          >
            Continuer <ChevronRight className="size-4" />
          </button>
        ) : (
          <div className="ml-auto flex flex-col gap-3 sm:flex-row">
            {canQuote && (
              <button
                type="button"
                onClick={() =>
                  runOrder(
                    () =>
                      validateWithoutPayment({
                        documentType: '0',
                        reference: reference.trim() || undefined
                      }),
                    true,
                    true,
                    'Le devis n’a pas pu être créé. Vérifiez vos droits ou réessayez.'
                  )
                }
                disabled={ordering || !deliveryOk}
                className="btn-outline inline-flex items-center justify-center gap-2"
              >
                {ordering && <Spinner className="size-4" />} Demander un devis
              </button>
            )}
            {canOrderDirect ? (
              <button
                type="button"
                onClick={() =>
                  runOrder(
                    () =>
                      validateWithoutPayment({
                        documentType: '1',
                        reference: reference.trim() || undefined
                      }),
                    false,
                    true,
                    'La commande n’a pas pu être validée. Vérifiez vos droits ou réessayez.'
                  )
                }
                disabled={ordering || !deliveryOk}
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                {ordering && <Spinner className="size-4" />} Valider la commande
              </button>
            ) : (
              <>
                {paymentEnabled && (
                  <button
                    type="button"
                    onClick={pay}
                    disabled={paying || !deliveryOk}
                    className="btn-primary inline-flex items-center justify-center gap-2"
                  >
                    {paying && <Spinner className="size-4" />} Payer
                  </button>
                )}
                <button
                  type="button"
                  onClick={() =>
                    runOrder(
                      () => createOrder(),
                      false,
                      false,
                      "La commande n'a pas pu être envoyée. Réessayez."
                    )
                  }
                  disabled={ordering || !deliveryOk}
                  className="btn-outline inline-flex items-center justify-center gap-2"
                  title="Soumettre pour validation par un commercial"
                >
                  {ordering && <Spinner className="size-4" />} Soumettre pour
                  validation
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Confirmation({
  isQuote,
  created,
  reference
}: {
  isQuote: boolean;
  created: boolean;
  reference: string;
}) {
  return (
    <div className="mx-auto max-w-lg">
      <div className="card p-10 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-light)] text-2xl text-[var(--brand-dark)]">
          ✓
        </div>
        <h1 className="text-xl font-semibold">
          {isQuote ? 'Devis créé' : created ? 'Commande validée' : 'Commande envoyée'}
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
          {reference ? `Référence : ${reference}. ` : ''}
          {isQuote || created
            ? 'Vous le retrouvez dès maintenant dans votre historique.'
            : 'Elle sera validée par un commercial.'}
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/compte/commandes" className="btn-primary">
            Mes commandes
          </Link>
          <Link href="/catalogue" className="btn-outline">
            Continuer mes achats
          </Link>
        </div>
      </div>
    </div>
  );
}
