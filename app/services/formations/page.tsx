import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { PageFaq } from '@/components/site/PageFaq';
import { CtaBand } from '@/components/site/CtaBand';
import { SectionHeading } from '@/components/site/SectionHeading';

export const metadata: Metadata = {
  title: 'Conseils et formation au nettoyage professionnel',
  description:
    "Wédis forme vos opérateurs sur site à l'utilisation des autolaveuses, monobrosses et aspirateurs. Programmes personnalisés, démonstrations en conditions réelles et suivi post-formation dans le Grand Est.",
  alternates: { canonical: '/services/formations' }
};

const POINTS = [
  'Programmes de formation sur mesure, dispensés par des techniciens qualifiés',
  'Prise en main des autolaveuses, monobrosses et aspirateurs sur votre site',
  'Techniques adaptées, réglages et méthodes d’entretien selon votre environnement',
  'Démonstrations en conditions réelles de travail',
  'Suivi et réponses à vos questions après la formation'
];

const FAQ = [
  {
    question: 'Comment se déroulent les formations Wédis ?',
    answer:
      "Les techniciens Wédis se déplacent sur votre site pour former vos opérateurs à la bonne utilisation de vos équipements : techniques adaptées, réglages et méthodes d'entretien, avec des démonstrations en conditions réelles."
  },
  {
    question: 'Qui peut bénéficier des formations Wédis ?',
    answer:
      "Les formations Wédis s'adressent aux entreprises de propreté, collectivités, établissements de santé, industriels, établissements scolaires et entreprises privées de tout le Grand Est."
  },
  {
    question: 'La performance de mon matériel dépend-elle de son utilisation ?',
    answer:
      "Oui. La performance d'un équipement dépend avant tout de sa bonne utilisation. C'est pourquoi Wédis propose un accompagnement sur site pour que vos opérateurs maîtrisent pleinement leur matériel."
  }
];

export default function FormationsPage() {
  return (
    <div className="-mt-10 space-y-16 md:space-y-20">
      <PageHero
        crumbs={[{ label: 'Nos services' }, { label: 'Conseils et Formation' }]}
        title="Conseils et formation au nettoyage professionnel"
        intro="La performance de vos équipements dépend avant tout de leur bonne utilisation. Wédis forme vos équipes sur site, avec des conseils personnalisés depuis 1998."
      />

      <section className="container-x grid gap-12 md:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Notre approche"
            title="Une formation adaptée à votre terrain"
          />
          <p className="mt-4 leading-relaxed text-neutral-600">
            Wédis propose des programmes de formation sur mesure, dispensés par
            des techniciens qualifiés qui se déplacent sur vos sites. L'objectif :
            aider vos opérateurs à maîtriser leurs équipements et à adopter les
            bonnes pratiques adaptées à vos surfaces et à vos contraintes.
          </p>
          <p className="mt-4 leading-relaxed text-neutral-600">
            Nos démonstrations se déroulent dans tout le nord-est de la France :
            Meurthe-et-Moselle, Ardennes, Aube, Marne, Haute-Marne, Meuse,
            Moselle et Vosges.
          </p>
        </div>
        <ul className="space-y-4">
          {POINTS.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[var(--brand)]" />
              <span className="text-neutral-700">{p}</span>
            </li>
          ))}
        </ul>
      </section>

      <PageFaq items={FAQ} />
      <CtaBand primary={{ label: 'Demander une formation', href: '/contact' }} />
    </div>
  );
}
