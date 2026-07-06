import type { Metadata } from 'next';
import Link from 'next/link';
import { unstable_cache } from 'next/cache';
import { ArrowRight } from 'lucide-react';
import { getAnonymousArticleFieldValuesAction } from '@extracom/site-kit/server';
import { PageHero } from '@/components/site/PageHero';
import { CtaBand } from '@/components/site/CtaBand';
import { SectionHeading } from '@/components/site/SectionHeading';
import { BRAND_FIELD, brandHref } from '@/lib/brand';

export const metadata: Metadata = {
  title: 'Nos marques partenaires de matériel de nettoyage professionnel',
  description:
    'Wédis distribue et entretient les grandes marques du nettoyage professionnel : Fimap, Wetrok, Eyrein, Buzil, Unger, Lucart et bien d’autres. Découvrez tous les produits par marque.',
  alternates: { canonical: '/marques' }
};

export const revalidate = 600;

// Liste des marques du catalogue (champ libre « Marque »), mise en cache.
const cachedBrands = unstable_cache(
  () => getAnonymousArticleFieldValuesAction(BRAND_FIELD),
  ['marques-list'],
  { revalidate: 600, tags: ['catalogue'] }
);

export default async function MarquesPage() {
  const brands = (await cachedBrands().catch(() => [])).filter(Boolean);

  return (
    <div className="-mt-10 space-y-16 md:space-y-20">
      <PageHero
        crumbs={[{ label: 'Marques' }]}
        title="Des marques reconnues pour leur fiabilité et leurs performances"
        intro="Wédis sélectionne et distribue les grandes marques du nettoyage professionnel. Retrouvez l’ensemble des produits classés par marque."
      />

      <section className="container-x">
        <SectionHeading
          eyebrow="Nos partenaires"
          title="Marques distribuées"
        />
        {brands.length === 0 ? (
          <p className="mt-8 text-sm text-neutral-500">
            Les marques seront bientôt disponibles.
          </p>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {brands.map((brand) => (
              <Link
                key={brand}
                href={brandHref(brand)}
                className="card group flex flex-col items-center justify-center gap-3 p-6 text-center"
              >
                <span className="text-lg font-bold tracking-wide text-[var(--brand-slate)] uppercase">
                  {brand}
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--brand)] group-hover:gap-2">
                  Voir les produits
                  <ArrowRight className="size-4 transition-all" />
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>

      <CtaBand />
    </div>
  );
}
