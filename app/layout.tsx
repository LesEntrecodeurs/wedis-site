import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Open_Sans, Roboto_Slab } from 'next/font/google';
import { getContextAction, meAction } from '@extracom/site-kit/server';
import type { ShopContext, User } from '@extracom/site-kit';
import { Nav } from '@/components/site/Nav';
import { JsonLd } from '@/components/site/JsonLd';
import { CookieConsent } from '@/components/site/CookieConsent';
import { SiteFooter } from '@/components/site/SiteFooter';
import { Toaster } from '@/components/ui/sonner';
import { siteUrl, absoluteUrl } from '@/lib/seo';
import { SITE } from '@/lib/site';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap'
});
const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-roboto-slab',
  display: 'swap'
});

// Rendu au runtime : la vitrine lit des données live → pas de pré-rendu au build
// (CI-safe : le build ne touche pas le backend).
export const dynamic = 'force-dynamic';

// Métadonnées par défaut, dérivées du shop. Chaque page peut surcharger via son
// propre `generateMetadata` (cf. produit / catalogue).
export async function generateMetadata(): Promise<Metadata> {
  let name: string = SITE.name;
  const description = SITE.description;
  try {
    const c = await getContextAction();
    name = c.branding?.name ?? c.shopName ?? name;
  } catch {
    /* dégrade proprement */
  }
  return {
    metadataBase: new URL(siteUrl()),
    title: { default: name, template: `%s · ${name}` },
    description,
    applicationName: name,
    openGraph: { title: name, description, type: 'website', siteName: name },
    twitter: { card: 'summary_large_image', title: name, description },
    robots: { index: true, follow: true }
  };
}

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  let context: ShopContext | null = null;
  try {
    context = await getContextAction();
  } catch {
    context = null;
  }
  // Utilisateur résolu côté serveur (cookie de session) → la Nav reflète l'état
  // connecté dès le rendu, sans flash « Connexion ».
  let user: User | null = null;
  try {
    user = await meAction();
  } catch {
    user = null;
  }
  const title = context?.branding?.name ?? context?.shopName ?? SITE.name;

  // JSON-LD LocalBusiness — socle GEO/SEO, lu par moteurs & assistants IA.
  const businessLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: title,
    url: siteUrl(),
    image: absoluteUrl('/wedis/logo.png'),
    telephone: SITE.phoneHref,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      postalCode: SITE.address.postalCode,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country
    },
    areaServed: 'Grand Est',
    sameAs: [SITE.social.linkedin, SITE.social.youtube, SITE.social.facebook]
  };

  return (
    <html lang="fr" className={`${openSans.variable} ${robotoSlab.variable}`}>
      <body>
        <JsonLd data={businessLd} />
        <Nav context={context} user={user} />
        <main className="container-x py-10">{children}</main>
        <SiteFooter />
        <CookieConsent />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
