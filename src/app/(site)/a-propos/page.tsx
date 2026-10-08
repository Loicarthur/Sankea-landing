import Image from 'next/image'
import { ORG_ID, breadcrumbJsonLd, buildMetadata, pageJsonLd } from '@/lib/seo'
import { PRESS_MENTIONS, SITE_URL, TEAM, dataValue, fill } from '@/lib/site-config'
import { JsonLd } from '@/components/JsonLd'
import { CtaBlock } from '@/components/CtaBlock'

export const metadata = buildMetadata({
  title: 'À propos de Sankéa : notre histoire et notre mission',
  description:
    'Sankéa est née d’un constat simple : réserver une coiffure afro restait compliqué. Découvre notre histoire, notre équipe et notre mission.',
  path: '/a-propos',
  ogTitle: 'Sankéa, la coiffure afro enfin simple',
})

const COMMITMENTS = [
  { title: 'Transparence', text: 'Chaque prix et chaque durée s’affichent avant la réservation.' },
  { title: 'Sécurité', text: 'Chaque paiement passe par Stripe.' },
  { title: 'Respect des pros', text: 'Un modèle tarifaire clair, sans frais cachés.' },
  { title: 'Inclusion', text: 'Des coiffures pour les femmes, les hommes et les enfants.' },
]

export default function AboutPage() {
  const about = pageJsonLd({
    path: '/a-propos',
    name: 'À propos de Sankéa',
    description: metadata.description as string,
    type: 'AboutPage',
    mainEntity: { '@id': ORG_ID },
  })

  return (
    <>
      <JsonLd data={[about, breadcrumbJsonLd([{ name: 'Accueil', path: '/' }, { name: 'À propos', path: '/a-propos' }])]} />

      <section className="bg-white">
        <div className="container-site py-12 md:py-20">
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.02] tracking-tightest md:text-6xl">
            Sankéa, la coiffure afro enfin simple
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed">
            Sankéa est une application mobile de réservation dédiée à la coiffure afro, créée en {dataValue('ANNEE')} à {dataValue('VILLE_SIEGE')} par {dataValue('FONDATEURS')}. Elle relie les clients aux salons et coiffeurs afro, et elle gère la réservation, le paiement et l’agenda.
          </p>
        </div>
      </section>

      <section className="section-y bg-paper-soft">
        <div className="container-site max-w-3xl space-y-12">
          <div>
            <h2 className="font-display text-2xl font-semibold md:text-4xl">Pourquoi Sankéa existe</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{dataValue('HISTOIRE_FONDATEURS')}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold md:text-4xl">Notre mission</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Valoriser le savoir-faire des salons afro et offrir à leurs clients une expérience de réservation à la hauteur de ce savoir-faire.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-site">
          <h2 className="font-display text-2xl font-semibold md:text-4xl">Nos engagements</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {COMMITMENTS.map((c) => (
              <div key={c.title} className="card p-6">
                <h3 className="font-display text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {TEAM.length ? (
        <section className="section-y bg-paper-soft">
          <div className="container-site">
            <h2 className="font-display text-2xl font-semibold md:text-4xl">L’équipe</h2>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {TEAM.map((m) => (
                <div key={m.name}>
                  <div className="relative aspect-square overflow-hidden rounded-card">
                    <Image src={m.image} alt={`Portrait de ${m.name}, ${m.role}`} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold">{m.name}</h3>
                  <p className="text-sm text-muted">{m.role}</p>
                  <p className="mt-1 text-sm">{fill(m.line)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {PRESS_MENTIONS.length ? (
        <section className="section-y">
          <div className="container-site">
            <h2 className="font-display text-2xl font-semibold md:text-4xl">Ils parlent de nous</h2>
            <ul className="mt-6 flex flex-wrap gap-6">
              {PRESS_MENTIONS.map((p) => (
                <li key={p.name}>
                  <a href={p.url} target="_blank" rel="noreferrer" className="font-semibold underline underline-offset-4">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <CtaBlock
        title={<>Rejoins <em>Sankéa</em>.</>}
        text="Télécharge l’app et réserve ton salon afro dès aujourd’hui."
        section="a-propos-cta"
        image={{ src: '/photos/editorial.jpg', alt: 'Portrait éditorial en noir et blanc de deux personnes aux tresses', position: 'center 30%' }}
      />
    </>
  )
}
