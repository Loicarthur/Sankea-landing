import Image from 'next/image'
import { Search, CalendarCheck, CreditCard, Sparkles, Store, Wallet, TrendingUp, Images, Instagram, Linkedin, Mail, ShieldCheck, MapPin } from 'lucide-react'

const PRIVACY_URL = 'https://admin.san-kea.com/privacy'
const TERMS_URL = 'https://admin.san-kea.com/terms'
const INSTAGRAM_URL = 'https://www.instagram.com/sankea.officiel'
const LINKEDIN_URL = 'https://www.linkedin.com/in/sankea-officiel-256a6240b'
const SUPPORT_EMAIL = 'support@san-kea.com'

function StoreBadge({ store }: { store: 'apple' | 'google' }) {
  const isApple = store === 'apple'
  return (
    <div
      className="inline-flex cursor-default items-center gap-3 rounded-xl border border-white/15 bg-ink px-5 py-2.5 text-white opacity-95"
      aria-label={isApple ? "Bientôt sur l'App Store" : 'Bientôt sur Google Play'}
    >
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
        <span className="block text-[10px] uppercase tracking-wide text-white/60">Bientôt sur</span>
        <span className="block text-base font-semibold">{isApple ? 'App Store' : 'Google Play'}</span>
      </span>
    </div>
  )
}

