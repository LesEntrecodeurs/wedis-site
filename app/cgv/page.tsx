import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';
import { Prose } from '@/components/site/Prose';

export const metadata: Metadata = {
  title: 'Conditions générales de vente',
  description:
    'Conditions générales de vente Wédis : commandes, prix, paiement, livraison, garanties et service après-vente pour les professionnels.',
  alternates: { canonical: '/cgv' }
};

const SECTIONS = [
  {
    heading: 'Objet et champ d’application',
    body: [
      "Les présentes conditions générales de vente régissent les relations commerciales entre Wédis et ses clients professionnels pour la vente de matériel et de produits d'hygiène professionnelle. Toute commande implique l'acceptation sans réserve des présentes conditions."
    ]
  },
  {
    heading: 'Commandes et devis',
    body: [
      "Les commandes peuvent être passées en ligne, par téléphone ou sur devis. Un devis établi par Wédis reste valable pour la durée qui y est mentionnée. La commande est considérée comme ferme après confirmation par Wédis."
    ]
  },
  {
    heading: 'Prix et conditions tarifaires',
    body: [
      "Les prix sont indiqués hors taxes et s'entendent pour des clients professionnels. Les tarifs négociés sont visibles après connexion à l'espace client. Wédis se réserve le droit de modifier ses prix ; le tarif applicable est celui en vigueur au jour de la commande."
    ]
  },
  {
    heading: 'Paiement',
    body: [
      "Le règlement s'effectue selon les moyens et conditions convenus avec le client. En cas de retard de paiement, des pénalités peuvent être appliquées conformément à la réglementation en vigueur."
    ]
  },
  {
    heading: 'Livraison et délais',
    body: [
      "La livraison est assurée dans le Grand Est sous 48 à 72h les jours ouvrés, franco de port à partir de 350 € HT. Les délais sont donnés à titre indicatif ; un retard ne peut donner lieu à annulation ou indemnité."
    ]
  },
  {
    heading: 'Garanties et service après-vente',
    body: [
      "Les équipements bénéficient de la garantie constructeur. Wédis assure un service après-vente intégré et propose des contrats de maintenance (FIRST, SMART, FULL). Les modalités de retour et de réclamation sont précisées avec le client."
    ]
  }
];

export default function CgvPage() {
  return (
    <div className="-mt-10 space-y-16 md:space-y-20">
      <PageHero
        crumbs={[{ label: 'Conditions Générales de Ventes' }]}
        title="Conditions générales de vente"
        intro="Les présentes conditions encadrent la vente de matériel et de produits d'hygiène professionnelle par Wédis aux clients professionnels."
      />
      <Prose sections={SECTIONS} />
    </div>
  );
}
