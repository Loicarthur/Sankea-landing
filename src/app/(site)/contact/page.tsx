import { Download } from 'lucide-react'
import { ORG_ID, breadcrumbJsonLd, buildMetadata, pageJsonLd } from '@/lib/seo'
import { JsonLd } from '@/components/JsonLd'
import { PRESS_KIT_URL, dataValue } from '@/lib/site-config'
import { ContactForm } from '@/components/ContactForm'

export const metadata = buildMetadata({
  title: 'Contacter Sankéa : clients, salons et presse',
  description: 'Une question sur une réservation, un partenariat ou un article ? Écris à l’équipe Sankéa : clients, salons et presse.',
  path: '/contact',
  ogTitle: 'Contacte-nous',
})

export default function ContactPage() {
  const blocks = [
    { title: 'Clients', email: dataValue('EMAIL_CONTACT') },
    { title: 'Salons', email: dataValue('EMAIL_PRO') },
    { title: 'Presse', email: dataValue('EMAIL_PRESSE') },
  ]
  return (
    <>
    <JsonLd
      data={[
        pageJsonLd({ path: '/contact', name: 'Contacter Sankéa', description: metadata.description as string, type: 'ContactPage', mainEntity: { '@id': ORG_ID } }),
        breadcrumbJsonLd([{ name: 'Accueil', path: '/' }, { name: 'Contact', path: '/contact' }]),
      ]}
    />
    <section className="bg-white">
      <div className="container-site py-12 md:py-20">
        <h1 className="font-display text-4xl font-semibold leading-[1.02] tracking-tightest md:text-6xl">Contacte-nous</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Une question sur une réservation, un partenariat ou un article ? Écris-nous, et l’équipe te répond sous {dataValue('DELAI_REPONSE')}.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {blocks.map((b) => (
            <div key={b.title} className="card p-6">
              <p className="eyebrow">{b.title}</p>
              <a href={`mailto:${b.email}`} className="mt-2 block break-all font-display text-xl font-semibold underline-offset-4 hover:underline">
                {b.email}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <ContactForm />
          <div id="presse" className="scroll-mt-24">
            <h2 className="font-display text-2xl font-semibold">Presse</h2>
            <p className="mt-3 leading-relaxed text-muted">Logo, captures, photos et présentation en une page.</p>
            {PRESS_KIT_URL ? (
              <a href={PRESS_KIT_URL} className="btn-pill mt-5">
                <Download className="h-4 w-4" aria-hidden /> Télécharger le kit presse
              </a>
            ) : (
              <p className="mt-5 text-sm text-muted">Le kit presse arrive bientôt. Écris à {dataValue('EMAIL_PRESSE')}.</p>
            )}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
