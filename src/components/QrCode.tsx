import QRCode from 'qrcode'
import { absoluteUrl } from '@/lib/site-config'

/** QR code généré au build, pointant vers /app (avec la section d'origine). */
export async function QrCode({ section, dark = false, size = 112 }: { section: string; dark?: boolean; size?: number }) {
  const svg = await QRCode.toString(absoluteUrl(`/app?src=${encodeURIComponent(section)}`), {
    type: 'svg',
    margin: 1,
    color: { dark: '#191919', light: '#ffffff' },
  })
  return (
    <div className="flex items-center gap-3">
      <div
        className={`overflow-hidden rounded-xl p-1.5 ${dark ? 'bg-white' : 'border border-line bg-white'}`}
        style={{ width: size, height: size }}
        role="img"
        aria-label="QR code pour télécharger Sankéa"
        dangerouslySetInnerHTML={{ __html: svg.replace('<svg ', '<svg width="100%" height="100%" ') }}
      />
      <p className={`max-w-[9rem] text-sm leading-snug ${dark ? 'text-muted-dark' : 'text-muted'}`}>Scanne pour télécharger</p>
    </div>
  )
}
