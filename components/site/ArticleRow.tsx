import Link from 'next/link';
import Image from 'next/image';
import { formatPrice, type Article } from '@extracom/site-kit';
import { ExternalLink } from 'lucide-react';
import { getBrand, brandHref } from '@/lib/brand';
import { COMMERCE_ENABLED, extracomOrderUrl } from '@/lib/config';
import { AddToCart } from './AddToCart';

// Variante « liste » de la carte produit : image à gauche, infos au centre,
// prix + action à droite. Partage la logique marque/prix avec ArticleCard.
export function ArticleRow({ article }: { article: Article }) {
  const href = `/produit/${encodeURIComponent(article.reference)}`;
  const brand = getBrand(article);
  const hasVariants = (article.gammes ?? []).some((g) => g.items.length > 0);
  const hasPromo =
    article.promotion != null &&
    article.basePrice != null &&
    article.price != null &&
    article.basePrice > article.price;

  return (
    <div className="card flex items-stretch gap-4 overflow-hidden p-3">
      <Link
        href={href}
        className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-sm bg-neutral-100 sm:w-32"
      >
        <Image
          src={article.imageUrl || '/placeholder.svg'}
          alt={article.title}
          fill
          sizes="128px"
          className="object-cover"
        />
        {hasPromo && (
          <span className="absolute top-1 left-1 rounded-full bg-[var(--brand)] px-2 py-0.5 text-[10px] font-medium text-white">
            Promo
          </span>
        )}
      </Link>

      <div className="flex min-w-0 flex-1 flex-col justify-center">
        {brand && (
          <Link
            href={brandHref(brand)}
            className="text-xs font-semibold tracking-wide text-neutral-400 uppercase hover:text-[var(--brand)]"
          >
            {brand}
          </Link>
        )}
        <Link href={href}>
          <h3 className="line-clamp-2 font-medium hover:text-[var(--brand-dark)]">
            {article.title}
          </h3>
        </Link>
        {hasVariants && (
          <p className="mt-1 text-xs text-neutral-500">
            {article.gammes!.map((g) => g.label).join(', ')} ·{' '}
            {article.gammes!.reduce((n, g) => n + g.items.length, 0)}{' '}
            déclinaisons
          </p>
        )}
        {article.stockQuantity != null && (
          <p
            className={`mt-1 text-xs font-medium ${
              article.stockQuantity > 0
                ? 'text-[var(--brand-dark)]'
                : 'text-red-500'
            }`}
          >
            {article.stockQuantity > 0
              ? `En stock${article.stockQuantity > 1 ? ` (${article.stockQuantity})` : ''}`
              : 'Épuisé'}
          </p>
        )}
      </div>

      <div className="flex w-40 shrink-0 flex-col items-end justify-center gap-2">
        {article.price == null ? (
          <span className="text-right text-xs text-neutral-500">
            Connectez-vous pour voir le prix
          </span>
        ) : (
          <div className="text-right">
            <span className="font-semibold text-[var(--brand-dark)]">
              {formatPrice(article.price)}
            </span>
            {hasPromo && (
              <span className="ml-2 text-xs text-neutral-400 line-through">
                {formatPrice(article.basePrice)}
              </span>
            )}
            {article.unit && (
              <span className="block text-xs text-neutral-400">
                / {article.unit}
              </span>
            )}
          </div>
        )}
        <div className="w-full">
          {!COMMERCE_ENABLED ? (
            <a
              href={extracomOrderUrl(article.reference)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-[var(--brand)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--brand-hover)]"
            >
              <ExternalLink className="size-4" />
              Commander
            </a>
          ) : hasVariants ? (
            <Link
              href={href}
              className="flex w-full items-center justify-center gap-2 rounded-md border border-[var(--brand)] px-4 py-2 text-sm font-medium text-[var(--brand-dark)] hover:bg-[var(--brand-light)]"
            >
              Choisir
            </Link>
          ) : (
            <AddToCart
              reference={article.reference}
              disabled={article.price == null}
            />
          )}
        </div>
      </div>
    </div>
  );
}
