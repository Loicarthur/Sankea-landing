'use client'

import { useState } from 'react'

const WHO = [
  { v: 'client', l: 'Client' },
  { v: 'salon', l: 'Salon' },
  { v: 'presse', l: 'Presse' },
  { v: 'autre', l: 'Autre' },
]

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', ...data }),
      })
      if (!res.ok) throw new Error('bad status')
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <p role="status" className="card p-6 font-semibold">
        Merci, ton message est bien parti. L’équipe te répond au plus vite.
      </p>
    )
  }

  const field = 'mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3'
  return (
    <form onSubmit={onSubmit} className="card space-y-5 p-6 md:p-8">
      <div>
        <label htmlFor="c-name" className="text-sm font-semibold">Nom</label>
        <input id="c-name" name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="c-email" className="text-sm font-semibold">E-mail</label>
        <input id="c-email" name="email" type="email" required autoComplete="email" className={field} />
      </div>
      <div>
        <label htmlFor="c-who" className="text-sm font-semibold">Je suis</label>
        <select id="c-who" name="who" className={field} defaultValue="client">
          {WHO.map((w) => (
            <option key={w.v} value={w.v}>{w.l}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="c-msg" className="text-sm font-semibold">Message</label>
        <textarea id="c-msg" name="message" required rows={5} className={field} />
      </div>
      <button type="submit" disabled={status === 'sending'} className="btn-pill disabled:opacity-60">
        Envoyer
      </button>
      {status === 'error' ? (
        <p role="alert" className="text-sm text-red-600">Une erreur est survenue. Réessaie dans un instant.</p>
      ) : null}
    </form>
  )
}
