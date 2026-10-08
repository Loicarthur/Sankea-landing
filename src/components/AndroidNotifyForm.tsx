'use client'

import { useState } from 'react'
import { track } from '@/lib/analytics'

type Props = { section: string; dark?: boolean; heading?: boolean }

export function AndroidNotifyForm({ section, dark = false, heading = false }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'android', email, section }),
      })
      if (!res.ok) throw new Error('bad status')
      track('inscription_android', { section })
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className={`mt-4 max-w-md rounded-card border p-4 ${dark ? 'border-border-dark bg-surface-dark text-white' : 'border-line bg-white text-ink'}`}>
      {heading ? (
        <p className="mb-3 text-sm leading-relaxed">Android arrive bientôt. Laisse ton e-mail, et on te prévient dès la sortie.</p>
      ) : null}
      {status === 'done' ? (
        <p role="status" className="text-sm font-semibold">
          Merci ! On te prévient dès que l’app Android sort.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row">
          <label className="sr-only" htmlFor={`android-email-${section}`}>
            Ton adresse e-mail
          </label>
          <input
            id={`android-email-${section}`}
            type="email"
            required
            autoComplete="email"
            placeholder="ton@email.fr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`min-w-0 flex-1 rounded-full border px-4 py-2.5 text-sm ${dark ? 'border-border-dark bg-ink text-white placeholder:text-muted-dark' : 'border-line bg-white'}`}
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className={dark ? 'btn-pill-inverse disabled:opacity-60' : 'btn-pill disabled:opacity-60'}
          >
            Me prévenir
          </button>
        </form>
      )}
      {status === 'error' ? (
        <p role="alert" className="mt-2 text-sm text-red-600">
          Une erreur est survenue. Réessaie dans un instant.
        </p>
      ) : null}
    </div>
  )
}
