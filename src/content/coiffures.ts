export type Audience = 'femmes' | 'hommes' | 'enfants'

export type StylePage = {
  title: string
  metaDescription: string
  h1: string
  answer: string
  table: [string, string][]
  sections: { h2: string; body: string }[]
  faq: { q: string; a: string }[]
  ctaLabel: string
  related: string[]
}

export type Style = {
  slug: string
  name: string
  audience: Audience
  image: string
  alt: string
  /** Durée de pose affichée sur la carte du catalogue. */
  duration: string
  page?: StylePage
}

export const AUDIENCES: { id: Audience; label: string }[] = [
  { id: 'femmes', label: 'Femmes' },
  { id: 'hommes', label: 'Hommes' },
  { id: 'enfants', label: 'Enfants' },
]

const knotless: StylePage = {
  title: 'Knotless braids : prix, durée et entretien | Sankéa',
  metaDescription:
    'Combien coûtent les knotless braids et combien de temps tiennent-elles ? Prix moyens, durée de pose, entretien, puis réservation dans un salon afro.',
  h1: 'Knotless braids : prix, durée et entretien',
  answer:
    'Les knotless braids sont des tresses sans nœud à la racine. La coiffeuse commence avec tes cheveux naturels, puis ajoute progressivement les mèches. Ainsi, la coiffure tire moins sur le cuir chevelu et paraît plus naturelle. Sur Sankéa, elles coûtent en moyenne {{PRIX_KNOTLESS_BRAIDS}} € et tiennent généralement six à huit semaines.',
  table: [
    ['Prix moyen', 'dès {{PRIX_KNOTLESS_BRAIDS}} € selon la longueur et l’épaisseur'],
    ['Durée de pose', '4 à 8 heures en général'],
    ['Tenue', '6 à 8 semaines en général'],
    ['Mèches', 'incluses ou à apporter, selon le salon'],
    ['Idéal pour', 'cuir chevelu sensible, rendu naturel'],
  ],
  sections: [
    {
      h2: 'Comment se déroule la pose ?',
      body: 'D’abord, la coiffeuse démêle et sépare tes cheveux en sections. Ensuite, elle tresse chaque section en ajoutant les mèches petit à petit. Enfin, elle scelle les pointes, souvent à l’eau chaude.',
    },
    {
      h2: 'Comment entretenir tes knotless ?',
      body: 'Hydrate ton cuir chevelu deux à trois fois par semaine. De plus, dors avec un foulard ou un bonnet en satin. En revanche, évite de les garder au-delà de huit semaines pour préserver tes cheveux.',
    },
    {
      h2: 'Knotless ou box braids : quelle différence ?',
      body: 'Les box braids démarrent par un nœud à la racine, donc elles sont plus volumineuses dès le départ. En revanche, les knotless tirent moins et s’aplatissent plus naturellement.',
    },
  ],
  faq: [
    {
      q: 'Les knotless braids font-elles mal ?',
      a: 'Elles exercent moins de tension que les box braids, donc la plupart des personnes les trouvent plus confortables.',
    },
    {
      q: 'Faut-il apporter ses mèches ?',
      a: 'Cela dépend du salon : chaque prestation sur Sankéa précise si les mèches sont incluses.',
    },
    { q: 'Combien de temps dure la pose ?', a: 'Comptez quatre à huit heures selon la longueur et l’épaisseur choisies.' },
  ],
  ctaLabel: 'Réserve tes knotless braids dans l’app',
  related: ['box-braids', 'fulani-braids', 'vanilles'],
}

