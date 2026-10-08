import { buildMetadata } from '@/lib/seo'
import { postsFor } from '@/content/blog'
import { BlogIndexView } from '@/components/BlogViews'

export const metadata = buildMetadata({
  title: 'Blog : conseils et guides coiffure afro | Sankéa',
  description:
    'Préparation, entretien, choix du salon : les conseils et guides Sankéa pour bien vivre ta coiffure afro, de la préparation au rendez-vous.',
  path: '/blog',
  ogTitle: 'Conseils et guides coiffure afro',
})

export default function BlogPage() {
  return (
    <BlogIndexView
      posts={postsFor('Clients')}
      title="Conseils et guides coiffure afro"
      intro="Préparer tes cheveux, entretenir tes tresses, choisir ton salon : l’équipe Sankéa partage des conseils concrets pour bien vivre ta coiffure afro."
      ctaTitle={<>Passe des conseils à <em>la réservation</em>.</>}
      ctaText="Trouve un salon afro près de chez toi, compare les prix et réserve en quelques secondes."
      ctaImage={{ src: '/styles/locks.jpg', alt: 'Locks longues vues de dos' }}
    />
  )
}