const CATEGORIES = [
  { src: '/styles/tresses.jpg', label: 'Tresses & Nattes' },
  { src: '/styles/twists.jpg', label: 'Twists' },
  { src: '/styles/locks.jpg', label: 'Locks' },
  { src: '/styles/tissages.jpg', label: 'Tissages & Extensions' },
  { src: '/styles/perruques.jpg', label: 'Perruques' },
  { src: '/styles/crochet.jpg', label: 'Crochet & Demi-permanents' },
  { src: '/styles/naturels.jpg', label: 'Cheveux Naturels & Protectrices' },
  { src: '/styles/soins.jpg', label: 'Soins & Traitements' },
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
  { q: 'L’application est-elle déjà disponible ?', a: 'Sankéa arrive très bientôt sur iOS et Android. Suis-nous sur Instagram pour être prévenue dès le lancement.' },
  { q: 'Je suis coiffeuse, comment rejoindre Sankéa ?', a: 'Tu pourras créer ton salon, ajouter tes prestations et recevoir des réservations directement depuis l’app dès le lancement. Écris-nous à support@san-kea.com pour être parmi les premières.' },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-gray-200 bg-surface/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image src="/logo_sankea.jpg" alt="Logo Sankéa" width={36} height={36} className="h-9 w-9 rounded-lg object-cover" />
            <span className="text-xl font-extrabold tracking-tight">Sankéa</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
            <a href="#styles" className="transition hover:text-ink">Coiffures</a>
            <a href="#comment" className="transition hover:text-ink">Comment ça marche</a>
            <a href="#apercu" className="transition hover:text-ink">L’app</a>
            <a href="#coiffeuses" className="transition hover:text-ink">Coiffeuses</a>
            <a href="#telecharger" className="rounded-full bg-ink px-4 py-2 text-white transition hover:opacity-90">Télécharger</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-block rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-600">
              ✨ La coiffure afro, enfin simple à réserver
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              Ta coiffure afro, réservée en quelques secondes.
            </h1>
            <p className="mt-6 max-w-md text-lg text-gray-600">
              Box braids, twists, locks, vanilles… Trouve la coiffeuse qu’il te faut, réserve ton créneau et paie
              en ligne. Sans appels, sans attente.
            </p>
            <div id="telecharger" className="mt-9 flex flex-wrap gap-4">
              <StoreBadge store="apple" />
              <StoreBadge store="google" />
            </div>
            <p className="mt-3 text-sm text-gray-500">Disponible très bientôt sur iOS et Android.</p>
          </div>

          {/* Hero app screenshot */}
          <div className="relative mx-auto w-full max-w-[300px]">
            <div className="relative aspect-[1290/2400] overflow-hidden rounded-[2.2rem] shadow-2xl ring-1 ring-black/10">
              <Image
                src="/screens/accueil.png"
                alt="Écran d’accueil de l’application Sankéa"
                fill
                priority
                sizes="(max-width: 768px) 80vw, 300px"
                className="object-cover object-bottom"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5 sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-white">
                  <CalendarCheck size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Rendez-vous confirmé</p>
                  <p className="text-sm font-bold">Box Braids · 14h00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie coiffures */}
      <section id="styles" className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Toutes vos coiffures, une seule app</h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-600">
              Des tresses aux soins, en passant par les locks et les tissages — trouvez la prestation et la
              professionnelle qui vous correspondent.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-5">
            {CATEGORIES.map((c) => (
              <div key={c.label} className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={c.src}
                  alt={c.label}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 280px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/0 to-transparent" />
                <span className="absolute bottom-4 left-4 right-4 text-base font-bold leading-tight text-white drop-shadow">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section id="comment" className="border-t border-gray-200 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Comment ça marche ?</h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-600">
              Réserver sa coiffure n’a jamais été aussi simple. Quatre étapes, et c’est réglé.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <div key={step.title} className="relative rounded-2xl border border-gray-200 bg-white p-6">
                <span className="absolute right-5 top-5 text-4xl font-extrabold text-gray-100">{i + 1}</span>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-white">
                  <step.icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aperçu de l'app */}
      <section id="apercu" className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Un aperçu de l’app</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              De la recherche du salon au paiement sécurisé : tout se passe au même endroit.
            </p>
          </div>
          <div className="mt-12 flex snap-x gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible">
            {SCREENS.map((s) => (
              <div key={s.src} className="relative aspect-[1290/2796] w-[230px] shrink-0 snap-center overflow-hidden rounded-[1.8rem] ring-1 ring-white/10 md:w-auto">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 768px) 230px, 280px"
                  className="object-cover"
                />
              </div>
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
          className="object-cover object-center opacity-40"
        />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center text-white">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            La beauté afro mérite un service à la hauteur.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Sankéa met en valeur le savoir-faire des coiffeuses afro et offre aux clientes une expérience de
            réservation simple, transparente et sécurisée.
          </p>
        </div>
      </section>

      {/* Confiance */}
      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, title: 'Paiement sécurisé', text: 'Transactions protégées via Stripe. Aucune donnée bancaire stockée.' },
            { icon: MapPin, title: 'Près de chez toi', text: 'Des coiffeuses afro talentueuses, à proximité ou à domicile.' },
            { icon: Sparkles, title: 'Sans prise de tête', text: 'Réservation en ligne, rappels automatiques, zéro coup de fil.' },
          ].map((b) => (
            <div key={b.title} className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface text-ink ring-1 ring-gray-200">
                <b.icon size={20} />
              </div>
              <div>
                <h3 className="font-bold">{b.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Espace coiffeuses */}
      <section id="coiffeuses" className="bg-ink text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white/70">
              Pour les professionnelles
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">
              Tu es coiffeuse ? Développe ton activité avec Sankéa.
            </h2>
            <p className="mt-5 max-w-md text-white/70">
              Reçois des réservations en ligne, gère ton salon et ton équipe, et concentre-toi sur ton métier :
              la coiffure. Sankéa s’occupe du reste.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {PRO_FEATURES.map((f) => (
                <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-ink">
                    <f.icon size={20} />
                  </div>
                  <h3 className="mt-4 font-bold">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-white/60">{f.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 inline-flex cursor-default items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink opacity-95">
              Rejoindre Sankéa — bientôt disponible
            </div>
          </div>
          <div className="relative mx-auto hidden aspect-[1290/2796] w-full max-w-[280px] overflow-hidden rounded-[2rem] ring-1 ring-white/10 md:block">
            <Image
              src="/screens/coiffeur-dashboard.png"
              alt="Tableau de bord coiffeuse dans l’app Sankéa"
              fill
              sizes="280px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-4xl">Questions fréquentes</h2>
          <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
            {FAQ.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {item.q}
                  <span className="text-2xl text-gray-400 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="border-t border-gray-200 bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Prête à tester Sankéa ?</h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-600">
            L’application arrive très bientôt sur iOS et Android. Suis-nous pour ne pas rater le lancement.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <StoreBadge store="apple" />
            <StoreBadge store="google" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-ink text-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <Image src="/logo_sankea.jpg" alt="Logo Sankéa" width={36} height={36} className="h-9 w-9 rounded-lg object-cover" />
              <span className="text-lg font-extrabold">Sankéa</span>
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
