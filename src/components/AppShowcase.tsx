import Image from 'next/image'

type Screen = { src: string; width: number; height: number; alt: string }

type Card = {
  /** Accroche en grandes capitales (début de l'ancienne légende). */
  title: string
  /** Texte descriptif conservé de l'ancienne légende. */
  text: string
  screen: Screen
  /** Position, largeur et inclinaison du téléphone (varie selon la carte). */
  phone: string
}

const CARDS: Card[] = [
  {
    title: 'Pour toute la famille.',
    text: 'Femmes, hommes et enfants trouvent leur salon.',
    screen: { src: '/screens/app/accueil.webp', width: 591, height: 1280, alt: 'Accueil de l’app Sankéa : catégories de coiffures et salons populaires' },
    phone: 'top-[14.5rem] left-1/2 w-[12.5rem] -translate-x-1/2 rotate-0',
  },
  {
    title: 'Des tarifs clairs.',
    text: 'Chaque prestation affiche son prix et sa durée.',
    screen: { src: '/screens/app/services.webp', width: 720, height: 1316, alt: 'Prestations d’un salon avec leur prix et leur durée' },
    phone: 'top-[13.5rem] left-[56%] w-[14.5rem] -translate-x-1/2 rotate-[4deg]',
  },
  {
    title: 'Ton créneau, en direct.',
    text: 'Tu vois les disponibilités réelles du salon.',
    screen: { src: '/screens/app/creneaux.webp', width: 720, height: 1316, alt: 'Choix d’une date et d’un créneau disponible' },
    phone: 'top-[14.5rem] left-[44%] w-[12.5rem] -translate-x-1/2 -rotate-[4deg]',
  },
  {
    title: 'Un paiement sécurisé.',
    text: 'Tu règles en quelques secondes avec Stripe.',
    screen: { src: '/screens/app/paiement.webp', width: 720, height: 1316, alt: 'Récapitulatif et paiement sécurisé via Stripe' },
    phone: 'top-[13.5rem] left-1/2 w-[14.5rem] -translate-x-1/2 rotate-0',
  },
]

/** Aperçu de l'app : cartes blanches à grands titres, téléphones recadrés en bas de carte. */
export function AppShowcase() {
  return (
    <div
      role="region"
      aria-label="Aperçu de l’app, faire défiler horizontalement"
      tabIndex={0}
      className="-mx-4 flex snap-x snap-mandatory scroll-pl-4 gap-4 overflow-x-auto px-4 pb-2 md:scroll-pl-8 lg:scroll-pl-0 [scrollbar-width:none] md:-mx-8 md:px-8 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden"
    >
      {CARDS.map((c) => (
        <article
          key={c.title}
          className="relative h-[34rem] w-[16.5rem] shrink-0 snap-start overflow-hidden rounded-[2.25rem] bg-white shadow-sm sm:w-[17rem] lg:w-[calc((100%-3rem)/4)]"
        >
          <div className="relative z-10 px-6 pt-7">
            <h3 className="font-sans text-[1.65rem] font-black uppercase leading-[0.95] tracking-tightest">{c.title}</h3>
            <p className="mt-3 max-w-[13rem] text-sm leading-snug text-muted">{c.text}</p>
          </div>

          <div className={`absolute ${c.phone}`}>
            <div className="overflow-hidden rounded-[2.4rem] border-[6px] border-ink bg-ink shadow-2xl shadow-black/25">
              <Image
                src={c.screen.src}
                alt={c.screen.alt}
                width={c.screen.width}
                height={c.screen.height}
                sizes="240px"
                quality={75}
                className="h-auto w-full rounded-[1.9rem]"
              />
            </div>
            <span className="absolute left-1/2 top-2 h-4 w-16 -translate-x-1/2 rounded-full bg-ink" aria-hidden />
          </div>
        </article>
      ))}
    </div>
  )
}
