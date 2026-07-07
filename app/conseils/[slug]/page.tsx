import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHero } from '@/components/site/PageHero';
import { CtaBand } from '@/components/site/CtaBand';
import { JsonLd } from '@/components/site/JsonLd';
import { CONSEILS, getConseil } from '@/data/conseils';
import { articleLd } from '@/lib/seo';

export function generateStaticParams() {
  return CONSEILS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getConseil(slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.excerpt,
    alternates: { canonical: `/conseils/${c.slug}` },
    openGraph: { type: 'article', title: c.title, description: c.excerpt }
  };
}

export default async function ConseilPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const conseil = getConseil(slug);
  if (!conseil) notFound();

  const related = CONSEILS.filter(
    (c) => c.slug !== conseil.slug && c.category === conseil.category
  ).slice(0, 2);

  return (
    <div className="-mt-10 space-y-16 md:space-y-20">
      <JsonLd
        data={articleLd({
          headline: conseil.title,
          path: `/conseils/${conseil.slug}`,
          datePublished: conseil.date,
          author: 'Wédis'
        })}
      />
      <PageHero
        crumbs={[
          { label: 'Guides & conseils', href: '/conseils' },
          { label: conseil.title }
        ]}
        title={conseil.title}
        intro={conseil.excerpt}
      />

      <article className="container-x max-w-3xl">
        <p className="text-xs font-semibold tracking-wide text-[var(--brand)] uppercase">
          {conseil.category}
        </p>
        <div className="mt-4 space-y-5 text-[17px] leading-relaxed text-neutral-700">
          {conseil.paragraphs.map((p, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: paragraphes statiques (contenu éditorial, jamais réordonné)
            <p key={i}>{p}</p>
          ))}
        </div>

        {related.length > 0 && (
          <div className="mt-12 border-t border-neutral-200 pt-8">
            <h2 className="text-lg font-bold text-[var(--brand-slate)]">
              À lire aussi
            </h2>
            <ul className="mt-4 space-y-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/conseils/${r.slug}`}
                    className="font-medium text-[var(--brand)] hover:underline"
                  >
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>

      <CtaBand />
    </div>
  );
}
