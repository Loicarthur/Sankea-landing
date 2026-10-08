import { buildMetadata } from '@/lib/seo'
import { HOSTED_LEGAL, dataValue } from '@/lib/site-config'
import { LegalPage } from '@/components/LegalPage'

export const metadata = buildMetadata({
  title: 'Politique de confidentialité | Sankéa',
  description: 'Comment Sankéa collecte, utilise et protège tes données personnelles (RGPD).',
  path: '/confidentialite',
})

export default function Page() {
  return (
    <LegalPage
      path="/confidentialite"
      title="Politique de confidentialité"
      intro="La politique de confidentialité complète de Sankéa est publiée sur le document de référence ci-dessous."
      externalUrl={HOSTED_LEGAL.privacy}
      externalLabel="Lire la politique complète"
      sections={[
        { h2: 'Paiement', body: 'Stripe traite chaque paiement. Sankéa ne stocke aucune donnée bancaire.' },
        { h2: 'Exercer tes droits', body: `Pour accéder à tes données, les corriger ou les supprimer, écris à ${dataValue('EMAIL_CONTACT')}.` },
      ]}
    />
  )
}
