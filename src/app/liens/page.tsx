import type { Metadata } from 'next'
import Image from 'next/image'
import { JsonLd } from '@/components/JsonLd'
import { ORG_ID, buildMetadata, organizationJsonLd, pageJsonLd, websiteJsonLd } from '@/lib/seo'
import { Instagram, Linkedin, Mail, ArrowUpRight, Sparkles, Scissors } from 'lucide-react'

const APP_STORE_URL = 'https://apps.apple.com/fr/app/sank%C3%A9a/id6766547853'
const SITE_URL = 'https://www.san-kea.com'
const INSTAGRAM_URL = 'https://www.instagram.com/sankea.officiel'
const LINKEDIN_URL = 'https://www.linkedin.com/in/sankea-officiel-256a6240b'
const SUPPORT_EMAIL = 'support@san-kea.com'

export const metadata: Metadata = buildMetadata({
  title: 'Sankéa : tous nos liens',
  description: 'Télécharge Sankéa, découvre l’app et rejoins-nous. La coiffure afro, enfin simple à réserver.',
  path: '/liens',
})

function AppleIcon() {
  return (
    <svg viewBox="0 0 384 512" className="h-6 w-6 fill-current" aria-hidden>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  )
}

function AndroidIcon() {
  return (
    <svg viewBox="0 0 512 512" className="h-6 w-6 fill-current" aria-hidden>
      <path d="M47.6 23.4C40.3 30.5 36 41.5 36 55.9v400.2c0 14.4 4.3 25.4 11.6 32.5l1.4 1.3 224.2-224.2v-5.3L48.9 36z" />
      <path d="M349 339.1l-74.8-74.8v-5.3L349 184.2l1.7 1 88.6 50.3c25.3 14.4 25.3 37.9 0 52.3L350.7 338z" />
    </svg>
  )
}

export default function LiensPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-ink px-6 py-16 text-white">
      <JsonLd
        data={[
          organizationJsonLd,
          websiteJsonLd,
          pageJsonLd({
            path: '/liens',
            name: 'Sankéa : tous nos liens',
            description: metadata.description as string,
            type: 'ProfilePage',
            mainEntity: { '@id': ORG_ID },
            breadcrumb: false,
          }),
        ]}
      />
      <div className="w-full max-w-md">
        {/* En-tête */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/logo_sankea.jpg"
            alt="Logo Sankéa"
            width={80}
            height={80}
            priority
            className="h-20 w-20 rounded-2xl object-cover ring-1 ring-white/15"
          />
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight">Sankéa</h1>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            La coiffure afro, <span className="italic">enfin simple</span> à réserver. 💛
          </p>
        </div>

        {/* Liens */}
        <div className="mt-10 flex flex-col gap-3.5">
          {/* Télécharger iOS — principal */}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-2xl bg-white px-5 py-4 text-ink transition hover:opacity-90"
          >
            <AppleIcon />
            <span className="flex-1 text-left">
              <span className="block text-[11px] uppercase tracking-wide text-ink/50">Télécharger sur</span>
              <span className="block text-base font-semibold">l’App Store (iOS)</span>
            </span>
            <ArrowUpRight size={18} className="text-ink/50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Android — bientôt */}
          <div
            className="flex cursor-default items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white/50"
            aria-label="Bientôt sur Google Play"
          >
            <AndroidIcon />
            <span className="flex-1 text-left">
              <span className="block text-[11px] uppercase tracking-wide text-white/35">Bientôt sur</span>
              <span className="block text-base font-semibold">Google Play (Android)</span>
            </span>
          </div>

          {/* Découvrir l'app */}
          <a
            href={SITE_URL}
            className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.03] px-5 py-4 transition hover:bg-white/[0.07]"
          >
            <Sparkles size={22} className="text-white/80" />
            <span className="flex-1 text-left text-base font-medium">Découvrir Sankéa</span>
            <ArrowUpRight size={18} className="text-white/40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Espace coiffeuses */}
          <a
            href={`${SITE_URL}/#coiffeuses`}
            className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.03] px-5 py-4 transition hover:bg-white/[0.07]"
          >
            <Scissors size={22} className="text-white/80" />
            <span className="flex-1 text-left">
              <span className="block text-base font-medium">Tu es coiffeuse ? Rejoins-nous</span>
              <span className="block text-xs text-white/50">0 % de commission le 1er mois</span>
            </span>
            <ArrowUpRight size={18} className="text-white/40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Instagram */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.03] px-5 py-4 transition hover:bg-white/[0.07]"
          >
            <Instagram size={22} className="text-white/80" />
            <span className="flex-1 text-left text-base font-medium">Instagram — @sankea.officiel</span>
            <ArrowUpRight size={18} className="text-white/40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* LinkedIn */}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.03] px-5 py-4 transition hover:bg-white/[0.07]"
          >
            <Linkedin size={22} className="text-white/80" />
            <span className="flex-1 text-left text-base font-medium">LinkedIn</span>
            <ArrowUpRight size={18} className="text-white/40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Contact */}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.03] px-5 py-4 transition hover:bg-white/[0.07]"
          >
            <Mail size={22} className="text-white/80" />
            <span className="flex-1 text-left text-base font-medium">Nous contacter</span>
            <ArrowUpRight size={18} className="text-white/40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Footer */}
        <p className="mt-12 text-center text-xs text-white/35">© 2026 Sankéa</p>
      </div>
    </main>
  )
}
