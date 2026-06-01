import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="fr">
      <body className="bg-surface text-ink antialiased">{children}</body>
    </html>
  )
}
