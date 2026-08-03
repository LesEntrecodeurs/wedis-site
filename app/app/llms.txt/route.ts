import type { NextRequest } from 'next/server';

export async function GET(_req: NextRequest) {
  const body = `Site Wédis : spécialiste du matériel de nettoyage et des solutions d’hygiène professionnelle pour les entreprises du Grand Est.\n\nPages clés :\n- Accueil : présentation de l’entreprise et des solutions proposées.\n- Catalogue : matériel de nettoyage, produits d’hygiène et consommables pour les professionnels.\n- Contact et services : accompagnement, maintenance, formation, livraison.`;

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