const degrade: StylePage = {
  title: 'Dégradé homme afro : prix et entretien | Sankéa',
  metaDescription:
    'Low fade, mid fade, taper : trouve un barbier afro près de chez toi, compare les prix des dégradés et réserve ta coupe sur Sankéa.',
  h1: 'Dégradé homme afro : prix, styles et entretien',
  answer:
    'Le dégradé afro (fade) raccourcit progressivement les cheveux crépus ou frisés sur les côtés et la nuque. Il se décline en low, mid, high fade ou taper. Sur Sankéa, un dégradé coûte en moyenne {{PRIX_DEGRADE_HOMME_AFRO}} € et demande un rafraîchissement toutes les deux à trois semaines.',
  table: [
    ['Prix moyen', 'dès {{PRIX_DEGRADE_HOMME_AFRO}} €'],
    ['Durée', '30 à 60 minutes en général'],
    ['Entretien', 'toutes les 2 à 3 semaines'],
    ['Options', 'contour, barbe, design'],
    ['Idéal pour', 'look net et facile au quotidien'],
  ],
  sections: [
    {
      h2: 'Quel dégradé choisir ?',
      body: 'Le low fade reste discret et convient au bureau. Le mid fade équilibre le contraste. Enfin, le high fade et le taper donnent un rendu plus marqué.',
    },
    {
      h2: 'Comment entretenir ton dégradé ?',
      body: 'Hydrate tes cheveux chaque jour avec une crème légère. Ensuite, brosse-les pour garder une forme régulière. Enfin, réserve ton rafraîchissement à l’avance, car les créneaux du samedi partent vite.',
    },
  ],
  faq: [
    {
      q: 'Combien coûte un dégradé avec la barbe ?',
      a: 'Le prix varie selon le barbier : l’app affiche le tarif exact avant la réservation.',
    },
    {
      q: 'Puis-je réserver le jour même ?',
      a: 'Oui, si le barbier a un créneau libre : Sankéa affiche ses disponibilités en direct.',
    },
  ],
  ctaLabel: 'Réserve ton dégradé dans l’app',
  related: ['coupe-classique-homme', 'barbe', 'waves'],
}

const tressesEnfant: StylePage = {
  title: 'Tresses enfant : prix, durée et conseils | Sankéa',
  metaDescription:
    'Nattes collées, box braids ou vanilles pour enfant : trouve un salon afro habitué aux enfants, compare les prix et réserve en ligne sur Sankéa.',
  h1: 'Tresses enfant : prix, styles et conseils',
  answer:
    'Les tresses pour enfant protègent les cheveux crépus et simplifient le quotidien des parents. Les salons privilégient des coiffures plus légères et moins serrées, comme les nattes collées ou les petites vanilles. Sur Sankéa, elles coûtent en moyenne {{PRIX_TRESSES_ENFANT}} €, selon l’âge et la longueur.',
  table: [
    ['Prix moyen', 'dès {{PRIX_TRESSES_ENFANT}} €'],
    ['Durée de pose', '1 à 4 heures en général'],
    ['Tenue', '2 à 4 semaines en général'],
    ['Styles courants', 'nattes collées, vanilles, petites box braids'],
    ['Conseil', 'éviter les tresses trop serrées'],
  ],
  sections: [
    {
      h2: 'Comment préparer la séance ?',
      body: 'Lave et démêle les cheveux la veille. De plus, prévois une collation et une activité : la pose demande de la patience.',
    },
    {
      h2: 'Pourquoi éviter les tresses trop serrées ?',
      body: 'Une tension trop forte fragilise la racine et peut abîmer les tempes. C’est pourquoi un salon habitué aux enfants adapte la tension et la taille des tresses.',
    },
  ],
  faq: [
    {
      q: 'À partir de quel âge peut-on tresser un enfant ?',
      a: 'Demande conseil au salon : il adapte la coiffure à l’âge et à la sensibilité de l’enfant.',
    },
    {
      q: 'Puis-je rester avec mon enfant ?',
      a: 'Oui, la plupart des salons l’acceptent. Précise-le dans la note de réservation.',
    },
  ],
  ctaLabel: 'Réserve les tresses de ton enfant dans l’app',
  related: ['nattes-collees', 'vanilles', 'coupe-enfant'],
}

