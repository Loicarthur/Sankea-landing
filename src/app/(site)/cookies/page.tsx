import { buildMetadata } from '@/lib/seo'
import { LegalPage } from '@/components/LegalPage'

export const metadata = buildMetadata({
  title: 'Politique cookies | Sankéa',
  description: 'Les cookies et traceurs utilisés par le site Sankéa : aucun cookie publicitaire, mesure d’audience sans cookie.',
  path: '/cookies',
})

export default function Page() {
  return (
    <LegalPage
      path="/cookies"
      title="Politique cookies"
      intro="Ce site n’utilise aucun cookie publicitaire. Il mesure son audience avec Google Analytics, qui dépose des cookies pour compter les visites de façon statistique."
      sections={[
        { h2: 'Google Analytics', body: 'Google Analytics 4 dépose des cookies (par exemple _ga) pour mesurer le nombre de visites, les pages consultées et les clics sur les boutons de téléchargement. Ces données servent uniquement à améliorer le site.' },
        { h2: 'Tes choix', body: 'Tu peux bloquer ces cookies depuis les réglages de ton navigateur, ou installer l’extension officielle de Google pour désactiver Google Analytics. Pour toute question, écris-nous via la page Contact.' },
      ]}
    />
  )
}
