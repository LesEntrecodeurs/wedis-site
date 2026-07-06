import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';
import { Prose } from '@/components/site/Prose';
import { PageFaq } from '@/components/site/PageFaq';
import { CtaBand } from '@/components/site/CtaBand';

export const metadata: Metadata = {
  title: 'Modes de livraison du matériel de nettoyage professionnel',
  description:
    'Livraison Wédis sous 48-72h les jours ouvrés dans le Grand Est, franco de port à partir de 350 € HT. Retrait possible au magasin de Neuves-Maisons près de Nancy.',
  alternates: { canonical: '/livraison' }
};

const SECTIONS = [
  {
    heading: 'Zones et délais de livraison',
    body: [
      'Wédis assure la livraison de ses équipements et consommables dans huit départements du Grand Est, notamment la Moselle, la Meurthe-et-Moselle et les Vosges.',
      "La livraison est réalisée sous 48 à 72h les jours ouvrés, afin de répondre rapidement aux besoins des professionnels."
    ]
  },
  {
    heading: 'Frais de livraison',
    body: [
      'La livraison est offerte à partir de 350 € HT de commande. En deçà de ce montant, un forfait minimum de 11,28 € HT s’applique.'
    ]
  },
  {
    heading: 'Retrait au magasin',
    body: [
      'Le magasin de Neuves-Maisons (2 rue Gambetta, 54230) permet aux professionnels de récupérer leurs commandes ou d’obtenir rapidement les produits dont ils ont besoin grâce au stock disponible sur place.'
    ]
  }
];

const FAQ = [
  {
    question: 'Sous quel délai Wédis livre-t-elle ?',
    answer:
      'Wédis livre sous 48 à 72h les jours ouvrés dans le Grand Est. Un retrait au magasin de Neuves-Maisons est également possible pour les commandes urgentes.'
  },
  {
    question: 'La livraison est-elle gratuite ?',
    answer:
      'La livraison est offerte à partir de 350 € HT de commande. En dessous, un forfait de 11,28 € HT minimum s’applique.'
  }
];

export default function LivraisonPage() {
  return (
    <div className="-mt-10 space-y-16 md:space-y-20">
      <PageHero
        crumbs={[{ label: 'Modes de livraison' }]}
        title="Modes de livraison"
        intro="Une livraison rapide et de proximité dans tout le Grand Est, ou un retrait au magasin de Neuves-Maisons."
      />
      <Prose sections={SECTIONS} />
      <PageFaq items={FAQ} />
      <CtaBand />
    </div>
  );
}
