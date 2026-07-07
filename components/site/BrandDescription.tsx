'use client';

import { useState } from 'react';

/**
 * Descriptif marque repliable : texte tronqué + « en savoir plus » aligné en
 * bas à droite de l'encart (façon wedis.fr). Contenu passé en prop (data/site).
 */
export function BrandDescription({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-1">
      <p
        className={`text-sm leading-relaxed text-neutral-600 ${
          open ? '' : 'line-clamp-2'
        }`}
      >
        {text}
      </p>
      <div className="mt-1 flex justify-end">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="text-xs font-medium text-[var(--brand)] hover:text-[var(--brand-dark)]"
        >
          {open ? 'Réduire' : 'En savoir plus'}
        </button>
      </div>
    </div>
  );
}
