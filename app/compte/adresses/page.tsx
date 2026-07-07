'use client';

import { useState } from 'react';
import { MapPin, Plus } from 'lucide-react';
import { toast } from 'sonner';
import { useDelivery } from '@extracom/site-kit/react';
import { AddressForm } from '@/components/site/AddressForm';
import { ListSkeleton } from '@/components/site/Loader';
import { apiErrorMessage } from '@/lib/api-error';

export default function AdressesPage() {
  const { options, isLoading, addAddress, updateAddress } = useDelivery();
  const [showAdd, setShowAdd] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const addresses = options?.addresses ?? [];

  return (
    <div className="max-w-lg">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-[var(--brand-slate)]">
          Mes adresses
        </h1>
        <p className="mt-1 text-sm text-neutral-500">
          Vos adresses de livraison et de facturation enregistrées.
        </p>
      </header>

      {isLoading ? (
        <ListSkeleton rows={3} />
      ) : addresses.length === 0 ? (
        <div className="card flex flex-col items-center gap-2 p-8 text-center">
          <span className="text-neutral-300">
            <MapPin className="h-7 w-7" />
          </span>
          <p className="text-sm text-neutral-500">
            Aucune adresse enregistrée pour le moment.
          </p>
        </div>
      ) : (
        <ul className="space-y-2">
          {addresses.map((a) =>
            editId === a.id ? (
              <li key={a.id} className="card p-4">
                <AddressForm
                  submitLabel="Enregistrer"
                  initial={{
                    label: a.label,
                    line1: a.line1,
                    line2: a.line2,
                    postalCode: a.postalCode,
                    city: a.city,
                    country: a.country,
                    contactName: a.contactName,
                    phone: a.phone
                  }}
                  onCancel={() => setEditId(null)}
                  onSubmit={async (data) => {
                    await toast.promise(updateAddress({ id: a.id, ...data }), {
                      loading: 'Mise à jour…',
                      success: 'Adresse mise à jour',
                      error: (e) =>
                        apiErrorMessage(e, "Impossible de modifier l'adresse.")
                    });
                    setEditId(null);
                  }}
                />
              </li>
            ) : (
              <li
                key={a.id}
                className="card flex items-start justify-between gap-3 p-3 text-sm"
              >
                <div>
                  <p className="font-medium">{a.label || a.city}</p>
                  <p className="text-neutral-500">
                    {a.line1}
                    {a.line2 ? `, ${a.line2}` : ''}, {a.postalCode} {a.city} (
                    {a.country})
                  </p>
                  {a.contactName && (
                    <p className="text-neutral-400">{a.contactName}</p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setShowAdd(false);
                    setEditId(a.id);
                  }}
                  className="shrink-0 text-sm text-[var(--brand-dark)] hover:underline"
                >
                  Modifier
                </button>
              </li>
            )
          )}
        </ul>
      )}

      <div className="mt-4">
        {showAdd ? (
          <div className="card p-4">
            <AddressForm
              submitLabel="Ajouter"
              onCancel={() => setShowAdd(false)}
              onSubmit={async (a) => {
                await toast.promise(addAddress(a), {
                  loading: 'Ajout…',
                  success: 'Adresse ajoutée',
                  error: (e) =>
                    apiErrorMessage(e, "Impossible d'ajouter l'adresse.")
                });
                setShowAdd(false);
              }}
            />
          </div>
        ) : (
          <button
            type="button"
            onClick={() => {
              setEditId(null);
              setShowAdd(true);
            }}
            className="btn-outline"
          >
            <Plus className="h-4 w-4" />
            Ajouter une adresse
          </button>
        )}
      </div>
    </div>
  );
}
