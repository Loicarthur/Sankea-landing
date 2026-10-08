import { NextResponse } from 'next/server'

/**
 * Reçoit les formulaires « Préviens-moi » (Android) et Contact.
 * Si LEAD_WEBHOOK_URL est défini (Zapier, Make, Slack, Formspree…), la demande y est transmise.
 * Sinon elle est seulement journalisée côté serveur.
 */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clean(v: unknown, max: number): string {
  return typeof v === 'string' ? v.trim().slice(0, max) : ''
}

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  const type = clean(body.type, 20)
  const email = clean(body.email, 200)
  if (!['android', 'contact'].includes(type) || !EMAIL.test(email)) {
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  const lead = {
    type,
    email,
    name: clean(body.name, 120),
    who: clean(body.who, 20),
    message: clean(body.message, 4000),
    section: clean(body.section, 60),
    at: new Date().toISOString(),
  }
  if (type === 'contact' && (!lead.name || !lead.message)) {
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  const hook = process.env.LEAD_WEBHOOK_URL
  if (hook) {
    try {
      const res = await fetch(hook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(lead) })
      if (!res.ok) return NextResponse.json({ ok: false }, { status: 502 })
    } catch {
      return NextResponse.json({ ok: false }, { status: 502 })
    }
  } else {
    console.log('[lead]', JSON.stringify(lead))
  }
  return NextResponse.json({ ok: true })
}
