export type Conseil = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  paragraphs: string[];
};

// Guides & conseils / Actualités — contenu éditorial in-repo (pas de commerce,
// pas de DB). Reprend les articles réels du blog Wédis. Un objet = un article.
export const CONSEILS: Conseil[] = [
  {
    slug: 'comment-choisir-un-robot-de-nettoyage-professionnel',
    title: 'Comment choisir un robot de nettoyage professionnel en 2026 ?',
    excerpt:
      'Les critères essentiels pour choisir un robot de nettoyage professionnel adapté à votre surface, vos sols et votre activité.',
    category: 'Robots',
    date: '2026-06-22',
    paragraphs: [
      "Grâce aux avancées de l'intelligence artificielle et de la navigation autonome, les robots de nettoyage permettent aujourd'hui d'automatiser une grande partie du nettoyage des sols tout en garantissant des résultats constants. Mais tous les robots ne répondent pas aux mêmes besoins : surface à nettoyer, environnement de travail, type de sol ou fréquence d'utilisation, plusieurs critères doivent être étudiés avant d'investir. Ces équipements permettent d'automatiser les tâches répétitives, d'améliorer la productivité, de maintenir un niveau de propreté constant, de réduire la pénibilité et de bénéficier d'une traçabilité complète, sans pour autant remplacer les agents de nettoyage.",
      'La superficie est souvent le premier critère de sélection. Pour les petites surfaces comme les bureaux, cabinets médicaux, commerces et écoles, un robot compact peut suffire. Pour les grandes surfaces telles que les entrepôts logistiques, plateformes industrielles, centres commerciaux et sites de production, des modèles disposant d\'une plus grande autonomie et d\'une capacité de nettoyage élevée seront généralement nécessaires. Le type de sol compte aussi : béton lissé, résine, carrelage, sols souples ou revêtements industriels, il faut vérifier la compatibilité des brosses, du système de lavage et de la pression exercée.',
      "La fréquence d'utilisation influence directement l'autonomie et la capacité des batteries : un nettoyage ponctuel n'impose pas les mêmes contraintes qu'une utilisation quotidienne ou de nuit en continu. L'environnement de travail est également déterminant : un entrepôt logistique n'a rien à voir avec un hôpital ou un centre commercial. Les robots doivent pouvoir circuler dans des espaces encombrés, détecter les personnes, contourner les obstacles et travailler en sécurité dans des environnements fréquentés.",
      "Les technologies embarquées font la différence. L'intelligence artificielle permet au robot d'analyser son environnement, d'optimiser ses déplacements et d'améliorer ses performances au fil du temps. Grâce au LiDAR et aux capteurs, il construit une carte précise des locaux pour éviter les zones inutiles et optimiser les trajets. La détection d'obstacles est indispensable dans les environnements fréquentés, et les meilleurs modèles retournent seuls à leur station, rechargent leurs batteries et reprennent automatiquement leur mission.",
      "Le choix dépend aussi du secteur : les sites industriels privilégient la robustesse et l'autonomie, les plateformes logistiques la rapidité et la sécurité de circulation, les centres hospitaliers l'hygiène et la traçabilité, les EHPAD la réduction de la pénibilité, et les grandes surfaces la capacité à travailler en présence du public. Le choix d'un robot de nettoyage professionnel dépend avant tout de votre environnement, de vos objectifs et de vos contraintes opérationnelles. Avant d'investir, il est recommandé de réaliser une démonstration sur site afin d'évaluer concrètement les performances dans vos conditions réelles d'exploitation."
    ]
  },
  {
    slug: 'guide-robot-de-nettoyage-professionnel',
    title: 'Robot de nettoyage professionnel : guide complet 2026',
    excerpt:
      "Guide complet sur les robots de nettoyage professionnels autonomes : types, technologies de navigation, secteurs d'usage et bénéfices.",
    category: 'Robots',
    date: '2026-06-23',
    paragraphs: [
      "Un robot de nettoyage professionnel est un équipement autonome capable d'effectuer certaines tâches de nettoyage sans intervention humaine permanente. Grâce à des technologies embarquées telles que la cartographie laser (LiDAR), les caméras intelligentes, les capteurs d'obstacles et l'intelligence artificielle, ces machines se déplacent de manière autonome dans leur environnement et exécutent des parcours de nettoyage optimisés.",
      "Contrairement aux robots domestiques, les robots professionnels sont conçus pour fonctionner sur de grandes surfaces, dans des environnements exigeants et avec des contraintes opérationnelles importantes. Ils peuvent nettoyer plusieurs milliers de mètres carrés par jour tout en assurant une qualité de nettoyage constante et traçable. Ils sont utilisés dans de nombreux secteurs : industrie, logistique, grande distribution, centres commerciaux, établissements de santé, établissements scolaires, bureaux et bâtiments tertiaires, entreprises de propreté.",
      "Le robot laveur de sol professionnel est aujourd'hui le type le plus répandu. Son rôle est de réaliser automatiquement les opérations de lavage et de séchage des sols. Équipé de brosses, de réservoirs d'eau propre et d'eau sale ainsi que d'un système d'aspiration, il fonctionne sur le même principe qu'une autolaveuse traditionnelle tout en se déplaçant de manière autonome. Il est particulièrement adapté aux grands sites industriels, aux centres logistiques et aux grandes surfaces commerciales.",
      "Le robot aspirateur professionnel est conçu pour l'aspiration autonome des poussières, débris légers et particules présentes sur les sols. Le robot balayeur professionnel, lui, est destiné à la collecte des déchets secs, poussières industrielles, feuilles ou résidus, particulièrement dans les entrepôts logistiques, zones de stockage, parkings couverts et sites de production.",
      "Les robots de nettoyage professionnels utilisent des technologies de navigation avancées qui leur permettent de cartographier leur environnement et de se déplacer en autonomie : cartographie des locaux, définition des zones, création des itinéraires, exécution autonome des missions, retour automatique à la station de charge et génération de rapports d'activité. Les modèles les plus récents évitent les obstacles en temps réel, adaptent leur trajectoire et travaillent en présence de personnes.",
      "Leur objectif n'est pas de remplacer les équipes de nettoyage mais de prendre en charge les tâches répétitives et chronophages afin de permettre aux agents de se concentrer sur les interventions à plus forte valeur ajoutée. Le nettoyage devient reproductible et homogène, les tâches physiquement exigeantes sont automatisées et les interventions sont enregistrées automatiquement."
    ]
  },
  {
    slug: 'robot-nettoyage-grande-surface',
    title: 'Robot de nettoyage pour supermarché : calculez votre retour sur investissement',
    excerpt:
      'Comment un robot de nettoyage autonome devient rentable pour un supermarché et comment calculer son retour sur investissement.',
    category: 'Robots',
    date: '2026-05-29',
    paragraphs: [
      "Dans un supermarché, la propreté est bien plus qu'une obligation réglementaire : elle participe directement à l'expérience client, à l'image de l'enseigne et au bon fonctionnement du magasin. Pourtant, assurer le nettoyage quotidien de plusieurs milliers de mètres carrés représente un coût important, tant en main-d'œuvre qu'en organisation.",
      "Face à la hausse des coûts d'exploitation, aux difficultés de recrutement et aux exigences croissantes en matière d'hygiène, de plus en plus d'enseignes se tournent vers les robots de nettoyage professionnels. Ces équipements autonomes permettent de nettoyer efficacement les grandes surfaces tout en optimisant le travail des équipes.",
      "Un robot de nettoyage est-il réellement rentable ? Comment se compare-t-il à une autolaveuse traditionnelle ? Et quel retour sur investissement peut espérer un supermarché ? Ces questions sont aujourd'hui au cœur des décisions d'investissement des magasins de la grande distribution.",
      "Le calcul du ROI d'un robot de nettoyage repose sur la comparaison entre une solution classique et une solution autonome : temps de nettoyage, coûts de main-d'œuvre, régularité du résultat et impact sur l'expérience client. La robotisation devient un véritable levier de performance pour les magasins qui cherchent à maîtriser leurs coûts tout en maintenant un haut niveau de propreté."
    ]
  },
  {
    slug: 'robot-de-nettoyage-industriel',
    title: "Robot de nettoyage : améliorer la productivité dans l'industrie",
    excerpt:
      "Comment les robots de nettoyage industriels réduisent les coûts, améliorent la productivité et renforcent la sécurité sur les sites de production.",
    category: 'Robots',
    date: '2026-05-29',
    paragraphs: [
      "Les industriels font face à plusieurs défis : augmentation des frais d'exploitation, manque de personnel qualifié, normes de sécurité strictes et exigences d'hygiène renforcées. Les robots de nettoyage industriels répondent à ces enjeux en automatisant le nettoyage des sols, ce qui permet d'améliorer l'efficacité des équipes, de maintenir une propreté constante et de réduire les arrêts de production.",
      "Le nettoyage traditionnel des grandes surfaces mobilise des ressources considérables. Les laveurs robotisés permettent de diminuer le temps consacré à ces opérations, d'optimiser l'allocation des ressources humaines et de limiter les interruptions. Un seul robot peut fonctionner plusieurs heures quotidiennement de façon autonome, réduisant les tâches pénibles et permettant aux opérateurs de se concentrer sur les interventions techniques.",
      "Un sol propre contribue directement à la sécurité des opérateurs : limitation de l'accumulation de résidus, réduction des risques de glissade et nettoyage régulier des zones à fort passage. Selon les modèles, un robot de nettoyage industriel peut couvrir entre 2 000 et 6 000 m² par heure, sur les zones de production, les entrepôts logistiques, les allées de circulation et les quais de chargement.",
      "Le retour sur investissement dépend de la fréquence d'utilisation et de la surface nettoyée. Les gains proviennent principalement de la réduction du temps opérationnel, de la baisse des coûts salariaux et de l'optimisation des ressources. Avec un robot autonome, les cycles peuvent être programmés hors des périodes critiques, le nettoyage devient plus prévisible et les temps d'arrêt sont réduits.",
      "L'objectif n'est pas de remplacer totalement les équipes humaines, mais d'optimiser l'organisation. Le modèle le plus efficace repose sur une collaboration entre automatisation et intervention humaine ciblée : le robot prend en charge les grandes surfaces, tandis que les équipes interviennent sur les zones techniques et les finitions.",
      "Les robots modernes utilisent plusieurs technologies : cartographie intelligente, navigation autonome, capteurs de sécurité, détection d'obstacles et reporting en temps réel. Le choix d'un robot dépend de la surface à nettoyer, du type d'activité, des contraintes opérationnelles et des objectifs de productivité."
    ]
  },
  {
    slug: 'robot-nettoyage-collectivites',
    title: "Robot de nettoyage professionnel pour collectivités : réduire les coûts et améliorer l'hygiène",
    excerpt:
      "Comment les robots de nettoyage aident les collectivités à réduire leurs coûts d'entretien et à garantir une hygiène homogène dans les bâtiments publics.",
    category: 'Robots',
    date: '2026-05-29',
    paragraphs: [
      "Les collectivités font face à des défis majeurs : hausse des coûts de fonctionnement, tensions sur le recrutement, multiplicité des sites à entretenir et exigences sanitaires renforcées. Les robots de nettoyage offrent une solution d'automatisation pour gérer ces contraintes tout en maintenant un niveau d'hygiène élevé dans les bâtiments publics.",
      "Les collectivités investissent dans la robotisation pour trois raisons principales : réduire les dépenses d'entretien des bâtiments publics, améliorer la productivité des équipes techniques et garantir une hygiène homogène. Un robot autonome peut nettoyer entre 2 000 et 6 000 m² par heure, et l'amortissement dépend de la fréquence d'utilisation et des surfaces concernées.",
      "Le modèle optimal combine l'automatisation des grandes surfaces et l'intervention humaine sur les zones complexes. Les robots ne remplacent pas les agents mais les assistent en optimisant leur productivité, ce qui permet aux équipes techniques de se concentrer sur les interventions à plus forte valeur ajoutée.",
      "Les solutions modernes utilisent la cartographie intelligente, la navigation autonome par capteurs et permettent le suivi des performances en temps réel avec génération de rapports. Ces robots conviennent particulièrement aux écoles, gymnases, bâtiments administratifs et équipements culturels accueillant du public de manière régulière."
    ]
  },
  {
    slug: 'robot-nettoyage-entrepot-logistique',
    title: 'Robot de nettoyage professionnel : optimiser la propreté et la productivité des entrepôts logistiques',
    excerpt:
      "Comment les robots de nettoyage autonomes optimisent la propreté et la productivité des entrepôts logistiques sans interrompre l'activité.",
    category: 'Robots',
    date: '2026-05-29',
    paragraphs: [
      "Entre le passage continu des chariots, les contraintes de sécurité, la poussière liée aux flux logistiques et les exigences de productivité, les plateformes doivent maintenir un niveau de nettoyage élevé sans ralentir les opérations. Les robots de nettoyage professionnels sont particulièrement adaptés aux environnements logistiques : ils réduisent les interruptions, optimisent les ressources humaines et assurent une propreté constante dans les zones de circulation et de stockage.",
      "Le secteur logistique fait face à plusieurs défis : augmentation des volumes, intensification des flux, exigences de sécurité renforcées, pénurie de main-d'œuvre et besoin de continuité opérationnelle. Le nettoyage manuel des grands entrepôts mobilise souvent plusieurs agents pendant de longues heures. Les robots autonomes réduisent le temps consacré au lavage des sols et assurent un nettoyage régulier sur de très grandes surfaces.",
      "La propreté des sols joue un rôle essentiel dans la sécurité des entrepôts : poussières, résidus, traces d'humidité ou déchets peuvent provoquer des risques de glissade ou des accidents liés aux chariots. Selon les modèles, un robot professionnel peut nettoyer entre 2 000 et 6 000 m² par heure, couvrant les allées logistiques, les quais de chargement, les zones de picking et les espaces de stockage.",
      "L'un des principaux avantages des robots autonomes en logistique est leur capacité à fonctionner tôt le matin, la nuit ou pendant les périodes de faible activité. Les cycles peuvent être programmés afin de limiter les interruptions. Selon la taille du site et la fréquence d'utilisation, le retour sur investissement peut être atteint en quelques années grâce aux gains de productivité.",
      "L'objectif n'est pas de remplacer totalement les équipes humaines, mais d'améliorer l'organisation globale : automatisation des grandes surfaces et interventions humaines sur les zones complexes. Les robots nouvelle génération utilisent cartographie intelligente, navigation autonome, capteurs de sécurité, détection d'obstacles et reporting en temps réel."
    ]
  },
  {
    slug: 'robot-rentabilite-entreprises-proprete',
    title: "Robot de nettoyage : l'automatisation pour les entreprises de propreté",
    excerpt:
      'Comment les robots laveurs autonomes aident les entreprises de propreté à réduire leurs coûts et gagner en productivité.',
    category: 'Robots',
    date: '2026-05-29',
    paragraphs: [
      "Dans un contexte où les entreprises de nettoyage font face à des défis majeurs, les robots laveurs autonomes émergent comme une solution stratégique. Ces dispositifs automatisent les tâches répétitives tout en permettant aux équipes de se concentrer sur des missions à plus forte valeur ajoutée.",
      "Les principaux bénéfices incluent la réduction des coûts opérationnels grâce à l'optimisation du temps humain, une réponse aux difficultés de recrutement sectorielles et l'amélioration de la productivité générale. Ces robots couvrent entre 2 000 et 6 000 m² par heure selon les modèles.",
      "Les robots ne remplacent pas les agents mais complètent leur action. Le modèle hybride s'avère plus efficace : les robots gèrent les surfaces régulières tandis que les humains interviennent sur les zones complexes et les finitions.",
      "Techniquement, ces solutions utilisent la navigation intelligente, la cartographie des espaces et des capteurs de sécurité pour optimiser les trajets et garantir un nettoyage standardisé avec une meilleure traçabilité. Les applications s'étendent aux centres commerciaux, plateformes logistiques, bureaux tertiaires et établissements de santé."
    ]
  },
  {
    slug: 'robot-nettoyage-ehpad-maison-retraite',
    title: "Robot de nettoyage EHPAD : améliorer l'hygiène et le confort des résidents",
    excerpt:
      'Comment les robots de nettoyage améliorent l\'hygiène, réduisent la pénibilité et renforcent le confort des résidents en EHPAD.',
    category: 'Robots',
    date: '2026-06-04',
    paragraphs: [
      "Les directeurs d'EHPAD et de maisons de retraite doivent relever plusieurs défis simultanément : maintenir un niveau d'hygiène irréprochable, répondre aux exigences réglementaires, faire face aux tensions de recrutement et garantir un accompagnement humain de qualité. Les robots de nettoyage professionnels automatisent certaines tâches répétitives tout en permettant aux équipes de consacrer davantage de temps aux résidents.",
      "L'EHPAD est avant tout un lieu de vie où cohabitent résidents, personnel soignant, équipes hôtelières, familles et intervenants extérieurs. Les espaces les plus exposés sont les couloirs, salles de restauration, salles d'animation, salons de visite et halls d'accueil, qui concentrent quotidiennement des centaines de passages. Un nettoyage régulier et homogène limite l'accumulation de poussières et de salissures.",
      "En prenant en charge les grandes surfaces de circulation, le robot permet aux équipes de se concentrer sur les missions qui améliorent le quotidien des résidents : accompagnement, préparation des chambres, bio-nettoyage des espaces sensibles et contrôle qualité. La robotisation réduit aussi la pénibilité liée aux opérations répétitives de lavage des sols.",
      "Le maintien de sols propres contribue à réduire les risques de chute et les zones humides persistantes. Grâce à leurs capteurs, les robots actuels détectent les personnes présentes, ralentissent automatiquement, contournent les obstacles et adaptent leur trajectoire en temps réel, ce qui les rend adaptés aux résidents souffrant de désorientation spatiale.",
      "Les EHPAD font l'objet d'évaluations régulières et la traçabilité devient un enjeu majeur. Les robots modernes enregistrent les surfaces nettoyées, suivent les fréquences de passage et génèrent des rapports détaillés, facilitant le suivi qualité. En libérant du temps pour l'accompagnement, ils s'imposent comme un outil au service de la qualité de prise en charge."
    ]
  },
  {
    slug: 'robot-nettoyage-centres-hospitaliers',
    title: "Robot de nettoyage pour centres hospitaliers : renforcer l'hygiène et la sécurité",
    excerpt:
      "Comment les robots de nettoyage renforcent l'hygiène, la sécurité et la traçabilité dans les centres hospitaliers.",
    category: 'Robots',
    date: '2026-06-04',
    paragraphs: [
      "La qualité du nettoyage participe directement à la prévention des infections, à la sécurité des usagers et à l'image globale de l'établissement. Les directions hospitalières doivent garantir un environnement sanitaire conforme, faire face à une activité continue 24h/24, optimiser les ressources humaines et améliorer les conditions de travail. Les solutions de nettoyage automatisé prennent en charge certaines tâches répétitives.",
      "L'hôpital présente des contraintes exigeantes en raison d'une fréquentation permanente : patients, visiteurs, personnel soignant et intervenants extérieurs. La prévention du risque infectieux est une priorité dans les zones à forte fréquentation comme les halls d'accueil, couloirs, urgences, salles d'attente et espaces de restauration. Un entretien régulier limite l'accumulation de poussières et de salissures.",
      "L'activité hospitalière ne s'arrête jamais. L'automatisation permet d'assurer une fréquence de nettoyage plus élevée sur les grandes surfaces tout en garantissant une qualité constante. Les agents peuvent alors consacrer davantage de temps aux espaces critiques : bio-nettoyage des chambres, entretien des blocs opératoires et désinfection des surfaces de contact, où l'intervention humaine reste indispensable.",
      "La prise en charge automatisée des grands couloirs et halls réduit la pénibilité du travail (longues distances, gestes répétitifs, horaires décalés). Des locaux propres renforcent la confiance des patients et un entretien fréquent des sols limite les risques de glissade, sécurisant les déplacements des personnes à mobilité réduite.",
      "Grâce à leurs systèmes de navigation et de détection, les robots identifient les personnes présentes, ralentissent, contournent les obstacles et fonctionnent en sécurité dans des espaces fréquentés. Ils constituent aussi un outil de pilotage qualité : enregistrement des surfaces traitées, suivi des fréquences et génération de rapports d'activité."
    ]
  },
  {
    slug: 'autolaveuse-spin-befree',
    title: `La révolution au format réduit avec la SPIN BEFREE !`,
    excerpt: `L'autolaveuse compacte SPIN BEFREE offre un nettoyage ergonomique, éligible CARSAT, idéale pour les espaces exigus et sensibles.`,
    category: 'Actualités',
    date: '2025-09-29',
    paragraphs: [
      `L'autolaveuse professionnelle SPIN BEFREE a été spécialement conçue pour offrir un nettoyage ergonomique. Sa poignée intuitive, associée à son mouvement fluide vers l'avant, réduit considérablement la pression exercée sur les poignets, le dos et les épaules. Cette conception permet aux agents de propreté de travailler sans effort, de limiter la fatigue physique et de préserver leur santé. L'appareil est éligible CARSAT, confirmant son rôle dans la prévention des TMS.`,
      `La technologie avancée de brosses et de pads Wetrok confère à cette autolaveuse compacte une puissance de nettoyage inégalée, capable d'éliminer salissures courantes et tâches incrustées sur tous types de sols. L'hygiène est une priorité : tous les réservoirs sont accessibles et nettoyables manuellement à 100 %, assurant une désinfection optimale après chaque usage.`,
      `La Spin BeFree combine maniabilité légère et performance professionnelle, idéale pour sanitaires exigus, pièces encombrées et zones sensibles où les exigences d'hygiène sont élevées. Fonctionnant sans fil avec un design compact, elle nettoie efficacement surfaces lisses et carreaux structurés. Sa pompe d'alimentation intégrée assure un débit d'eau constant, réduisant la consommation d'eau et de produits chimiques.`,
      `Conçue en Suisse, la Spin BeFree se distingue par sa robustesse, sa longévité et sa technologie adaptée au nettoyage intensif quotidien. Compacte et ingénieusement conçue, elle permet un rangement peu encombrant et un transport facile, répondant aux contraintes de mobilité des entreprises de propreté et des collectivités.`
    ]
  },
  {
    slug: 'choisir-son-autolaveuse-professionnelle',
    title: `Comment choisir une autolaveuse professionnelle ?`,
    excerpt: `Guide pour choisir une autolaveuse professionnelle selon le type, l'alimentation et les critères de surface, de sol et de maniabilité.`,
    category: 'Actualités',
    date: '2025-01-12',
    paragraphs: [
      `Une autolaveuse est une machine de nettoyage mécanisée qui lave, brosse et aspire les salissures en une seule opération, permettant un gain de temps considérable comparé au nettoyage manuel. Le choix entre un modèle câblé et un modèle à batterie impacte directement la productivité, les coûts opérationnels et la qualité du nettoyage.`,
      `Il existe quatre principaux types d'autolaveuses. L'autolaveuse compacte, petite et maniable, convient aux espaces réduits. L'autolaveuse accompagnée, équipée d'un moteur de traction, s'adresse aux surfaces moyennes à grandes. L'autolaveuse autoportée, avec opérateur assis, est destinée aux grandes surfaces. Enfin, l'autolaveuse autonome fonctionne sans opérateur pour les grandes installations.`,
      `Concernant l'alimentation, les modèles à câble offrent une puissance constante et coûtent 20 à 30 % moins cher, ce qui les rend idéaux pour les surfaces de plus de 1000 m². Les batteries lithium-ion modernes fournissent 3 à 6 heures d'autonomie avec 2 à 4 heures de charge rapide, offrant liberté de mouvement et sécurité accrue.`,
      `Les critères de sélection à considérer sont la surface à nettoyer, le type de sol, la fréquence d'entretien, la largeur de travail, la maniabilité et le niveau sonore. Côté maintenance, il convient de vider les cuves régulièrement, de nettoyer les brosses et les raclettes, de contrôler les batteries et les filtres, et de stocker l'appareil dans un lieu sec et ventilé.`
    ]
  },
  {
    slug: 'choisir-son-disque-de-nettoyage',
    title: `Comment choisir son disque de nettoyage ?`,
    excerpt: `Guide complet pour choisir le disque de nettoyage adapté à votre sol et votre machine parmi les gammes Lamatex et Janex.`,
    category: 'Actualités',
    date: '2025-11-12',
    paragraphs: [
      `Lorsqu'il s'agit d'entretenir efficacement vos sols, le choix du bon disque est essentiel. Que vous utilisiez une autolaveuse ou une monobrosse, le disque sélectionné influence directement le résultat : qualité du nettoyage, rapidité, usure du sol et durabilité du matériel. Chez Wédis, nous proposons notamment les disques Lamatex et Janex, deux marques reconnues pour leur efficacité et leur longévité.`,
      `Chaque sol a ses spécificités. Sur les sols durs (carrelage, béton, pierre naturelle), on privilégie des disques plus abrasifs comme le Lamatex noir pour le décapage intensif ou le Janex vert pour le nettoyage intermédiaire. Sur les sols thermoplastiques (PVC, lino, caoutchouc), on préfère des disques plus doux comme le Lamatex rouge pour le quotidien ou le Janex blanc pour le polissage. Sur les sols protégés par émulsion, les disques de lustrage ravivent la brillance sans abîmer la protection.`,
      `Le choix du disque dépend aussi de la machine. Sur une autolaveuse à vitesse faible, on recommande le Lamatex rouge pour le quotidien et le Janex bleu pour le nettoyage intensif. Sur une monobrosse basse vitesse (150-200 tours/min), très polyvalente, on utilise des disques de décapage comme le Lamatex noir ou de nettoyage profond comme le Janex vert. Sur une monobrosse haute vitesse, dédiée à la brillance, on préfère le Janex blanc ou rose pour le polissage.`,
      `Un disque est composé de fibres synthétiques qui retiennent les particules abrasives. Plus le disque est dense et chargé en abrasif, plus son action est agressive : un disque noir contient beaucoup de matière abrasive, idéal pour enlever les anciennes couches, tandis qu'un disque blanc en contient très peu, idéal pour polir sans altérer la surface. C'est pourquoi il ne faut jamais utiliser un disque trop agressif sur un sol fragile.`,
      `Pour préserver l'efficacité et prolonger la durée de vie de vos disques, rincez-les après utilisation, laissez-les sécher à plat, alternez-les selon l'usage et changez-les lorsqu'ils deviennent trop fins. Vérifiez toujours le diamètre du plateau porte-disque (13, 17, 20 ou 21 pouces) : un disque usé augmente la consommation d'eau, d'énergie et de chimie. Bien choisir son disque, c'est optimiser le nettoyage et prolonger la durée de vie de vos sols.`
    ]
  },
  {
    slug: 'comment-choisir-son-aspirateur-industriel',
    title: `Comment choisir son aspirateur industriel ?`,
    excerpt: `Guide pour choisir un aspirateur industriel selon la puissance, le débit, la filtration et le secteur d'utilisation.`,
    category: 'Actualités',
    date: '2026-01-29',
    paragraphs: [
      `Un aspirateur industriel est un appareil de nettoyage puissant conçu pour aspirer des déchets lourds et variés dans des environnements professionnels, bien plus robuste qu'un modèle domestique. Il nettoie les zones poussiéreuses, aspire liquides et matières humides, maintient l'hygiène professionnelle, évite l'encrassement des machines et protège la santé des opérateurs.`,
      `On retrouve les aspirateurs industriels dans l'industrie manufacturière, le BTP, l'agroalimentaire, les laboratoires et les garages. Les critères de sélection incluent la puissance utile (dépression entre 12 et 25 kPa), le débit d'aspiration exprimé en litres par minute, la surface filtrante pour la rétention des poussières fines, la capacité de cuve et le type d'appareil, avec ou sans sac selon les besoins.`,
      `Certaines applications sont spécifiques. L'agroalimentaire nécessite des normes d'hygiène strictes et une filtration fine sans risque de contamination. Le BTP privilégie la robustesse et une haute capacité pour gérer gravats et poussières de béton. L'environnement médical exige une filtration très fine, de type HEPA. Côté alimentation, on choisit le monophasé pour les usages standards et le triphasé pour les usages intensifs.`,
      `Pour les poussières dangereuses, la classification selon la norme EN 60335-2-69 distingue la classe L (poussières peu dangereuses), la classe M (risque moyen) et la classe H (hautement dangereuses). L'entretien consiste à vider régulièrement le réservoir, nettoyer ou changer les filtres, vérifier l'étanchéité et faire contrôler les moteurs. La gamme Wédis propose des aspirateurs triphasés pour usage intensif, des modèles avec vidange automatique pour liquides et des aspirateurs ATEX pour environnements à risques.`
    ]
  },
  {
    slug: 'eligibilite-carsat-aide-autolaveuse-grand-est',
    title: `Bénéficiez de la subvention CARSAT jusqu'à 70 % sur l'achat de votre autolaveuse !`,
    excerpt: `Les entreprises et associations du Grand Est peuvent obtenir jusqu'à 70 % de prise en charge CARSAT sur l'achat d'une autolaveuse ergonomique.`,
    category: 'Actualités',
    date: '2025-06-16',
    paragraphs: [
      `Vous êtes une entreprise privée ou une association du Grand Est ? Améliorez les conditions de travail de vos agents d'entretien grâce à des équipements plus ergonomiques. Grâce au dispositif de la CARSAT, vous pouvez bénéficier d'une prise en charge jusqu'à 70 % du montant de votre autolaveuse — un vrai coup de pouce pour alléger la charge physique des tâches de nettoyage et préserver la santé de vos collaborateurs.`,
      `Cette subvention s'adresse à toutes les entreprises (sociétés, associations…) relevant du régime général de la Sécurité sociale, ainsi qu'aux travailleurs indépendants ayant souscrit une assurance volontaire contre les accidents du travail, de trajet et les maladies professionnelles.`,
      `Pour être éligible, l'autolaveuse doit être neuve et conforme à la directive machines 2006/42/CE. Elle doit émettre un niveau sonore maximal de 75 dB(A) pour l'opérateur, être compacte (0,5 m² au sol au maximum) et disposer de batteries d'une autonomie d'une heure, ou d'un câble d'au moins 10 mètres avec système d'enroulement. Les salariés utilisateurs doivent être formés à l'utilisation en sécurité, formation incluse dans la prestation.`,
      `La demande se complète en ligne sur le compte net-entreprises avec l'attestation de vigilance Urssaf de moins de 6 mois, l'attestation de non-assujettissement à la TVA le cas échéant, et un RIB en PDF. Le budget étant limité, les demandes sont traitées par ordre chronologique d'arrivée : il est donc conseillé de transmettre le dossier rapidement après l'investissement. Pour un devis gratuit, une démonstration ou un accompagnement de vos dossiers CARSAT, contactez notre équipe commerciale.`
    ]
  },
  {
    slug: 'exeol-gel-82-norme-en',
    title: `EXEOL GEL 82 conforme à la nouvelle norme EN 17430 !`,
    excerpt: `Le gel hydroalcoolique professionnel Exeol Gel 82 est conforme à la norme EN 17430 et neutralise plusieurs virus majeurs en 30 secondes.`,
    category: 'Actualités',
    date: '2025-07-11',
    paragraphs: [
      `L'Exeol Gel 82 est un gel hydroalcoolique professionnel conçu pour assurer une hygiène des mains optimale dans tous les environnements de travail. Alliant efficacité virucide certifiée et respect de la peau, il répond aux besoins des professionnels soucieux de garantir sécurité et confort au quotidien.`,
      `La norme EN 17430 (mai 2024) est la nouvelle référence européenne en matière d'efficacité virucide des gels hydroalcooliques. Contrairement aux normes précédentes, elle évalue la performance des produits dans des conditions d'utilisation réelles, testées directement sur des mains humaines, ce qui garantit des résultats fiables et représentatifs.`,
      `L'Exeol Gel 82 a réussi tous les tests de la norme EN 17430. En seulement 30 secondes de contact, il neutralise plusieurs virus majeurs tels que le Poliovirus, l'Adénovirus, le Norovirus et le virus de la Vaccine. Cette rapidité d'action en fait un allié fiable dans la prévention des infections virales, notamment dans les environnements à forte fréquentation.`,
      `Sa formule enrichie en provitamine B5, apaisante et réparatrice, et en glycérine hydratante aide à prévenir la sécheresse cutanée et les tiraillements, même en cas d'utilisation répétée. Le gel est disponible en plusieurs formats : 5 L, 1 L airless, 500 ml pompe et 100 ml.`
    ]
  },
  {
    slug: 'gamme-k2',
    title: `Comment optimiser votre nettoyage avec la pré-imprégnation ?`,
    excerpt: `La pré-imprégnation et la gamme K2 fabriquée en France offrent un nettoyage des sols plus hygiénique, économique et ergonomique.`,
    category: 'Actualités',
    date: '2025-08-22',
    paragraphs: [
      `La pré-imprégnation est une solution de nettoyage des sols de plus en plus plébiscitée dans le secteur de l'hygiène professionnelle. Elle consiste à préparer les textiles (franges, lavettes) avec une dose contrôlée de solution détergente ou désinfectante avant leur utilisation sur site. Contrairement à la méthode traditionnelle « au mouillé », elle garantit une meilleure hygiène, une économie de produit, un lavage en profondeur et une réduction de la pénibilité.`,
      `Cette méthode offre de nombreux avantages : consommation raisonnée de l'eau, dosage précis des produits, réduction des risques de contamination croisée, optimisation du temps de travail et prévention des TMS. Le dosage repose sur un système contrôlé : une pression correspond à une dose exacte, et 0,5 litre de solution couvre efficacement jusqu'à 20 m² de surface.`,
      `Pour accompagner cette méthode, la gamme K2 propose une solution complète et modulaire : le chariot K2 (compartiments propre/sale, roues silencieuses, modules personnalisables), le balai K2 ergonomique à manche télescopique aluminium, et la station d'accueil et de remplissage K2 qui imprègne rapidement et de façon homogène les franges avec la bonne quantité de solution.`,
      `En combinant la pré-imprégnation et les outils K2, les professionnels bénéficient d'un protocole plus hygiénique et sécurisé, conforme aux protocoles sanitaires les plus exigeants (hôpitaux, EHPAD, crèches), avec une réduction de la consommation de produit pouvant atteindre 40 %. La gamme K2 est conçue et fabriquée en France, gage de qualité, de conformité aux normes et de service après-vente de proximité.`
    ]
  },
  {
    slug: 'nettoyage-eau-pure-unger',
    title: `Comment nettoyer les vitres sans produit chimique ?`,
    excerpt: `Le système à l'eau pure Unger nettoie vitres, façades et panneaux solaires sans produit chimique ni traces.`,
    category: 'Actualités',
    date: '2026-02-19',
    paragraphs: [
      `Le système de nettoyage à l'eau pure Unger est une solution professionnelle conçue pour nettoyer les vitres, façades, panneaux photovoltaïques et autres surfaces sans recourir à des produits chimiques. Grâce à un procédé de filtration avancé, tous les minéraux de l'eau sont éliminés, offrant une eau déminéralisée qui garantit une finition impeccable.`,
      `L'eau pure offre un pouvoir nettoyant exceptionnel sans calcium ni résidus minéraux : elle sèche sans traces, ce qui élimine le besoin d'essuyer les surfaces. Cette approche écologique se combine avec une sécurité en hauteur grâce aux perches nLITE, pouvant atteindre 20 mètres sans équipement d'escalade.`,
      `Deux méthodes de filtration produisent l'eau pure : l'osmose inverse (RO), adaptée aux zones calcaires et aux grandes surfaces, et la déionisation (DI), pour les utilisations ponctuelles. Le système nettoie aussi bien les vitres, façades vitrées, bardages et enseignes que les panneaux photovoltaïques, dont il améliore le rendement en retirant poussière, pollution et pollens.`,
      `Fonctionnant sans détergent, le système réduit la consommation d'eau et l'impact environnemental, ce qui en fait une solution idéale pour les entreprises soucieuses de réduire leur empreinte carbone. Les poches QuickChange simplifient le remplacement de la résine sans outils, et les systèmes Unger conservent une haute performance sur plusieurs années avec un entretien minimal.`
    ]
  },
  {
    slug: 'nettoyage-erol-g490-buzil-disque-melamine',
    title: `Comment nettoyer un carrelage poreux et encrassé ?`,
    excerpt: `Le duo EROL G490 BUZIL et disque mélamine désincruste en profondeur les carrelages microporeux encrassés.`,
    category: 'Actualités',
    date: '2026-01-15',
    paragraphs: [
      `Les carrelages poreux, en particulier les microporeux, offrent adhérence et sécurité en milieux professionnels. Leur structure favorise cependant l'incrustation des salissures, ce qui rend leur nettoyage plus technique. Le test de l'eau révèle la porosité : si l'eau est absorbée et fonce le carrelage, celui-ci est poreux. Il faut distinguer la porosité, caractéristique permanente du matériau, de l'encrassement, qui est un état réversible.`,
      `EROL G490 de BUZIL est un nettoyant intensif alcalin pour sols et surfaces microporeuses. Conçu pour le grès cérame, le carrelage antidérapant et la pierre rugueuse, il présente un pH de 13,5 avec un fort pouvoir mouillant. Le disque mélamine agit comme un outil de micro-gommage mécanique qui désincruste la saleté logée dans les pores : utilisé avec EROL G490, il renforce l'efficacité du nettoyage.`,
      `Les dilutions varient selon l'usage : 50 à 100 ml pour 10 L en nettoyage courant, 500 à 1000 ml pour 10 L en décrassage intensif, et 100 à 200 ml pour 10 L en autolaveuse. En monobrosse, on étend la solution uniformément, on la laisse agir sans sécher, puis on travaille en mouvements croisés avant d'extraire les eaux usées à l'aspirateur à eau. L'étape d'extraction est essentielle : si les résidus restent, ils encrassent à nouveau les pores.`,
      `Le duo EROL G490 et disque mélamine est un outil correctif destiné à restaurer les surfaces encrassées depuis des années, et non un pad d'entretien quotidien. Au quotidien, un entretien régulier, doux et bien dosé limite l'encrassement et prolonge la durée de vie du sol. Un test préalable reste indispensable avant toute application généralisée.`
    ]
  },
  {
    slug: 'obligation-certibiocide-desinfectants',
    title: `Obligation Certibiocide « Désinfectants » au 1er janvier 2026`,
    excerpt: `Dès le 1er janvier 2026, une certification Certibiocide devient obligatoire pour utiliser certains produits désinfectants professionnels.`,
    category: 'Actualités',
    date: '2025-08-01',
    paragraphs: [
      `À partir du 1er janvier 2026, les professionnels des secteurs de l'hygiène, de l'agroalimentaire et de la santé animale doivent obtenir une certification spécifique pour utiliser certains produits désinfectants.`,
      `Le Certibiocide est une certification obligatoire pour les professionnels impliqués dans l'achat ou la décision d'utilisation de certains produits biocides. Trois catégories existent : désinfectants, nuisibles et autres produits. Elle s'adresse aux acquéreurs (personnes qui choisissent d'acheter ou donnent l'ordre d'achat) et aux décideurs (personnes en charge de l'encadrement ou de la décision d'utilisation). Les agents appliquant des protocoles définis et le personnel administratif sans choix de produit en sont exclus.`,
      `L'obligation couvre les catégories de produits TP2 (désinfectants non destinés aux êtres humains), TP3 (hygiène vétérinaire) et TP4 (désinfection des surfaces en contact avec les denrées alimentaires).`,
      `Concrètement, à partir de 2026, les clients de Wédis devront communiquer leur numéro Certibiocide. En l'absence de certification, la commande de ces produits pourra être bloquée.`
    ]
  },
  {
    slug: 'reshine-sport-salle-de-sport-gymnase',
    title: `Comment nettoyer la résine sur sol sportif ?`,
    excerpt: `Wetrok Reshine Sport élimine les résines de handball et traces noires sur les sols sportifs sans abîmer les marquages.`,
    category: 'Actualités',
    date: '2026-05-02',
    paragraphs: [
      `Les résidus de résine de handball adhèrent fortement aux sols sportifs intérieurs, particulièrement sur les surfaces en PVC, linoléum ou parquet résistant à l'eau. Ces résines forment des dépôts difficiles à éliminer avec les produits classiques de nettoyage de gymnase. Ces sols doivent répondre à la norme NF EN 14904, qui impose des critères stricts d'adhérence, de sécurité et de performance sportive.`,
      `Wetrok Reshine Sport est formulé pour éliminer tous les types de résines sur les sols sportifs sans endommager les délimitations. Certifié DIN 18032, il garantit son efficacité sur les installations multisports intérieures et convient aux revêtements en PVC, linoléum et parquets résistants à l'eau et aux alcalins.`,
      `Pour un entretien léger, la dilution recommandée est de 0,2 à 0,5 L pour 10 L d'eau ; pour un nettoyage intensif, elle peut atteindre 1 L pour 10 L d'eau, avec un temps d'action minimum de 3 minutes. Le produit s'utilise en autolaveuse ou manuellement à la mop pour les zones ciblées.`,
      `La fréquence de nettoyage dépend de l'utilisation : entretien quotidien avec balayage et lavage léger, ou nettoyage intensif après les matchs pour éliminer la résine et les traces noires. Reshine Sport élimine également les marques noires laissées par les semelles et laisse une sensation durable de fraîcheur, particulièrement appréciée dans les salles de sport.`
    ]
  },
  {
    slug: 'subvention-carsat-70-aspirateur-boulangerie',
    title: `Boulangerie : protégez votre santé et financez votre aspirateur industriel à 70 %`,
    excerpt: `La CARSAT finance jusqu'à 70 % un aspirateur industriel pour protéger les boulangers des poussières de farine.`,
    category: 'Actualités',
    date: '2025-09-04',
    paragraphs: [
      `L'exposition aux poussières de farine présente des risques sérieux pour les travailleurs des boulangeries. Les professionnels du secteur peuvent développer des pathologies respiratoires graves, notamment l'asthme professionnel, les rhinites chroniques et les allergies respiratoires, qui affectent la santé des employés comme la continuité opérationnelle des entreprises.`,
      `Des dispositifs d'aide financière permettent aux entreprises de s'équiper sans charge excessive. L'Assurance Maladie et la CARSAT proposent une subvention couvrant jusqu'à 70 % des dépenses engagées pour l'acquisition de matériel de protection. Cette aide s'adresse aux entreprises comptant entre 1 et 49 salariés.`,
      `L'accès requiert le respect de plusieurs conditions : inscription au régime général de la Sécurité sociale, cotisations Urssaf à jour, Document Unique d'Évaluation des Risques actualisé depuis moins d'un an, adhésion à un service de santé au travail et respect du plafond de 300 000 € d'aides publiques sur trois ans.`,
      `L'aspirateur industriel ONE 22 X1 répond aux normes techniques exigées (norme NF EN 60335-2-69 de classe M), avec un système de nettoyage de filtre sans émission de particules et des sacs antistatiques. La demande s'effectue en ligne via net-entreprises.fr, avec attestation Urssaf, RIB, déclaration sur l'honneur et document relatif aux poussières de farine.`
    ]
  },
  {
    slug: 'x-1000-aspirez-et-liberez-votre-temps',
    title: `X1000 : aspirez et libérez votre temps`,
    excerpt: `Le X1000 est un robot aspirateur professionnel intelligent qui automatise le nettoyage des grands espaces à forte fréquentation.`,
    category: 'Actualités',
    date: '2025-07-11',
    paragraphs: [
      `Le X1000 est un robot aspirateur professionnel intelligent destiné à automatiser le nettoyage dans les environnements professionnels à forte fréquentation. Il s'adapte à des espaces variés : open spaces, restaurants, hôtels, surfaces commerciales, établissements scolaires et bâtiments publics.`,
      `Sa cartographie intelligente scanne l'environnement en temps réel, crée des plans détaillés et optimise la couverture sans laisser de zones oubliées. L'approche repose sur la cobotique : le X1000 travaille aux côtés du personnel en prenant en charge les tâches répétitives, libérant du temps pour les interventions spécifiques, plutôt que de remplacer les équipes.`,
      `Côté technique, il offre une puissance d'aspiration de 20 000 Pa, une couverture jusqu'à 1 000 m², un rendement d'environ 250 m²/heure, une autonomie de 6 heures, un réservoir de 3 litres et un niveau sonore de 62 dB.`,
      `Ses avantages incluent l'amélioration de la qualité de l'air grâce à un filtre HEPA, la réduction de la charge physique, la diminution du bruit, un gain d'efficacité et une image modernisée pour l'entreprise.`
    ]
  }
];

export const getConseil = (slug: string) =>
  CONSEILS.find((c) => c.slug === slug) ?? null;
