'use client'

import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { fill } from '@/lib/site-config'

type Item = { q: string; a: string }

export function FaqAccordion({ items, dark = false }: { items: Item[]; dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(0)
  const base = useId()

  return (
    <div className={`divide-y ${dark ? 'divide-border-dark' : 'divide-line'} border-y ${dark ? 'border-border-dark' : 'border-line'}`}>
      {items.map((item, i) => {
        const isOpen = open === i
        const panelId = `${base}-panel-${i}`
        const btnId = `${base}-btn-${i}`
        return (
          <div key={item.q}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-lg font-semibold md:text-xl"
              >
                {item.q}
                <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden />
              </button>
            </h3>
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'invisible grid-rows-[0fr] opacity-0'}`}
            >
              <div id={panelId} role="region" aria-labelledby={btnId} className={`overflow-hidden leading-relaxed ${dark ? 'text-muted-dark' : 'text-muted'}`}>
                <p className="pb-6">{fill(item.a)}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
