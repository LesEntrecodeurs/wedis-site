import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';
import { PageFaq } from '@/components/site/PageFaq';
import { CtaBand } from '@/components/site/CtaBand';
import { SectionHeading } from '@/components/site/SectionHeading';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Maintenance et SAV du matériel de nettoyage professionnel',
  description:
    'SAV intégré Wédis : maintenance préventive et curative, contrats FIRST, SMART et FULL, pièces d’origine en stock et rappel technicien sous 2h dans le Grand Est.',
  alternates: { canonical: '/services/maintenance' }
};

const CONTRATS = [
  {
    name: 'FIRST',
    text: "L'essentiel de la maintenance préventive pour fiabiliser vos équipements et prévenir les pannes."
  },
  {
    name: 'SMART',
    text: 'Un équilibre entre préventif et curatif, avec un suivi renforcé et des interventions prioritaires.'
  },
  {
    name: 'FULL',
    text: 'La tranquillité totale : maintenance complète, pièces et interventions incluses, disponibilité maximale.'
  }
];

const FAQ = [
  {
    question: 'Quels contrats de maintenance Wédis propose-t-elle ?',
    answer:
      "Wédis propose trois contrats de maintenance adaptés à vos besoins : FIRST, SMART et FULL. Ils combinent maintenance préventive (visites planifiées, réglages) et curative (interventions rapides à coûts maîtrisés)."
  },
  {
    question: 'Sous quel délai le SAV Wédis intervient-il ?',
    answer: `Le service après-vente Wédis rappelle un technicien sous 2 heures. Contact SAV : ${SITE.emailSav} ou ${SITE.phone}. Chaque intervention fait l'objet d'un rapport détaillé.`
  },
  {
    question: 'Quelles marques Wédis entretient-elle ?',
    answer:
      'Le SAV Wédis intervient sur FIMAP, WETROK, EUREKA et de nombreuses autres marques (NILFISK, HAKO, TENNANT, KÄRCHER, VIPER), avec des pièces d’origine en stock et des véhicules équipés.'
  }
];

export default function MaintenancePage() {
  return (
    <div className="-mt-10 space-y-16 md:space-y-20">
      <PageHero
        crumbs={[{ label: 'Nos services' }, { label: 'Maintenance et S.A.V' }]}
        title="Maintenance et service après-vente"
        intro="Un SAV intégré et expérimenté, sur site ou en atelier, pour garantir la disponibilité et la longévité de vos équipements de nettoyage professionnel."
      />

      <section className="container-x">
        <SectionHeading
          eyebrow="Nos contrats"
          title="3 contrats de maintenance adaptés à vos besoins"
          intro="Notre plan de maintenance intègre une assistance technique proactive et efficace, du préventif au curatif."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {CONTRATS.map((c) => (
            <div
              key={c.name}
              className="card flex flex-col border-t-4 border-t-[var(--brand)] p-6"
            >
              <span className="font-display text-2xl font-bold text-[var(--brand)]">
                {c.name}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="full-bleed bg-[var(--brand-light)]">
        <div className="container-x grid gap-8 py-14 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-[var(--brand-slate)]">
              Maintenance préventive
            </h2>
            <p className="mt-3 leading-relaxed text-neutral-600">
              Visites planifiées, suivi rigoureux et réglages de précision pour
              prévenir les pannes et prolonger la durée de vie de vos machines.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[var(--brand-slate)]">
              Maintenance curative
            </h2>
            <p className="mt-3 leading-relaxed text-neutral-600">
              Interventions rapides et ciblées en cas de panne, à coûts maîtrisés,
              avec réactivité, transparence et suivi tout au long de la
              réparation.
            </p>
          </div>
        </div>
      </section>

      <PageFaq items={FAQ} />
      <CtaBand primary={{ label: 'Contacter le SAV', href: '/contact' }} />
    </div>
  );
}
