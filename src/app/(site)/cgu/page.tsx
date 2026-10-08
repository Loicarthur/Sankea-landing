import { buildMetadata } from '@/lib/seo'
import { HOSTED_LEGAL } from '@/lib/site-config'
import { LegalPage } from '@/components/LegalPage'

export const metadata = buildMetadata({
  title: 'Conditions générales d’utilisation | Sankéa',
  description: 'Conditions générales d’utilisation de l’application Sankéa pour les clients.',
  path: '/cgu',
})

export default function Page() {
  return (
    <LegalPage
      path="/cgu"
      title="Conditions générales d’utilisation"
      intro="Les conditions applicables aux clients de l’application Sankéa sont publiées sur le document de référence ci-dessous."
      externalUrl={HOSTED_LEGAL.terms}
      externalLabel="Lire les conditions"
      sections={[
        { h2: 'Paiement et remboursement', body: 'Chaque paiement est traité par Stripe. Les conditions d’annulation et de remboursement sont précisées dans le document de référence.' },
      ]}
    />
  )
}
