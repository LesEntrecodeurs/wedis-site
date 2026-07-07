import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { unstable_cache } from 'next/cache';
import { Lock, PackageSearch } from 'lucide-react';
import {
  getArticlesAction,
  getContextAction,
  meAction,
  getAnonymousArticlesAction,
  getAnonymousContextAction,
  getAnonymousArticleFieldValuesAction,
  isAuthenticatedAction
} from '@extracom/site-kit/server';
import type {
  ArticleListQuery,
  ArticleSort,
  CatalogNode
} from '@extracom/site-kit';
import { ArticleCard } from '@/components/site/ArticleCard';
import { ArticleRow } from '@/components/site/ArticleRow';
import { ViewToggle, type CatalogueView } from '@/components/site/ViewToggle';
import { CatalogueFilters } from '@/components/site/CatalogueFilters';
import { CatalogueSidebar } from '@/components/site/CatalogueSidebar';
import { InfoBanner } from '@/components/site/InfoBanner';
import { EmptyState } from '@/components/site/EmptyState';
import { BRAND_FIELD, brandLogo, brandDescription } from '@/lib/brand';
import { BrandDescription } from '@/components/site/BrandDescription';
import { COMMERCE_ENABLED } from '@/lib/config';

export const dynamic = 'force-dynamic';

// Cache ANONYME (SSG/ISR) : ne s'applique qu'aux visiteurs non connectés
// (prix de base/masqué, identiques pour tous) → aucun prix client n'est mis en
// cache. Les connectés passent par les actions normales (toujours frais).
const cachedAnonArticles = unstable_cache(
  (q: ArticleListQuery) => getAnonymousArticlesAction(q),
  ['catalogue-anon-articles'],
  { revalidate: 300, tags: ['catalogue'] }
);
const cachedAnonContext = unstable_cache(
  () => getAnonymousContextAction(),
  ['catalogue-anon-context'],
  { revalidate: 600, tags: ['catalogue'] }
);
const cachedBrands = unstable_cache(
  () => getAnonymousArticleFieldValuesAction(BRAND_FIELD),
  ['marques-list'],
  { revalidate: 600, tags: ['catalogue'] }
);

