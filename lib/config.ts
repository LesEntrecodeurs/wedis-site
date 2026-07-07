/**
 * Réglages d'affichage du site.
 *
 * `COMMERCE_ENABLED` — porte de sortie : `false` = **vitrine** (pas de panier
 * interne ; la commande se fait sur le portail Extracom), `true` = e-commerce
 * complet en propre (panier + commande via le kit, déjà câblé). Basculer à
 * `true` réactive tout le circuit sans rien réécrire.
 */
export const COMMERCE_ENABLED = false;

/** Portail client/commande Extracom (externe). Surchargeable par env. */
export const EXTRACOM_CLIENT_URL =
  process.env.NEXT_PUBLIC_EXTRACOM_CLIENT_URL ?? 'https://wedis.extracom.fr';

/** Code shop Extracom (segment d'URL du portail). */
const EXTRACOM_SHOP = process.env.NEXT_PUBLIC_EXTRACOM_SHOP ?? 'WEDIS';

/** Lien de commande d'un article sur le portail Extracom (comme wedis.fr). */
export function extracomOrderUrl(reference: string): string {
  return `${EXTRACOM_CLIENT_URL}/${EXTRACOM_SHOP}?limit=25&page=1&artRef=${encodeURIComponent(
    reference
  )}`;
}
