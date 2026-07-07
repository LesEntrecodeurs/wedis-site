'use client';

import { useState } from 'react';
import Image from 'next/image';

type Block =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] };

// Parse le markdown-lite (« ## » titre, « - » puce, sinon paragraphe).
function parse(text: string): Block[] {
  const blocks: Block[] = [];
  let list: string[] | null = null;
  const flush = () => {
    if (list) {
      blocks.push({ type: 'list', items: list });
      list = null;
    }
  };
  for (const raw of text.split('\n')) {
    const line = raw.trim();
    if (!line) {
      flush();
      continue;
    }
    if (line.startsWith('## ')) {
      flush();
      blocks.push({ type: 'heading', text: line.slice(3).trim() });
    } else if (line.startsWith('- ')) {
      list ??= [];
      list.push(line.slice(2).trim());
    } else {
      flush();
      blocks.push({ type: 'paragraph', text: line });
    }
  }
  flush();
  return blocks;
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        if (b.type === 'heading')
          return (
            <h4
              // biome-ignore lint/suspicious/noArrayIndexKey: blocs dérivés d'un parsing statique, ordre stable
              key={i}
              className="mt-4 font-bold text-[var(--brand-slate)] first:mt-0"
            >
              {b.text}
            </h4>
          );
        if (b.type === 'list')
          return (
            // biome-ignore lint/suspicious/noArrayIndexKey: blocs dérivés d'un parsing statique, ordre stable
            <ul key={i} className="mt-2 space-y-1">
              {b.items.map((it, j) => (
                <li
                  // biome-ignore lint/suspicious/noArrayIndexKey: puces dérivées d'un parsing statique, ordre stable
                  key={j}
                  className="flex gap-2 text-sm leading-relaxed text-neutral-600"
                >
                  <span className="text-[var(--brand)]">•</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          );
        return (
          <p
            // biome-ignore lint/suspicious/noArrayIndexKey: blocs dérivés d'un parsing statique, ordre stable
            key={i}
            className="mt-2 text-sm leading-relaxed text-neutral-600 first:mt-0"
          >
            {b.text}
          </p>
        );
      })}
    </>
  );
}

/**
 * Encart marque du catalogue : en-tête (logo encadré + nom + toggle « En savoir
 * plus » à droite). Le descriptif (contenu wedis.fr, markdown-lite) ne s'affiche
 * qu'au clic, sous l'en-tête — rien à l'arrivée.
 */
export function BrandCard({
  brand,
  logo,
  description
}: {
  brand: string;
  logo?: string;
  description?: string;
}) {
  const [open, setOpen] = useState(false);
  const blocks = description ? parse(description) : [];

  return (
    <div className="mb-6 overflow-hidden rounded-xl border border-neutral-200 bg-white">
      <div className="flex items-center gap-5 bg-gradient-to-r from-[var(--brand-light)] to-transparent px-5 py-4">
        {logo && (
          <span className="relative flex h-16 w-36 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-white p-2.5 shadow-sm">
            <Image
              src={logo}
              alt={`Logo ${brand}`}
              fill
              sizes="144px"
              className="object-contain"
            />
          </span>
        )}
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold tracking-widest text-[var(--brand)] uppercase">
            Marque
          </p>
          <p className="truncate text-xl font-bold text-[var(--brand-slate)]">
            {brand}
          </p>
        </div>
        {description && (
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="shrink-0 self-start text-sm font-medium text-[var(--brand)] hover:text-[var(--brand-dark)]"
          >
            {open ? 'Réduire' : 'En savoir plus'}
          </button>
        )}
      </div>

      {open && description && (
        <div className="border-t border-neutral-100 px-5 py-4">
          <Blocks blocks={blocks} />
        </div>
      )}
    </div>
  );
}
