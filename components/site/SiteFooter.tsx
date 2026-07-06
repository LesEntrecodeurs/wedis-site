import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Youtube, Facebook } from 'lucide-react';
import { SITE, NAV_WEDIS, NAV_CATALOGUE, NAV_SERVICES } from '@/lib/site';

const NAV_DATA: [string, string][] = [
  ['Gérer vos données personnelles', '/politique-confidentialite'],
  ["Droit à l'oubli", '/contact']
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-neutral-200 bg-white">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <Image
            src="/wedis/logo.png"
            alt="Wédis"
            width={140}
            height={140}
            className="h-28 w-auto"
          />
          <address className="mt-4 space-y-2 text-sm text-neutral-600 not-italic">
            <p className="font-semibold text-[var(--brand-slate)] underline">
              {SITE.address.street}
              <br />
              {SITE.address.postalCode} {SITE.address.city}
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="block text-[var(--brand)] underline"
            >
              {SITE.email}
            </a>
            <a
              href={`tel:${SITE.phoneHref}`}
              className="block text-[var(--brand)] underline"
            >
              {SITE.phone}
            </a>
          </address>
          <div className="mt-5 flex gap-3">
            <SocialLink href={SITE.social.linkedin} label="LinkedIn" color="#0a66c2">
              <Linkedin className="size-4" />
            </SocialLink>
            <SocialLink href={SITE.social.youtube} label="YouTube" color="#ff0000">
              <Youtube className="size-4" />
            </SocialLink>
            <SocialLink href={SITE.social.facebook} label="Facebook" color="#1877f2">
              <Facebook className="size-4" />
            </SocialLink>
          </div>
        </div>

        <FooterCol title="Wédis" links={NAV_WEDIS} />
        <FooterCol title="Notre catalogue" links={NAV_CATALOGUE} />
        <FooterCol title="Vos données" links={NAV_DATA} />
        <FooterCol title="Nos services" links={NAV_SERVICES} />
      </div>

      <div className="bg-[var(--brand)]">
        <div className="container-x py-4 text-center text-xs text-white/90">
          {SITE.name} — Vente de matériel de nettoyage professionnel — Copyright
          © {new Date().getFullYear()} — Tous droits réservés. Site réalisé par
          Les Entrecodeurs.
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <p className="font-bold text-[var(--brand-slate)]">{title}</p>
      <ul className="mt-3 space-y-2 text-sm text-[var(--brand-slate)]">
        {links.map(([label, href], i) => (
          <li key={`${href}-${i}`}>
            <Link
              href={href}
              className="transition hover:text-[var(--brand-hover)]"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  href,
  label,
  color,
  children
}: {
  href: string;
  label: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{ backgroundColor: color }}
      className="flex size-9 items-center justify-center rounded text-white transition hover:opacity-90"
    >
      {children}
    </a>
  );
}
