import type { Metadata } from 'next';
import { MapPin } from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { PageFaq } from '@/components/site/PageFaq';
import { CtaBand } from '@/components/site/CtaBand';
import { SectionHeading } from '@/components/site/SectionHeading';
import { ZONES, DEPARTEMENTS } from '@/data/zones';

export const metadata: Metadata = {
  title: "Zones d'intervention — nettoyage professionnel dans le Grand Est",
  description:
    'Basée près de Nancy, Wédis intervient dans tout le Grand Est : Nancy, Metz, Épinal, Reims, Troyes, Chaumont et leurs environs. Conseil, livraison, mise en service et maintenance de proximité.',
  alternates: { canonical: '/zones' }
};

const FAQ = [
  {
    question: "Quelles sont les zones d'intervention de Wédis ?",
    answer:
      "Wédis couvre l'ensemble du Grand Est, avec une présence renforcée à Nancy (54), Metz (57), Épinal (88), Reims (51), Troyes (10) et Chaumont (52), ainsi que les communes environnantes."
  },
  {
    question: 'Wédis se déplace-t-elle sur site ?',
    answer:
      "Oui. Wédis assure conseil sur site, audit des besoins, livraison des équipements, mise en service, formation et maintenance directement chez ses clients, partout dans le Grand Est."
  }
];

export default function ZonesPage() {
  return (
    <div className="-mt-10 space-y-16 md:space-y-20">
      <PageHero
        crumbs={[{ label: "Zones d'intervention" }]}
        title="Votre spécialiste du nettoyage professionnel dans le Grand Est"
        intro="Basée près de Nancy, Wédis intervient depuis plus de 25 ans auprès des entreprises, collectivités et établissements publics de la région, avec un accompagnement de proximité."
      />

      <section className="container-x">
        <SectionHeading
          eyebrow="Nos pôles"
          title="Villes et départements couverts"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ZONES.map((z) => (
            <div key={z.city} className="card flex items-start gap-3 p-5">
              <MapPin className="mt-0.5 size-5 shrink-0 text-[var(--brand)]" />
              <div>
                <p className="font-bold text-[var(--brand-slate)]">{z.city}</p>
                <p className="text-sm text-neutral-500">{z.department}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="full-bleed bg-[var(--brand-light)]">
        <div className="container-x py-14">
          <SectionHeading
            eyebrow="Couverture"
            title="Départements desservis dans le Grand Est"
          />
          <div className="mt-6 flex flex-wrap gap-2">
            {DEPARTEMENTS.map((d) => (
              <span
                key={d}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[var(--brand-slate)] shadow-sm"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      <PageFaq items={FAQ} />
      <CtaBand />
    </div>
  );
}