export const STYLES: Style[] = [
  // Femmes
  { slug: 'box-braids', name: 'Box braids', audience: 'femmes', image: '/styles/box-braids.jpg', alt: 'Femme portant des box braids longues', duration: '{{DUREE_BOX_BRAIDS}}' },
  { slug: 'knotless-braids', name: 'Knotless', audience: 'femmes', image: '/styles/knotless.jpg', alt: 'Knotless braids longues vues de dos pendant la pose', duration: '4 à 8 h', page: knotless },
  { slug: 'fulani-braids', name: 'Fulani', audience: 'femmes', image: '/styles/fulani.jpg', alt: 'Femme avec de longues tresses ondulées style fulani', duration: '{{DUREE_FULANI_BRAIDS}}' },
  { slug: 'twists', name: 'Twists', audience: 'femmes', image: '/styles/twists.jpg', alt: 'Femme portant des passion twists bouclées', duration: '{{DUREE_TWISTS}}' },
  { slug: 'locks', name: 'Locks', audience: 'femmes', image: '/styles/locks.jpg', alt: 'Locks longues vues de dos', duration: '{{DUREE_LOCKS}}' },
  { slug: 'vanilles', name: 'Vanilles', audience: 'femmes', image: '/styles/vanilles.jpg', alt: 'Vanilles longues vues de dos', duration: '{{DUREE_VANILLES}}' },
  { slug: 'tissages', name: 'Tissages et extensions', audience: 'femmes', image: '/styles/tissages.jpg', alt: 'Femme avec un tissage brun ondulé', duration: '{{DUREE_TISSAGES}}' },
  { slug: 'perruques', name: 'Perruques', audience: 'femmes', image: '/styles/perruques.jpg', alt: 'Femme avec une perruque lisse noire', duration: '{{DUREE_PERRUQUES}}' },
  { slug: 'crochet-braids', name: 'Crochet', audience: 'femmes', image: '/styles/crochet.jpg', alt: 'Femme avec une coiffure crochet bouclée volumineuse', duration: '{{DUREE_CROCHET_BRAIDS}}' },
  { slug: 'cheveux-naturels', name: 'Cheveux naturels', audience: 'femmes', image: '/styles/naturels.jpg', alt: 'Femme de profil avec des cheveux naturels bouclés', duration: '{{DUREE_CHEVEUX_NATURELS}}' },
  { slug: 'coloration', name: 'Coloration', audience: 'femmes', image: '/styles/coloration.jpg', alt: 'Coloration cuivrée appliquée en salon sur des cheveux afro', duration: '{{DUREE_COLORATION}}' },
  // Hommes
  { slug: 'degrade-homme-afro', name: 'Dégradé', audience: 'hommes', image: '/photos/pro.jpg', alt: 'Homme avec un dégradé afro et une barbe taillée', duration: '30 à 60 min', page: degrade },
  { slug: 'coupe-classique-homme', name: 'Coupe classique', audience: 'hommes', image: '/styles/coupe.jpg', alt: 'Coupe afro peignée au peigne afro en salon', duration: '{{DUREE_COUPE_CLASSIQUE_HOMME}}' },
  { slug: 'barbe', name: 'Barbe', audience: 'hommes', image: '/photos/pro.jpg', alt: 'Homme souriant avec une barbe soignée', duration: '{{DUREE_BARBE}}' },
  { slug: 'twists-homme', name: 'Twists homme', audience: 'hommes', image: '/styles/twists.jpg', alt: 'Twists longs bouclés', duration: '{{DUREE_TWISTS_HOMME}}' },
  { slug: 'locks-homme', name: 'Locks homme', audience: 'hommes', image: '/styles/locks.jpg', alt: 'Locks longues vues de dos', duration: '{{DUREE_LOCKS_HOMME}}' },
  { slug: 'waves', name: 'Waves', audience: 'hommes', image: '/styles/coupe.jpg', alt: 'Coupe afro peignée en salon', duration: '{{DUREE_WAVES}}' },
  // Enfants
  { slug: 'tresses-enfant', name: 'Tresses enfant', audience: 'enfants', image: '/styles/tresses.jpg', alt: 'Tresses longues, base de tresses pour enfant', duration: '1 à 4 h', page: tressesEnfant },
  { slug: 'nattes-collees', name: 'Nattes collées', audience: 'enfants', image: '/styles/ponytail.jpg', alt: 'Cheveux tirés et attachés en queue-de-cheval lisse', duration: '{{DUREE_NATTES_COLLEES}}' },
  { slug: 'coupe-enfant', name: 'Coupe enfant', audience: 'enfants', image: '/styles/boucles.jpg', alt: 'Cheveux bouclés longs et blonds', duration: '{{DUREE_COUPE_ENFANT}}' },
  { slug: 'soins-enfant', name: 'Soins', audience: 'enfants', image: '/styles/soins.jpg', alt: 'Shampoing et soin des cheveux en salon', duration: '{{DUREE_SOINS_ENFANT}}' },
]

export function getStyle(slug: string): Style | undefined {
  return STYLES.find((s) => s.slug === slug)
}

export const PUBLISHED_STYLES = STYLES.filter((s) => s.page)
