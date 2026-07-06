import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';
import { CtaBand } from '@/components/site/CtaBand';
import { JsonLd } from '@/components/site/JsonLd';
import { ConseilCards } from '@/components/site/ConseilCards';
import { SectionHeading } from '@/components/site/SectionHeading';
import { CONSEILS } from '@/data/conseils';
import { absoluteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Guides et conseils en nettoyage professionnel',
  description:
    'Guides et conseils Wédis pour choisir vos équipements de nettoyage professionnel : robots autonomes, autolaveuses, aspirateurs industriels, aides Carsat et bonnes pratiques.',
  alternates: { canonical: '/conseils' }
};

const GUIDES = CONSEILS.filter((c) => c.category === 'Robots');
const ACTUALITES = CONSEILS.filter((c) => c.category === 'Actualités');

const itemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: CONSEILS.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: absoluteUrl(`/conseils/${c.slug}`),
    name: c.title
  }))
};

export default function ConseilsPage() {
  return (
    <div className="-mt-10 space-y-16 md:space-y-20">
      <JsonLd data={itemListLd} />
      <PageHero
        crumbs={[{ label: 'Guides & conseils' }]}
        title="Guides et conseils en nettoyage professionnel"
        intro="Retrouvez l'expertise Wédis pour bien choisir et exploiter votre matériel de nettoyage professionnel : robots, autolaveuses, aspirateurs, aides au financement et bonnes pratiques."
      />

      <section className="container-x">
        <SectionHeading eyebrow="Robots" title="Guides robots de nettoyage" />
        <div className="mt-8">
          <ConseilCards items={GUIDES} />
        </div>
      </section>

      <section className="container-x">
        <SectionHeading eyebrow="Actualités" title="Nos actualités" />
        <div className="mt-8">
          <ConseilCards items={ACTUALITES} />
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
