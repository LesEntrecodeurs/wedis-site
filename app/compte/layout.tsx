'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  UserRound,
  MapPin,
  FileText,
  LogOut
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useAuth } from '@extracom/site-kit/react';
import { CompanySwitcher } from '@/components/site/CompanySwitcher';
import { PageLoader } from '@/components/site/Loader';

const NAV: [string, string, LucideIcon][] = [
  ['Aperçu', '/compte', LayoutDashboard],
  ['Profil', '/compte/profil', UserRound],
  ['Adresses', '/compte/adresses', MapPin],
  ['Commandes', '/compte/commandes', FileText]
];

export default function CompteLayout({ children }: { children: ReactNode }) {
  const { user, isLoading, logout } = useAuth();
  const pathname = usePathname();

  if (isLoading) return <PageLoader label="Chargement de votre compte…" />;
  if (!user)
    return (
      <p>
        Vous n'êtes pas connecté.{' '}
        <Link
          href={`/connexion?redirect=${encodeURIComponent(pathname)}`}
          className="text-[var(--brand-dark)] underline"
        >
          Se connecter
        </Link>
      </p>
    );

  return (
    <div className="grid gap-8 md:grid-cols-[240px_1fr]">
      <aside className="space-y-3">
        <CompanySwitcher />
        <nav className="card space-y-1 p-2">
          {NAV.map(([label, href, Icon]) => {
            const active =
              href === '/compte'
                ? pathname === href
                : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2.5 rounded-md px-3 py-2 text-sm transition ${
                  active
                    ? 'bg-[var(--brand-light)] font-medium text-[var(--brand-dark)]'
                    : 'text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {label}
              </Link>
            );
          })}
          <button
            type="button"
            onClick={() => logout()}
            className="mt-1 flex w-full items-center gap-2.5 rounded-md border-t border-neutral-100 px-3 py-2 pt-3 text-left text-sm text-neutral-500 transition hover:bg-neutral-100"
          >
            <LogOut className="h-4 w-4 shrink-0" />
            Se déconnecter
          </button>
        </nav>
      </aside>
      <section>{children}</section>
    </div>
  );
}
