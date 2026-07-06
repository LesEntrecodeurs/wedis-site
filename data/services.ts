export type ServiceIcon = 'conseil' | 'maintenance' | 'location';

export type Service = {
  slug: string;
  href: string;
  icon: ServiceIcon;
  title: string;
  tagline: string;
  summary: string;
};

export const SERVICES: Service[] = [
  {
    slug: 'formations',
    href: '/services/formations',
    icon: 'conseil',
    title: 'Conseils et Formation',
    tagline: 'À votre écoute depuis 1998',
    summary:
      'Wédis est une entreprise expérimentée, disponible et à votre écoute depuis 1998, pour des conseils personnalisés répondant à vos besoins.'
  },
  {
    slug: 'maintenance',
    href: '/services/maintenance',
    icon: 'maintenance',
    title: 'Maintenance et S.A.V',
    tagline: '3 contrats : FIRST, SMART, FULL',
    summary:
      'Notre service après-vente expérimenté : entretien sur site ou atelier, avec 3 contrats de maintenance adaptés à vos besoins — FIRST, SMART et FULL.'
  },
  {
    slug: 'location',
    href: '/services/location',
    icon: 'location',
    title: 'Location et Livraison',
    tagline: 'Location 2 à 5 ans · livraison 72h',
    summary:
      'Wédis vous propose des offres de location personnalisables de 2 à 5 ans. Une livraison rapide sous 72h les jours ouvrés.'
  }
];
