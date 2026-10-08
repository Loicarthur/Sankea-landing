import { fill } from '@/lib/site-config'

type Props = { number: number; title: string; text: string; dark?: boolean }

/** Carte d'étape avec numéro géant en serif très clair en arrière-plan. */
export function StepCard({ number, title, text, dark = false }: Props) {
  return (
    <div className={`relative overflow-hidden rounded-card border p-6 md:p-8 ${dark ? 'border-border-dark bg-surface-dark text-white' : 'border-line bg-white'}`}>
      <span
        className={`pointer-events-none absolute -right-2 -top-4 select-none font-display text-[9rem] font-semibold leading-none ${dark ? 'text-white/[0.06]' : 'text-ink/[0.06]'}`}
        aria-hidden
      >
        {number}
      </span>
      <h3 className="relative font-display text-xl font-semibold md:text-2xl">{title}</h3>
      <p className={`relative mt-3 leading-relaxed ${dark ? 'text-muted-dark' : 'text-muted'}`}>{fill(text)}</p>
    </div>
  )
}
