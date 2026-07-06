import Link from 'next/link';
import Image from 'next/image';
import { User, Phone } from 'lucide-react';
import type { ShopContext, User as SdkUser } from '@extracom/site-kit';
import { CartLink } from './CartLink';
import { CatalogDropdown } from './CatalogDropdown';
import { SITE } from '@/lib/site';

const MENU: [string, string][] = [
  ['Qui sommes-nous ?', '/a-propos'],
  ['Promotions - Déstockage', '/catalogue'],
  ["Matériels d'occasions", '/catalogue'],
  ['Contact', '/contact'],
  ['Marques', '/marques']
];

export function Nav({
  context,
  user
}: {
  context: ShopContext | null;
  user?: SdkUser | null;
}) {
  const categories = context?.catalogTree ?? [];
  const firstName = user?.name?.split(' ')[0];

  return (
    <header className="sticky top-0 z-30">
      <div className="bg-[var(--brand)] text-white">
        <div className="container-x flex items-center gap-4 py-[18px]">
          <Link href="/" className="shrink-0">
            <Image
              src="/wedis/logo-white.png"
              alt="Wédis — Matériels et produits d'hygiène professionnelle"
              width={200}
              height={126}
              priority
              className="h-[86px] w-auto"
            />
          </Link>

          <form
            action="/catalogue"
            className="mx-auto hidden w-full max-w-2xl md:block"
          >
            <div className="flex items-center rounded-full bg-white py-1 pr-1 pl-6">
              <input
                name="q"
                placeholder="Rechercher..."
                aria-label="Rechercher dans le catalogue"
                className="min-w-0 flex-1 bg-transparent text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-[var(--brand-accent)] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--brand-accent-dark)]"
              >
                Rechercher
              </button>
            </div>
          </form>

          <div className="ml-auto flex items-center gap-6">
            <Link
              href={user ? '/compte' : '/connexion'}
              className="flex flex-col items-center gap-0.5 text-xs transition hover:text-[var(--brand-accent-light)]"
            >
              <User className="size-6 fill-current" strokeWidth={1.5} />
              <span>{firstName ? firstName : 'Espace Client'}</span>
            </Link>
            {user && <CartLink />}
            <a
              href={`tel:${SITE.phoneHref}`}
              className="hidden flex-col items-center gap-0.5 text-xs transition hover:text-[var(--brand-accent-light)] sm:flex"
            >
              <Phone className="size-6 fill-current" strokeWidth={1.5} />
              <span>{SITE.phone}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[var(--brand)] text-white">
        <div className="container-x flex items-center gap-1">
          <CatalogDropdown categories={categories} />
          <nav className="flex items-center">
            {MENU.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="shrink-0 px-4 py-3 text-sm font-medium whitespace-nowrap transition hover:bg-white/10"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
