import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, ShieldCheck, BadgeCheck, MessageSquareQuote, CalendarX2, Clock, Ruler, Sparkles, Users, CalendarCheck, Wallet } from 'lucide-react'
import { APP_ID, buildMetadata, faqJsonLd, itemListJsonLd, pageJsonLd } from '@/lib/seo'
import {
  CLIENT_TESTIMONIALS,
  DATA,
  FEATURED_SALONS,
  SITE_URL,
  APP_STORE_URL,
  fill,
  has,
  bwSrc,
} from '@/lib/site-config'
import { HOME_FAQ } from '@/content/faq'
import { PUBLISHED_STYLES } from '@/content/coiffures'
import { JsonLd } from '@/components/JsonLd'
import { Reveal } from '@/components/Reveal'
import { SectionHeader } from '@/components/SectionHeader'
import { DownloadBlock } from '@/components/DownloadBlock'
import { PhoneMockup } from '@/components/PhoneMockup'
import { StepCard } from '@/components/StepCard'
import { StyleTabs } from '@/components/StyleTabs'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBlock } from '@/components/CtaBlock'
import { PhotoBackdrop } from '@/components/PhotoBackdrop'
import dynamic from 'next/dynamic'

// Démo sous le pli : son JavaScript est chargé à part, hors du chemin critique.
const AgendaDemo = dynamic(() => import('@/components/AgendaDemo').then((m) => m.AgendaDemo))

export const metadata = buildMetadata({
  title: 'Sankéa : l’app de réservation de coiffure afro',
  description:
    'Tresses, locks, knotless, dégradés, coupes enfants. Trouve un salon afro près de chez toi, compare les prix et réserve en ligne avec Sankéa.',
  path: '/',
  ogTitle: 'Ta coiffure afro, réservée en quelques secondes.',
})

const appJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  '@id': APP_ID,
  name: 'Sankéa',
  alternateName: 'Sankéa : l’app de réservation de coiffure afro',
  url: SITE_URL,
  inLanguage: 'fr-FR',
  installUrl: APP_STORE_URL,
  screenshot: ['/screens/accueil.png', '/screens/services.png', '/screens/creneaux.png', '/screens/paiement.png'].map((s) => `${SITE_URL}${s}`),
  featureList: ['Salons et coiffeurs afro vérifiés', 'Prix et durées affichés avant la réservation', 'Disponibilités en direct', 'Paiement sécurisé par Stripe', 'Rappel du rendez-vous la veille'],
  audience: { '@type': 'PeopleAudience', audienceType: 'Femmes, hommes et enfants' },
  description: 'Application mobile de réservation dédiée à la coiffure afro pour les femmes, les hommes et les enfants.',
  operatingSystem: 'iOS',
  applicationCategory: 'LifestyleApplication',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  downloadUrl: APP_STORE_URL,
  publisher: { '@id': `${SITE_URL}/#organization` },
  ...(has('NOTE') && has('NB_AVIS')
    ? { aggregateRating: { '@type': 'AggregateRating', ratingValue: DATA.NOTE, ratingCount: DATA.NB_AVIS } }
    : {}),
}

const BENEFITS = [
  { icon: Wallet, title: 'Les prix affichés d’avance', text: 'Chaque salon publie ses tarifs et ses durées, ainsi tu sais exactement ce que tu paies.' },
  { icon: CalendarCheck, title: 'Les vraies disponibilités', text: 'Tu choisis un créneau libre en direct, sans attendre de réponse.' },
  { icon: ShieldCheck, title: 'Le paiement protégé', text: 'Tu paies dans l’app via Stripe, et le salon ne reçoit jamais tes coordonnées bancaires.' },
]

const SPECIALTY = [
  { icon: Clock, title: 'Des durées réalistes', text: 'Une pose de knotless prend souvent plusieurs heures : l’app l’affiche dès le départ, donc tu organises ta journée sans surprise.' },
  { icon: Sparkles, title: 'Les mèches, sans ambiguïté', text: 'Chaque prestation indique si les mèches sont incluses ou si tu dois les apporter.' },
  { icon: Ruler, title: 'Ta coiffure sur mesure', text: 'Tu choisis la longueur, l’épaisseur et les options au moment de réserver.' },
  { icon: BadgeCheck, title: 'Des spécialistes, uniquement', text: 'Tu n’as plus besoin de vérifier qu’un salon sait coiffer les cheveux texturés.' },
]

