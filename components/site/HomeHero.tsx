import Link from 'next/link';
import Image from 'next/image';
import { Trophy, Package, Wrench, Users, ArrowRight } from 'lucide-react';
import { SITE } from '@/lib/site';

const BULLETS = [
  { icon: Trophy, text: "Plus de 25 ans d'expérience" },
  { icon: Package, text: 'Plus de 2500 références en stock à Neuves Maisons' },
  { icon: Wrench, text: 'SAV intégré' },
  { icon: Users, text: 'Accompagnement aux aides Carsat' }
];

export function HomeHero() {
  return (
    <section className="container-x grid items-center gap-10 py-12 md:grid-cols-2 md:py-16">
      <div>
        <h1 className="text-3xl leading-tight font-bold text-[var(--brand-slate)] md:text-[2.35rem] md:leading-[1.15]">
          {SITE.baseline}
        </h1>
        <p className="mt-5 max-w-xl text-neutral-600">{SITE.subtitle}</p>

        <Link
          href="/contact"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--brand-accent)] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[var(--brand)]"
        >
          Demander une démonstration ou obtenir un devis
          <ArrowRight className="size-4" />
        </Link>

        <ul className="mt-8 space-y-4">
          {BULLETS.map((b) => (
            <li key={b.text} className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-accent)] text-white">
                <b.icon className="size-4" />
              </span>
              <span className="font-medium text-[var(--brand-slate)]">
                {b.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative">
        <Image
          src="/wedis/hero.png"
          alt="Solutions de nettoyage professionnel Wédis dans le Grand Est"
          width={900}
          height={620}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full rounded-2xl shadow-xl"
        />
      </div>
    </section>
  );
}
