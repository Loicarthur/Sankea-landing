export type FaqItem = { q: string; a: string; category?: string }

export const HOME_FAQ: FaqItem[] = [
  {
    q: 'Combien coûte Sankéa pour les clients ?',
    a: 'Sankéa est gratuit pour les clients. Tu paies uniquement le prix de ta prestation, affiché par le salon avant la réservation.',
    category: 'Paiement',
  },
  {
    q: 'Comment se passe le paiement ?',
    a: 'Tu paies directement dans l’app au moment de réserver. Stripe sécurise la transaction, puis Sankéa reverse le montant au salon après ta prestation.',
    category: 'Paiement',
  },
  {
    q: 'Puis-je annuler ma réservation ?',
    a: 'Oui. Tu annules gratuitement depuis l’app jusqu’à {{DELAI_ANNULATION}} avant le rendez-vous. Au-delà, les conditions du salon s’appliquent.',
    category: 'Annulation et remboursement',
  },
  {
    q: 'Sankéa est-il disponible sur Android ?',
    a: 'Sankéa est disponible sur iPhone dès maintenant. La version Android arrive bientôt : laisse ton e-mail pour être prévenu à sa sortie.',
    category: 'Réservation',
  },
  {
    q: 'Je suis un salon, comment rejoindre Sankéa ?',
    a: 'Téléchargez l’app, puis choisissez « Créer mon salon ». L’inscription prend quelques minutes, et le premier mois est sans commission.',
  },
]

export const PRO_FAQ: FaqItem[] = [
  {
    q: 'Combien coûte Sankéa pour un salon ?',
    a: 'L’inscription est gratuite. Le premier mois est sans commission, puis Sankéa prélève {{COMMISSION}} par réservation. Il n’y a ni abonnement ni engagement.',
    category: 'Tarifs Sankéa',
  },
  {
    q: 'Quand est-ce que je reçois mes paiements ?',
    a: 'Stripe sécurise chaque paiement, puis Sankéa vous reverse le montant sous {{DELAI_VIREMENT}} après la prestation, directement sur votre compte bancaire.',
    category: 'Paiements et virements',
  },
  {
    q: 'Puis-je gérer plusieurs coiffeurs ?',
    a: 'Oui. Vous ajoutez chaque membre de votre équipe, avec son agenda, ses prestations et ses horaires.',
    category: 'Équipe et agenda',
  },
  {
    q: 'Que se passe-t-il si un client ne vient pas ?',
    a: 'Le client a déjà payé sa prestation ou son acompte. Vous appliquez votre politique d’annulation, donc vous ne perdez plus votre journée.',
    category: 'Paiements et virements',
  },
  {
    q: 'Je coiffe à domicile, puis-je utiliser Sankéa ?',
    a: 'Oui. Vous indiquez votre zone d’intervention, et vos clients réservent comme dans un salon.',
    category: 'Inscription',
  },
  {
    q: 'Sankéa Pro fonctionne-t-il sur Android ?',
    a: 'L’app est disponible sur iPhone. La version Android arrive bientôt.',
    category: 'Inscription',
  },
]

/** Questions supplémentaires du centre d’aide (clients). */
export const HELP_CLIENT_EXTRA: FaqItem[] = [
  {
    q: 'Comment modifier ma réservation ?',
    a: 'Ouvre ta réservation dans l’app, puis choisis « Modifier ». Tu changes de créneau selon les disponibilités du salon.',
    category: 'Réservation',
  },
  {
    q: 'Quand suis-je remboursé après une annulation ?',
    a: 'Sankéa lance le remboursement dès l’annulation validée. Ta banque le crédite ensuite sous {{DELAI_REMBOURSEMENT}} jours ouvrés.',
    category: 'Annulation et remboursement',
  },
  {
    q: 'Mes données bancaires sont-elles en sécurité ?',
    a: 'Oui. Stripe traite ton paiement, et Sankéa ne stocke jamais tes données bancaires.',
    category: 'Paiement',
  },
  {
    q: 'Comment laisser un avis ?',
    a: 'Après ton rendez-vous, l’app t’invite à noter le salon. Seuls les clients venus au rendez-vous peuvent laisser un avis.',
    category: 'Avis',
  },
]

export const CLIENT_CATEGORIES = ['Réservation', 'Paiement', 'Annulation et remboursement', 'Compte', 'Avis']
export const SALON_CATEGORIES = ['Inscription', 'Prestations et prix', 'Équipe et agenda', 'Paiements et virements', 'Tarifs Sankéa']

export const HELP_CLIENT: FaqItem[] = [...HOME_FAQ.filter((f) => f.category), ...HELP_CLIENT_EXTRA]
export const HELP_SALON: FaqItem[] = [
  ...PRO_FAQ,
  { ...HOME_FAQ[4], category: 'Inscription' },
]
