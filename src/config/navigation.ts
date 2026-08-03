import { routing } from '@/i18n/routing';

export type NavLink = {
  labelKey: string;
  href: keyof typeof routing.pathnames;
};

export const mainNavLinks: NavLink[] = [
  { labelKey: 'nav.home', href: '/' },
  { labelKey: 'nav.catalogue', href: '/catalogue' },
];

export const footerNavLinks: NavLink[] = mainNavLinks;