export async function generateMetadata({
  searchParams
}: {
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  const q = (await searchParams).q;
  return {
    title: q ? `Recherche : ${q}` : 'Catalogue',
    description: q
      ? `Résultats pour « ${q} » dans le catalogue.`
      : 'Parcourez tout le catalogue produit.',
    alternates: { canonical: '/catalogue' }
  };
}

export default async function CataloguePage({
  searchParams
}: {
  searchParams: Promise<{
    q?: string;
    page?: string;
    catalog?: string;
    clevel?: string;
    family?: string;
    sort?: string;
    pmin?: string;
    pmax?: string;
    brand?: string;
    view?: string;
  }>;
}) {
  const sp = await searchParams;
  const search = sp.q || undefined;
  const page = sp.page ? Math.max(1, Number(sp.page)) : 1;
  const limit = 24;
  const sort = (sp.sort as ArticleSort | undefined) || undefined;
  const minPrice = sp.pmin ? Number(sp.pmin) : undefined;
  const maxPrice = sp.pmax ? Number(sp.pmax) : undefined;
  const brand = sp.brand || undefined;
  const view: CatalogueView = sp.view === 'list' ? 'list' : 'grid';

  const articlesQuery: ArticleListQuery = {
    search,
    page,
    limit,
    catalogId: sp.catalog ? Number(sp.catalog) : undefined,
    catalogLevel: sp.clevel ? Number(sp.clevel) : undefined,
    familyCode: sp.family || undefined,
    sort,
    minPrice: Number.isFinite(minPrice) ? minPrice : undefined,
    maxPrice: Number.isFinite(maxPrice) ? maxPrice : undefined,
    fieldFilters: brand ? [{ name: BRAND_FIELD, value: brand }] : undefined
  };

  // Connecté → données FRAÎCHES (prix client). Anonyme → cache (ISR).
  const authed = await isAuthenticatedAction();
  const [res, context, user, brands] = await Promise.all([
    authed
      ? getArticlesAction(articlesQuery)
      : cachedAnonArticles(articlesQuery),
    (authed ? getContextAction() : cachedAnonContext()).catch(() => null),
    authed ? meAction().catch(() => null) : Promise.resolve(null),
    cachedBrands().catch(() => [] as string[])
  ]);

  const total = res.pagination.total;
  const totalPages = Math.max(1, Math.ceil(total / limit));

  // Libellé du catalogue actif (posé via le menu navbar) → puce dans les filtres.
  const activeCatalogId = sp.catalog ? Number(sp.catalog) : undefined;
  const activeCatalogLabel =
    activeCatalogId != null && context?.catalogTree
      ? findCatalogLabel(context.catalogTree, activeCatalogId)
      : undefined;
  // Fil d'ariane : chemin racine → catégorie active.
  const catalogTrail =
    activeCatalogId != null && context?.catalogTree
      ? (findCatalogPath(context.catalogTree, activeCatalogId) ?? [])
      : [];

  const pageHref = (p: number) => {
    const params = new URLSearchParams();
    if (search) params.set('q', search);
    if (sp.catalog) params.set('catalog', sp.catalog);
    if (sp.clevel) params.set('clevel', sp.clevel);
    if (sp.family) params.set('family', sp.family);
    if (sp.sort) params.set('sort', sp.sort);
    if (sp.pmin) params.set('pmin', sp.pmin);
    if (sp.pmax) params.set('pmax', sp.pmax);
    if (brand) params.set('brand', brand);
    if (sp.view) params.set('view', sp.view);
    params.set('page', String(p));
    return `/catalogue?${params.toString()}`;
  };

  return (
    <div>
      {/* Onboarding tarifs : uniquement en mode e-commerce (masqué en vitrine). */}
      {COMMERCE_ENABLED && !user && (
        <div className="mb-4">
          <InfoBanner
            icon={<Lock className="size-4" />}
            action={{ label: 'Se connecter', href: '/connexion' }}
          >
            Connectez-vous pour voir vos tarifs négociés et passer commande.
          </InfoBanner>
        </div>
      )}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <aside className="lg:sticky lg:top-4 lg:w-60 lg:shrink-0">
          <CatalogueSidebar
            categories={context?.catalogTree ?? []}
            activeId={activeCatalogId}
          />
        </aside>

        <div className="min-w-0 flex-1">
          <nav
            aria-label="Fil d'ariane"
            className="mb-4 flex flex-wrap items-center gap-1.5 text-sm text-neutral-500"
          >
            <Link href="/" className="hover:text-[var(--brand-dark)]">
              Accueil
            </Link>
            <span aria-hidden className="text-neutral-300">
              /
            </span>
            {catalogTrail.length === 0 && !brand ? (
              <span className="font-medium text-neutral-700">Catalogue</span>
            ) : (
              <>
                <Link
                  href="/catalogue"
                  className="hover:text-[var(--brand-dark)]"
                >
                  Catalogue
                </Link>
                {catalogTrail.map((node, i) => (
                  <span key={node.id} className="flex items-center gap-1.5">
                    <span aria-hidden className="text-neutral-300">
                      /
                    </span>
                    {i === catalogTrail.length - 1 && !brand ? (
                      <span className="font-medium text-neutral-700">
                        {node.label}
                      </span>
                    ) : (
                      <Link
                        href={`/catalogue?catalog=${node.id}&clevel=${node.level}`}
                        className="hover:text-[var(--brand-dark)]"
                      >
                        {node.label}
                      </Link>
                    )}
                  </span>
                ))}
                {brand && (
                  <span className="flex items-center gap-1.5">
                    <span aria-hidden className="text-neutral-300">
                      /
                    </span>
                    <span className="font-medium text-neutral-700">
                      {brand}
                    </span>
                  </span>
                )}
              </>
            )}
          </nav>

          {brand && (
            <div className="mb-4 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-4">
                {brandLogo(brand) && (
                  <span className="relative h-12 w-28 shrink-0">
                    <Image
                      src={brandLogo(brand) as string}
                      alt={`Logo ${brand}`}
                      fill
                      sizes="112px"
                      className="object-contain"
                    />
                  </span>
                )}
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-wide text-[var(--brand)] uppercase">
                    Marque
                  </p>
                  <p className="truncate text-lg font-bold text-[var(--brand-slate)]">
                    {brand}
                  </p>
                </div>
              </div>
              {brandDescription(brand) && (
                <BrandDescription text={brandDescription(brand) as string} />
              )}
            </div>
          )}

          <CatalogueFilters
        brands={brands}
        activeCatalogLabel={activeCatalogLabel}
        current={{
          q: search,
          family: sp.family,
          catalog: sp.catalog,
          clevel: sp.clevel,
          sort: sp.sort,
          pmin: sp.pmin,
          pmax: sp.pmax,
          brand
        }}
      />

      <div className="mb-3 flex items-center justify-between gap-4">
        <p className="text-sm text-neutral-500">
          {total > 0 && (
            <>
              {total} article{total > 1 ? 's' : ''}
              {brand ? ` de la marque « ${brand} »` : ''}
              {activeCatalogLabel ? ` dans « ${activeCatalogLabel} »` : ''}
            </>
          )}
        </p>
        <ViewToggle view={view} />
      </div>

      {res.data.length === 0 ? (
        <EmptyState
          icon={<PackageSearch className="size-8" />}
          title="Aucun article"
          description="Aucun article ne correspond à votre recherche. Essayez d'autres filtres."
          action={{ label: 'Réinitialiser', href: '/catalogue' }}
        />
      ) : view === 'list' ? (
        <div className="flex flex-col gap-3">
          {res.data.map((a) => (
            <ArticleRow key={a.reference} article={a} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {res.data.map((a) => (
            <ArticleCard key={a.reference} article={a} />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-4 text-sm">
          {page > 1 && <Link href={pageHref(page - 1)}>← Précédent</Link>}
          <span className="text-neutral-500">
            Page {page} / {totalPages}
          </span>
          {page < totalPages && (
            <Link href={pageHref(page + 1)}>Suivant →</Link>
          )}
        </div>
      )}
        </div>
      </div>
    </div>
  );
}

/** Cherche récursivement le libellé d'un nœud catalogue par son id. */
function findCatalogLabel(
  nodes: CatalogNode[],
  id: number
): string | undefined {
  for (const node of nodes) {
    if (Number(node.id) === id) return node.label;
    const child = node.children
      ? findCatalogLabel(node.children, id)
      : undefined;
    if (child) return child;
  }
  return undefined;
}

/** Chemin racine → nœud (inclus) vers l'id, pour le fil d'ariane. */
function findCatalogPath(
  nodes: CatalogNode[],
  id: number,
  trail: CatalogNode[] = []
): CatalogNode[] | null {
  for (const node of nodes) {
    const next = [...trail, node];
    if (Number(node.id) === id) return next;
    const found = node.children
      ? findCatalogPath(node.children, id, next)
      : null;
    if (found) return found;
  }
  return null;
}
