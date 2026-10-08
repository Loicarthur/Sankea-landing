'use client'

import { useState } from 'react'
import { AUDIENCES, STYLES, type Audience } from '@/content/coiffures'
import { StyleCard } from './StyleCard'

export function StyleTabs({ limit, srHeading }: { limit?: number; srHeading?: string }) {
  const [tab, setTab] = useState<Audience>('femmes')
  const styles = STYLES.filter((s) => s.audience === tab).slice(0, limit)

  return (
    <div>
      {srHeading ? <h2 className="sr-only">{srHeading}</h2> : null}
      <div role="tablist" aria-label="Coiffures par public" className="flex gap-2">
        {AUDIENCES.map((a) => (
          <button
            key={a.id}
            role="tab"
            id={`tab-${a.id}`}
            aria-selected={tab === a.id}
            aria-controls="styles-panel"
            onClick={() => setTab(a.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              tab === a.id ? 'bg-ink text-white' : 'border border-line bg-white hover:bg-paper-soft'
            }`}
          >
            {a.label}
          </button>
        ))}
      </div>
      <div id="styles-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5 lg:grid-cols-4">
        {styles.map((s) => (
          <StyleCard key={s.slug} style={s} />
        ))}
      </div>
    </div>
  )
}
