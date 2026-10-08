import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Fraunces, Inter } from 'next/font/google'
import { APP_STORE_ID, SITE_URL, ENTITY_SENTENCE } from '@/lib/site-config'
import { RevealController } from '@/components/RevealController'
import './globals.css'

const display = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Sankéa : l'app de réservation de coiffure afro", template: '%s' },
  description: ENTITY_SENTENCE,
  other: { 'apple-itunes-app': `app-id=${APP_STORE_ID}` },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#191919',
}

const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-paper text-ink antialiased">
        {children}
        <RevealController />
        {PLAUSIBLE_DOMAIN ? (
          <Script defer data-domain={PLAUSIBLE_DOMAIN} src="https://plausible.io/js/script.tagged-events.js" strategy="afterInteractive" />
        ) : null}
      </body>
    </html>
  )
}
