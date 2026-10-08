/**
 * Configuration centrale du site Sankéa.
 * Toutes les données à remplacer avant mise en ligne sont ici : une valeur `null`
 * s'affiche sous forme de placeholder visible « [CLE] » dans les textes,
 * et masque automatiquement les sections qui en dépendent (chiffres, témoignages…).
 */

/** Domaine canonique : san-kea.com redirige (307) vers www.san-kea.com, donc www fait foi partout. */
export const SITE_URL = 'https://www.san-kea.com'
export const SITE_NAME = 'Sankéa'

/** Passe à true quand l'app Android est publiée (et renseigne PLAY_STORE_URL). */
export const ANDROID_AVAILABLE = false

export const APP_STORE_ID = '6766547853'
export const APP_STORE_URL = 'https://apps.apple.com/fr/app/sank%C3%A9a/id6766547853'
export const PLAY_STORE_URL: string | null = null

export const SOCIALS = {
  instagram: 'https://www.instagram.com/sankea.officiel',
  linkedin: 'https://www.linkedin.com/in/sankea-officiel-256a6240b',
  tiktok: null as string | null,
}

export const HOSTED_LEGAL = {
  privacy: 'https://admin.san-kea.com/privacy',
  terms: 'https://admin.san-kea.com/terms',
}

/** Phrase d'entité : à reprendre à l'identique partout. */
export const ENTITY_SENTENCE =
  'Sankéa est une application mobile de réservation dédiée à la coiffure afro. Elle permet aux femmes, aux hommes et aux enfants de trouver un salon ou un coiffeur afro, de comparer les prix et les durées, puis de réserver et payer en ligne. Les salons y gèrent leurs rendez-vous, leur équipe et leurs paiements.'

export const ENTITY_SHORT = "Sankéa, l'application de réservation dédiée à la coiffure afro."

/** Valeurs à renseigner. Les montants et durées ci-dessous sont des ESTIMATIONS provisoires
 * (affichées avec « environ ») : remplacez-les par vos chiffres réels.
 * `null` = placeholder visible [CLE] + section masquée si elle en dépend. */
export const DATA: Record<string, string | null> = {
  // Chiffres de preuve : laissés vides tant qu'ils ne sont pas réels (sections masquées)
  NB_SALONS: null,
  NB_VILLES: null,
  VILLES: null,
  NOTE: null,
  NB_AVIS: null,
  // Prix « à partir de » par style (estimation)
  PRIX_BOX_BRAIDS: 'environ 70',
  PRIX_KNOTLESS_BRAIDS: 'environ 90',
  PRIX_FULANI_BRAIDS: 'environ 80',
  PRIX_TWISTS: 'environ 70',
  PRIX_LOCKS: 'environ 80',
  PRIX_VANILLES: 'environ 70',
  PRIX_TISSAGES: 'environ 60',
  PRIX_PERRUQUES: 'environ 50',
  PRIX_CROCHET_BRAIDS: 'environ 60',
  PRIX_CHEVEUX_NATURELS: 'environ 40',
  PRIX_COLORATION: 'environ 50',
  PRIX_DEGRADE_HOMME_AFRO: 'environ 20',
  PRIX_COUPE_CLASSIQUE_HOMME: 'environ 15',
  PRIX_BARBE: 'environ 10',
  PRIX_TWISTS_HOMME: 'environ 40',
  PRIX_LOCKS_HOMME: 'environ 50',
  PRIX_WAVES: 'environ 20',
  PRIX_TRESSES_ENFANT: 'environ 35',
  PRIX_NATTES_COLLEES: 'environ 25',
  PRIX_COUPE_ENFANT: 'environ 12',
  PRIX_SOINS_ENFANT: 'environ 20',
  // Durées de pose (estimation)
  DUREE_BOX_BRAIDS: '4 à 7 h',
  DUREE_FULANI_BRAIDS: '3 à 6 h',
  DUREE_TWISTS: '3 à 5 h',
  DUREE_LOCKS: '3 à 6 h',
  DUREE_VANILLES: '2 à 4 h',
  DUREE_TISSAGES: '2 à 3 h',
  DUREE_PERRUQUES: '1 à 2 h',
  DUREE_CROCHET_BRAIDS: '2 à 4 h',
  DUREE_CHEVEUX_NATURELS: '1 à 2 h',
  DUREE_COLORATION: '2 à 3 h',
  DUREE_COUPE_CLASSIQUE_HOMME: '30 à 45 min',
  DUREE_BARBE: '15 à 30 min',
  DUREE_TWISTS_HOMME: '2 à 3 h',
  DUREE_LOCKS_HOMME: '2 à 4 h',
  DUREE_WAVES: '30 à 45 min',
  DUREE_NATTES_COLLEES: '1 à 2 h',
  DUREE_COUPE_ENFANT: '20 à 30 min',
  DUREE_SOINS_ENFANT: '30 à 60 min',
  // Règles (estimation)
  COMMISSION: '10 %',
  MONTANT: 'environ 108',
  DELAI_ANNULATION: '24 heures',
  DELAI_VIREMENT: 'environ 3 jours ouvrés',
  DELAI_REMBOURSEMENT: '5 à 10',
  DELAI_REPONSE: '48 heures',
  // Entreprise
  ANNEE: '2025',
  FONDATEURS: 'l’équipe fondatrice de Sankéa',
  VILLE_SIEGE: 'Paris',
  HISTOIRE_FONDATEURS:
    'Nous avons vécu la même galère que toi : envoyer des DM pour connaître un prix, attendre une réponse, verser un acompte à quelqu’un que l’on n’a jamais vu. Un jour, nous nous sommes dit que les salons afro méritaient mieux, et leurs clients aussi. Nous avons donc créé Sankéa : une app où chaque prix, chaque durée et chaque créneau sont affichés avant de réserver.',
  PROCESSUS_VERIFICATION:
    'Avant sa mise en ligne, chaque salon fournit une pièce d’identité et son numéro SIRET, présente un portfolio de réalisations, puis passe un appel de validation avec l’équipe Sankéa.',
  RAISON_SOCIALE: 'Sankéa',
  SIRET: null,
  ADRESSE_SIEGE: 'Paris, France',
  // Contacts (adresse unique tant que les autres boîtes n'existent pas)
  EMAIL_CONTACT: 'support@san-kea.com',
  EMAIL_PRO: 'support@san-kea.com',
  EMAIL_PRESSE: 'support@san-kea.com',
}

