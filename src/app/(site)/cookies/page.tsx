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
      intro="Ce site n’utilise aucun cookie publicitaire. La mesure d’audience, si elle est activée, passe par Plausible, qui ne dépose pas de cookie."
      sections={[
        { h2: 'Tes choix', body: 'Comme aucun cookie de suivi n’est déposé, aucun bandeau de consentement n’est nécessaire. Pour toute question, écris-nous via la page Contact.' },
      ]}
    />
  )
}
