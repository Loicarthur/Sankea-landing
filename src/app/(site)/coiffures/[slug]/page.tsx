import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ORG_ID, buildMetadata, breadcrumbJsonLd, faqJsonLd, pageJsonLd } from '@/lib/seo'
import { SITE_URL, bwSrc, fill } from '@/lib/site-config'
import { PUBLISHED_STYLES, getStyle } from '@/content/coiffures'
import { JsonLd } from '@/components/JsonLd'
import { Breadcrumb } from '@/components/Breadcrumb'
import { FaqAccordion } from '@/components/FaqAccordion'
import { StyleCard } from '@/components/StyleCard'
import { CtaBlock } from '@/components/CtaBlock'
import { STYLES } from '@/content/coiffures'

type Params = Promise<{ slug: string }>

export function generateStaticParams() {
  return PUBLISHED_STYLES.map((s) => ({ slug: s.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const style = getStyle(slug)
  if (!style?.page) return {}
  return buildMetadata({
    title: style.page.title,
    description: style.page.metaDescription,
    path: `/coiffures/${slug}`,
    ogTitle: style.page.h1,
  })
}

export default async function StylePageRoute({ params }: { params: Params }) {
  const { slug } = await params
  const style = getStyle(slug)
  if (!style?.page) notFound()
  const page = style.page

  const related = page.related.map((s) => STYLES.find((x) => x.slug === s)).filter((s): s is NonNullable<typeof s> => Boolean(s))
  const crumbs = [
    { name: 'Accueil', path: '/' },
    { name: 'Coiffures', path: '/coiffures' },
    { name: style.name, path: `/coiffures/${slug}` },
  ]

  const url = `${SITE_URL}/coiffures/${slug}`
  const webPage = pageJsonLd({
    path: `/coiffures/${slug}`,
    name: page.title,
    description: page.metaDescription,
    image: style.image,
    mainEntity: { '@id': `${url}#article` },
  })
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: page.h1,
    description: page.metaDescription,
    abstract: fill(page.answer),
    image: { '@type': 'ImageObject', url: `${SITE_URL}${style.image}`, caption: style.alt },
    datePublished: '2026-10-08',
    dateModified: '2026-10-08',
    inLanguage: 'fr-FR',
    about: { '@type': 'Thing', name: style.name },
    author: { '@type': 'Organization', '@id': ORG_ID, name: 'L’équipe Sankéa' },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@id': `${url}#webpage` },
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '[data-speakable]'] },
  }

  return (
    <>
      <JsonLd
        data={[webPage, article, faqJsonLd(page.faq.map((f) => ({ q: f.q, a: fill(f.a) })), `/coiffures/${slug}`), breadcrumbJsonLd(crumbs)]}
      />

      <article>
        <header className="bg-white">
          <div className="container-site grid items-center gap-10 py-10 md:py-16 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <Breadcrumb items={[{ name: 'Accueil', href: '/' }, { name: 'Coiffures', href: '/coiffures' }, { name: style.name }]} />
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-tightest md:text-6xl">{page.h1}</h1>
              <p data-speakable className="mt-6 max-w-2xl text-lg leading-relaxed">{fill(page.answer)}</p>
            </div>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-card border border-line">
              <Image src={bwSrc(style.image)} alt={style.alt} fill priority sizes="(min-width: 1024px) 380px, 80vw" className="object-cover" />
            </div>
          </div>
        </header>

        <section className="section-y bg-paper-soft">
          <div className="container-site max-w-4xl">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">{style.name} en bref</h2>
            <dl className="card mt-6 divide-y divide-line">
              {page.table.map(([label, value]) => (
                <div key={label} className="grid gap-1 px-5 py-4 sm:grid-cols-[12rem_1fr]">
                  <dt className="font-semibold">{label}</dt>
                  <dd className="text-muted">{fill(value)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section-y">
          <div className="container-site max-w-3xl space-y-12">
            {page.sections.map((s) => (
              <div key={s.h2}>
                <h2 className="font-display text-2xl font-semibold md:text-4xl">{s.h2}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">{fill(s.body)}</p>
              </div>
            ))}
          </div>
        </section>

        <CtaBlock
          title={page.ctaLabel}
          text="Compare les salons spécialisés près de chez toi, choisis ton créneau et paie en toute sécurité."
          section={`style-${slug}`}
          image={{ src: style.image, alt: style.alt, position: 'center 30%' }}
        />

        <section className="section-y">
          <div className="container-site max-w-3xl">
            <h2 className="font-display text-2xl font-semibold md:text-4xl">Questions fréquentes</h2>
            <div className="mt-8">
              <FaqAccordion items={page.faq} />
            </div>
          </div>
        </section>

        <section className="section-y bg-paper-soft">
          <div className="container-site">
            <h2 className="font-display text-2xl font-semibold md:text-4xl">À découvrir aussi</h2>
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:max-w-4xl">
              {related.map((r) => (
                <StyleCard key={r.slug} style={r} />
              ))}
            </div>
            <Link href="/comment-ca-marche" className="mt-8 inline-block font-semibold underline underline-offset-4">
              Comment fonctionne la réservation sur Sankéa ?
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}
