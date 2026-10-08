import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { bwSrc, fill, priceKey } from '@/lib/site-config'
import type { Style } from '@/content/coiffures'

export function StyleCard({ style, priority = false }: { style: Style; priority?: boolean }) {
  const href = style.page ? `/coiffures/${style.slug}` : `/app?src=style-${style.slug}`
  const price = fill(`dès {{${priceKey(style.slug)}}} € · ${style.duration}`)
  return (
    <Link href={href} className="group relative block aspect-[3/4] overflow-hidden rounded-card border border-line bg-ink">
      <Image
        src={bwSrc(style.image)}
        alt={style.alt}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
        priority={priority}
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" aria-hidden />
      <div className="absolute inset-x-4 bottom-4 text-white">
        <h3 className="font-display text-lg font-semibold leading-tight md:text-xl">{style.name}</h3>
        <p className="mt-1 text-xs text-white/75 md:text-sm">{price}</p>
        <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold md:text-sm">
          {style.page ? 'Découvrir' : 'Réserver dans l’app'} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </span>
      </div>
    </Link>
  )
}
