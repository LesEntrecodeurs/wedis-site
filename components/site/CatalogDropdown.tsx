import Link from 'next/link';
import { Menu, ChevronDown } from 'lucide-react';
import type { CatalogNode } from '@extracom/site-kit';
import { CatalogBranch } from './CategoryMenu';

// Menu déroulant « Toutes les catégories » de la sous-nav. 100% CSS (hover),
// alimenté par le catalogTree du kit. Chaque catégorie déploie ses enfants en
// cascade vers la droite (cf. CatalogBranch).
export function CatalogDropdown({
  categories
}: {
  categories: CatalogNode[];
}) {
  return (
    <div className="group/all relative shrink-0">
      <Link
        href="/catalogue"
        className="flex items-center gap-2 border-r border-white/15 py-3 pr-5 text-sm font-semibold text-white"
      >
        <Menu className="size-4" />
        Toutes les catégories
        <ChevronDown className="size-4 transition-transform group-hover/all:rotate-180" />
      </Link>

      {categories.length > 0 && (
        <div className="absolute top-full left-0 z-40 hidden min-w-[300px] pt-1 group-hover/all:block">
          <div className="rounded-sm border border-neutral-200 bg-white p-2 shadow-xl">
            {categories.map((cat) => (
              <CatalogBranch key={cat.id} node={cat} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
