import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { APP_ID, breadcrumbJsonLd, buildMetadata, pageJsonLd } from '@/lib/seo'
import { JsonLd } from '@/components/JsonLd'
import { ANDROID_AVAILABLE, appStoreUrl, playStoreUrl } from '@/lib/site-config'
import { DownloadBlock } from '@/components/DownloadBlock'
import { AndroidNotifyForm } from '@/components/AndroidNotifyForm'

export const metadata = buildMetadata({
  title: 'Télécharger Sankéa sur iPhone et Android',
  description:
    'Télécharge Sankéa gratuitement sur l’App Store et réserve ta coiffure afro en quelques secondes. La version Android arrive bientôt.',
  path: '/app',
  ogTitle: 'Télécharge Sankéa',
})

type SearchParams = Promise<{ src?: string | string[] }>

/** Redirection intelligente : iOS → App Store, Android → Play Store ou formulaire, desktop → QR code et badges. */
export default async function AppPage({ searchParams }: { searchParams: SearchParams }) {
  const { src } = await searchParams
  const raw = Array.isArray(src) ? src[0] : src
  const section = (raw ?? 'app').replace(/[^a-z0-9_-]/gi, '').slice(0, 40) || 'app'

  const ua = (await headers()).get('user-agent') ?? ''
  const isIOS = /iPhone|iPad|iPod/i.test(ua)
  const isAndroid = /Android/i.test(ua)

  if (isIOS) redirect(appStoreUrl(section))
  if (isAndroid && ANDROID_AVAILABLE) {
    const url = playStoreUrl(section)
    if (url) redirect(url)
  }

  return (
    <>
    <JsonLd
      data={[
        pageJsonLd({ path: '/app', name: 'Télécharger Sankéa', description: metadata.description as string, mainEntity: { '@id': APP_ID } }),
        breadcrumbJsonLd([{ name: 'Accueil', path: '/' }, { name: 'Télécharger l’app', path: '/app' }]),
      ]}
    />
    <section className="bg-white">
      <div className="container-site flex flex-col items-center py-16 text-center md:py-28">
        <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tightest md:text-7xl">Télécharge Sankéa</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Scanne le QR code avec ton téléphone, ou clique sur ton store. L’app est gratuite.
        </p>
        <div className="mt-10">
          <DownloadBlock section={`app-${section}`} center />
        </div>
        {isAndroid && !ANDROID_AVAILABLE ? (
          <div className="mt-8 w-full max-w-md text-left">
            <AndroidNotifyForm section={`app-${section}`} heading />
          </div>
        ) : null}
      </div>
    </section>
    </>
  )
}
