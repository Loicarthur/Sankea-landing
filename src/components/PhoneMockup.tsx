import Image from 'next/image'

type Props = {
  src: string
  alt: string
  priority?: boolean
  className?: string
  sizes?: string
}

/** Mockup iPhone : cadre noir arrondi autour d'une capture d'écran de l'app. */
export function PhoneMockup({ src, alt, priority = false, className = '', sizes = '(min-width: 768px) 280px, 70vw' }: Props) {
  return (
    <div className={`relative mx-auto aspect-[1290/2796] w-full max-w-[280px] rounded-[2.6rem] border-[7px] border-ink bg-ink shadow-2xl shadow-black/20 ${className}`}>
      <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-white">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
      </div>
      <div className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-ink" aria-hidden />
    </div>
  )
}
