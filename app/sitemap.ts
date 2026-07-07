import type { MetadataRoute } from 'next';
import { getArticlesAction } from '@extracom/site-kit/server';
import { absoluteUrl } from '@/lib/seo';
import { CONSEILS } from '@/data/conseils';

export const dynamic = 'force-dynamic';

type Entry = MetadataRoute.Sitemap[number];
const entry = (
  path: string,
  changeFrequency: Entry['changeFrequency'],
  priority: number
): Entry => ({ url: absoluteUrl(path), changeFrequency, priority });

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    entry('/', 'daily', 1),
    entry('/catalogue', 'daily', 0.9),
    entry('/marques', 'weekly', 0.7),
    entry('/conseils', 'weekly', 0.7),
    entry('/a-propos', 'monthly', 0.6),
    entry('/secteurs', 'monthly', 0.6),
    entry('/zones', 'monthly', 0.6),
    entry('/services/formations', 'monthly', 0.6),
    entry('/services/maintenance', 'monthly', 0.6),
    entry('/services/location', 'monthly', 0.6),
    entry('/contact', 'monthly', 0.5),
    entry('/livraison', 'yearly', 0.3),
    entry('/paiement-securise', 'yearly', 0.3),
    entry('/mentions-legales', 'yearly', 0.2),
    entry('/politique-confidentialite', 'yearly', 0.2),
    entry('/cgv', 'yearly', 0.2)
  ];

  const conseils: MetadataRoute.Sitemap = CONSEILS.map((c) =>
    entry(`/conseils/${c.slug}`, 'monthly', 0.6)
  );

  let products: MetadataRoute.Sitemap = [];
  try {
    const res = await getArticlesAction({ limit: 100 });
    products = (res.data ?? []).map((a) =>
      entry(`/produit/${encodeURIComponent(a.reference)}`, 'weekly', 0.6)
    );
  } catch {
    /* dégrade : sitemap statique seul si l'API est indisponible au build */
  }

  return [...staticPages, ...conseils, ...products];
}
