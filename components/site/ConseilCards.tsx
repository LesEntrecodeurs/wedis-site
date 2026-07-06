import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Conseil } from '@/data/conseils';

export function ConseilCards({ items }: { items: Conseil[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c) => (
        <Link
          key={c.slug}
          href={`/conseils/${c.slug}`}
          className="card group flex flex-col overflow-hidden"
        >
          <div className="flex h-40 items-center justify-center bg-[var(--brand-light)]">
            <span className="text-xs font-semibold tracking-wide text-[var(--brand)] uppercase">
              {c.category}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className="text-base font-bold text-[var(--brand-slate)]">
              {c.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
              {c.excerpt}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)]">
              Lire l'article
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
