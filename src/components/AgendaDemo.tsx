'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { BellRing, Check, CircleDollarSign, Plus } from 'lucide-react'

const DAYS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
const TIMES = ['9h', '11h', '14h', '16h']

const SERVICES = [
  { label: 'Knotless', price: 90 },
  { label: 'Box braids', price: 70 },
  { label: 'Dégradé', price: 20 },
  { label: 'Twists', price: 70 },
  { label: 'Locks', price: 80 },
  { label: 'Tresses enfant', price: 35 },
  { label: 'Vanilles', price: 70 },
  { label: 'Coloration', price: 50 },
]

type Booking = { label: string; price: number }
type Toast = { id: number; kind: 'booking' | 'payment'; title: string; text: string }

/** Ordre de remplissage de la démo (indices jour-heure), déterministe. */
const SCRIPT: [number, number][] = [
  [0, 0], [2, 1], [5, 0], [1, 2], [4, 1], [3, 0], [5, 2], [0, 3], [2, 2], [4, 3], [1, 0], [3, 2], [5, 3],
  [0, 1], [3, 1], [1, 3], [4, 0], [2, 3], [5, 1], [0, 2],
]

const TOTAL = DAYS.length * TIMES.length
const keyOf = (d: number, t: number) => `${d}-${t}`

function useCountUp(target: number) {
  const [value, setValue] = useState(target)
  const from = useRef(target)
  useEffect(() => {
    const start = from.current
    const t0 = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - t0) / 700, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(start + (target - start) * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
      else from.current = target
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target])
  return value
}

