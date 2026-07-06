import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { PageFaq } from '@/components/site/PageFaq';
import { CtaBand } from '@/components/site/CtaBand';
import { SectionHeading } from '@/components/site/SectionHeading';

export const metadata: Metadata = {
  title: 'Qui sommes-nous — spécialiste hygiène professionnelle Grand Est',
  description:
    "Wédis, spécialiste du matériel de nettoyage et de l'hygiène professionnelle près de Nancy depuis 1998. Découvrez notre histoire, nos valeurs et notre expertise dans le Grand Est.",
  alternates: { canonical: '/a-propos' }
};

const VALEURS = [
  'La réactivité',
  'La disponibilité',
  'Le conseil',
  "L'expertise",
  'La proximité'
];

const EXPERTISE = [
  "Produits d'entretien professionnels",
  'Matériel de nettoyage professionnel',
  'Autolaveuses',
  'Robots de nettoyage autonomes',
  'Aspirateurs professionnels',
  'Balayeuses professionnelles',
  'Solutions de désinfection',
  "Consommables d'hygiène"
];

const ETAPES = [
  'Audit et analyse des besoins',
  'Démonstration sur site',
  'Essais en conditions réelles',
  'Conseils sur le choix des équipements',
  'Mise en service et paramétrage',
  'Formation des équipes',
  'Suivi et accompagnement dans le temps'
];

const FAQ = [
  {
    question: 'Qui est Wédis ?',
    answer:
      "Wédis est une entreprise spécialisée dans l'hygiène professionnelle depuis 1998, basée à Neuves-Maisons près de Nancy. Wédis accompagne les entreprises, collectivités et établissements du Grand Est dans le nettoyage et l'entretien de leurs locaux."
  },
  {
    question: 'Depuis quand Wédis accompagne-t-elle les professionnels ?',
    answer:
      "Depuis plus de 25 ans. Fondée en 1998, l'entreprise s'est développée autour du conseil, de la proximité et de la qualité de service pour devenir un acteur reconnu de l'hygiène professionnelle dans le Grand Est."
  },
  {
    question: 'Quelles sont les zones couvertes par Wédis ?',
    answer:
      "Wédis intervient dans tout le Grand Est : Meurthe-et-Moselle, Moselle, Vosges, Marne, Aube, Haute-Marne, Ardennes, Bas-Rhin et Haut-Rhin, avec un accompagnement de proximité et une réactivité sur site."
  },
  {
    question: 'Pourquoi choisir Wédis ?',
    answer:
      "Pour plus de 25 ans d'expérience, une expertise reconnue du nettoyage des sols et de la robotisation, un accompagnement personnalisé et un service de proximité avec SAV intégré près de Nancy."
  }
];

export default function AProposPage() {
  return (
    <div className="-mt-10 space-y-20 md:space-y-28">
      <PageHero
        crumbs={[{ label: 'Qui sommes-nous ?' }]}
        title="Wédis, votre partenaire en hygiène professionnelle dans le Grand Est depuis plus de 25 ans"
        intro="Depuis 1998, Wédis accompagne les entreprises, collectivités et établissements professionnels dans leurs besoins en hygiène, nettoyage et entretien des locaux, depuis Neuves-Maisons, près de Nancy."
      />

      <section className="container-x">
        <Image
          src="/wedis/showroom.jpg"
          alt="Le showroom Wédis à Neuves-Maisons près de Nancy"
          width={1200}
          height={640}
          className="w-full rounded-2xl object-cover shadow-md"
        />
      </section>

      <section className="container-x grid gap-16 md:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Notre histoire"
            title="Plus de 25 ans d'expertise"
          />
          <p className="mt-6 text-[17px] leading-8 font-medium text-neutral-700">
            Fondée en 1998, l'entreprise s'est développée autour d'une
            conviction : offrir aux professionnels des solutions d'hygiène
            efficaces tout en privilégiant la proximité, le conseil et la qualité
            de service. Au fil des années, Wédis est devenue un acteur reconnu de
            l'hygiène professionnelle, aidant ses clients à relever leurs défis
            quotidiens de propreté et de performance opérationnelle.
          </p>
          <p className="mt-5 text-[17px] leading-8 font-medium text-neutral-700">
            L'expertise s'appuie sur Joffrey Jacquet, expert du nettoyage des
            sols depuis 30 ans, qui accompagne les professionnels dans
            l'évolution de leurs pratiques en intégrant des solutions de
            robotisation innovantes.
          </p>
        </div>
        <div>
          <SectionHeading
            eyebrow="Une entreprise de proximité"
            title="Nos valeurs"
          />
          <ul className="mt-6 space-y-4">
            {VALEURS.map((v) => (
              <li
                key={v}
                className="flex items-center gap-3 text-lg font-semibold text-[var(--brand-slate)]"
              >
                <CheckCircle2 className="size-6 shrink-0 text-[var(--brand)]" />
                {v}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="full-bleed bg-[var(--brand-light)]">
        <div className="container-x py-20 md:py-28">
          <SectionHeading
            eyebrow="Notre offre"
            title="Une expertise complète en hygiène professionnelle"
            intro="Wédis accompagne ses clients dans l'optimisation de leurs protocoles de nettoyage afin d'améliorer l'efficacité des interventions et la maîtrise des coûts."
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {EXPERTISE.map((e) => (
              <div
                key={e}
                className="rounded-xl bg-white p-5 text-base font-semibold text-[var(--brand-slate)] shadow-sm"
              >
                {e}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x">
        <SectionHeading
          eyebrow="Robotisation"
          title="Intégrer un robot de nettoyage, étape par étape"
          intro="Depuis plus de 25 ans, Wédis accompagne les professionnels dans l'entretien de tous types de sols, quels que soient leur surface, leur fréquentation ou leurs contraintes."
        />
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ETAPES.map((e, i) => (
            <li key={e} className="card p-6">
              <span className="font-display text-3xl font-bold text-[var(--brand-accent)]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="mt-3 text-base font-semibold text-[var(--brand-slate)]">
                {e}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <PageFaq items={FAQ} />
      <CtaBand />
    </div>
  );
}