export const PRESS_KIT_URL: string | null = null

/** Témoignages réels uniquement. Tableau vide = section masquée. */
export type Testimonial = { quote: string; author: string; city: string; detail: string }
export const CLIENT_TESTIMONIALS: Testimonial[] = []
export const PRO_TESTIMONIALS: Testimonial[] = []

/** Salons à la une (avec leur accord). Tableau vide = section masquée. */
export type FeaturedSalon = { name: string; city: string; specialties: string; rating: string; image: string; alt: string }
export const FEATURED_SALONS: FeaturedSalon[] = []

/** Équipe (photos réelles). Tableau vide = section masquée. */
export type TeamMember = { name: string; role: string; line: string; image: string }
export const TEAM: TeamMember[] = []

/** Logos presse / partenaires. Vide = section masquée. */
export const PRESS_MENTIONS: { name: string; url: string }[] = []

/** Remplace {{CLE}} par la valeur configurée, ou par le placeholder visible [CLE]. */
export function fill(text: string): string {
  return text.replace(/\{\{([A-Z0-9_]+)\}\}/g, (_, key: string) => DATA[key] ?? `[${key}]`)
}

export function has(key: string): boolean {
  return Boolean(DATA[key])
}

export function dataValue(key: string): string {
  return DATA[key] ?? `[${key}]`
}

export function priceKey(slug: string): string {
  return `PRIX_${slug.toUpperCase().replace(/-/g, '_')}`
}

/** Liens store avec paramètres de campagne (section d'origine). */
export function appStoreUrl(section = 'site'): string {
  return `${APP_STORE_URL}?ct=${encodeURIComponent(section)}`
}

export function playStoreUrl(section = 'site'): string | null {
  if (!PLAY_STORE_URL) return null
  const sep = PLAY_STORE_URL.includes('?') ? '&' : '?'
  return `${PLAY_STORE_URL}${sep}utm_source=sankea-site&utm_medium=web&utm_campaign=${encodeURIComponent(section)}`
}

/** Version noir et blanc pré-rendue d'une photo de /public (voir public/bw). */
export function bwSrc(src: string): string {
  return src.startsWith('/styles/') || src.startsWith('/photos/') ? `/bw${src}` : src
}

export function absoluteUrl(path = '/'): string {
  return `${SITE_URL}${path}`
}
