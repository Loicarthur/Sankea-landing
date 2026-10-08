'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { fill } from '@/lib/site-config'
import type { FaqItem } from '@/content/faq'
import { FaqAccordion } from './FaqAccordion'

type Props = {
  client: FaqItem[]
  salon: FaqItem[]
  clientCategories: string[]
  salonCategories: string[]
}

export function HelpCenter({ client, salon, clientCategories, salonCategories }: Props) {
  const [tab, setTab] = useState<'client' | 'salon'>('client')
  const [query, setQuery] = useState('')

  const items = tab === 'client' ? client : salon
  const categories = tab === 'client' ? clientCategories : salonCategories
  const q = query.trim().toLowerCase()

  const groups = useMemo(
    () =>
      categories
        .map((cat) => ({
          cat,
          items: items.filter((i) => i.category === cat && (!q || `${i.q} ${fill(i.a)}`.toLowerCase().includes(q))),
        }))
        .filter((g) => g.items.length),
    [categories, items, q],
  )

  return (
    <div>
      <div className="relative max-w-xl">
        <label htmlFor="help-search" className="sr-only">
          Rechercher dans l’aide
        </label>
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" aria-hidden />
        <input
          id="help-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher une question"
          className="w-full rounded-full border border-line bg-white py-3.5 pl-12 pr-4"
        />
      </div>

      <div role="tablist" aria-label="Public" className="mt-6 flex gap-2">
        {(['client', 'salon'] as const).map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold ${tab === t ? 'bg-ink text-white' : 'border border-line bg-white hover:bg-paper-soft'}`}
          >
            {t === 'client' ? 'Clients' : 'Salons'}
          </button>
        ))}
      </div>

      <div className="mt-10 space-y-12" role="tabpanel">
        {groups.length ? (
          groups.map((g) => (
            <section key={g.cat} aria-labelledby={`cat-${g.cat}`}>
              <h2 id={`cat-${g.cat}`} className="font-display text-2xl font-semibold md:text-3xl">
                {g.cat}
              </h2>
              <div className="mt-4">
                <FaqAccordion items={g.items} />
              </div>
            </section>
          ))
        ) : (
          <p className="text-muted">Aucune question ne correspond à ta recherche. Écris-nous via la page Contact.</p>
        )}
      </div>
    </div>
  )
}
