import { breadcrumbJsonLd, buildMetadata, faqJsonLd, pageJsonLd } from '@/lib/seo'
import { SITE_URL, fill } from '@/lib/site-config'
import { CLIENT_CATEGORIES, HELP_CLIENT, HELP_SALON, SALON_CATEGORIES } from '@/content/faq'
import { JsonLd } from '@/components/JsonLd'
import { HelpCenter } from '@/components/HelpCenter'

export const metadata = buildMetadata({
  title: 'Aide et questions fréquentes | Sankéa',
  description: 'Réservation, paiement, annulation, remboursement, avis : toutes les réponses à tes questions sur Sankéa, pour les clients et pour les salons.',
  path: '/aide',
  ogTitle: 'Aide et questions fréquentes',
})

export default function HelpPage() {
  const all = [...HELP_CLIENT, ...HELP_SALON].map((f) => ({ q: f.q, a: fill(f.a) }))
  return (
    <>
      <JsonLd
        data={[
          pageJsonLd({ path: '/aide', name: 'Aide et questions fréquentes', description: metadata.description as string, mainEntity: { '@id': `${SITE_URL}/aide#faq` } }),
          faqJsonLd(all, '/aide'),
          breadcrumbJsonLd([{ name: 'Accueil', path: '/' }, { name: 'Aide', path: '/aide' }]),
        ]}
      />
      <section className="bg-white">
        <div className="container-site py-12 md:py-20">
          <h1 className="font-display text-4xl font-semibold leading-[1.02] tracking-tightest md:text-6xl">Comment pouvons-nous t’aider ?</h1>
          <div className="mt-10">
            <HelpCenter client={HELP_CLIENT} salon={HELP_SALON} clientCategories={CLIENT_CATEGORIES} salonCategories={SALON_CATEGORIES} />
          </div>
        </div>
      </section>
    </>
  )
}
