import { buildMetadata } from '@/lib/seo'
import { dataValue } from '@/lib/site-config'
import { LegalPage } from '@/components/LegalPage'

export const metadata = buildMetadata({
  title: 'Mentions légales | Sankéa',
  description: 'Mentions légales du site et de l’application Sankéa : éditeur, directeur de la publication, hébergeur et contact.',
  path: '/mentions-legales',
})

export default function Page() {
  return (
    <LegalPage
      path="/mentions-legales"
      title="Mentions légales"
      intro="Informations légales relatives au site et à l’application Sankéa."
      sections={[
        { h2: 'Éditeur du site', body: `${dataValue('RAISON_SOCIALE')}, SIRET ${dataValue('SIRET')}, ${dataValue('ADRESSE_SIEGE')}. Contact : ${dataValue('EMAIL_CONTACT')}.` },
        { h2: 'Directeur de la publication', body: dataValue('FONDATEURS') },
        { h2: 'Hébergeur', body: 'Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.' },
      ]}
    />
  )
}
