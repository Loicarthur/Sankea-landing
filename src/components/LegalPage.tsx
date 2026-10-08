import { ExternalLink } from 'lucide-react'
import { breadcrumbJsonLd, pageJsonLd } from '@/lib/seo'
import { JsonLd } from './JsonLd'

type Props = {
  path: string
  title: string
  intro?: string
  sections: { h2: string; body: string }[]
  externalUrl?: string
  externalLabel?: string
}

export function LegalPage({ path, title, intro, sections, externalUrl, externalLabel }: Props) {
  return (
    <>
    <JsonLd
      data={[
        pageJsonLd({ path, name: title, description: intro ?? title }),
        breadcrumbJsonLd([{ name: 'Accueil', path: '/' }, { name: title, path }]),
      ]}
    />
    <section className="bg-white">
      <div className="container-site max-w-3xl py-12 md:py-20">
        <h1 className="font-display text-4xl font-semibold leading-[1.02] tracking-tightest md:text-5xl">{title}</h1>
        {intro ? <p className="mt-6 text-lg leading-relaxed text-muted">{intro}</p> : null}
        {externalUrl ? (
          <a href={externalUrl} target="_blank" rel="noreferrer" className="btn-pill mt-6">
            {externalLabel} <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
        ) : null}
        <div className="prose-sankea mt-10 space-y-8">
          {sections.map((s) => (
            <div key={s.h2}>
              <h2 className="font-display text-2xl font-semibold">{s.h2}</h2>
              <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
