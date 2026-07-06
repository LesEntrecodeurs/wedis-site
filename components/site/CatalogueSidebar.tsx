import Link from 'next/link';
import type { CatalogNode } from '@extracom/site-kit';

function catHref(node: CatalogNode): string {
  return `/catalogue?catalog=${node.id}&clevel=${node.level}`;
}

function contains(node: CatalogNode, id: number): boolean {
  return node.id === id || (node.children ?? []).some((c) => contains(c, id));
}

// Sidebar catégories (arborescence catalogue) façon wedis.fr : racines listées,
// la branche active dépliée sur ses sous-catégories. Server-rendered (liens).
export function CatalogueSidebar({
  categories,
  activeId
}: {
  categories: CatalogNode[];
  activeId?: number;
}) {
  if (categories.length === 0) return null;
  return (
    <nav aria-label="Catégories" className="text-sm">
      <Link
        href="/catalogue"
        className={`mb-2 block rounded px-2 py-1.5 font-bold transition ${
          activeId == null
            ? 'text-[var(--brand-dark)]'
            : 'text-[var(--brand-slate)] hover:text-[var(--brand-dark)]'
        }`}
      >
        Toutes les catégories
      </Link>
      <ul className="space-y-0.5">
        {categories.map((cat) => {
          const active = activeId != null && contains(cat, activeId);
          const children = cat.children ?? [];
          return (
            <li key={cat.id}>
              <Link
                href={catHref(cat)}
                className={`block rounded px-2 py-1.5 transition ${
                  cat.id === activeId
                    ? 'bg-[var(--brand-light)] font-semibold text-[var(--brand-dark)]'
                    : 'text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {cat.label}
              </Link>
              {active && children.length > 0 && (
                <ul className="mt-0.5 ml-3 space-y-0.5 border-l border-neutral-200 pl-2">
                  {children.map((sub) => (
                    <li key={sub.id}>
                      <Link
                        href={catHref(sub)}
                        className={`block rounded px-2 py-1 transition ${
                          sub.id === activeId
                            ? 'font-semibold text-[var(--brand-dark)]'
                            : 'text-neutral-600 hover:text-[var(--brand-dark)]'
                        }`}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
