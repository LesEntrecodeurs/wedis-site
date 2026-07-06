export type Brand = { name: string; logo: string };

// Logos partenaires scrapés dans public/wedis/marques.
export const BRANDS: Brand[] = [
  { name: 'Avanteam', logo: '/wedis/marques/avanteam.jpg' },
  { name: 'Buzil', logo: '/wedis/marques/buzil.jpg' },
  { name: 'Eyrein', logo: '/wedis/marques/eyrein.jpg' },
  { name: 'Lucart', logo: '/wedis/marques/lucart.jpg' },
  { name: 'Sanivap', logo: '/wedis/marques/sanivaplogo.jpg' },
  { name: 'Unger', logo: '/wedis/marques/unger.jpg' },
  { name: 'VDM', logo: '/wedis/marques/vdm.jpg' },
  { name: 'Wetrok', logo: '/wedis/marques/wetrok.jpg' }
];

// Marques citées (SAV / partenariats) sans logo dédié.
export const BRAND_NAMES = [
  'Fimap',
  'Wetrok',
  'Eureka',
  'Nilfisk',
  'Hako',
  'Tennant',
  'Kärcher',
  'Viper',
  'Filmop',
  'Numatic',
  'Lindhaus',
  'Pudu'
];
