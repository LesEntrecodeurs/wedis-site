---
route: /paiement/retour
type: page
sections:
  - id: intro
    variant: texte-simple
    brief: Page d’atterrissage après le paiement, qui affiche clairement si la transaction a réussi ou échoué et oriente le client vers la suite.
  - id: recap
    variant: texte-simple
    brief: Rappel synthétique de la commande (numéro, date, montant) pour que le client puisse facilement faire le lien avec ses emails et son historique.
  - id: next-steps
    variant: texte-simple
    brief: Bloc expliquant les prochaines étapes en fonction du résultat (commande confirmée, en attente, ou paiement refusé) et les moyens de contact en cas de problème.
requirements:
  - contenu générique — en attente de sources du client
status: confirmed
indexable: true
---
Cette page s’affiche juste après votre retour de paiement.

Elle confirme en toute clarté si votre règlement a bien été pris en compte ou s’il a été refusé, et vous indique immédiatement quoi faire ensuite.

## Statut de votre paiement

D’un simple coup d’œil, vous voyez si :
- votre paiement est **accepté** et votre commande est confirmée ;
- votre paiement est **en attente de validation** (par exemple avec certains moyens de règlement) ;
- votre paiement est **refusé** et aucune somme n’a été débitée.

## Récapitulatif de votre commande

Sous le statut, un encart récapitule les informations essentielles :
- numéro de commande ;
- date de la commande ;
- montant total TTC ;
- rappel du moyen de paiement utilisé.

Ce récapitulatif vous permet de faire immédiatement le lien avec le message de confirmation que vous recevez par email et avec l’historique de vos commandes dans votre espace client.

## Etapes suivantes

Selon le résultat de votre paiement :

- **Si votre paiement est accepté** :
  - votre commande est enregistrée et transmise aux équipes Wédis pour préparation ;
  - un message de confirmation vous est envoyé par email avec le détail complet ;
  - vous pouvez accéder directement à votre historique de commandes pour suivre l’avancement.

- **Si votre paiement est en attente** :
  - nous vous indiquons clairement que la confirmation définitive peut prendre quelques instants ;
  - vous êtes invité à vérifier votre email de suivi et, si besoin, à revenir consulter l’historique de vos commandes.

- **Si votre paiement est refusé** :
  - un message explicite vous informe que la transaction n’a pas abouti ;
  - aucune somme n’est débitée ;
  - vous êtes guidé pour réessayer avec un autre moyen de paiement ou revenir à votre panier.

## Besoin d’aide ?

En bas de page, un encart vous rappelle comment contacter facilement les équipes Wédis en cas de question sur votre paiement ou votre commande, afin que vous ne restiez jamais sans solution.