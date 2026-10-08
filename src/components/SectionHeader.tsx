import { fill } from '@/lib/site-config'

type Props = {
  title: React.ReactNode
  text?: string
  /** Réponse directe (40 à 60 mots) affichée sous le H2. */
  answer?: string
  align?: 'left' | 'center'
  as?: 'h1' | 'h2'
  className?: string
}

export function SectionHeader({ title, text, answer, align = 'left', as: Tag = 'h2', className = '' }: Props) {
  const center = align === 'center'
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      <Tag className="font-display text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl [&_em]:font-normal [&_em]:italic">
        {title}
      </Tag>
      {answer ? <p className="mt-5 text-base leading-relaxed md:text-lg">{fill(answer)}</p> : null}
      {text ? <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{fill(text)}</p> : null}
    </div>
  )
}
