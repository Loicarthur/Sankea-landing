import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { JsonLd } from '@/components/JsonLd'
import { organizationJsonLd, websiteJsonLd } from '@/lib/seo'
import { PRO_TESTIMONIALS } from '@/lib/site-config'

export default function ProLayout({ children }: { children: React.ReactNode }) {
  const links = [
    { label: 'Fonctionnalités', href: '/pro#fonctionnalites' },
    { label: 'Tarifs', href: '/pro#tarifs' },
    ...(PRO_TESTIMONIALS.length ? [{ label: 'Témoignages', href: '/pro#temoignages' }] : []),
    { label: 'Blog', href: '/pro/blog' },
    { label: 'FAQ', href: '/pro#faq' },
  ]
  return (
    <div className="on-dark bg-ink text-white">
      <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
      <Header
        variant="pro"
        logoLabel="Sankéa"
        links={links}
        ctaLabel="Créer mon salon"
        sideLink={{ label: 'Vous cherchez un salon ?', href: '/' }}
      />
      <main id="contenu">{children}</main>
      <Footer />
    </div>
  )
}
