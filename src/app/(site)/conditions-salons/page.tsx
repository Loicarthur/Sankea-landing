import { buildMetadata } from '@/lib/seo'
import { HOSTED_LEGAL } from '@/lib/site-config'
import { LegalPage } from '@/components/LegalPage'

export const metadata = buildMetadata({
  title: 'Conditions salons | Sankéa',
  description: 'Conditions applicables aux salons et coiffeurs qui utilisent Sankéa Pro : commission, reversements et annulations.',
  path: '/conditions-salons',
})

export default function Page() {
  return (
    <LegalPage
      path="/conditions-salons"
      title="Conditions salons"
      intro="Les conditions applicables aux salons et coiffeurs qui utilisent Sankéa Pro sont publiées sur le document de référence ci-dessous."
      externalUrl={HOSTED_LEGAL.terms}
      externalLabel="Lire les conditions"
      sections={[
        { h2: 'Commission et reversements', body: 'Le premier mois est sans commission pour les salons fondateurs. Les conditions de commission, de reversement et d’annulation sont précisées dans le document de référence.' },
      ]}
    />
  )
}
