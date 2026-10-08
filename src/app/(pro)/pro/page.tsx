import Image from 'next/image'
import { CalendarDays, Bell, CreditCard, Globe, Images, LayoutDashboard, Scissors, Store, UserRound } from 'lucide-react'
import { PRO_APP_ID, breadcrumbJsonLd, buildMetadata, faqJsonLd, pageJsonLd } from '@/lib/seo'
import { PRO_TESTIMONIALS, SITE_URL, appStoreUrl, dataValue, fill, has } from '@/lib/site-config'
import { PRO_FAQ } from '@/content/faq'
import { JsonLd } from '@/components/JsonLd'
import { Reveal } from '@/components/Reveal'
import { SectionHeader } from '@/components/SectionHeader'
import { PhoneMockup } from '@/components/PhoneMockup'
import { StepCard } from '@/components/StepCard'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBlock } from '@/components/CtaBlock'
import { PhotoBackdrop } from '@/components/PhotoBackdrop'
import { ProCta } from '@/components/ProCta'

export const metadata = buildMetadata({
  title: 'Sankéa Pro : l’app de réservation pour salons afro',
  description:
    'Agenda d’équipe, paiement à l’avance, rappels automatiques. Sankéa remplit l’agenda des salons et barbiers afro. 0 % de commission le premier mois.',
  path: '/pro',
  ogTitle: 'Votre salon afro, plein du lundi au samedi.',
})

const proJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': PRO_APP_ID,
  name: 'Sankéa Pro',
  inLanguage: 'fr-FR',
  featureList: ['Réservation en ligne 24h/24', 'Agenda d’équipe', 'Paiement à l’avance via Stripe', 'Rappels automatiques', 'Portfolio', 'Tableau de bord du chiffre d’affaires'],
  audience: { '@type': 'BusinessAudience', audienceType: 'Salons de coiffure afro, barbiers et coiffeurs indépendants' },
  publisher: { '@id': `${SITE_URL}/#organization` },
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'iOS',
  description:
    'Application de gestion pour les salons de coiffure afro : réservation en ligne, agenda d’équipe, encaissement à l’avance via Stripe, rappels automatiques, portfolio et suivi du chiffre d’affaires.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR', description: 'Inscription gratuite, 0 % de commission le premier mois pour les salons fondateurs, sans abonnement ni engagement.' },
  url: `${SITE_URL}/pro`,
}

const PROFILES = [
  { icon: Store, title: 'Salons afro mixtes', text: 'Vous coiffez femmes, hommes et enfants avec plusieurs coiffeurs. Sankéa gère un agenda par membre de l’équipe.' },
  { icon: Scissors, title: 'Barbiers afro', text: 'Vous enchaînez les rendez-vous courts. Vos clients réservent leur dégradé en deux clics, même pendant que vous coupez.' },
  { icon: UserRound, title: 'Coiffeurs indépendants', text: 'Vous travaillez en salon ou à domicile. Sankéa vous apporte la visibilité et l’organisation d’un grand salon.' },
]

const FEATURES = [
  { icon: Globe, title: 'Réservation en ligne 24h/24', text: 'Vos clients réservent à toute heure, même quand le salon est fermé.' },
  { icon: CalendarDays, title: 'Agenda d’équipe', text: 'Chaque coiffeur a son planning, ses prestations et ses horaires.' },
  { icon: CreditCard, title: 'Paiement à l’avance', text: 'Vos clients règlent dans l’app, puis Sankéa vous reverse les fonds sous {{DELAI_VIREMENT}}.' },
  { icon: Bell, title: 'Rappels automatiques', text: 'L’app rappelle chaque rendez-vous la veille, donc les absences diminuent.' },
  { icon: Images, title: 'Portfolio', text: 'Vous publiez vos réalisations, et vos futurs clients choisissent en connaissance de cause.' },
  { icon: LayoutDashboard, title: 'Tableau de bord', text: 'Vous suivez votre chiffre d’affaires, vos rendez-vous et vos clients en un coup d’œil.' },
]

