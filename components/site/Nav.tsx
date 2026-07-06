import Link from 'next/link';
import Image from 'next/image';
import { Menu, ChevronDown, Search, User, Phone } from 'lucide-react';
import type { ShopContext, User as SdkUser } from '@extracom/site-kit';
import { CartLink } from './CartLink';
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
  void context;
  const firstName = user?.name?.split(' ')[0];

  return (
    <header className="sticky top-0 z-30">
      <div className="bg-[var(--brand)] text-white">
        <div className="container-x flex items-center gap-4 py-4">
          <Link href="/" className="shrink-0">
            <Image
              src="/wedis/logo-white.png"
              alt="Wédis — Matériels et produits d'hygiène professionnelle"
              width={200}
              height={126}
              priority
              className="h-14 w-auto"
            />
          </Link>

          <form
            action="/catalogue"
            className="mx-auto hidden w-full max-w-xl md:block"
          >
            <div className="flex items-center gap-2 rounded-full bg-white p-1.5 pl-4">
              <Search className="size-4 shrink-0 text-neutral-400" />
              <input
                name="q"
                placeholder="Rechercher..."
                aria-label="Rechercher dans le catalogue"
                className="min-w-0 flex-1 bg-transparent text-sm text-neutral-800 outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-[var(--brand)] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[var(--brand-dark)]"
              >
                Rechercher
              </button>
            </div>
          </form>

          <div className="ml-auto flex items-center gap-6">
            <Link
              href={user ? '/compte' : '/connexion'}
              className="flex flex-col items-center gap-0.5 text-xs transition hover:opacity-80"
            >
              <User className="size-5" />
              <span>{firstName ? firstName : 'Espace Client'}</span>
            </Link>
            {user && <CartLink />}
            <a
              href={`tel:${SITE.phoneHref}`}
              className="hidden flex-col items-center gap-0.5 text-xs transition hover:opacity-80 sm:flex"
            >
              <Phone className="size-5" />
              <span>{SITE.phone}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[var(--brand-dark)] text-white">
        <div className="container-x flex items-center gap-1 overflow-x-auto">
          <Link
            href="/catalogue"
            className="flex shrink-0 items-center gap-2 border-r border-white/10 py-3 pr-5 text-sm font-semibold"
          >
            <Menu className="size-4" />
            Toutes les catégories
            <ChevronDown className="size-4" />
          </Link>
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
