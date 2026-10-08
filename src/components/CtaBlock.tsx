import { DownloadBlock } from './DownloadBlock'
import { PhotoBackdrop } from './PhotoBackdrop'

type Props = {
  title: React.ReactNode
  text: string
  section: string
  dark?: boolean
  footnote?: React.ReactNode
  /** Photo de fond (le CTA passe alors en sombre). */
  image?: { src: string; alt: string; position?: string }
}

/** CTA final : titre, texte, badges et QR code. */
export function CtaBlock({ title, text, section, dark = true, footnote, image }: Props) {
  return (
    <section className={`${dark || image ? 'on-dark bg-ink text-white' : 'bg-paper-soft'} ${image ? 'relative isolate overflow-hidden' : ''} section-y`}>
      {image ? <PhotoBackdrop src={image.src} alt={image.alt} position={image.position} overlay="bg-black/65" /> : null}
      <div className="container-site flex flex-col items-center text-center">
        <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl [&_em]:font-normal [&_em]:italic">{title}</h2>
        <p className={`mt-5 max-w-xl text-lg ${image ? 'text-white/85' : dark ? 'text-muted-dark' : 'text-muted'}`}>{text}</p>
        <div className="mt-8">
          <DownloadBlock section={section} dark={dark} center />
        </div>
        {footnote ? <div className={`mt-6 text-sm ${dark ? 'text-muted-dark' : 'text-muted'}`}>{footnote}</div> : null}
      </div>
    </section>
  )
}
