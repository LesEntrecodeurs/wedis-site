// Configuration éditoriale du site (coordonnées, réseaux, baseline).
// Le nom/branding vient normalement du kit (context.branding) ; SITE.name sert
// de repli tant qu'aucune API Extracom n'est branchée, et pour les données que
// le kit ne fournit pas (adresse, réseaux sociaux, baseline).

export const SITE = {
  name: 'Wédis',
  baseline:
    "Solutions de nettoyage professionnel pour les entreprises, l'industrie, les collectivités, les commerces, les associations, les établissements de santé et scolaires du Grand Est.",
  subtitle:
    'Robots de nettoyage, autolaveuses et matériels professionnels avec accompagnement, démonstration et SAV local près de Nancy.',
  description:
    "Wédis, spécialiste du matériel de nettoyage et de l'hygiène professionnelle dans le Grand Est depuis plus de 25 ans : robots autonomes, autolaveuses, aspirateurs, produits et SAV près de Nancy.",
  since: 1998,
  yearsLabel: 'Plus de 25 ans',
  references: 'Plus de 2500 références',
  address: {
    street: '2 rue Gambetta',
    postalCode: '54230',
    city: 'Neuves-Maisons',
    region: 'Grand Est',
    country: 'FR'
  },
  phone: '03 83 47 85 00',
  phoneHref: '+33383478500',
  email: 'info@wedis.fr',
  emailSav: 'sav@wedis.fr',
  social: {
    linkedin: 'https://www.linkedin.com/company/wedis-hygiène/',
    youtube: 'https://www.youtube.com/@wedis6182/videos',
    facebook: 'https://www.facebook.com/WedisFR'
  }
} as const;

export const NAV_SERVICES: [string, string][] = [
  ['Conseils et Formation', '/services/formations'],
  ['Maintenance et S.A.V', '/services/maintenance'],
  ['Location et Livraison', '/services/location'],
  ["Zones d'intervention", '/zones'],
  ["Secteurs d'activités", '/secteurs']
];

export const NAV_WEDIS: [string, string][] = [
  ['Qui sommes-nous ?', '/a-propos'],
  ['Nous contacter', '/contact'],
  ['Modes de livraison', '/livraison'],
  ['Moyens de paiement', '/paiement-securise'],
  ['Mentions légales', '/mentions-legales'],
  ['Politique de confidentialité', '/politique-confidentialite'],
  ['Conditions Générales de Ventes', '/cgv']
];

export const NAV_CATALOGUE: [string, string][] = [
  ['Chariots et systèmes', '/catalogue'],
  ['Matériels', '/catalogue'],
  ['Produits', '/catalogue'],
  ['Matériels manuels', '/catalogue'],
  ['Promotions', '/catalogue']
];
