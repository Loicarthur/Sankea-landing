import Image from 'next/image'
import {
  Search,
  CalendarCheck,
  CreditCard,
  Sparkles,
  Store,
  Wallet,
  TrendingUp,
  Images,
  Instagram,
  Linkedin,
  Mail,
  ShieldCheck,
  MapPin,
  ArrowUpRight,
} from 'lucide-react'
import { Reveal } from '@/components/Reveal'

const PRIVACY_URL = 'https://admin.san-kea.com/privacy'
const TERMS_URL = 'https://admin.san-kea.com/terms'
const INSTAGRAM_URL = 'https://www.instagram.com/sankea.officiel'
const LINKEDIN_URL = 'https://www.linkedin.com/in/sankea-officiel-256a6240b'
const SUPPORT_EMAIL = 'support@san-kea.com'
const APP_STORE_URL = 'https://apps.apple.com/fr/app/sank%C3%A9a/id6766547853'

function StoreBadge({ store, dark = false }: { store: 'apple' | 'google'; dark?: boolean }) {
  const isApple = store === 'apple'
  // iOS est disponible → badge Apple cliquable vers l'App Store. Android reste « Bientôt ».
  const available = isApple
  const label = available
    ? "Télécharger sur l'App Store"
    : isApple
      ? "Bientôt sur l'App Store"
      : 'Bientôt sur Google Play'
  const colors = dark ? 'border-white/15 bg-ink text-white' : 'border-ink/15 bg-ink text-white'

  const inner = (
    <>
      {isApple ? (
        <svg viewBox="0 0 384 512" className="h-7 w-7 fill-white" aria-hidden>
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
        </svg>
      ) : (
        <svg viewBox="0 0 512 512" className="h-7 w-7" aria-hidden>
          <path fill="#fff" d="M47.6 23.4C40.3 30.5 36 41.5 36 55.9v400.2c0 14.4 4.3 25.4 11.6 32.5l1.4 1.3 224.2-224.2v-5.3L48.9 36z" />
          <path fill="#fff" d="M349 339.1l-74.8-74.8v-5.3L349 184.2l1.7 1 88.6 50.3c25.3 14.4 25.3 37.9 0 52.3L350.7 338z" />
        </svg>
      )}
      <span className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-wide text-white/60">{available ? 'Télécharger sur' : 'Bientôt sur'}</span>
        <span className="block text-base font-semibold">{isApple ? 'App Store' : 'Google Play'}</span>
      </span>
    </>
  )

  if (available) {
    return (
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex cursor-pointer items-center gap-3 rounded-xl border px-5 py-2.5 transition hover:opacity-90 ${colors}`}
        aria-label={label}
      >
        {inner}
      </a>
    )
  }

  return (
    <div
      className={`inline-flex cursor-default items-center gap-3 rounded-xl border px-5 py-2.5 opacity-95 ${colors}`}
      aria-label={label}
    >
      {inner}
    </div>
  )
}

function InstagramCTA({ light = false }: { light?: boolean }) {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold transition ${
        light
          ? 'bg-white text-ink hover:bg-white/90'
          : 'bg-ink text-white hover:opacity-90'
      }`}
    >
      <Instagram size={18} />
      Suis-nous pour le lancement
      <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  )
}

const MARQUEE = [
  'Box Braids',
  'Twists',
  'Locks',
  'Knotless',
  'Vanilles',
  'Fulani',
  'Tissages',
  'Perruques',
  'Crochet',
  'Coloration',
  'Soins',
  'Cheveux Naturels',
]

const STATS = [
  { value: '12+', label: 'styles afro' },
  { value: '100%', label: 'paiement sécurisé' },
  { value: '0', label: 'cash sur place' },
  { value: '24/7', label: 'réservation en ligne' },
]

