export default function PaiementRetourPage() {
  return (
    <main>
      <h1>Statut de votre paiement</h1>
      <p>
        Vous venez d&apos;être redirigé(e) sur cette page après une tentative de paiement sécurisée. Elle vous permet
        de vérifier, en toute clarté, si votre règlement a bien été pris en compte et de savoir quoi faire ensuite.
      </p>

      <section>
        <h2>Résultat de la transaction</h2>
        <p>
          D&apos;un simple coup d&apos;œil, vous devez pouvoir identifier si votre paiement est accepté, en cours de
          validation ou refusé. Selon le message affiché par le prestataire de paiement, votre commande est soit
          confirmée, soit en attente, soit non enregistrée.
        </p>
        <p>
          Aucune somme n&apos;est débitée en cas de paiement refusé. En cas de doute, vous pouvez toujours vérifier le
          récapitulatif reçu par email ou consulter votre espace client.
        </p>
      </section>

      <section>
        <h2>Récapitulatif de votre commande</h2>
        <p>
          Sous le statut de paiement, un encart récapitule les informations essentielles de votre commande :
        </p>
        <ul>
          <li>numéro de commande ;</li>
          <li>date de la commande ;</li>
          <li>montant total toutes taxes comprises ;</li>
          <li>rappel du moyen de paiement utilisé.</li>
        </ul>
        <p>
          Ces éléments vous permettent de faire immédiatement le lien avec vos emails de confirmation et avec
          l&apos;historique de vos commandes dans votre espace client.
        </p>
      </section>

      <section>
        <h2>Prochaines étapes</h2>
        <p>
          Selon le résultat du paiement indiqué par le prestataire :
        </p>
        <ul>
          <li>
            <strong>Si votre paiement est accepté</strong> : votre commande est enregistrée et transmise aux équipes
            Wédis pour préparation. Vous recevez un email de confirmation avec le détail complet et vous pouvez suivre
            son avancement dans l&apos;historique de vos commandes.
          </li>
          <li>
            <strong>Si votre paiement est en attente</strong> : la confirmation définitive peut prendre quelques
            instants. Surveillez votre email de suivi et, si besoin, revenez consulter votre espace client pour vérifier
            l&apos;état de la commande.
          </li>
          <li>
            <strong>Si votre paiement est refusé</strong> : la transaction n&apos;a pas abouti et aucune somme n&apos;a été
            débitée. Vous pouvez retourner à votre panier pour réessayer avec un autre moyen de paiement ou ajuster
            votre commande.
          </li>
        </ul>
      </section>

      <section>
        <h2>Besoin d&apos;aide ?</h2>
        <p>
          Si vous avez la moindre question sur le statut de votre paiement ou sur votre commande, les équipes Wédis
          restent à votre disposition. Vous trouverez leurs coordonnées complètes sur la page de contact du site ainsi
          que dans les emails de confirmation que vous recevez.
        </p>
      </section>
    </main>
  );
}
