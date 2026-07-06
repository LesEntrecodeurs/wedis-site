import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';
import { Prose } from '@/components/site/Prose';
import { CtaBand } from '@/components/site/CtaBand';

export const metadata: Metadata = {
  title: 'Paiement sécurisé du matériel de nettoyage professionnel',
  description:
    'Wédis garantit des transactions sécurisées et propose plusieurs moyens de paiement adaptés aux professionnels, ainsi que des solutions de financement et de location.',
  alternates: { canonical: '/paiement-securise' }
};

const SECTIONS = [
  {
    heading: 'Des transactions sécurisées',
    body: [
      'Wédis met en œuvre les moyens nécessaires pour garantir la sécurité de vos paiements en ligne. Vos données bancaires sont protégées et ne sont jamais conservées par le site.'
    ]
  },
  {
    heading: 'Moyens de paiement',
    body: [
      'Plusieurs moyens de paiement sont proposés aux professionnels selon leur compte et leurs conditions commerciales : carte bancaire, virement et prélèvement selon les modalités convenues.'
    ]
  },
  {
    heading: 'Financement et location',
    body: [
      'Au-delà de l’achat, Wédis propose des solutions de financement de 12 à 84 mois (à partir de 1000 € HT) et des offres de location de 2 à 5 ans pour préserver votre trésorerie.'
    ]
  }
];

export default function PaiementSecurisePage() {
  return (
    <div className="-mt-10 space-y-16 md:space-y-20">
      <PageHero
        crumbs={[{ label: 'Moyens de paiement' }]}
        title="Paiement sécurisé"
        intro="Des transactions protégées et des moyens de paiement adaptés aux professionnels, avec des solutions de financement et de location."
      />
      <Prose sections={SECTIONS} />
      <CtaBand />
    </div>
  );
}
