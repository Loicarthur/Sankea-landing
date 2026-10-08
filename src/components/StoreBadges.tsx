'use client'

import { useState } from 'react'
import { ANDROID_AVAILABLE, appStoreUrl, playStoreUrl } from '@/lib/site-config'
import { track } from '@/lib/analytics'
import { AndroidNotifyForm } from './AndroidNotifyForm'

type Props = {
  /** Section d'origine : alimente les paramètres de campagne et l'événement clic_store. */
  section: string
  dark?: boolean
  center?: boolean
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 384 512" className="h-7 w-7 fill-white" aria-hidden>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 512 512" className="h-7 w-7" aria-hidden>
      <path fill="#fff" d="M47.6 23.4C40.3 30.5 36 41.5 36 55.9v400.2c0 14.4 4.3 25.4 11.6 32.5l1.4 1.3 224.2-224.2v-5.3L48.9 36z" />
      <path fill="#fff" d="M349 339.1l-74.8-74.8v-5.3L349 184.2l1.7 1 88.6 50.3c25.3 14.4 25.3 37.9 0 52.3L350.7 338z" />
      <path fill="#fff" d="M274.2 264.3L48.9 489.6c8.3 8.8 22 9.9 37.4 1.1l263.6-149.7z" />
      <path fill="#fff" d="M274.2 258.7L48.9 33.4c-.1 0 0 0 0 0 8.3-8.8 22-9.9 37.4-1.1l263.6 149.7z" />
    </svg>
  )
}

export function StoreBadges({ section, dark = false, center = false }: Props) {
  const [showForm, setShowForm] = useState(false)
  const playUrl = ANDROID_AVAILABLE ? playStoreUrl(section) : null
  const badge = `inline-flex min-w-[10.5rem] items-center gap-3 rounded-xl border px-4 py-2.5 text-white transition hover:opacity-85 ${
    dark ? 'border-white/20 bg-ink' : 'border-ink bg-ink'
  }`

  return (
    <div>
      <div className={`flex flex-wrap items-center gap-3 ${center ? 'justify-center' : ''}`}>
        <a
          href={appStoreUrl(section)}
          target="_blank"
          rel="noreferrer"
          onClick={() => track('clic_store', { section, store: 'app-store' })}
          className={badge}
        >
          <AppleIcon />
          <span className="text-left leading-tight">
            <span className="block text-[10px] uppercase tracking-wide text-white/60">Télécharger sur</span>
            <span className="block text-base font-semibold">App Store</span>
          </span>
        </a>

        {playUrl ? (
          <a
            href={playUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => track('clic_store', { section, store: 'google-play' })}
            className={badge}
          >
            <PlayIcon />
            <span className="text-left leading-tight">
              <span className="block text-[10px] uppercase tracking-wide text-white/60">Disponible sur</span>
              <span className="block text-base font-semibold">Google Play</span>
            </span>
          </a>
        ) : (
          <button
            type="button"
            onClick={() => setShowForm((v) => !v)}
            aria-expanded={showForm}
            className={`${badge} text-left`}
          >
            <PlayIcon />
            <span className="leading-tight">
              <span className="block text-[10px] uppercase tracking-wide text-white/60">Bientôt sur</span>
              <span className="block text-base font-semibold">Google Play</span>
            </span>
          </button>
        )}
      </div>

      {!ANDROID_AVAILABLE ? (
        <div className={`mt-3 text-sm ${center ? 'text-center' : ''} ${dark ? 'text-muted-dark' : 'text-muted'}`}>
          Disponible sur iPhone. Android arrive bientôt :{' '}
          <button type="button" onClick={() => setShowForm(true)} className="font-semibold underline underline-offset-4">
            Préviens-moi
          </button>
          {showForm ? <div className={center ? 'flex justify-center text-left' : ''}><AndroidNotifyForm section={section} dark={dark} /></div> : null}
        </div>
      ) : null}
    </div>
  )
}
