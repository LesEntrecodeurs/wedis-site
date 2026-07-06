import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

type Tile = {
  title: string;
  subtitle: string;
  href: string;
  color: string;
  image: string;
};

// Tuiles catégories (grille 2×2) reproduisant les bandeaux colorés de l'accueil :
// titre + sous-titre à gauche, visuel produit détouré à droite sur fond coloré.
const TILES: Tile[] = [
  {
    title: 'Matériels de nettoyage',
    subtitle: 'Autolaveuses, aspirateurs, robots et balayeuses',
    href: '/catalogue',
    color: 'var(--brand-accent)',
    image: '/wedis/tiles/materiels.png'
  },
  {
    title: "Produits d'entretien",
    subtitle: "Produits d'hygiène et de désinfection professionnels",
    href: '/catalogue',
    color: 'var(--brand)',
    image: '/wedis/tiles/produits.png'
  },
  {
    title: 'Matériels manuels',
    subtitle: 'Brosserie, éponges, essuyage et consommables',
    href: '/catalogue',
    color: '#4cbb6c',
    image: '/wedis/tiles/manuels.png'
  },
  {
    title: 'Chariots et systèmes',
    subtitle: 'Chariots de ménage, de lavage et de désinfection',
    href: '/catalogue',
    color: 'var(--brand-accent)',
    image: '/wedis/tiles/chariots.png'
  }
];

export function CategoryTiles() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {TILES.map((t) => (
        <Link
          key={t.title}
          href={t.href}
          className="group relative flex min-h-44 flex-col justify-between overflow-hidden rounded-2xl p-7 text-white shadow-sm transition hover:shadow-lg"
          style={{ backgroundColor: t.color }}
        >
          <Image
            src={t.image}
            alt=""
            width={220}
            height={220}
            className="pointer-events-none absolute right-2 bottom-0 h-40 w-auto max-w-[45%] object-contain object-bottom opacity-95 drop-shadow-lg"
          />
          <div className="relative max-w-[60%]">
            <h3 className="text-xl font-bold">{t.title}</h3>
            <p className="mt-2 text-sm text-white/85">{t.subtitle}</p>
          </div>
          <span className="relative mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold transition group-hover:bg-white/25">
            Voir les produits
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      ))}
    </div>
  );
}
