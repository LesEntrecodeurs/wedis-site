import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';

export type IconListItem = {
  icon: LucideIcon;
  title: string;
  text: string;
  href?: string;
};

// Cadre bordé unique, items en 2 colonnes (icône outline + titre + texte).
// Reproduit les blocs « Nos services » et « Pourquoi choisir Wédis ? ».
export function IconListBox({ items }: { items: IconListItem[] }) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-6 md:p-10">
      <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
        {items.map((it) => {
          const inner = (
            <div className="flex gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-[var(--brand-accent)] text-[var(--brand)]">
                <it.icon className="size-6" />
              </span>
              <div>
                <h3 className="font-bold text-[var(--brand-slate)]">
                  {it.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                  {it.text}
                </p>
              </div>
            </div>
          );
          return it.href ? (
            <Link
              key={it.title}
              href={it.href}
              className="transition hover:opacity-80"
            >
              {inner}
            </Link>
          ) : (
            <div key={it.title}>{inner}</div>
          );
        })}
      </div>
    </div>
  );
}
