import { breadcrumbJsonLd, buildMetadata, faqJsonLd, pageJsonLd } from '@/lib/seo'
import { SITE_URL, dataValue, fill } from '@/lib/site-config'
import { HOME_FAQ } from '@/content/faq'
import { JsonLd } from '@/components/JsonLd'
import { StepCard } from '@/components/StepCard'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBlock } from '@/components/CtaBlock'

export const metadata = buildMetadata({
  title: 'Comment réserver une coiffure afro en ligne | Sankéa',
  description:
    'Choisis ta coiffure, réserve ton créneau, paie en toute sécurité : découvre comment Sankéa fonctionne, de la recherche du salon jusqu’au rendez-vous.',
  path: '/comment-ca-marche',
  ogTitle: 'Comment fonctionne Sankéa ?',
})

const STEPS = [
  { title: 'Trouve ton salon', text: 'Filtre par coiffure, ville, budget et disponibilité. Puis compare les prix, les durées, les avis et les réalisations de chaque salon.' },
  { title: 'Personnalise ta prestation', text: 'Choisis la longueur, l’épaisseur et les options. L’app recalcule alors le prix et la durée en direct.' },
  { title: 'Réserve et paie', text: 'Sélectionne un créneau libre, puis paie par carte. Stripe sécurise le paiement, et tu reçois immédiatement ta confirmation.' },
  { title: 'Fais-toi coiffer', text: 'L’app te rappelle ton rendez-vous la veille. Après la prestation, tu laisses un avis pour aider les autres clients.' },
]

export default function HowItWorksPage() {
  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${SITE_URL}/comment-ca-marche#howto`,
    name: 'Comment réserver une coiffure afro avec Sankéa',
    description: 'Réserver une coiffure afro avec Sankéa : choisir son salon, personnaliser sa prestation, réserver et payer, puis se faire coiffer.',
    inLanguage: 'fr-FR',
    totalTime: 'PT5M',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'EUR', value: '0' },
    step: STEPS.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.title, text: s.text })),
  }

  return (
    <>
      <JsonLd
        data={[
          pageJsonLd({ path: '/comment-ca-marche', name: 'Comment fonctionne Sankéa ?', description: metadata.description as string, mainEntity: { '@id': `${SITE_URL}/comment-ca-marche#howto` } }),
          howTo,
          faqJsonLd(HOME_FAQ.slice(0, 3).map((f) => ({ q: f.q, a: fill(f.a) })), '/comment-ca-marche'),
          breadcrumbJsonLd([{ name: 'Accueil', path: '/' }, { name: 'Comment ça marche', path: '/comment-ca-marche' }]),
        ]}
      />

      <section className="bg-white">
        <div className="container-site py-12 md:py-20">
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.02] tracking-tightest md:text-6xl">Comment fonctionne Sankéa ?</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">
            Sankéa fonctionne en trois étapes. D’abord, tu choisis ta coiffure et un salon afro près de chez toi. Ensuite, tu réserves un créneau et tu paies dans l’app. Enfin, tu te présentes au rendez-vous : le salon a déjà reçu ta réservation et ton paiement.
          </p>
        </div>
      </section>

      <section className="section-y bg-paper-soft">
        <div className="container-site grid gap-4 md:grid-cols-2 md:gap-6">
          {STEPS.map((s, i) => (
            <div key={s.title}>
              <StepCard number={i + 1} title={`${i + 1}. ${s.title}`} text={s.text} />
            </div>
          ))}
        </div>
      </section>

      <section className="section-y">
        <div className="container-site max-w-3xl space-y-12">
          <div>
            <h2 className="font-display text-2xl font-semibold md:text-4xl">Le paiement en détail</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Tu paies au moment de la réservation. Sankéa conserve ensuite le paiement, puis le reverse au salon après ta prestation. Ainsi, tu ne transfères jamais d’argent directement à un inconnu.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold md:text-4xl">Annulation et retard</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Tu annules gratuitement jusqu’à {dataValue('DELAI_ANNULATION')} avant ton rendez-vous. Au-delà, ou en cas d’absence, les conditions du salon s’appliquent. En cas de retard, préviens le salon via l’app.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold md:text-4xl">Comment Sankéa vérifie les salons</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{dataValue('PROCESSUS_VERIFICATION')}</p>
          </div>
        </div>
      </section>

      <section className="section-y bg-paper-soft">
        <div className="container-site max-w-3xl">
          <h2 className="font-display text-2xl font-semibold md:text-4xl">Questions fréquentes</h2>
          <div className="mt-8">
            <FaqAccordion items={HOME_FAQ.slice(0, 3)} />
          </div>
        </div>
      </section>

      <CtaBlock
        title="Télécharger Sankéa"
        text="Gratuit pour les clients. Réserve ton salon afro en quelques secondes."
        section="comment-ca-marche-cta"
        image={{ src: '/styles/tresses.jpg', alt: 'Tresses longues vues de dos pendant la pose', position: 'center 30%' }}
      />
    </>
  )
}
