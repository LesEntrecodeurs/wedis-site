import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import { PageHero } from '@/components/site/PageHero';
import { PageFaq } from '@/components/site/PageFaq';
import { CtaBand } from '@/components/site/CtaBand';
import { SectionHeading } from '@/components/site/SectionHeading';

export const metadata: Metadata = {
  title: 'Location et livraison de matériel de nettoyage professionnel',
  description:
    'Location de matériel de nettoyage de 2 à 5 ans, financement de 12 à 84 mois dès 1000 € HT et livraison sous 48-72h dans le Grand Est. Machines entretenues, budget maîtrisé avec Wédis.',
  alternates: { canonical: '/services/location' }
};

const AVANTAGES = [
  'Maîtrise du budget : des formules adaptées à votre usage',
  'Préservation de la trésorerie : aucun investissement initial',
  'Machines entretenues : matériel régulièrement révisé, sans surcoût',
  'Accompagnement complet : service personnalisé sur toute la durée du contrat'
];

const FAQ = [
  {
    question: 'Quelle est la durée de location proposée par Wédis ?',
    answer:
      "Wédis propose des offres de location personnalisables de 2 à 5 ans, avec des formules adaptées à votre usage. En fin de contrat, vous pouvez continuer, renouveler avec du matériel neuf ou simplement restituer l'équipement."
  },
  {
    question: 'Wédis propose-t-elle des solutions de financement ?',
    answer:
      'Oui. Wédis propose des solutions de financement de 12 à 84 mois, à partir de 1000 € HT, pour lisser votre investissement tout en préservant votre trésorerie.'
  },
  {
    question: 'Quels sont les délais et frais de livraison ?',
    answer:
      'La livraison est assurée sous 48 à 72h les jours ouvrés dans huit départements du Grand Est. Elle est offerte à partir de 350 € HT de commande ; en deçà, un forfait minimum de 11,28 € HT s’applique.'
  }
];

export default function LocationPage() {
  return (
    <div className="-mt-10 space-y-16 md:space-y-20">
      <PageHero
        crumbs={[{ label: 'Nos services' }, { label: 'Location et Livraison' }]}
        title="Location et livraison de matériel de nettoyage"
        intro="Des offres de location personnalisables de 2 à 5 ans et une livraison rapide sous 72h les jours ouvrés, partout dans le Grand Est."
      />

      <section className="container-x grid gap-12 md:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Location"
            title="Une solution flexible et clé en main"
          />
          <p className="mt-4 leading-relaxed text-neutral-600">
            Wédis propose des contrats de location de 2 à 5 ans pour votre
            matériel de nettoyage industriel. L'entreprise gère l'ensemble des
            démarches administratives, pour une solution clé en main et sans
            souci.
          </p>
          <ul className="mt-6 space-y-3">
            {AVANTAGES.map((a) => (
              <li key={a} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[var(--brand)]" />
                <span className="text-neutral-700">{a}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card h-fit p-6">
          <SectionHeading eyebrow="Livraison" title="Rapide et de proximité" />
          <p className="mt-4 leading-relaxed text-neutral-600">
            Livraison sous 48 à 72h les jours ouvrés dans huit départements du
            Grand Est. Franco de port à partir de 350 € HT de commande.
          </p>
          <p className="mt-4 leading-relaxed text-neutral-600">
            Financement possible de 12 à 84 mois, à partir de 1000 € HT, pour
            adapter votre projet à votre budget.
          </p>
        </div>
      </section>

      <PageFaq items={FAQ} />
      <CtaBand
        primary={{ label: 'Demander une offre de location', href: '/contact' }}
      />
    </div>
  );
}
