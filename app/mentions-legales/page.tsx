import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';
import { Prose } from '@/components/site/Prose';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description:
    "Mentions légales du site Wédis : éditeur, hébergement, propriété intellectuelle et données personnelles.",
  alternates: { canonical: '/mentions-legales' }
};

const SECTIONS = [
  {
    heading: 'Éditeur du site',
    body: [
      `Le site ${SITE.name} est édité par Wédis, dont le siège social est situé ${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}.`,
      `Téléphone : ${SITE.phone} — Email : ${SITE.email}. Les mentions légales détaillées (raison sociale, forme juridique, capital, SIREN, TVA intracommunautaire, directeur de la publication) sont à compléter par l'éditeur.`
    ]
  },
  {
    heading: 'Hébergement',
    body: [
      "Ce site est hébergé et déployé via la plateforme d'édition du prestataire technique. Les coordonnées de l'hébergeur sont disponibles sur demande."
    ]
  },
  {
    heading: 'Propriété intellectuelle',
    body: [
      "L'ensemble des contenus du site (textes, images, marques, logos) est protégé par le droit de la propriété intellectuelle. Toute reproduction, représentation ou diffusion sans autorisation préalable écrite de Wédis est interdite."
    ]
  },
  {
    heading: 'Données personnelles',
    body: [
      `Les données collectées lors de la création de compte et des commandes sont utilisées pour le traitement de la relation commerciale. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression en écrivant à ${SITE.email}.`
    ]
  }
];

export default function MentionsLegalesPage() {
  return (
    <div className="-mt-10 space-y-16 md:space-y-20">
      <PageHero crumbs={[{ label: 'Mentions légales' }]} title="Mentions légales" />
      <Prose sections={SECTIONS} />
    </div>
  );
}
