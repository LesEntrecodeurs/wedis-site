import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catalogue Wédis',
  description:
    "Parcourez l’ensemble du matériel de nettoyage et des produits d’hygiène professionnelle Wédis, pensés pour les professionnels du Grand Est.",
};

export default function CataloguePage() {
  return (
    <main>
      <header>
        <h1>Catalogue Wédis</h1>
        <p>
          Le catalogue Wédis réunit l’essentiel du matériel de nettoyage et des produits
          d’hygiène professionnelle pour les entreprises, collectivités, syndics,
          établissements de santé, commerces et sites industriels du Grand Est.
        </p>
      </header>

      <section aria-labelledby="catalogue-filtres">
        <h2 id="catalogue-filtres">Parcourir et filtrer le catalogue</h2>
        <p>
          Naviguez par familles de produits, utilisez la recherche et les filtres pour
          trouver rapidement la référence qui correspond à vos besoins et à vos
          contraintes de terrain.
        </p>
      </section>

      <section aria-labelledby="catalogue-accompagnement">
        <h2 id="catalogue-accompagnement">Être accompagné dans vos choix</h2>
        <p>
          Les équipes Wédis vous conseillent dans le choix des équipements : dimensionnement
          des machines, protocoles d’entretien, aides et subventions possibles, ainsi que
          démonstrations pour valider la solution la plus adaptée à vos sites.
        </p>
      </section>

      <section aria-labelledby="catalogue-services">
        <h2 id="catalogue-services">Services associés au catalogue</h2>
        <p>
          Vos achats s’inscrivent dans un ensemble de services : livraison, location sur
          certaines machines, contrats de maintenance et formations à la prise en main des
          équipements et des produits.
        </p>
      </section>
    </main>
  );
}
