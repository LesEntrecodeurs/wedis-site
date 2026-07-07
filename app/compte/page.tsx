'use client';

import Link from 'next/link';
import { UserRound, MapPin, FileText } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useAuth } from '@extracom/site-kit/react';

export default function ComptePage() {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-2xl font-bold text-[var(--brand-slate)]">
        Bonjour {user?.name ?? ''}
      </h1>
      <p className="mt-1 text-sm text-neutral-500">{user?.email}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <Tile
          href="/compte/profil"
          icon={UserRound}
          title="Profil"
          desc="Vos informations"
        />
        <Tile
          href="/compte/adresses"
          icon={MapPin}
          title="Adresses"
          desc="Livraison & facturation"
        />
        <Tile
          href="/compte/commandes"
          icon={FileText}
          title="Commandes"
          desc="Votre historique"
        />
      </div>
    </div>
  );
}

function Tile({
  href,
  icon: Icon,
  title,
  desc
}: {
  href: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <Link href={href} className="card group flex flex-col gap-2 p-5">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-light)] text-[var(--brand-dark)]">
        <Icon className="h-5 w-5" />
      </span>
      <p className="mt-1 font-medium text-[var(--brand-slate)]">{title}</p>
      <p className="text-sm text-neutral-500">{desc}</p>
    </Link>
  );
}