const CATEGORIES = [
  { src: '/styles/tresses.jpg', label: 'Tresses & Nattes' },
  { src: '/styles/box-braids.jpg', label: 'Box Braids' },
  { src: '/styles/knotless.jpg', label: 'Knotless' },
  { src: '/styles/twists.jpg', label: 'Twists' },
  { src: '/styles/locks.jpg', label: 'Locks' },
  { src: '/styles/vanilles.jpg', label: 'Vanilles' },
  { src: '/styles/fulani.jpg', label: 'Fulani' },
  { src: '/styles/tissages.jpg', label: 'Tissages & Extensions' },
  { src: '/styles/perruques.jpg', label: 'Perruques' },
  { src: '/styles/crochet.jpg', label: 'Crochet' },
  { src: '/styles/naturels.jpg', label: 'Cheveux Naturels' },
  { src: '/styles/coloration.jpg', label: 'Coloration' },
]

const SCREENS = [
  { src: '/screens/salon.png', alt: 'Fiche salon dans l’app Sankéa' },
  { src: '/screens/services.png', alt: 'Liste des prestations avec tarifs et durées' },
  { src: '/screens/creneaux.png', alt: 'Choix du créneau de rendez-vous' },
  { src: '/screens/paiement.png', alt: 'Paiement sécurisé via Stripe' },
]

const STEPS = [
  { icon: Search, title: 'Trouve ta coiffeuse', text: 'Explore les salons et coiffeuses afro près de chez toi, avis et portfolios à l’appui.' },
  { icon: CalendarCheck, title: 'Choisis ta prestation', text: 'Box braids, twists, locks, vanilles… sélectionne ton style, ta date et ton créneau.' },
  { icon: CreditCard, title: 'Réserve & paie en ligne', text: 'Bloque ton rendez-vous avec un acompte. Paiement 100 % sécurisé, tout dans l’app.' },
  { icon: Sparkles, title: 'Fais-toi coiffer', text: 'Profite de ta prestation. Le solde est réglé dans l’app, sans cash sur place.' },
]

const PRO_FEATURES = [
  { icon: Store, title: 'Gère ton salon et ton équipe', text: 'Services, tarifs, disponibilités et membres — tout depuis ton espace.' },
  { icon: Wallet, title: 'Reçois tes paiements', text: 'Versements bancaires sécurisés via Stripe, directement sur ton compte.' },
  { icon: TrendingUp, title: 'Remplis ton agenda', text: 'Gagne en visibilité auprès de nouvelles clientes, réduis les créneaux vides.' },
  { icon: Images, title: 'Mets en avant ton talent', text: 'Publie ton portfolio avant/après et démarque-toi auprès des clientes.' },
]

