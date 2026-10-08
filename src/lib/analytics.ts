'use client'

type Props = Record<string, string | number | boolean>

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Props }) => void
  }
}

/** Événements : clic_store, inscription_android, clic_pro. */
export function track(event: 'clic_store' | 'inscription_android' | 'clic_pro', props?: Props) {
  try {
    window.plausible?.(event, props ? { props } : undefined)
  } catch {
    /* analytics indisponible : on ignore */
  }
}
