'use client';

import { Check } from 'lucide-react';

// Fil d'étapes de la commande : indique la progression et permet de revenir sur
// n'importe quelle étape (navigation libre). Purement visuel + callback.
export function CheckoutStepper({
  steps,
  current,
  onStep
}: {
  steps: string[];
  current: number;
  onStep: (index: number) => void;
}) {
  return (
    <nav aria-label="Étapes de la commande" className="mb-8">
      <ol className="flex items-center">
        {steps.map((label, i) => {
          const done = i < current;
          const active = i === current;
          return (
            <li
              key={label}
              className="flex items-center last:flex-none [&:not(:last-child)]:flex-1"
            >
              <button
                type="button"
                onClick={() => onStep(i)}
                aria-current={active ? 'step' : undefined}
                className="flex shrink-0 items-center gap-2"
              >
                <span
                  className={`flex size-8 items-center justify-center rounded-full border text-sm font-semibold transition ${
                    done
                      ? 'border-[var(--brand)] bg-[var(--brand)] text-white'
                      : active
                        ? 'border-[var(--brand)] text-[var(--brand)]'
                        : 'border-neutral-300 text-neutral-400'
                  }`}
                >
                  {done ? <Check className="size-4" /> : i + 1}
                </span>
                <span
                  className={`hidden text-sm font-medium sm:inline ${
                    active
                      ? 'text-[var(--brand-slate)]'
                      : done
                        ? 'text-neutral-600'
                        : 'text-neutral-400'
                  }`}
                >
                  {label}
                </span>
              </button>
              {i < steps.length - 1 && (
                <span
                  className={`mx-3 h-px flex-1 transition ${
                    done ? 'bg-[var(--brand)]' : 'bg-neutral-200'
                  }`}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