const FAQ = [
  { q: 'Combien coûte Sankéa pour les clientes ?', a: 'L’application est gratuite. Tu paies uniquement ta prestation de coiffure, au prix affiché par la coiffeuse.' },
  { q: 'Comment se passe le paiement ?', a: 'Tout se règle en ligne dans l’app, via Stripe (paiement sécurisé). Tu paies un acompte à la réservation pour bloquer ton créneau, puis le solde dans l’app — aucun cash sur place.' },
  { q: 'Puis-je annuler ma réservation ?', a: 'Oui. Le remboursement de l’acompte dépend du délai d’annulation et du statut de ta réservation. Les conditions complètes sont détaillées dans nos conditions d’utilisation.' },
  { q: 'L’application est-elle déjà disponible ?', a: 'Oui ! Sankéa est disponible dès maintenant sur iOS, à télécharger gratuitement sur l’App Store. La version Android arrive très bientôt — suis-nous sur Instagram pour être prévenue dès sa sortie.' },
  { q: 'Je suis coiffeuse, comment rejoindre Sankéa ?', a: 'Tu pourras créer ton salon, ajouter tes prestations et recevoir des réservations directement depuis l’app dès le lancement. Écris-nous à support@san-kea.com pour être parmi les premières.' },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-ink/10 bg-surface/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image src="/logo_sankea.jpg" alt="Logo Sankéa" width={36} height={36} className="h-9 w-9 rounded-lg object-cover" />
            <span className="font-display text-2xl font-semibold tracking-tight">Sankéa</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-ink/60 md:flex">
            <a href="#styles" className="transition hover:text-ink">Coiffures</a>
            <a href="#comment" className="transition hover:text-ink">Comment ça marche</a>
            <a href="#apercu" className="transition hover:text-ink">L’app</a>
            <a href="#coiffeuses" className="transition hover:text-ink">Coiffeuses</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="rounded-full bg-ink px-4 py-2 text-white transition hover:opacity-90">
              Nous suivre
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink/70">
              <span className="h-1.5 w-1.5 rounded-full bg-ink" /> La coiffure afro, enfin simple
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.98] tracking-tightest md:text-7xl">
              Ta coiffure afro,
              <br />
              <span className="italic font-light">réservée</span> en
              <br />
              quelques secondes.
            </h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-ink/60">
              Box braids, twists, locks, vanilles… Trouve la coiffeuse qu’il te faut, réserve ton créneau et paie
              en ligne. Sans appels, sans attente.
            </p>
            <div id="telecharger" className="mt-9 flex flex-wrap items-center gap-4">
              <InstagramCTA />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <StoreBadge store="apple" />
              <StoreBadge store="google" />
            </div>
            <p className="mt-3 text-sm text-ink/45">Disponible dès maintenant sur iOS — bientôt sur Android.</p>
          </Reveal>

          {/* Hero app screenshot */}
          <Reveal delay={120} className="relative mx-auto w-full max-w-[300px]">
            <div className="animate-float">
              <div className="relative aspect-[1290/2796] overflow-hidden rounded-[2.2rem] shadow-2xl ring-1 ring-black/10">
                <Image
                  src="/screens/accueil.png"
                  alt="Écran d’accueil de l’application Sankéa"
                  fill
                  priority
                  sizes="(max-width: 768px) 80vw, 300px"
                  className="object-contain"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5 sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-white">
                    <CalendarCheck size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-ink/50">Rendez-vous confirmé</p>
                    <p className="text-sm font-bold">Box Braids · 14h00</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Marquee styles */}
        <div className="border-y border-ink/10 bg-ink py-4 text-white">
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap will-change-transform">
            {[...MARQUEE, ...MARQUEE].map((label, i) => (
              <span key={i} className="flex items-center gap-10 font-display text-2xl font-light italic md:text-3xl">
                {label}
                <span className="not-italic text-white/30">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 px-0 sm:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="bg-surface">
              <div className="flex h-full flex-col items-center justify-center px-6 py-10 text-center">
                <span className="font-display text-4xl font-semibold md:text-5xl">{s.value}</span>
                <span className="mt-2 text-xs font-medium uppercase tracking-wide text-ink/50">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Galerie coiffures */}
      <section id="styles" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/40">Le catalogue</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Toutes vos coiffures, <span className="italic font-light">une seule app.</span>
            </h2>
            <p className="mt-5 text-lg text-ink/60">
              Des tresses aux soins, en passant par les locks et les tissages — trouvez la prestation et la
              professionnelle qui vous correspondent.
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.label} delay={(i % 4) * 60} className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={c.src}
                  alt={c.label}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 280px"
                  className="object-cover grayscale transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute bottom-4 left-4 right-4 font-display text-lg font-medium leading-tight text-white drop-shadow">
                  {c.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section id="comment" className="border-t border-ink/10 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/40">Simple comme bonjour</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">Comment ça marche ?</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ink/60">
              Réserver sa coiffure n’a jamais été aussi simple. Quatre étapes, et c’est réglé.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 90} className="relative rounded-2xl border border-ink/10 bg-white p-6">
                <span className="absolute right-5 top-3 font-display text-6xl font-semibold text-ink/[0.06]">{i + 1}</span>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-white">
                  <step.icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-xl font-medium">{step.title}</h3>
                <p className="mt-2 text-sm text-ink/60">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Aperçu de l'app */}
      <section id="apercu" className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Dans ta poche</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">Un aperçu de l’app</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/60">
              De la recherche du salon au paiement sécurisé : tout se passe au même endroit.
            </p>
          </Reveal>
          <div className="mt-14 flex snap-x gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible">
            {SCREENS.map((s, i) => (
              <Reveal
                key={s.src}
                delay={i * 90}
                className="relative aspect-[1290/2796] w-[230px] shrink-0 snap-center overflow-hidden rounded-[1.8rem] ring-1 ring-white/10 md:w-auto"
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 768px) 230px, 280px"
                  className="object-cover"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bande éditoriale */}
      <section className="relative isolate overflow-hidden bg-ink">
        <Image
          src="/photos/editorial.jpg"
          alt="Portrait éditorial coiffure afro"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40 grayscale"
        />
        <div className="relative mx-auto max-w-4xl px-6 py-32 text-center text-white">
          <Reveal>
            <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              La beauté afro mérite
              <br />
              <span className="italic font-light">un service à la hauteur.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg text-white/75">
              Sankéa met en valeur le savoir-faire des coiffeuses afro et offre aux clientes une expérience de
              réservation simple, transparente et sécurisée.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Confiance */}
      <section className="border-t border-ink/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, title: 'Paiement sécurisé', text: 'Transactions protégées via Stripe. Aucune donnée bancaire stockée.' },
            { icon: MapPin, title: 'Près de chez toi', text: 'Des coiffeuses afro talentueuses, à proximité ou à domicile.' },
            { icon: Sparkles, title: 'Sans prise de tête', text: 'Réservation en ligne, rappels automatiques, zéro coup de fil.' },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i * 90} className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface text-ink ring-1 ring-ink/10">
                <b.icon size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg font-medium">{b.title}</h3>
                <p className="mt-1 text-sm text-ink/60">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Espace coiffeuses */}
      <section id="coiffeuses" className="bg-ink text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <Reveal>
            <span className="inline-block rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/70">
              Pour les professionnelles
            </span>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Tu es coiffeuse ? <span className="italic font-light">Développe ton activité</span> avec Sankéa.
            </h2>
            <p className="mt-5 max-w-md text-lg text-white/65">
              Reçois des réservations en ligne, gère ton salon et ton équipe, et concentre-toi sur ton métier :
              la coiffure. Sankéa s’occupe du reste.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {PRO_FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={i * 80} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-ink">
                    <f.icon size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-medium">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-white/60">{f.text}</p>
                </Reveal>
              ))}
            </div>
            <div className="mt-8">
              <InstagramCTA light />
            </div>
          </Reveal>
          <Reveal delay={120} className="relative mx-auto hidden aspect-[1290/2796] w-full max-w-[280px] overflow-hidden rounded-[2rem] ring-1 ring-white/10 md:block">
            <Image
              src="/screens/coiffeur-dashboard.png"
              alt="Tableau de bord coiffeuse dans l’app Sankéa"
              fill
              sizes="280px"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-ink/10 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <Reveal>
            <h2 className="text-center font-display text-4xl font-semibold tracking-tight md:text-5xl">Questions fréquentes</h2>
          </Reveal>
          <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {FAQ.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                  {item.q}
                  <span className="text-2xl text-ink/40 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative isolate overflow-hidden border-t border-ink/10 bg-ink text-white">
        <div className="mx-auto max-w-3xl px-6 py-28 text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Disponible dès maintenant</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">
              Prête à <span className="italic font-light">tester</span> Sankéa ?
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg text-white/65">
              Télécharge Sankéa sur iOS et réserve ta coiffure dès aujourd’hui. La version Android arrive très bientôt.
            </p>
            <div className="mt-9 flex flex-col items-center gap-5">
              <InstagramCTA light />
              <div className="flex flex-wrap justify-center gap-3">
                <StoreBadge store="apple" dark />
                <StoreBadge store="google" dark />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-ink text-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <Image src="/logo_sankea.jpg" alt="Logo Sankéa" width={36} height={36} className="h-9 w-9 rounded-lg object-cover" />
              <span className="font-display text-xl font-semibold">Sankéa</span>
            </div>
            <div className="flex items-center gap-4">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white hover:text-white">
                <Instagram size={18} />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white hover:text-white">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${SUPPORT_EMAIL}`} aria-label="Email support"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white hover:text-white">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center">
            <p>© 2026 Sankéa. Tous droits réservés.</p>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              <a href={PRIVACY_URL} className="transition hover:text-white">Politique de confidentialité</a>
              <a href={TERMS_URL} className="transition hover:text-white">Conditions d’utilisation</a>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="transition hover:text-white">Contact</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
