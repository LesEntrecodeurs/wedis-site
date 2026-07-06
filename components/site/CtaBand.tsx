import Link from 'next/link';

export function CtaBand({
  title = "Besoin d'un conseil ou d'une démonstration ?",
  text = 'Nos experts vous accompagnent : conseil personnalisé, démonstration sur site, devis rapide et intervention SAV.',
  primary = { label: 'Demander une démonstration ou un devis', href: '/contact' },
  secondary
}: {
  title?: string;
  text?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="full-bleed bg-[var(--brand)]">
      <div className="container-x flex flex-col items-center gap-6 py-14 text-center text-white md:py-16">
        <h2 className="max-w-2xl text-2xl font-bold md:text-3xl">{title}</h2>
        <p className="max-w-2xl text-white/85">{text}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href={primary.href} className="btn-teal">
            {primary.label}
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
