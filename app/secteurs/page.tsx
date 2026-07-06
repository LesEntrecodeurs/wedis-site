import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';
import { PageFaq } from '@/components/site/PageFaq';
import { CtaBand } from '@/components/site/CtaBand';
import { SECTORS } from '@/data/sectors';

export const metadata: Metadata = {
  title: "Secteurs d'activité — solutions d'hygiène professionnelle",
  description:
    'Wédis équipe les collectivités, établissements de santé, industriels, entreprises de propreté et commerces du Grand Est avec des solutions de nettoyage adaptées à chaque secteur.',
  alternates: { canonical: '/secteurs' }
};

const FAQ = [
  {
    question: 'Quels secteurs Wédis accompagne-t-elle ?',
    answer:
      "Wédis accompagne les collectivités et administrations, établissements scolaires, santé et EHPAD, industrie, logistique, hôtellerie-restauration, entreprises de propreté, commerces et entreprises privées, avec des solutions adaptées à chaque environnement."
  },
  {
    question: 'Wédis propose-t-elle des solutions pour les établissements de santé ?',
    answer:
      "Oui. Wédis fournit du matériel et des protocoles rigoureux adaptés aux exigences sanitaires des hôpitaux, cliniques et EHPAD, incluant des robots de nettoyage autonomes pour une désinfection régulière et traçable."
  },
  {
    question: 'Comment adapter le matériel à mon secteur ?',
    answer:
      "Wédis réalise un audit de site pour analyser vos surfaces, contraintes et fréquentation, puis recommande les équipements et protocoles adaptés, avec démonstration en conditions réelles avant tout engagement."
  }
];

export default function SecteursPage() {
  return (
    <div className="-mt-10 space-y-16 md:space-y-20">
      <PageHero
        crumbs={[{ label: "Secteurs d'activités" }]}
        title="Des solutions adaptées à chaque secteur d'activité"
        intro="Chaque métier possède ses propres exigences en matière d'hygiène, de nettoyage et de maintenance. Wédis s'appuie sur plus de 25 ans d'expérience pour accompagner les professionnels du Grand Est."
      />

      <section className="container-x">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((s) => (
            <div key={s.title} className="card p-6">
              <h2 className="text-lg font-bold text-[var(--brand-slate)]">
                {s.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <PageFaq items={FAQ} />
      <CtaBand />
    </div>
  );
}
