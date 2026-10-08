export type BlogCategory = 'Clients' | 'Salons'

export type Post = {
  slug: string
  title: string
  metaDescription: string
  category: BlogCategory
  /** Date de publication (ISO). */
  date: string
  /** Date de dernière mise à jour (ISO). */
  updated: string
  author: string
  readingMinutes: number
  /** Mots-clés SEO de l'article (balisage schema.org). */
  keywords: string[]
  image: string
  alt: string
  excerpt: string
  /** Réponse directe (40 à 60 mots) affichée en tête d'article. */
  answer: string
  sections: { h2: string; body: string[] }[]
  related: string[]
}

const AUTHOR = 'L’équipe Sankéa'

export const POSTS: Post[] = [
  {
    slug: 'preparer-cheveux-avant-tresses',
    title: 'Comment préparer tes cheveux avant des tresses',
    metaDescription:
      'Lavage, démêlage, hydratation : les étapes simples pour préparer tes cheveux afro avant une pose de tresses, de knotless ou de twists.',
    category: 'Clients',
    date: '2026-10-08',
    updated: '2026-10-08',
    author: AUTHOR,
    readingMinutes: 4,
    keywords: ['préparer ses cheveux avant des tresses', 'cheveux afro', 'tresses', 'knotless', 'hydratation'],
    image: '/styles/box-braids.jpg',
    alt: 'Femme portant des box braids longues, cheveux préparés avant la pose',
    excerpt: 'Lavage, démêlage, hydratation : bien préparer ses cheveux rend la pose plus confortable et la coiffure plus durable.',
    answer:
      'Pour préparer tes cheveux avant des tresses, lave-les et démêle-les la veille, puis hydrate-les en profondeur. Ainsi, la coiffeuse travaille sur des cheveux souples, la pose tire moins sur le cuir chevelu et la coiffure tient mieux. Enfin, arrive les cheveux secs et sans produit lourd.',
    sections: [
      {
        h2: 'Pourquoi la préparation compte autant',
        body: [
          'D’abord, des cheveux propres et démêlés se tressent plus vite. La coiffeuse passe moins de temps à défaire les nœuds, donc la séance dure moins longtemps et reste plus confortable pour toi.',
          'Ensuite, des cheveux bien hydratés cassent moins pendant la pose. C’est particulièrement vrai pour les longues séances, comme les knotless ou les box braids.',
        ],
      },
      {
        h2: 'Les étapes à suivre la veille',
        body: [
          'Commence par un shampoing doux, puis applique un soin hydratant ou un masque que tu laisses poser quelques minutes. Ensuite, démêle tes cheveux section par section, en partant des pointes, avec les doigts ou un peigne à grosses dents.',
          'Termine par un séchage complet. Des cheveux encore humides sous les mèches mettent du temps à sécher et peuvent sentir le renfermé.',
        ],
      },
      {
        h2: 'Le jour J',
        body: [
          'Arrive les cheveux secs, sans gel ni huile épaisse : ces produits gênent l’adhérence et alourdissent la pose. De plus, vérifie dans l’app si les mèches sont incluses dans la prestation ou si tu dois les apporter.',
          'Enfin, prévois de quoi t’occuper, une collation et une bouteille d’eau. Une pose de plusieurs heures se passe beaucoup mieux quand tu es à l’aise.',
        ],
      },
    ],
    related: ['entretenir-ses-tresses', 'choisir-salon-afro'],
  },
  {
    slug: 'entretenir-ses-tresses',
    title: 'Entretenir ses tresses : 6 gestes à adopter',
    metaDescription:
      'Hydrater le cuir chevelu, protéger la nuit, laver sans abîmer : 6 gestes simples pour garder tes tresses nettes et tes cheveux en bonne santé.',
    category: 'Clients',
    date: '2026-10-08',
    updated: '2026-10-08',
    author: AUTHOR,
    readingMinutes: 4,
    keywords: ['entretenir ses tresses', 'tresses afro', 'cuir chevelu', 'bonnet en satin', 'durée des tresses'],
    image: '/styles/knotless.jpg',
    alt: 'Knotless braids longues vues de dos',
    excerpt: 'Six gestes simples pour garder tes tresses nettes plus longtemps et protéger tes cheveux naturels.',
    answer:
      'Pour entretenir tes tresses, hydrate ton cuir chevelu plusieurs fois par semaine, protège tes cheveux la nuit avec un foulard ou un bonnet en satin et lave-les doucement. De plus, évite de garder la coiffure trop longtemps : la plupart des tresses se défont après six à huit semaines.',
    sections: [
      {
        h2: '1. Hydrate ton cuir chevelu',
        body: ['Applique quelques gouttes d’huile légère ou un spray hydratant sur le cuir chevelu, deux à trois fois par semaine. Ainsi, tu limites les démangeaisons et la sécheresse sans alourdir les tresses.'],
      },
      {
        h2: '2. Protège tes tresses la nuit',
        body: ['Dors avec un foulard ou un bonnet en satin. Le tissu réduit les frottements, donc les frisottis apparaissent moins vite et la coiffure reste propre plus longtemps.'],
      },
      {
        h2: '3. Lave sans frotter',
        body: ['Dilue ton shampoing, applique-le sur le cuir chevelu avec le bout des doigts, puis rince abondamment. Ensuite, laisse sécher complètement : des tresses qui restent humides abîment les cheveux.'],
      },
      {
        h2: '4. Évite la tension',
        body: ['Évite les chignons très serrés et les accessoires lourds. En effet, une tension répétée fragilise la racine et peut abîmer les tempes.'],
      },
      {
        h2: '5. Ne garde pas ta coiffure trop longtemps',
        body: ['Même bien entretenues, les tresses se détendent avec le temps. En général, il vaut mieux les défaire après six à huit semaines pour préserver tes cheveux.'],
      },
      {
        h2: '6. Prévois la suite',
        body: ['Réserve ton prochain rendez-vous à l’avance : les créneaux du week-end partent vite. Dans l’app, tu vois les disponibilités en direct et tu choisis le moment qui t’arrange.'],
      },
    ],
    related: ['preparer-cheveux-avant-tresses', 'choisir-salon-afro'],
  },
  {
    slug: 'choisir-salon-afro',
    title: 'Comment choisir son salon de coiffure afro : 5 critères',
    metaDescription:
      'Spécialisation, prix affichés, portfolio, avis, conditions d’annulation : les 5 critères pour choisir un salon de coiffure afro sans mauvaise surprise.',
    category: 'Clients',
    date: '2026-10-08',
    updated: '2026-10-08',
    author: AUTHOR,
    readingMinutes: 3,
    keywords: ['choisir un salon de coiffure afro', 'salon afro', 'avis salon', 'prix coiffure afro', 'annulation coiffure'],
    image: '/styles/tresses.jpg',
    alt: 'Tresses longues vues de dos réalisées dans un salon afro',
    excerpt: 'Spécialisation, prix, portfolio, avis, annulation : cinq critères pour choisir un salon afro sans mauvaise surprise.',
    answer:
      'Pour choisir un salon de coiffure afro, vérifie d’abord sa spécialisation, puis compare les prix et les durées affichés. Ensuite, regarde son portfolio et les avis de vrais clients. Enfin, lis ses conditions d’annulation : un salon sérieux les annonce avant que tu réserves.',
    sections: [
      {
        h2: '1. Une vraie spécialisation',
        body: ['Choisis un salon qui travaille tous les jours les cheveux crépus, frisés et bouclés. Ainsi, tu n’as pas à vérifier que l’équipe maîtrise ta texture.'],
      },
      {
        h2: '2. Des prix et des durées affichés',
        body: ['Un salon transparent publie ses tarifs et la durée de chaque prestation. De plus, il précise si les mèches sont incluses. Tu sais donc exactement ce que tu paies et combien de temps tu bloques.'],
      },
      {
        h2: '3. Un portfolio qui te ressemble',
        body: ['Regarde les réalisations : cherche la coiffure que tu veux, sur une texture proche de la tienne. En revanche, méfie-toi des photos qui n’appartiennent pas au salon.'],
      },
      {
        h2: '4. Des avis authentiques',
        body: ['Privilégie les avis laissés par des clients qui sont réellement venus. Sur Sankéa, seuls les clients qui ont eu leur rendez-vous peuvent noter un salon.'],
      },
      {
        h2: '5. Des conditions d’annulation claires',
        body: ['Vérifie jusqu’à quand tu peux annuler gratuitement et ce qui se passe en cas de retard. Ces règles doivent apparaître avant le paiement, jamais après.'],
      },
    ],
    related: ['preparer-cheveux-avant-tresses', 'entretenir-ses-tresses'],
  },
  {
    slug: 'reduire-rendez-vous-non-honores',
    title: 'Rendez-vous non honorés : 5 façons de protéger votre agenda',
    metaDescription:
      'Paiement à l’avance, rappels automatiques, règles d’annulation claires : 5 leviers concrets pour réduire les absences dans votre salon afro.',
    category: 'Salons',
    date: '2026-10-08',
    updated: '2026-10-08',
    author: AUTHOR,
    readingMinutes: 4,
    keywords: ['rendez-vous non honorés', 'salon de coiffure afro', 'paiement à l’avance', 'rappels automatiques', 'agenda salon'],
    image: '/styles/ponytail.jpg',
    alt: 'Cliente installée sur le fauteuil d’un salon de coiffure afro',
    excerpt: 'Acompte, rappels, règles d’annulation : cinq leviers concrets pour limiter les absences et protéger votre chiffre d’affaires.',
    answer:
      'Pour réduire les rendez-vous non honorés, demandez un acompte ou un paiement à l’avance, envoyez un rappel la veille et affichez une politique d’annulation claire. De plus, confirmez vos créneaux en ligne plutôt que par DM. Ainsi, vos clients s’engagent, et vous ne perdez plus une journée entière.',
    sections: [
      {
        h2: '1. Demandez un paiement à l’avance',
        body: ['Un client qui a payé vient presque toujours. Sur une pose de plusieurs heures, un acompte ou un paiement total protège votre journée : vous gardez de quoi couvrir votre temps même en cas d’annulation tardive.'],
      },
      {
        h2: '2. Envoyez un rappel la veille',
        body: ['Beaucoup d’absences viennent d’un simple oubli. Un rappel automatique la veille suffit souvent à les éviter, et vous ne passez plus de temps à relancer vos clients un par un.'],
      },
      {
        h2: '3. Affichez une politique d’annulation claire',
        body: ['Indiquez jusqu’à quand l’annulation est gratuite et ce qui s’applique ensuite. Lorsque la règle est visible avant la réservation, les litiges deviennent rares.'],
      },
      {
        h2: '4. Centralisez vos réservations',
        body: ['Les créneaux gérés par DM se perdent, se chevauchent ou se confirment trop tard. En revanche, un agenda en ligne affiche vos disponibilités réelles, par coiffeur, à toute heure.'],
      },
      {
        h2: '5. Annoncez la durée exacte de chaque prestation',
        body: ['Une cliente qui connaît la durée d’une pose de knotless prévoit sa journée en conséquence. Elle arrive à l’heure, et vous évitez les retards qui décalent tout votre planning.'],
      },
    ],
    related: ['fixer-ses-tarifs-tresses', 'portfolio-salon-coiffure-afro'],
  },
  {
    slug: 'fixer-ses-tarifs-tresses',
    title: 'Fixer ses tarifs de tresses : méthode en 4 étapes',
    metaDescription:
      'Temps de pose, mèches, charges, positionnement : une méthode simple pour fixer des tarifs de tresses rentables et lisibles pour vos clients.',
    category: 'Salons',
    date: '2026-10-08',
    updated: '2026-10-08',
    author: AUTHOR,
    readingMinutes: 4,
    keywords: ['tarifs tresses', 'prix tresses salon', 'tarification coiffure afro', 'rentabilité salon'],
    image: '/styles/perruques.jpg',
    alt: 'Coiffure soignée réalisée dans un salon afro, exemple de prestation tarifée',
    excerpt: 'Temps de pose, mèches, charges et positionnement : une méthode simple pour des tarifs rentables et faciles à comprendre.',
    answer:
      'Pour fixer vos tarifs de tresses, partez du temps de pose réel, ajoutez le coût des mèches et vos charges, puis comparez avec les salons voisins. Enfin, affichez un prix par longueur et par épaisseur. Ainsi, vos clients comprennent ce qu’ils paient, et vous ne travaillez plus à perte sur les poses longues.',
    sections: [
      {
        h2: '1. Mesurez votre temps de pose réel',
        body: ['Chronométrez vos dernières prestations par style, longueur et épaisseur. Une pose de knotless peut varier du simple au double selon la finesse des tresses : votre tarif doit suivre cet écart.'],
      },
      {
        h2: '2. Ajoutez les mèches et vos charges',
        body: ['Comptez le coût des mèches si vous les fournissez, puis votre part de loyer, de matériel et de charges. Ensuite, divisez le total par le nombre d’heures réellement facturables : vous obtenez votre taux horaire minimum.'],
      },
      {
        h2: '3. Positionnez-vous par rapport aux salons voisins',
        body: ['Comparez vos prix à ceux de salons comparables dans votre zone. En revanche, ne vous alignez pas systématiquement sur le moins cher : un portfolio solide justifie un tarif plus élevé.'],
      },
      {
        h2: '4. Affichez une grille claire',
        body: ['Proposez un prix par style, avec des options de longueur et d’épaisseur. De plus, précisez si les mèches sont incluses. Une grille lisible réduit les questions en DM et les mauvaises surprises le jour du rendez-vous.'],
      },
    ],
    related: ['reduire-rendez-vous-non-honores', 'portfolio-salon-coiffure-afro'],
  },
  {
    slug: 'portfolio-salon-coiffure-afro',
    title: 'Portfolio de salon : 6 conseils pour photographier vos réalisations',
    metaDescription:
      'Lumière, cadrage, avant/après, accord des clients : 6 conseils pour des photos de coiffures afro qui donnent envie de réserver.',
    category: 'Salons',
    date: '2026-10-08',
    updated: '2026-10-08',
    author: AUTHOR,
    readingMinutes: 4,
    keywords: ['portfolio coiffeur afro', 'photos coiffure', 'réalisations salon', 'visibilité salon'],
    image: '/styles/naturels.jpg',
    alt: 'Portrait de profil d’une femme aux cheveux naturels, exemple de photo de réalisation',
    excerpt: 'Lumière, cadrage, accord des clients : six conseils pour des photos de réalisations qui donnent envie de réserver.',
    answer:
      'Pour réussir les photos de votre portfolio, photographiez en lumière naturelle, cadrez la coiffure sous plusieurs angles et gardez un fond neutre. Demandez toujours l’accord de votre client avant de publier. Ainsi, vos futurs clients voient exactement ce que vous savez faire, et ils réservent en confiance.',
    sections: [
      {
        h2: '1. Privilégiez la lumière naturelle',
        body: ['Placez votre cliente près d’une fenêtre, sans contre-jour. La lumière douce montre la finition des tresses et la brillance des cheveux sans les écraser.'],
      },
      {
        h2: '2. Prenez plusieurs angles',
        body: ['Photographiez de face, de profil et de dos. En effet, un client veut voir le tracé des raies, la longueur et le rendu d’ensemble avant de choisir.'],
      },
      {
        h2: '3. Gardez un fond neutre',
        body: ['Un mur uni met la coiffure en valeur. Rangez les produits et les outils du cadre : ils détournent l’attention.'],
      },
      {
        h2: '4. Montrez les détails',
        body: ['Ajoutez un gros plan sur les racines et les pointes. Ces détails prouvent la qualité de votre travail et rassurent les clients qui craignent la tension sur le cuir chevelu.'],
      },
      {
        h2: '5. Demandez toujours l’accord du client',
        body: ['Obtenez son accord avant de publier, et respectez son choix de montrer ou non son visage. C’est une règle de confiance autant qu’une obligation légale.'],
      },
      {
        h2: '6. Mettez à jour régulièrement',
        body: ['Publiez vos nouvelles réalisations chaque semaine. Un portfolio vivant prouve que votre salon travaille, et il met en avant vos styles du moment.'],
      },
    ],
    related: ['fixer-ses-tarifs-tresses', 'gerer-agenda-equipe-salon'],
  },
  {
    slug: 'gerer-agenda-equipe-salon',
    title: 'Gérer l’agenda d’une équipe de coiffeurs : bonnes pratiques',
    metaDescription:
      'Un agenda par coiffeur, des durées réalistes, des pauses prévues : les bonnes pratiques pour organiser le planning d’un salon afro sans surcharge.',
    category: 'Salons',
    date: '2026-10-08',
    updated: '2026-10-08',
    author: AUTHOR,
    readingMinutes: 3,
    keywords: ['agenda salon de coiffure', 'planning équipe coiffeurs', 'gestion salon afro', 'durée des prestations'],
    image: '/styles/boucles.jpg',
    alt: 'Cheveux bouclés longs, exemple d’une prestation planifiée en salon',
    excerpt: 'Un agenda par coiffeur, des durées réalistes et des pauses prévues : organisez le planning de votre équipe sans surcharge.',
    answer:
      'Pour gérer l’agenda d’une équipe de coiffeurs, donnez à chacun son planning, ses prestations et ses horaires, puis affichez des durées réalistes pour chaque pose. Ensuite, prévoyez des pauses entre les longues séances. Ainsi, vos clients réservent les bons créneaux, et votre équipe évite les retards en cascade.',
    sections: [
      {
        h2: 'Un agenda par coiffeur',
        body: ['Chaque membre de l’équipe a ses propres horaires et ses propres prestations. Un barbier ne propose pas les mêmes créneaux qu’une spécialiste des tresses : l’agenda doit refléter ces différences.'],
      },
      {
        h2: 'Des durées réalistes',
        body: ['Une durée trop courte décale toute la journée. Basez-vous sur vos temps réels, puis ajoutez une marge pour l’accueil et le paiement.'],
      },
      {
        h2: 'Des pauses entre les poses longues',
        body: ['Après une pose de plusieurs heures, prévoyez un temps de pause. De plus, évitez d’enchaîner deux poses longues dans la même journée pour le même coiffeur.'],
      },
      {
        h2: 'Un seul endroit pour les réservations',
        body: ['Centralisez les réservations dans un agenda en ligne plutôt que dans vos DM. Vos clients voient les créneaux libres en direct, donc vous ne confirmez plus chaque rendez-vous à la main.'],
      },
    ],
    related: ['reduire-rendez-vous-non-honores', 'fixer-ses-tarifs-tresses'],
  }
]

export function getPost(slug: string, category?: BlogCategory): Post | undefined {
  return POSTS.find((p) => p.slug === slug && (!category || p.category === category))
}

export function postsFor(category: BlogCategory): Post[] {
  return POSTS.filter((p) => p.category === category).sort((a, b) => b.updated.localeCompare(a.updated))
}

/** Chemin public d'un article : blog clients sous /blog, blog salons sous /pro/blog. */
export function postPath(post: Pick<Post, 'slug' | 'category'>): string {
  return post.category === 'Salons' ? `/pro/blog/${post.slug}` : `/blog/${post.slug}`
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}