const STEPS = [
  { title: 'Téléchargez l’app', text: 'Téléchargez l’app et choisissez « Créer mon salon ».' },
  { title: 'Configurez votre salon', text: 'Ajoutez vos prestations, vos prix, vos horaires et votre équipe.' },
  { title: 'Recevez vos réservations', text: 'Recevez vos premières réservations dès la validation de votre profil.' },
]

export default function ProPage() {
  return (
    <>
      <JsonLd
        data={[
          pageJsonLd({
            path: '/pro',
            name: 'Sankéa Pro : l’app de réservation pour salons afro',
            description: metadata.description as string,
            image: '/photos/pro-bg.jpg',
            mainEntity: { '@id': PRO_APP_ID },
          }),
          proJsonLd,
          faqJsonLd(PRO_FAQ.map((f) => ({ q: f.q, a: fill(f.a) })), '/pro'),
          breadcrumbJsonLd([{ name: 'Accueil', path: '/' }, { name: 'Sankéa Pro', path: '/pro' }]),
        ]}
      />

      {/* 1. Hero */}
      <section className="relative isolate overflow-hidden">
        <PhotoBackdrop
          src="/photos/pro-bg.jpg"
          alt="Barbier tatoué qui réalise une coupe à un client dans un salon"
          position="center 35%"
          overlay="bg-black/30"
          priority
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/70 to-ink/50 lg:from-ink/60 lg:to-ink/45" aria-hidden />
        <div className="container-site flex min-h-[100svh] flex-col items-center justify-center pb-16 pt-28 text-center">
          <div className="hero-in flex max-w-3xl flex-col items-center">
            <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-tightest md:text-7xl [&_em]:font-normal [&_em]:italic">
              Votre salon afro, <em>plein</em> du lundi au samedi.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-dark">
              Sankéa reçoit vos réservations en ligne, encaisse vos prestations à l’avance et rappelle vos rendez-vous à vos clients. Ainsi, votre équipe coiffe, et l’app gère le reste.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <ProCta href={appStoreUrl('pro-hero')} section="pro-hero" className="btn-pill-inverse">
                Créer mon salon gratuitement
              </ProCta>
              <a href="#fonctionnalites" className="btn-ghost">
                Voir les fonctionnalités ↓
              </a>
            </div>
            <p className="mt-6 text-sm text-muted-dark">0 % de commission le premier mois · Sans engagement · Inscription en quelques minutes</p>
          </div>
        </div>
      </section>

      {/* 2. Pour qui */}
      <section className="section-y bg-ink-soft">
        <div className="container-site">
          <Reveal>
            <SectionHeader title={<>Sankéa Pro s’adapte à votre <em>façon de travailler</em>.</>} />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
            {PROFILES.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="card card-hover h-full p-6 md:p-8">
                  <p.icon className="h-6 w-6" aria-hidden />
                  <h3 className="mt-4 font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-dark">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Problème */}
      <section className="section-y relative isolate overflow-hidden">
        <PhotoBackdrop src="/styles/ponytail.jpg" alt="Cliente installée sur le fauteuil d’un salon de coiffure afro" position="center 35%" overlay="bg-black/80" />
        <div className="container-site">
          <Reveal>
            <SectionHeader
              title="Combien vous coûte un rendez-vous non honoré ?"
              text="Sur une pose de tresses de six heures, un client absent vous fait perdre une journée entière de chiffre d’affaires. De plus, vous passez des heures à répondre aux DM, à confirmer les créneaux et à réclamer les acomptes. Sankéa supprime ces tâches."
            />
          </Reveal>
        </div>
      </section>

      {/* 4. Fonctionnalités */}
      <section id="fonctionnalites" className="section-y bg-ink-soft scroll-mt-16">
        <div className="container-site">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <Reveal>
            <SectionHeader
              title="Tout ce dont votre salon a besoin, dans une seule app."
              answer="Sankéa Pro est une application de gestion pour les salons de coiffure afro. Elle regroupe la réservation en ligne, l’agenda d’équipe, l’encaissement à l’avance via Stripe, les rappels automatiques, le portfolio et le suivi du chiffre d’affaires."
            />
          </Reveal> 
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="card card-hover h-full p-6">
                  <f.icon className="h-6 w-6" aria-hidden />
                  <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-dark">{fill(f.text)}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 max-w-3xl border-l-2 border-white pl-5 text-lg leading-relaxed">
            <strong className="font-semibold">Spécificités afro :</strong> durées longues, options de mèches, longueur et épaisseur, acompte ou paiement total. Sankéa gère nativement ce que les logiciels généralistes compliquent.
          </p>
        </div>
      </section>

      {/* 5. Démarrer */}
      <section id="creer" className="section-y scroll-mt-16">
        <div className="container-site">
          <Reveal>
            <SectionHeader title="Lancez votre salon sur Sankéa en trois étapes." />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <StepCard number={i + 1} title={s.title} text={s.text} dark />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Tarifs */}
      <section id="tarifs" className="section-y bg-ink-soft scroll-mt-16">
        <div className="container-site">
          <Reveal>
            <SectionHeader title="Des tarifs simples, sans abonnement caché." />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-6">
            <div className="card p-6 md:p-8">
              <p className="eyebrow">Offre de lancement</p>
              <h3 className="mt-2 font-display text-2xl font-semibold">Salons fondateurs : 0 % de commission le premier mois.</h3>
              <p className="mt-3 leading-relaxed text-muted-dark">
                Vous encaissez 100 % de vos prestations pendant 30 jours, sans frais d’inscription ni engagement.
              </p>
            </div>
            <div className="card p-6 md:p-8">
              <p className="eyebrow">Ensuite</p>
              <h3 className="mt-2 font-display text-2xl font-semibold">{dataValue('COMMISSION')} par réservation.</h3>
              <p className="mt-3 leading-relaxed text-muted-dark">
                Sur une prestation de 120 €, vous recevez {dataValue('MONTANT')} €.
              </p>
            </div>
          </div>
          <p className="mt-6 text-muted-dark">
            <strong className="font-semibold text-white">Inclus :</strong> réservation en ligne, agenda d’équipe, paiements Stripe, rappels, portfolio, support.
          </p>
        </div>
      </section>

      {/* 7. Témoignages */}
      {PRO_TESTIMONIALS.length ? (
        <section id="temoignages" className="section-y scroll-mt-16">
          <div className="container-site">
            <Reveal>
              <SectionHeader title="Ils ont rempli leur agenda avec Sankéa." />
            </Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {PRO_TESTIMONIALS.map((t) => (
                <figure key={t.author} className="card p-6">
                  <blockquote className="leading-relaxed">« {t.quote} »</blockquote>
                  <figcaption className="mt-4 text-sm text-muted-dark">
                    {t.author}, {t.city}, {t.detail}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* 8. FAQ */}
      <section id="faq" className="section-y scroll-mt-16 bg-ink-soft">
        <div className="container-site max-w-3xl">
          <Reveal>
            <SectionHeader title="Questions fréquentes des salons" align="center" />
          </Reveal>
          <div className="mt-10">
            <FaqAccordion items={PRO_FAQ} dark />
          </div>
        </div>
      </section>

      {/* 9. CTA final */}
      <CtaBlock
        title={<>Prêt à remplir votre <em>agenda</em> ?</>}
        text="Créez votre salon en quelques minutes et profitez du premier mois sans commission."
        section="pro-cta-final"
        image={{ src: '/styles/box-braids.jpg', alt: 'Box braids longues réalisées dans un salon afro', position: 'center 30%' }}
        footnote={
          <>
            Une question ?{' '}
            <a href={`mailto:${has('EMAIL_PRO') ? dataValue('EMAIL_PRO') : dataValue('EMAIL_CONTACT')}`} className="font-semibold text-white underline underline-offset-4">
              {has('EMAIL_PRO') ? dataValue('EMAIL_PRO') : dataValue('EMAIL_CONTACT')}
            </a>
          </>
        }
      />
    </>
  )
}
