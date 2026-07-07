import { getContextAction } from '@extracom/site-kit/server';
import { siteUrl } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { EXTRACOM_CLIENT_URL } from '@/lib/config';

// GEO (Generative Engine Optimization) : fichier `llms.txt` lu par les
// assistants/moteurs génératifs pour comprendre et citer le site. Fiche
// d'identité factuelle — sans donnée sensible.
export const dynamic = 'force-dynamic';

export async function GET() {
  let categories: string[] = [];
  try {
    const c = await getContextAction();
    categories = (c.catalogTree ?? []).slice(0, 20).map((n) => n.label);
  } catch {
    /* dégrade proprement */
  }

  const url = siteUrl();
  const { address: a } = SITE;

  const body = `# ${SITE.name}

> ${SITE.description}

${SITE.name} équipe les entreprises, l'industrie, les collectivités, les commerces, les associations et les établissements de santé et scolaires du Grand Est. ${SITE.references} en stock, avec démonstration, formation, location et maintenance assurées localement.

## Coordonnées
- Nom : ${SITE.name}
- Adresse : ${a.street}, ${a.postalCode} ${a.city}, ${a.region}, France
- Téléphone : ${SITE.phone}
- E-mail : ${SITE.email} — SAV : ${SITE.emailSav}
- Zone : Nancy, Metz, Reims et Grand Est

## Services
- Vente de matériel de nettoyage professionnel (robots, autolaveuses, aspirateurs, monobrosses, nettoyeurs haute pression)
- Produits d'entretien et consommables
- Conseils et formation
- Location et livraison de matériel
- Maintenance et SAV local
${categories.length ? `\n## Catégories du catalogue\n${categories.map((c) => `- ${c}`).join('\n')}\n` : ''}
## Pages principales
- Accueil : ${url}/
- Catalogue : ${url}/catalogue
- Marques distribuées : ${url}/marques
- Conseils et guides : ${url}/conseils
- Qui sommes-nous : ${url}/a-propos
- Secteurs d'activités : ${url}/secteurs
- Zones d'intervention : ${url}/zones
- Contact : ${url}/contact

## Commande
La commande en ligne s'effectue sur le portail professionnel Extracom : ${EXTRACOM_CLIENT_URL}
`;

  return new Response(body, {
    headers: { 'content-type': 'text/plain; charset=utf-8' }
  });
}
