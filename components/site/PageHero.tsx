import { Fragment } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { JsonLd } from '@/components/site/JsonLd';
import { breadcrumbLd } from '@/lib/seo';

export type Crumb = { label: string; href?: string };

export function PageHero({
  title,
  intro,
  crumbs
}: {
  title: string;
  intro?: string;
  crumbs: Crumb[];
}) {
  const trail: Crumb[] = [{ label: 'Accueil', href: '/' }, ...crumbs];
  const ldItems = trail
    .filter((c) => c.href)
    .map((c) => ({ name: c.label, path: c.href as string }));

  return (
    <section className="container-x pt-6">
      <JsonLd data={breadcrumbLd(ldItems)} />
      <Breadcrumb>
        <BreadcrumbList>
          {trail.map((c, i) => {
            const last = i === trail.length - 1;
            return (
              <Fragment key={`${c.label}-${i}`}>
                <BreadcrumbItem>
                  {last || !c.href ? (
                    <BreadcrumbPage>{c.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={c.href}>{c.label}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!last && <BreadcrumbSeparator />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="mx-auto mt-8 max-w-4xl text-center text-2xl font-bold text-[var(--brand-accent)] md:text-3xl">
        {title}
      </h1>
      {intro && (
        <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-neutral-600">
          {intro}
        </p>
      )}
    </section>
  );
}
