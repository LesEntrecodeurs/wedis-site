/**
 * Réglages d'affichage du site.
 *
 * `COMMERCE_ENABLED` — porte de sortie : `false` = **vitrine pure** (aucun
 * panier ni prise de commande affichés), `true` = e-commerce complet (panier +
 * commande, déjà câblé via le kit). Basculer à `true` réactive tout le circuit
 * sans rien réécrire — le code du panier/commande reste en place.
 */
export const COMMERCE_ENABLED = false;

/**
 * Espace client : portail Extracom (externe) tant que la vitrine ne gère pas de
 * compte en propre. Surchargeable via `NEXT_PUBLIC_EXTRACOM_CLIENT_URL`.
 */
export const EXTRACOM_CLIENT_URL =
  process.env.NEXT_PUBLIC_EXTRACOM_CLIENT_URL ?? 'https://api.extracom.fr';
