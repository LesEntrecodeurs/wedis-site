import { cn } from '@/lib/utils';

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  className
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.18em] text-[var(--brand)] uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-2xl font-bold text-[var(--brand-slate)] md:text-3xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-3 text-base leading-relaxed text-neutral-600">
          {intro}
        </p>
      )}
    </div>
  );
}
