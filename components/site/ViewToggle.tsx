'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { LayoutGrid, List } from 'lucide-react';

export type CatalogueView = 'grid' | 'list';

// Bascule grille / liste : écrit `?view=` dans l'URL en conservant les autres
// filtres. La page relit `view` côté serveur pour choisir le rendu.
export function ViewToggle({ view }: { view: CatalogueView }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setView = (next: CatalogueView) => {
    const params = new URLSearchParams(searchParams.toString());
    if (next === 'grid') params.delete('view');
    else params.set('view', next);
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const base =
    'flex size-9 items-center justify-center rounded-md border transition';
  const on = 'border-[var(--brand)] bg-[var(--brand-light)] text-[var(--brand-dark)]';
  const off = 'border-neutral-200 text-neutral-500 hover:border-[var(--brand)]';

  return (
    <div className="flex items-center gap-1.5">
      <button
        type="button"
        aria-label="Vue grille"
        aria-pressed={view === 'grid'}
        onClick={() => setView('grid')}
        className={`${base} ${view === 'grid' ? on : off}`}
      >
        <LayoutGrid className="size-4" />
      </button>
      <button
        type="button"
        aria-label="Vue liste"
        aria-pressed={view === 'list'}
        onClick={() => setView('list')}
        className={`${base} ${view === 'list' ? on : off}`}
      >
        <List className="size-4" />
      </button>
    </div>
  );
}
