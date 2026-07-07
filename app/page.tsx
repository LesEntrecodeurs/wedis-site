import { CircleHelp, Wrench, Truck, Store, LocateFixed, Factory } from 'lucide-react';
import { getArticlesAction } from '@extracom/site-kit/server';
import type { Article } from '@extracom/site-kit';
import { ArticleCard } from '@/components/site/ArticleCard';
import { FeaturedCarousel } from '@/components/site/FeaturedCarousel';
import { HomeHero } from '@/components/site/HomeHero';
import { CategoryTiles } from '@/components/site/CategoryTiles';
import { IconListBox } from '@/components/site/IconListBox';
import { BrandsBand } from '@/components/site/BrandsBand';
import { ConseilCards } from '@/components/site/ConseilCards';
import { SectionHeading } from '@/components/site/SectionHeading';
import { CtaBand } from '@/components/site/CtaBand';
import { CONSEILS } from '@/data/conseils';
import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

const ACTUALITES = CONSEILS.filter((c) => c.category === 'Actualités');
const GUIDES = CONSEILS.filter((c) => c.category === 'Robots');

export const metadata: Metadata = {
  title: {
    absolute: `${SITE.name} — Matériel de nettoyage professionnel dans le Grand Est`
  },
  description: SITE.description,
  alternates: { canonical: '/' }
};

export const dynamic = 'force-dynamic';

const SERVICE_ITEMS = [
  {
    icon: CircleHelp,
    title: 'Conseils et Formation',
    href: '/services/formations',
    text: 'Wédis est une entreprise expérimentée, disponible et à votre écoute depuis 1998, pour des conseils personnalisés répondant à vos besoins.'
  },
  {
    icon: Wrench,
    title: 'Maintenance et S.A.V',
    href: '/services/maintenance',
    text: 'Notre service après-vente expérimenté : entretien sur site ou atelier, avec 3 contrats de maintenance adaptés à vos besoins : FIRST, SMART et FULL.'
  },
  {
    icon: Truck,
    title: 'Location et Livraison',
    href: '/services/location',
    text: 'Wédis vous propose des offres de location personnalisables de 2 à 5 ans. Une livraison rapide sous 72h les jours ouvrés.'
  }
];

const WHY_ITEMS = [
  {
    icon: Store,
    title: 'Qui sommes-nous ?',
    href: '/a-propos',
    text: 'Wédis accompagne les professionnels dans leurs projets grâce à des solutions fiables, un savoir-faire reconnu et un engagement constant pour la qualité de service.'
  },
  {
    icon: LocateFixed,
    title: "Zones d'intervention",
    href: '/zones',
    text: "Nos équipes interviennent avec réactivité sur le territoire du Grand Est afin d'assurer un accompagnement de proximité et des prestations adaptées à vos besoins."
  },
  {
    icon: Factory,
    title: "Secteurs d'activités",
    href: '/secteurs',
    text: 'Nous mettons notre expertise au service des entreprises, collectivités, syndics et acteurs industriels, avec des solutions adaptées à chaque environnement.'
  }
];

export default async function HomePage() {
  let featured: Article[] = [];
  try {
    featured = (await getArticlesAction({ limit: 8 })).data;
  } catch {
    featured = [];
  }

  return (
    <div className="-mt-10 space-y-16 md:space-y-20">
      <HomeHero />

      {featured.length > 0 && (
        <section className="container-x">
          <SectionHeading
            title="Nos robots et équipements de nettoyage professionnel"
            intro="Découvrez nos dernières nouveautés sélectionnées parmi les meilleures solutions du marché."
            align="center"
          />
          <div className="mt-8">
            <FeaturedCarousel
              items={featured.map((a) => (
                <ArticleCard key={a.reference} article={a} />
              ))}
            />
          </div>
        </section>
      )}

      <section className="container-x">
        <CategoryTiles />
      </section>

      <section className="container-x">
        <SectionHeading
          title="Nos services pour le nettoyage professionnel"
          align="center"
        />
        <div className="mt-8">
          <IconListBox items={SERVICE_ITEMS} />
        </div>
      </section>

      <section className="container-x">
        <SectionHeading
          title="Pourquoi choisir Wédis ?"
          intro="Basée à Neuves-Maisons près de Nancy, l'entreprise Wédis intervient dans toute la Lorraine et le Grand Est : Nancy, Metz, Épinal, Reims, Troyes, Verdun et leurs environs."
          align="center"
        />
        <div className="mt-8">
          <IconListBox items={WHY_ITEMS} />
        </div>
      </section>

      <section className="container-x">
        <SectionHeading title="Nos actualités" align="center" />
        <div className="mt-8">
          <ConseilCards items={ACTUALITES.slice(0, 3)} />
        </div>
      </section>

      <section className="container-x">
        <SectionHeading
          title="Guides et conseils en nettoyage professionnel"
          align="center"
        />
        <div className="mt-8">
          <ConseilCards items={GUIDES.slice(0, 3)} />
        </div>
      </section>

      <section className="container-x">
        <SectionHeading title="Nos marques partenaires" align="center" />
        <div className="mt-8">
          <BrandsBand />
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
