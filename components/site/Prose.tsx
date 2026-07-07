export type ProseSection = { heading?: string; body: string[] };

export function Prose({ sections }: { sections: ProseSection[] }) {
  return (
    <div className="container-x max-w-3xl space-y-8">
      {sections.map((s, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: sections éditoriales statiques, jamais réordonnées
        <section key={i}>
          {s.heading && (
            <h2 className="text-xl font-bold text-[var(--brand-slate)]">
              {s.heading}
            </h2>
          )}
          <div className="mt-3 space-y-3 leading-relaxed text-neutral-700">
            {s.body.map((p, j) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: paragraphes statiques, jamais réordonnés
              <p key={j}>{p}</p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
