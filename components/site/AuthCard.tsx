import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

export function AuthCard({
  icon: Icon,
  title,
  subtitle,
  children,
  footer,
  size = 'md'
}: {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
  size?: 'md' | 'lg';
}) {
  return (
    <div
      className={`mx-auto ${size === 'lg' ? 'max-w-lg' : 'max-w-md'} py-8 sm:py-12`}
    >
      <div className="card p-6 sm:p-8">
        <div className="mb-6 flex flex-col items-center text-center">
          <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-light)] text-[var(--brand-dark)]">
            <Icon className="h-6 w-6" />
          </span>
          <h1 className="text-2xl font-bold text-[var(--brand-slate)]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-1.5 text-sm text-neutral-500">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
      {footer && (
        <div className="mt-5 text-center text-sm text-neutral-600">
          {footer}
        </div>
      )}
    </div>
  );
}
