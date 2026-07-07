import type { Article } from '@extracom/site-kit';
import { BRAND_LOGO_SLUGS } from '@/data/brand-logos';
import { BRAND_DESCRIPTIONS } from '@/data/brand-descriptions';

// Nom du champ libre portant la marque (info-libre Sage « Marque »).
export const BRAND_FIELD = 'Marque';

/** Marque d'un article (depuis customFields), ou undefined si absente. */
export function getBrand(article: Pick<Article, 'customFields'>): string | undefined {
  return article.customFields?.find(
    (f) => f.name.toLowerCase() === BRAND_FIELD.toLowerCase()
  )?.value;
}

/** Slug URL d'une marque (ex. « AVANTEAM GROUP » → « avanteam-group »). */
export function brandSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Lien vers le catalogue filtré sur une marque. */
export function brandHref(name: string): string {
  return `/catalogue?brand=${encodeURIComponent(name)}`;
}

/**
 * Chemin du logo d'une marque (public/wedis/marques/…), ou undefined si aucun.
 * Match exact sur le slug, puis approché (« celtex » → « celtex-france »).
 */
export function brandLogo(name: string): string | undefined {
  const slug = brandSlug(name);
  if (!slug) return undefined;
  const match =
    (BRAND_LOGO_SLUGS.includes(slug) && slug) ||
    BRAND_LOGO_SLUGS.find(
      (s) => s.startsWith(`${slug}-`) || slug.startsWith(`${s}-`)
    );
  return match ? `/wedis/marques/${match}.jpg` : undefined;
}

/** Descriptif d'une marque (contenu wedis.fr), ou undefined si aucun. */
export function brandDescription(name: string): string | undefined {
  const slug = brandSlug(name);
  if (!slug) return undefined;
  if (BRAND_DESCRIPTIONS[slug]) return BRAND_DESCRIPTIONS[slug];
  const key = Object.keys(BRAND_DESCRIPTIONS).find(
    (s) => s.startsWith(`${slug}-`) || slug.startsWith(`${s}-`)
  );
  return key ? BRAND_DESCRIPTIONS[key] : undefined;
}