const STEPS = [
  { title: 'Trouve ton salon', text: 'Filtre par coiffure, quartier et budget, puis compare les avis et les réalisations.' },
  { title: 'Réserve et paie', text: 'Choisis ton créneau en direct et règle ta prestation en toute sécurité.' },
  { title: 'Fais-toi coiffer', text: 'Le salon t’attend, et l’app te rappelle ton rendez-vous la veille.' },
]

const TRUST = [
  { icon: ShieldCheck, title: 'Paiement sécurisé', text: 'Stripe traite chaque transaction, et Sankéa ne stocke aucune donnée bancaire.' },
  { icon: BadgeCheck, title: 'Salons vérifiés', text: 'L’équipe Sankéa contrôle chaque salon avant sa mise en ligne. {{PROCESSUS_VERIFICATION}}' },
  { icon: MessageSquareQuote, title: 'Avis authentiques', text: 'Seuls les clients qui ont réellement eu leur rendez-vous peuvent laisser un avis.' },
  { icon: CalendarX2, title: 'Annulation claire', text: 'Tu annules gratuitement jusqu’à {{DELAI_ANNULATION}} avant ton rendez-vous.' },
]

const SCREENS = [
  { src: '/screens/accueil.png', alt: 'Écran d’accueil de l’app Sankéa avec les coiffures et les salons', caption: 'Pour toute la famille : femmes, hommes et enfants trouvent leur salon.' },
  { src: '/screens/services.png', alt: 'Écran des prestations d’un salon avec prix et durées', caption: 'Des tarifs clairs : chaque prestation affiche son prix et sa durée.' },
  { src: '/screens/creneaux.png', alt: 'Écran de choix d’un créneau de réservation', caption: 'Ton créneau, en direct : tu vois les disponibilités réelles du salon.' },
  { src: '/screens/paiement.png', alt: 'Écran de paiement sécurisé dans l’app Sankéa', caption: 'Un paiement sécurisé : tu règles en quelques secondes avec Stripe.' },
]

