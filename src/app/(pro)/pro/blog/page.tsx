import { buildMetadata } from '@/lib/seo'
import { postsFor } from '@/content/blog'
import { BlogIndexView } from '@/components/BlogViews'

export const metadata = buildMetadata({
  title: 'Blog Sankéa Pro : conseils et guides pour salons afro',
  description:
    'Tarifs, portfolio, agenda d’équipe, rendez-vous non honorés : les conseils et guides Sankéa Pro pour développer votre salon afro.',
  path: '/pro/blog',
  ogTitle: 'Conseils et guides pour salons afro',
})

export default function ProBlogPage() {
  return (
    <BlogIndexView
      pro
      posts={postsFor('Salons')}
      title="Conseils et guides pour votre salon"
      intro="Fixer vos tarifs, soigner votre portfolio, organiser l’agenda de votre équipe : des conseils concrets pour développer votre salon afro ou votre activité de coiffeur."
      ctaTitle={<>Prêt à remplir votre <em>agenda</em> ?</>}
      ctaText="Créez votre salon sur Sankéa Pro et profitez du premier mois sans commission."
      ctaImage={{ src: '/styles/box-braids.jpg', alt: 'Box braids longues réalisées dans un salon afro' }}
    />
  )
}
