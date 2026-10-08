import { StoreBadges } from './StoreBadges'
import { QrCode } from './QrCode'

/** Badges stores + QR code (desktop uniquement). */
export function DownloadBlock({ section, dark = false, center = false }: { section: string; dark?: boolean; center?: boolean }) {
  return (
    <div className={`flex flex-col gap-6 md:flex-row md:items-center md:gap-8 ${center ? 'items-center md:justify-center' : ''}`}>
      <StoreBadges section={section} dark={dark} center={center} />
      <div className="hidden md:block">
        <QrCode section={section} dark={dark} />
      </div>
    </div>
  )
}
