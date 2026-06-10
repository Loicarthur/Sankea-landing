import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'

const display = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
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
  metadataBase: new URL('https://san-kea.com'),
  title: 'Sankéa — Réservez votre coiffure afro en ligne',
  description:
    'Sankéa connecte les clients aux meilleurs salons et coiffeuses afro. Réservez en ligne, payez en toute sécurité, et faites-vous coiffer en toute sérénité.',
  keywords: ['coiffure afro', 'salon de coiffure', 'box braids', 'tresses', 'locks', 'réservation coiffure', 'Sankéa'],
  openGraph: {
    title: 'Sankéa — Réservez votre coiffure afro en ligne',
    description:
      'Trouvez les meilleurs salons et coiffeuses afro près de chez vous, réservez en ligne et payez en toute sécurité.',
    url: 'https://san-kea.com',
    siteName: 'Sankéa',
    locale: 'fr_FR',
    type: 'website',
  },
  icons: {
    icon: '/logo_sankea.jpg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-surface text-ink antialiased">{children}</body>
    </html>
  )
}
