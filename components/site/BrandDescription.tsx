'use client';

import { useState } from 'react';

type Block =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] };

// Parse le markdown-lite (« ## » titre, « - » puce, sinon paragraphe) en blocs.
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
      (list ??= []).push(line.slice(2).trim());
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
              key={i}
              className="mt-4 font-bold text-[var(--brand-slate)] first:mt-0"
            >
              {b.text}
            </h4>
          );
        if (b.type === 'list')
          return (
            <ul key={i} className="mt-2 space-y-1">
              {b.items.map((it, j) => (
                <li
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
 * Descriptif marque (contenu wedis.fr, markdown-lite). Aperçu = intro (jusqu'au
 * 1er paragraphe) ; « En savoir plus » déplie le descriptif complet (titres en
 * gras, paragraphes, puces).
 */
export function BrandDescription({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  const blocks = parse(text);
  // Aperçu : jusqu'au premier paragraphe inclus.
  const firstPara = blocks.findIndex((b) => b.type === 'paragraph');
  const teaser = firstPara >= 0 ? blocks.slice(0, firstPara + 1) : blocks.slice(0, 1);
  const hasMore = teaser.length < blocks.length;

  return (
    <div className="mt-2">
      <Blocks blocks={open ? blocks : teaser} />
      {hasMore && (
        <div className="mt-2 flex justify-end">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="text-xs font-medium text-[var(--brand)] hover:text-[var(--brand-dark)]"
          >
            {open ? 'Réduire' : 'En savoir plus'}
          </button>
        </div>
      )}
    </div>
  );
}
