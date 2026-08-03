export default function CompteCommandesPage() {
  return (
    <main className="container mx-auto max-w-4xl py-10 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Vos commandes passées</h1>
        <p className="text-muted-foreground">
          Retrouvez ici l’ensemble de vos commandes passées avec Wédis, pour un suivi simple et rapide de vos achats.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Historique de vos commandes</h2>
        <p className="text-muted-foreground">
          Depuis cette page, vous accédez à la liste complète de vos commandes : numéro, date, montant et statut. Cela vous
          permet de vérifier en un coup d’œil où en sont vos livraisons et de garder une trace claire de vos
          approvisionnements.
        </p>
        <p className="text-muted-foreground">
          Chaque ligne de commande est présentée de manière lisible afin de faciliter vos recherches, même lorsque vous
          passez régulièrement des commandes.
        </p>
        {/* La liste interactive des commandes sera branchée ici via le kit e-commerce. */}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Consulter le détail d’une commande</h2>
        <p className="text-muted-foreground">
          En sélectionnant une commande, vous accédez à son détail : produits commandés, quantités, prix, adresses de
          livraison et de facturation, ainsi que les modalités choisies.
        </p>
        <p className="text-muted-foreground">
          Vous pouvez également, selon les fonctionnalités de votre compte, afficher ou télécharger les documents liés à
          cette commande afin de les intégrer facilement à votre gestion interne.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Suivi et réassort simplifiés</h2>
        <p className="text-muted-foreground">
          Votre historique de commandes vous aide à préparer vos prochains achats : vous pouvez vous baser sur vos
          précédentes commandes pour anticiper vos besoins et maintenir un niveau de stock adapté.
        </p>
        <p className="text-muted-foreground">
          Cette page s’inscrit dans une expérience client claire et professionnelle, pensée pour vous faire gagner du
          temps au quotidien.
        </p>
      </section>
    </main>
  );
}
