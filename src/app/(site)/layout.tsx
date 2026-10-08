import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { JsonLd } from '@/components/JsonLd'
import { organizationJsonLd, websiteJsonLd } from '@/lib/seo'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
      <Header
        links={[
          { label: 'Coiffures', href: '/coiffures' },
          { label: 'Comment ça marche', href: '/comment-ca-marche' },
          { label: 'Blog', href: '/blog' },
        ]}
        secondaryCta={{ label: 'Pour les salons', href: '/pro' }}
        ctaLabel="Télécharger l’app"
      />
      <main id="contenu">{children}</main>
      <Footer />
    </>
  )
}
