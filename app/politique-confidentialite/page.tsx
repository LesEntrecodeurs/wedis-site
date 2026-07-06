import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';
import { Prose } from '@/components/site/Prose';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité Wédis : données collectées, finalités, durées de conservation et droits RGPD des utilisateurs.',
  alternates: { canonical: '/politique-confidentialite' }
};

const SECTIONS = [
  {
    heading: 'Responsable du traitement',
    body: [
      `Wédis, ${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}, est responsable du traitement des données personnelles collectées sur ce site. Pour toute question : ${SITE.email}.`
    ]
  },
  {
    heading: 'Données collectées',
    body: [
      "Wédis collecte les données nécessaires à la création de compte, au traitement des commandes et à la relation commerciale (identité, coordonnées, société, historique de commandes). Aucune donnée sensible n'est collectée sans motif légitime."
    ]
  },
  {
    heading: 'Finalités et bases légales',
    body: [
      "Les données sont traitées pour la gestion des comptes clients, l'exécution des commandes, le service après-vente et, le cas échéant, l'information commerciale. Les traitements reposent sur l'exécution du contrat, le respect d'obligations légales ou l'intérêt légitime de Wédis."
    ]
  },
  {
    heading: 'Destinataires et sous-traitants',
    body: [
      "Les données commerce sont traitées via la plateforme Extracom/Sage100, prestataire technique de Wédis, dans le cadre de la gestion des commandes. Elles ne sont ni vendues ni cédées à des tiers à des fins commerciales."
    ]
  },
  {
    heading: 'Durée de conservation',
    body: [
      "Les données sont conservées pendant la durée de la relation commerciale, puis archivées conformément aux obligations légales (comptables et fiscales) avant suppression."
    ]
  },
  {
    heading: 'Vos droits',
    body: [
      `Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et d'opposition sur vos données. Pour les exercer, écrivez à ${SITE.email}.`
    ]
  }
];

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="-mt-10 space-y-16 md:space-y-20">
      <PageHero
        crumbs={[{ label: 'Politique de confidentialité' }]}
        title="Politique de confidentialité"
        intro="Wédis s'engage à protéger vos données personnelles et à respecter la réglementation en vigueur (RGPD)."
      />
      <Prose sections={SECTIONS} />
    </div>
  );
}
