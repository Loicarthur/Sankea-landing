import { Search, CalendarCheck, CreditCard, Sparkles, Store, Wallet, TrendingUp, Images, Instagram, Linkedin, Mail } from 'lucide-react'

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

const STEPS = [
  { icon: Search, title: 'Trouve ton salon', text: 'Explore les salons et coiffeuses afro près de chez toi, avis et portfolios à l’appui.' },
  { icon: CalendarCheck, title: 'Choisis ta prestation', text: 'Box braids, twists, locks, vanilles… sélectionne ta coiffeuse, ta date et ton créneau.' },
  { icon: CreditCard, title: 'Réserve & paie en ligne', text: 'Bloque ton rendez-vous avec un acompte. Paiement 100 % sécurisé, tout dans l’app.' },
  { icon: Sparkles, title: 'Fais-toi coiffer', text: 'Profite de ta prestation. Le solde est réglé dans l’app, sans cash sur place.' },
]

const PRO_FEATURES = [
  { icon: Store, title: 'Gère ton salon et ton équipe', text: 'Services, tarifs, disponibilités et membres de l’équipe — tout depuis ton espace.' },
  { icon: Wallet, title: 'Reçois tes paiements', text: 'Versements bancaires sécurisés via Stripe, directement sur ton compte.' },
  { icon: TrendingUp, title: 'Remplis ton agenda', text: 'Gagne en visibilité auprès de nouvelles clientes et réduis les créneaux vides.' },
  { icon: Images, title: 'Mets en avant ton talent', text: 'Publie ton portfolio avant/après et démarque-toi auprès des clientes.' },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-gray-200 bg-surface/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo_sankea.jpg" alt="Logo Sankéa" className="h-9 w-9 rounded-lg object-cover" />
            <span className="text-xl font-extrabold tracking-tight">Sankéa</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
            <a href="#comment" className="transition hover:text-ink">Comment ça marche</a>
            <a href="#coiffeuses" className="transition hover:text-ink">Espace coiffeuses</a>
            <a href="#telecharger" className="rounded-full bg-ink px-4 py-2 text-white transition hover:opacity-90">Télécharger</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-block rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-600">
              ✨ La coiffure afro, enfin simple à réserver
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
              Ton prochain rendez-vous coiffure, en quelques secondes.
            </h1>
            <p className="mt-6 max-w-md text-lg text-gray-600">
              Sankéa connecte les clientes aux meilleurs salons et coiffeuses afro. Trouve, réserve et paie en
              ligne — en toute sérénité.
            </p>
            <div id="telecharger" className="mt-9 flex flex-wrap gap-4">
              <StoreBadge store="apple" />
              <StoreBadge store="google" />
            </div>
            <p className="mt-3 text-sm text-gray-500">Disponible très bientôt sur iOS et Android.</p>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center md:justify-end">
            <div className="relative h-[520px] w-[260px] rounded-[2.5rem] border-[10px] border-ink bg-white shadow-2xl">
              <div className="absolute left-1/2 top-0 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-ink" />
              <div className="flex h-full flex-col gap-4 overflow-hidden p-5 pt-10">
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo_sankea.jpg" alt="" className="h-10 w-10 rounded-xl object-cover" aria-hidden />
                  <div>
                    <div className="h-2.5 w-24 rounded bg-gray-900" />
                    <div className="mt-1.5 h-2 w-16 rounded bg-gray-300" />
                  </div>
                </div>
                <div className="rounded-2xl border border-gray-200 p-4">
                  <div className="h-24 rounded-xl bg-gray-100" />
                  <div className="mt-3 h-2.5 w-32 rounded bg-gray-800" />
                  <div className="mt-2 h-2 w-20 rounded bg-gray-300" />
                  <div className="mt-4 flex items-center justify-between">
                    <div className="h-2.5 w-14 rounded bg-gray-800" />
                    <div className="rounded-full bg-ink px-3 py-1.5 text-[10px] font-semibold text-white">Réserver</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-gray-200 p-4">
                  <div className="h-2.5 w-28 rounded bg-gray-800" />
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <div className="h-7 rounded-lg bg-gray-100" />
                    <div className="h-7 rounded-lg bg-ink" />
                    <div className="h-7 rounded-lg bg-gray-100" />
                  </div>
                </div>
                <div className="mt-auto rounded-2xl bg-ink p-4 text-white">
                  <div className="h-2 w-16 rounded bg-white/40" />
                  <div className="mt-2 h-3 w-24 rounded bg-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section id="comment" className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Comment ça marche ?</h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-600">
              Réserver sa coiffure n’a jamais été aussi simple. Quatre étapes, et c’est réglé.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <div key={step.title} className="relative rounded-2xl border border-gray-200 bg-surface p-6">
                <span className="absolute right-5 top-5 text-4xl font-extrabold text-gray-200">{i + 1}</span>
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
            <div className="mt-8 inline-flex cursor-default items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink opacity-95">
              Rejoindre Sankéa — bientôt disponible
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
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
        </div>
      </section>

      {/* CTA final */}
      <section className="border-t border-gray-200 bg-white">
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
      <footer className="border-t border-gray-200 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo_sankea.jpg" alt="Logo Sankéa" className="h-9 w-9 rounded-lg object-cover" />
              <span className="text-lg font-extrabold">Sankéa</span>
            </div>
            <div className="flex items-center gap-4">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition hover:border-ink hover:text-ink">
                <Instagram size={18} />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition hover:border-ink hover:text-ink">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${SUPPORT_EMAIL}`} aria-label="Email support"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition hover:border-ink hover:text-ink">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 md:flex-row md:items-center">
            <p>© 2026 Sankéa. Tous droits réservés.</p>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              <a href={PRIVACY_URL} className="transition hover:text-ink">Politique de confidentialité</a>
              <a href={TERMS_URL} className="transition hover:text-ink">Conditions d’utilisation</a>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="transition hover:text-ink">Contact</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