export function AgendaDemo() {
  const [filled, setFilled] = useState<Record<string, Booking>>({})
  const [toasts, setToasts] = useState<Toast[]>([])
  const [auto, setAuto] = useState(false)
  /** Incrémenté à chaque tour pour relancer le remplissage en boucle. */
  const [cycle, setCycle] = useState(0)
  const [latest, setLatest] = useState<string | null>(null)
  const root = useRef<HTMLDivElement>(null)
  const step = useRef(0)
  const cursor = useRef(0)
  const toastId = useRef(0)
  const timers = useRef<number[]>([])

  const count = Object.keys(filled).length
  const revenue = Object.values(filled).reduce((sum, b) => sum + b.price, 0)
  const shownRevenue = useCountUp(revenue)
  const pct = Math.round((count / TOTAL) * 100)

  const pushToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = ++toastId.current
    setToasts((t) => [...t.slice(-1), { ...toast, id }])
    const timer = window.setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2800)
    timers.current.push(timer)
  }, [])

  const book = useCallback(
    (d: number, t: number, fromUser = false) => {
      const k = keyOf(d, t)
      const service = SERVICES[cursor.current % SERVICES.length]
      cursor.current += 1
      setFilled((f) => (f[k] ? f : { ...f, [k]: service }))
      setLatest(k)
      pushToast({ kind: 'booking', title: fromUser ? 'Réservation confirmée' : 'Nouvelle réservation', text: `${service.label} · ${DAYS[d]} ${TIMES[t]}` })
      const timer = window.setTimeout(
        () => pushToast({ kind: 'payment', title: 'Paiement reçu', text: `+ ${service.price} € encaissés à l’avance` }),
        650,
      )
      timers.current.push(timer)
    },
    [pushToast],
  )

  // Démarre quand la démo entre à l'écran ; tout est rempli d'un coup si l'utilisateur limite les animations.
  useEffect(() => {
    const el = root.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      const all: Record<string, Booking> = {}
      SCRIPT.forEach(([d, t], i) => (all[keyOf(d, t)] = SERVICES[i % SERVICES.length]))
      setFilled(all)
      cursor.current = SCRIPT.length
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setAuto(true)
          io.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Remplit l'agenda créneau par créneau, marque une pause une fois plein, puis recommence sans fin.
  useEffect(() => {
    if (!auto) return
    let restart: number | undefined
    const id = window.setInterval(() => {
      if (step.current >= SCRIPT.length) {
        window.clearInterval(id)
        restart = window.setTimeout(() => {
          timers.current.forEach(clearTimeout)
          timers.current = []
          step.current = 0
          cursor.current = 0
          setFilled({})
          setToasts([])
          setLatest(null)
          setCycle((c) => c + 1)
        }, 4200)
        return
      }
      const [d, t] = SCRIPT[step.current]
      step.current += 1
      book(d, t)
    }, 1100)
    return () => {
      window.clearInterval(id)
      if (restart) window.clearTimeout(restart)
    }
  }, [auto, cycle, book])

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  return (
    <div ref={root} className="relative mx-auto w-full max-w-[44rem]">
      <div className="card overflow-hidden shadow-2xl shadow-black/10">
        {/* En-tête */}
        <div className="flex items-start justify-between gap-4 border-b border-line bg-white px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-eyebrow text-muted">Votre agenda</p>
            <p className="mt-0.5 font-display text-xl font-semibold">Cette semaine</p>
          </div>
          <div className="text-right">
            <p className="flex items-center justify-end gap-1.5 text-xs font-semibold uppercase tracking-eyebrow text-muted">
              <CircleDollarSign className="h-3.5 w-3.5" aria-hidden /> Encaissé
            </p>
            <p className="font-display text-2xl font-semibold tabular-nums">{shownRevenue} €</p>
          </div>
        </div>

        {/* Remplissage */}
        <div className="bg-paper-soft px-5 py-3">
          <div className="flex items-center justify-between text-xs font-semibold text-muted">
            <span>
              {count} rendez-vous sur {TOTAL} créneaux
            </span>
            <span className="tabular-nums text-ink">{pct} %</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Taux de remplissage de l’agenda">
            <div className="h-full rounded-full bg-ink transition-[width] duration-700 ease-out" style={{ width: `${pct}%` }} />
          </div>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-[2rem_repeat(6,minmax(0,1fr))] gap-1.5 bg-white p-3 sm:gap-2 sm:p-4">
          <div aria-hidden />
          {DAYS.map((d) => (
            <p key={d} className="pb-1 text-center text-[11px] font-semibold uppercase tracking-wide text-muted sm:text-xs">
              {d}
            </p>
          ))}
          {TIMES.map((time, t) => (
            <div key={time} className="contents">
              <p className="flex items-center text-[10px] font-medium text-muted sm:text-xs">{time}</p>
              {DAYS.map((day, d) => {
                const k = keyOf(d, t)
                const b = filled[k]
                return b ? (
                  <div
                    key={k}
                    className={`relative flex h-12 flex-col items-center justify-center overflow-hidden rounded-lg bg-ink px-1 text-center text-white sm:h-14 lg:h-16 ${latest === k ? 'agenda-pop' : ''}`}
                    aria-label={`${day} ${time} : ${b.label}`}
                  >
                    <span className="w-full truncate text-[10px] font-semibold leading-tight sm:text-xs">{b.label}</span>
                    <span className="flex items-center gap-0.5 text-[9px] text-white/70 sm:text-[10px]">
                      <Check className="h-2.5 w-2.5" aria-hidden /> payé
                    </span>
                    {latest === k ? <span className="agenda-ring pointer-events-none absolute inset-0 rounded-lg" aria-hidden /> : null}
                  </div>
                ) : (
                  <button
                    key={k}
                    type="button"
                    onClick={() => book(d, t, true)}
                    className="group flex h-12 items-center justify-center rounded-lg border border-dashed border-line text-muted transition duration-200 hover:border-ink hover:bg-paper-soft hover:text-ink sm:h-14 lg:h-16"
                    aria-label={`Réserver le créneau ${day} ${time}`}
                  >
                    <Plus className="h-4 w-4 scale-75 opacity-40 transition group-hover:scale-100 group-hover:opacity-100" aria-hidden />
                  </button>
                )
              })}
            </div>
          ))}
        </div>

        {/* Pied */}
        <div className="border-t border-line bg-white px-5 py-3 text-xs text-muted">
          Illustration : touchez un créneau libre pour le réserver.
        </div>
      </div>

      {/* Notifications de succès */}
      <div className="pointer-events-none absolute bottom-16 right-0 z-10 flex w-[15rem] max-w-[80%] translate-x-3 flex-col gap-2 sm:top-24 sm:bottom-auto sm:translate-x-[36%]" aria-live="polite">
        {toasts.map((t) => (
          <div key={t.id} className="agenda-toast flex w-full items-center gap-3 rounded-card border border-line bg-white px-4 py-3 shadow-xl shadow-black/10">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-white">
              {t.kind === 'booking' ? <BellRing className="h-4 w-4" aria-hidden /> : <Check className="h-4 w-4" aria-hidden />}
            </span>
            <span className="min-w-0 text-left">
              <span className="block text-sm font-semibold leading-tight">{t.title}</span>
              <span className="block truncate text-xs text-muted">{t.text}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
