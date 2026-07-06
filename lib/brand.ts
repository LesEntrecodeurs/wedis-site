import type { Article } from '@extracom/site-kit';

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