export default function HomePage() {
  const stats = [
    { value: DATA.NB_SALONS, label: 'salons et coiffeurs afro' },
    { value: DATA.NB_VILLES, label: 'villes couvertes' },
    { value: DATA.NOTE ? `${DATA.NOTE} ★` : null, label: 'note moyenne sur l’App Store' },
    { value: '24h/24', label: 'réservation en ligne' },
  ].filter((s) => s.value)

  const proof = [DATA.NOTE ? `★ ${DATA.NOTE} sur l’App Store` : null, DATA.NB_SALONS ? `${DATA.NB_SALONS} salons afro vérifiés` : null].filter(Boolean)

  return (
    <>
      <JsonLd
        data={[
          pageJsonLd({
            path: '/',
            name: 'Sankéa : l’app de réservation de coiffure afro',
            description: metadata.description as string,
            image: '/photos/hero-bg.webp',
            mainEntity: { '@id': APP_ID },
            breadcrumb: false,
          }),
          appJsonLd,
          faqJsonLd(HOME_FAQ.map((f) => ({ q: f.q, a: fill(f.a) })), '/'),
          itemListJsonLd('Coiffures afro sur Sankéa', PUBLISHED_STYLES.map((st) => ({ name: st.name, path: `/coiffures/${st.slug}` }))),
        ]}
      />

      {/* 1. Hero */}
      <section className="on-dark relative isolate overflow-hidden bg-ink text-white">
        <PhotoBackdrop
          src="/photos/hero-bg.webp"
          alt="Portrait d’une femme avec une coiffure afro volumineuse et des boucles d’oreilles en cauris"
          position="68% center"
          overlay="bg-black/60"
          bw={false}
          priority
        />
        <div className="container-site relative flex min-h-[100svh] flex-col items-center justify-center pb-16 pt-28 text-center">
          <div className="hero-in flex max-w-3xl flex-col items-center">
            <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-tightest md:text-7xl [&_em]:font-normal [&_em]:italic">
              Ta coiffure afro, <em>réservée</em> en quelques secondes.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
              Tresses, knotless, locks, dégradés ou coupes enfants : Sankéa te montre les salons afro près de chez toi, avec leurs prix, leurs durées et leurs réalisations. Ensuite, tu réserves et tu paies dans l’app, sans DM ni appel.
            </p>
            <div className="mt-8">
              <DownloadBlock section="hero" dark center />
            </div>
            {proof.length ? <p className="mt-6 text-sm font-medium text-white/70">{proof.join(' · ')}</p> : null}
          </div>
        </div>
      </section>

      {/* 5. Coiffures */}
      <section id="coiffures" className="section-y bg-white">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              title={<>Toutes les coiffures afro, <em>une seule app</em>.</>}
              text="Des tresses aux dégradés, en passant par les locks et les coupes enfants, trouve la prestation et le salon qui te correspondent."
            />
          </Reveal>
          <div className="mt-10">
            <StyleTabs limit={8} />
          </div>
          <Link href="/coiffures" className="mt-8 inline-flex items-center gap-2 font-semibold underline underline-offset-4">
            Voir toutes les coiffures <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      {/* 2. Preuves */}
      {stats.length >= 2 ? (
        <section className="border-b border-line bg-paper-soft">
          <div className="container-site grid grid-cols-2 gap-6 py-10 md:grid-cols-4 md:py-14">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-4xl font-semibold md:text-5xl">{s.value}</p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* 3. Le problème */}
      <section className="section-y bg-paper-soft">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              title="Réserver sa coiffure afro ne devrait pas prendre une semaine."
              text="D’abord, tu envoies des DM pour connaître un prix. Ensuite, tu attends une réponse qui n’arrive pas. Puis tu verses un acompte par virement à quelqu’un que tu n’as jamais vu. Enfin, le jour J, personne ne sait vraiment combien de temps la prestation va durer."
            />
            <p className="mt-6 font-display text-3xl font-semibold italic md:text-4xl">Sankéa change ça.</p>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="card card-hover h-full p-6 md:p-8">
                  <b.icon className="h-6 w-6" aria-hidden />
                  <h3 className="mt-4 font-display text-xl font-semibold">{b.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Spécialité */}
      <section className="on-dark section-y relative isolate overflow-hidden bg-ink text-white">
        <PhotoBackdrop src="/styles/naturels.jpg" alt="Femme de profil avec des cheveux naturels bouclés et volumineux" position="center 30%" overlay="bg-black/75" />
        <div className="container-site">
          <Reveal>
            <SectionHeader
              title={<>Une app pensée pour les <em>cheveux afro</em>.</>}
              answer="Sankéa référence uniquement des salons et des coiffeurs spécialisés dans les cheveux afro, crépus, frisés et bouclés. L’app intègre aussi ce que les plateformes généralistes ignorent : les prestations de plusieurs heures, les mèches, la longueur et l’épaisseur des tresses."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SPECIALTY.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div className="h-full border-t border-white/60 pt-5">
                  <s.icon className="h-5 w-5" aria-hidden />
                  <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Comment ça marche */}
      <section id="comment" className="section-y">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              title="Comment réserver ta coiffure afro avec Sankéa ?"
              answer="Réserver une coiffure afro avec Sankéa prend trois étapes. D’abord, tu choisis ta coiffure et un salon près de chez toi. Ensuite, tu sélectionnes un créneau et tu paies dans l’app. Enfin, tu te présentes au rendez-vous, sans rien à régler sur place."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <StepCard number={i + 1} title={s.title} text={s.text} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <DownloadBlock section="comment-ca-marche" />
          </div>
        </div>
      </section>

      {/* 7. Confiance */}
      <section className="on-dark section-y relative isolate overflow-hidden bg-ink text-white">
        <PhotoBackdrop src="/styles/perruques.jpg" alt="Femme avec une coiffure lisse soignée, réalisée par un salon vérifié" position="center 25%" overlay="bg-black/80" />
        <div className="container-site">
          <Reveal>
            <SectionHeader title={<>Réserve l’esprit <em>tranquille</em>.</>} />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST.map((t, i) => (
              <Reveal key={t.title} delay={i * 70}>
                <div className="card card-hover h-full p-6">
                  <t.icon className="h-6 w-6" aria-hidden />
                  <h3 className="mt-4 font-display text-lg font-semibold">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-dark">{fill(t.text)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Salons à la une */}
      {FEATURED_SALONS.length ? (
        <section className="section-y">
          <div className="container-site">
            <Reveal>
              <SectionHeader title={<>Ils coiffent déjà <em>sur Sankéa</em>.</>} text="Découvre quelques salons et coiffeurs afro qui t’attendent dans l’app." />
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURED_SALONS.map((s) => (
                <div key={s.name} className="card overflow-hidden">
                  <div className="relative aspect-[4/5]">
                    <Image src={bwSrc(s.image)} alt={s.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-lg font-semibold">{s.name}</h3>
                    <p className="text-sm text-muted">{s.city} · {s.specialties}</p>
                    <p className="mt-1 flex items-center gap-1 text-sm font-semibold">
                      <Star className="h-3.5 w-3.5 fill-ink" aria-hidden /> {s.rating}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <a href="/app?src=salons" className="btn-pill mt-8">Voir tous les salons dans l’app</a>
          </div>
        </section>
      ) : null}

      {/* 9. Témoignages */}
      {CLIENT_TESTIMONIALS.length ? (
        <section className="section-y bg-paper-soft">
          <div className="container-site">
            <Reveal>
              <SectionHeader title="Ce qu’en disent nos clients." />
            </Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {CLIENT_TESTIMONIALS.map((t) => (
                <figure key={t.author} className="card p-6">
                  <blockquote className="leading-relaxed">« {t.quote} »</blockquote>
                  <figcaption className="mt-4 text-sm text-muted">
                    {t.author}, {t.city}, {t.detail}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* 10. Aperçu */}
      <section id="apercu" className="section-y overflow-hidden">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              title="Un aperçu de l’app"
              text="De la recherche du salon jusqu’au paiement, tout se passe au même endroit."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-8">
            {SCREENS.map((s, i) => (
              <Reveal key={s.src} delay={i * 80} className="lg:[&:nth-child(even)]:mt-14">
                <figure>
                  <PhoneMockup src={s.src} alt={s.alt} sizes="(min-width: 1024px) 240px, 45vw" className="max-w-[220px]" />
                  <figcaption className="mx-auto mt-5 max-w-[16rem] text-center text-sm leading-relaxed text-muted">{s.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Manifeste */}
      <section className="relative isolate overflow-hidden text-white">
        <Image src="/photos/editorial.jpg" alt="Deux personnes en noir et blanc, portrait éditorial de coiffure afro" fill sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-black/70" aria-hidden />
        <div className="container-site flex min-h-[28rem] flex-col items-center justify-center py-24 text-center md:min-h-[36rem]">
          <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            La beauté afro mérite un service <em className="font-normal">à la hauteur</em>.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Sankéa met en valeur le savoir-faire des salons et des coiffeurs afro. En retour, nous offrons à leurs clients une réservation simple, transparente et sécurisée.
          </p>
        </div>
      </section>

      {/* 12. Bloc salons */}
      <section className="section-y bg-paper-soft">
        <div className="container-site !max-w-[88rem] grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <h2 className="max-w-2xl font-display text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
              Remplissez votre agenda avec <em className="font-normal">Sankéa</em>.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Recevez des réservations en ligne, gérez votre équipe et encaissez vos prestations à l’avance. Ainsi, vous vous concentrez sur la coiffure, et Sankéa s’occupe du reste.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
              {[
                { icon: Users, label: 'Agenda d’équipe' },
                { icon: Wallet, label: 'Paiements à l’avance' },
                { icon: CalendarCheck, label: 'Nouveaux clients' },
              ].map((b) => (
                <li key={b.label} className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2">
                  <b.icon className="h-4 w-4" aria-hidden /> {b.label}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-display text-xl font-semibold">0 % de commission le premier mois pour les salons fondateurs.</p>
            <Link href="/pro" className="btn-pill mt-6">
              Découvrir Sankéa Pro <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <Reveal delay={120} className="lg:pr-16">
            <AgendaDemo />
          </Reveal>
        </div>
      </section>

      {/* 13. FAQ */}
      <section id="faq" className="section-y">
        <div className="container-site max-w-3xl">
          <Reveal>
            <SectionHeader title="Questions fréquentes" align="center" />
          </Reveal>
          <div className="mt-10">
            <FaqAccordion items={HOME_FAQ} />
          </div>
          <Link href="/aide" className="mt-8 inline-flex items-center gap-2 font-semibold underline underline-offset-4">
            Toutes les questions <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      {/* 14. CTA final */}
      <CtaBlock
        title={<>Ta prochaine coiffure <em>t’attend</em>.</>}
        text="Télécharge Sankéa et réserve ton salon afro dès aujourd’hui."
        section="cta-final"
        image={{ src: '/styles/knotless.jpg', alt: 'Knotless braids en cours de pose par une coiffeuse', position: 'center 30%' }}
      />

    </>
  )
}
