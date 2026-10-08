import { buildMetadata, breadcrumbJsonLd, itemListJsonLd, pageJsonLd } from '@/lib/seo'
import { PUBLISHED_STYLES } from '@/content/coiffures'
import { JsonLd } from '@/components/JsonLd'
import { Breadcrumb } from '@/components/Breadcrumb'
import { StyleTabs } from '@/components/StyleTabs'
import { CtaBlock } from '@/components/CtaBlock'

export const metadata = buildMetadata({
  title: 'Coiffures afro femme, homme et enfant | Sankéa',
  description:
    'Box braids, knotless, locks, dégradés, tresses enfants : découvre toutes les coiffures afro, leurs prix moyens et leurs durées, puis réserve sur Sankéa.',
  path: '/coiffures',
  ogTitle: 'Toutes les coiffures afro, pour toute la famille',
})

export default function CoiffuresPage() {
  return (
    <>
      <JsonLd
        data={[
          pageJsonLd({ path: '/coiffures', name: 'Toutes les coiffures afro, pour toute la famille', description: metadata.description as string, type: 'CollectionPage' }),
          itemListJsonLd('Coiffures afro', PUBLISHED_STYLES.map((st) => ({ name: st.name, path: `/coiffures/${st.slug}` }))),
          breadcrumbJsonLd([{ name: 'Accueil', path: '/' }, { name: 'Coiffures', path: '/coiffures' }]),
        ]}
      />
      <section className="bg-white">
        <div className="container-site py-10 md:py-16">
          <Breadcrumb items={[{ name: 'Accueil', href: '/' }, { name: 'Coiffures' }]} />
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.02] tracking-tightest md:text-6xl">
            Toutes les coiffures afro, pour toute la famille
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Tu cherches une idée de coiffure ou tu sais déjà ce que tu veux ? Sankéa rassemble les coiffures afro les plus demandées, avec leur prix moyen, leur durée de pose et leur tenue. Ensuite, tu trouves le salon spécialisé près de chez toi dans l’app.
          </p>
          <div className="mt-10">
            <StyleTabs srHeading="Coiffures afro par public" />
          </div>
        </div>
      </section>
      <CtaBlock
        title={<>Trouve ton salon <em>dans l’app</em>.</>}
        text="Compare les prix, les durées et les réalisations, puis réserve en quelques secondes."
        section="coiffures-cta"
        image={{ src: '/styles/twists.jpg', alt: 'Femme portant des passion twists bouclées', position: 'center 30%' }}
      />
    </>
  )
}
