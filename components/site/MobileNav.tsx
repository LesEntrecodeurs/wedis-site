'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, Plus, Minus, User, Phone } from 'lucide-react';
import type { CatalogNode } from '@extracom/site-kit';

// Navigation mobile : bouton hamburger + panneau plein écran (recherche,
// catégories dépliables, liens, espace client). Remplace la barre desktop
// (méga-menu hover) inutilisable au tactile.
export function MobileNav({
  categories,
  menu,
  accountHref,
  accountLabel,
  phone,
  phoneHref
}: {
  categories: CatalogNode[];
  menu: [string, string][];
  accountHref: string;
  accountLabel: string;
  phone: string;
  phoneHref: string;
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const accountExternal = /^https?:\/\//.test(accountHref);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Ouvrir le menu"
        className="flex size-10 items-center justify-center rounded-md hover:bg-white/10"
      >
        <Menu className="size-7" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white text-neutral-800">
          <div className="flex items-center justify-between border-b border-neutral-200 bg-[var(--brand)] px-4 py-3 text-white">
            <span className="font-semibold">Menu</span>
            <button
              type="button"
              onClick={close}
              aria-label="Fermer le menu"
              className="flex size-9 items-center justify-center rounded-md hover:bg-white/10"
            >
              <X className="size-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto overscroll-contain">
            <form action="/catalogue" onSubmit={close} className="p-4">
              <div className="flex items-center rounded-full border border-neutral-200 py-1 pr-1 pl-4">
                <input
                  name="q"
                  placeholder="Rechercher un produit…"
                  aria-label="Rechercher dans le catalogue"
                  className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-neutral-400"
                />
                <button
                  type="submit"
                  aria-label="Rechercher"
                  className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-accent)] text-white"
                >
                  <Search className="size-4" />
                </button>
              </div>
            </form>

            {categories.length > 0 && (
              <nav className="border-t border-neutral-100 px-2 py-2">
                <p className="px-2 py-1 text-xs font-semibold tracking-widest text-neutral-400 uppercase">
                  Catégories
                </p>
                {categories.map((cat) => (
                  <MobileCategory key={cat.id} node={cat} onNavigate={close} />
                ))}
              </nav>
            )}

            <nav className="border-t border-neutral-100 px-2 py-2">
              {menu.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  onClick={close}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium hover:bg-[var(--brand-light)]"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="border-t border-neutral-100 px-4 py-4">
              {accountExternal ? (
                <a
                  href={accountHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2 text-sm font-medium text-[var(--brand-dark)]"
                >
                  <User className="size-5" />
                  {accountLabel}
                </a>
              ) : (
                <Link
                  href={accountHref}
                  onClick={close}
                  className="flex items-center gap-2 py-2 text-sm font-medium text-[var(--brand-dark)]"
                >
                  <User className="size-5" />
                  {accountLabel}
                </Link>
              )}
              <a
                href={`tel:${phoneHref}`}
                className="flex items-center gap-2 py-2 text-sm font-medium text-[var(--brand-dark)]"
              >
                <Phone className="size-5" />
                {phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MobileCategory({
  node,
  onNavigate
}: {
  node: CatalogNode;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const children = node.children ?? [];
  const href = `/catalogue?catalog=${node.id}&clevel=${node.level}`;

  return (
    <div>
      <div className="flex items-center">
        <Link
          href={href}
          onClick={onNavigate}
          className="flex-1 rounded-md px-3 py-2.5 text-sm font-medium hover:bg-[var(--brand-light)]"
        >
          {node.label}
        </Link>
        {children.length > 0 && (
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            aria-label={expanded ? 'Réduire' : 'Déplier'}
            className="flex size-9 items-center justify-center rounded-md text-neutral-400 hover:bg-neutral-100"
          >
            {expanded ? <Minus className="size-4" /> : <Plus className="size-4" />}
          </button>
        )}
      </div>
      {expanded &&
        children.map((sub) => (
          <Link
            key={sub.id}
            href={`/catalogue?catalog=${sub.id}&clevel=${sub.level}`}
            onClick={onNavigate}
            className="block rounded-md py-2 pr-3 pl-6 text-sm text-neutral-600 hover:bg-[var(--brand-light)]"
          >
            {sub.label}
          </Link>
        ))}
    </div>
  );
}
