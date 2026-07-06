import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Tile = { title: string; subtitle: string; href: string; color: string };

// Tuiles catégories (grille 2×2) reproduisant les bandeaux colorés de l'accueil.
// Les catégories réelles viennent du catalogue (kit) ; ces tuiles servent de
// points d'entrée stylés vers le catalogue.
const TILES: Tile[] = [
  {
    title: 'Matériels de nettoyage',
    subtitle: 'Autolaveuses, aspirateurs, robots et balayeuses',
    href: '/catalogue',
    color: 'var(--brand-accent)'
  },
  {
    title: "Produits d'entretien",
    subtitle: "Produits d'hygiène et de désinfection professionnels",
    href: '/catalogue',
    color: 'var(--brand)'
  },
  {
    title: 'Matériels manuels',
    subtitle: 'Brosserie, éponges, essuyage et accessoires',
    href: '/catalogue',
    color: '#4cbb6c'
  },
  {
    title: 'Chariots et systèmes',
    subtitle: 'Chariots de ménage, de lavage et de désinfection',
    href: '/catalogue',
    color: 'var(--brand-accent)'
  }
];

export function CategoryTiles() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {TILES.map((t) => (
        <Link
          key={t.title}
          href={t.href}
          className="group relative flex min-h-40 flex-col justify-between overflow-hidden rounded-2xl p-7 text-white shadow-sm transition hover:shadow-lg"
          style={{ backgroundColor: t.color }}
        >
          <div>
            <h3 className="text-xl font-bold">{t.title}</h3>
            <p className="mt-2 max-w-sm text-sm text-white/85">{t.subtitle}</p>
          </div>
          <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold transition group-hover:bg-white/25">
            Voir les produits
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      ))}
    </div>
  );
}
