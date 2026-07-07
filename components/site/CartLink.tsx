'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@extracom/site-kit/react';

/** Lien panier (style topbar : blanc, icône + label) avec compteur. Connecté seul. */
export function CartLink() {
  const { cart } = useCart();
  const count = cart?.lines?.reduce((n, l) => n + (l.quantity ?? 0), 0) ?? 0;

  return (
    <Link
      href="/panier"
      className="flex flex-col items-center gap-0.5 text-xs text-white transition hover:text-[var(--brand-accent-light)]"
    >
      <span className="relative">
        <ShoppingCart className="size-6" strokeWidth={1.75} />
        {count > 0 && (
          <span className="absolute -top-2 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--brand-accent)] px-1 text-[10px] font-bold text-white">
            {count > 99 ? '99+' : count}
          </span>
        )}
      </span>
      <span>Panier</span>
    </Link>
  );
}
