import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';
import { CtaBand } from '@/components/site/CtaBand';
import { SectionHeading } from '@/components/site/SectionHeading';
import { BrandsBand } from '@/components/site/BrandsBand';
import { BRAND_NAMES } from '@/data/brands';

export const metadata: Metadata = {
  title: 'Nos marques partenaires de matériel de nettoyage professionnel',
  description:
    'Wédis sélectionne des marques reconnues pour leur fiabilité et leurs performances : Fimap, Wetrok, Eureka, Buzil, Unger, Lucart, Pudu et bien d’autres, pour des solutions professionnelles adaptées.',
  alternates: { canonical: '/marques' }
};

export default function MarquesPage() {
  return (
    <div className="-mt-10 space-y-16 md:space-y-20">
      <PageHero
        crumbs={[{ label: 'Marques' }]}
        title="Des marques reconnues pour leur fiabilité et leurs performances"
        intro="Membre du réseau Avanteam, Wédis sélectionne des marques éprouvées afin de garantir à ses clients des solutions adaptées aux exigences des professionnels."
      />

      <section className="container-x">
        <SectionHeading eyebrow="Nos partenaires" title="Marques distribuées" />
        <div className="mt-8">
          <BrandsBand />
        </div>
      </section>

      <section className="full-bleed bg-[var(--brand-light)]">
        <div className="container-x py-14">
          <SectionHeading
            eyebrow="Et aussi"
            title="Un large réseau de fabricants"
            intro="Au-delà de nos partenaires principaux, Wédis distribue et entretient plus de 40 marques du secteur."
          />
          <div className="mt-6 flex flex-wrap gap-2">
            {BRAND_NAMES.map((b) => (
              <span
                key={b}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[var(--brand-slate)] shadow-sm"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
