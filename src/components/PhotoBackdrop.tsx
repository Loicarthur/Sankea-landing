import Image from 'next/image'
import { bwSrc } from '@/lib/site-config'

type Props = {
  src: string
  alt: string
  /** Position du cadrage (object-position CSS). */
  position?: string
  /** Classe Tailwind du voile noir. */
  overlay?: string
  /** Image de tête de page (LCP) : chargée en priorité et animée d'un zoom lent. */
  priority?: boolean
  /** Zoom lent (désactivé si prefers-reduced-motion). Par défaut : seulement pour l'image prioritaire. */
  zoom?: boolean
  /** Noir et blanc (par défaut). Mettre false pour garder les couleurs d'origine. */
  bw?: boolean
}

/**
 * Photo de fond avec voile sombre, grain et vignette.
 * Le parent doit être `relative isolate overflow-hidden`.
 * Le filtre noir et blanc est sur l'image, l'animation sur son conteneur : ainsi le navigateur
 * n'a pas à refiltrer l'image à chaque image du zoom.
 */
export function PhotoBackdrop({ src, alt, position = 'center', overlay = 'bg-black/70', priority = false, zoom, bw = true }: Props) {
  const animate = zoom ?? priority
  return (
    <>
      <div className={`absolute inset-0 -z-20 overflow-hidden ${animate ? 'kenburns' : ''}`}>
        <Image
          src={bw ? bwSrc(src) : src}
          alt={alt}
          fill
          sizes="100vw"
          priority={priority}
          quality={priority ? 70 : 60}
          className="object-cover"
          style={{ objectPosition: position }}
        />
      </div>
      <div className={`absolute inset-0 -z-10 ${overlay}`} aria-hidden />
      <div className="backdrop-vignette absolute inset-0 -z-10" aria-hidden />
      <div className="backdrop-grain pointer-events-none absolute inset-0 -z-10" aria-hidden />
    </>
  )
}
