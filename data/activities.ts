// Secteurs d'activité proposés à l'inscription. Le libellé est envoyé tel quel
// au backend Extracom, qui le mappe sur un code (ACTIVITY_MAP) pour générer le
// numéro de compte Sage — le mapping reste donc côté Extracom. « Autre
// activité » ouvre un champ libre (otherActivity).
export const ACTIVITIES: string[] = [
  'Mairie, Collectivité',
  'Ambulance',
  'Centre Hospitalier',
  'Cabinet Médical',
  'Maison de retraite/EHPAD',
  'Centre Médicaux',
  'Èducation (lycée, collège, école)',
  'Administration',
  'Association',
  'Industrie',
  'GMS',
  'Entreprises Privées',
  'Cafés, hôtels, restaurants',
  'Entreprises de proprete',
  'Autre activité'
];

export const OTHER_ACTIVITY = 'Autre activité';
