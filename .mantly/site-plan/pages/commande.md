---
route: /commande
type: page
sections:
  - id: intro
    variant: texte-simple
    brief: >-
      Une introduction claire qui rappelle au client qu'il se trouve sur l'étape de validation de sa commande
      et résume en une phrase le déroulé : coordonnées, livraison, récapitulatif et paiement.
  - id: coordonnees-client
    variant: formulaire
    brief: >-
      Formulaire de collecte ou de confirmation des informations client nécessaires à la facturation et au suivi
      (identité, société, coordonnées, références internes) avec rappels sur l’exactitude des données.
  - id: adresse-livraison
    variant: formulaire
    brief: >-
      Bloc dédié aux adresses de livraison et de facturation, avec possibilité de distinguer les deux et d’indiquer
      des précisions utiles (horaires, contact sur site).
  - id: recapitulatif-commande
    variant: tableau-detaille
    brief: >-
      Récapitulatif complet des articles commandés (désignation, quantité, prix, remises éventuelles) et des montants
      associés (sous-total, frais, taxes, total à payer).
  - id: choix-livraison
    variant: options
    brief: >-
      Section qui présente clairement les options de livraison disponibles (zones, délais, modalités) ou la procédure
      habituelle, avec les informations importantes pour les clients professionnels.
  - id: choix-facturation
    variant: options
    brief: >-
      Bloc qui précise les modalités de facturation (référence de commande interne, numéro de bon de commande,
      éventuels centres de coûts) et renvoie vers les conditions générales.
  - id: consentements-et-cgv
    variant: texte-et-case-a-cocher
    brief: >-
      Section qui rappelle les conditions générales de vente, la politique de confidentialité et les principaux
      points à connaître, avec cases de consentement nécessaires avant de poursuivre.
  - id: appels-a-laction
    variant: boutons-principaux
    brief: >-
      Zone d’actions avec les boutons pour revenir au panier, valider la commande et passer au paiement,
      mise en avant claire pour guider le client.
  - id: faq-commande
    variant: faq
    brief: >-
      Quelques questions-réponses courtes sur le déroulement de la commande (modification, annulation, suivi,
      facturation) pour rassurer les clients professionnels.
requirements:
  - contenu générique — en attente de sources du client
status: confirmed
indexable: true
---
La page « Commande » permet à vos clients professionnels de vérifier et valider sereinement toutes les informations avant de passer au paiement.

Elle commence par rappeler qu’ils se trouvent sur l’étape de validation de commande, en expliquant en une phrase le déroulé : vérification des coordonnées, des adresses, du récapitulatif des articles et des conditions avant envoi vers le paiement sécurisé.

Un premier bloc est dédié aux informations client. Le visiteur y renseigne ou confirme les éléments nécessaires à la facturation et au suivi : nom, prénom, société, coordonnées complètes, ainsi que, le cas échéant, une référence interne ou un numéro de bon de commande.

Un second bloc traite des adresses de livraison et de facturation. Il permet d’utiliser la même adresse pour les deux ou d’indiquer une adresse de livraison distincte, avec la possibilité de préciser des informations pratiques (horaires d’ouverture, contact sur site, consignes particulières).

La page présente ensuite un récapitulatif détaillé de la commande : liste des articles, quantités, prix unitaires, éventuelles remises, sous-total, frais associés, taxes et total à payer. L’objectif est que le client puisse contrôler en un coup d’œil le contenu et le montant de sa commande avant de la valider.

Un bloc explicite les modalités de livraison proposées ou habituelles (zones couvertes, délais indicatifs, modalités logistiques) afin de cadrer les attentes des clients professionnels.

Un autre bloc rappelle les informations liées à la facturation : champ pour les références internes éventuelles, mentions sur l’envoi des factures et renvoi vers les conditions générales applicables.

Avant de poursuivre, une section est consacrée aux consentements et aux textes contractuels. Elle met en avant, de manière claire et synthétique, les principales informations issues des conditions générales de vente et de la politique de confidentialité, avec les cases de confirmation nécessaires.

En bas de page, une zone d’actions regroupe les boutons principaux : retour au panier pour modifier les articles, validation de la commande pour passer à l’étape de paiement, et, le cas échéant, un lien vers l’aide ou le contact.

Enfin, une courte FAQ répond aux questions les plus fréquentes sur cette étape : possibilité de modifier une commande avant validation, gestion d’une erreur dans les coordonnées, suivi après validation, et articulation avec la facturation et le service client.