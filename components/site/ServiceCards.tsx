import Link from 'next/link';
import { GraduationCap, Wrench, Truck, ArrowRight } from 'lucide-react';
import { SERVICES, type ServiceIcon } from '@/data/services';

const ICONS: Record<ServiceIcon, typeof Wrench> = {
  conseil: GraduationCap,
  maintenance: Wrench,
  location: Truck
};

export function ServiceCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {SERVICES.map((s) => {
        const Icon = ICONS[s.icon];
        return (
          <Link
            key={s.slug}
            href={s.href}
            className="card group flex flex-col p-6"
          >
            <span className="flex size-12 items-center justify-center rounded-xl bg-[var(--brand-light)] text-[var(--brand)]">
              <Icon className="size-6" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-[var(--brand-slate)]">
              {s.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-[var(--brand)]">
              {s.tagline}
            </p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
              {s.summary}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)]">
              En savoir plus
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
