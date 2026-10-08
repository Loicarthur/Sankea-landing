import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Linkedin } from 'lucide-react'
import { ENTITY_SHORT, SOCIALS } from '@/lib/site-config'

const COLUMNS = [
  {
    title: 'Clients',
    links: [
      { label: 'Coiffures femmes', href: '/coiffures' },
      { label: 'Coiffures hommes', href: '/coiffures' },
      { label: 'Coiffures enfants', href: '/coiffures' },
      { label: 'Comment ça marche', href: '/comment-ca-marche' },
      { label: 'Télécharger l’app', href: '/app' },
    ],
  },
  {
    title: 'Salons',
    links: [
      { label: 'Sankéa Pro', href: '/pro' },
      { label: 'Créer mon salon', href: '/pro#creer' },
      { label: 'Blog salons', href: '/pro/blog' },
      { label: 'FAQ salons', href: '/pro#faq' },
    ],
  },
  {
    title: 'Sankéa',
    links: [
      { label: 'À propos', href: '/a-propos' },
      { label: 'Blog', href: '/blog' },
      { label: 'Aide', href: '/aide' },
      { label: 'Contact', href: '/contact' },
      { label: 'Presse', href: '/contact#presse' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'CGU', href: '/cgu' },
      { label: 'Conditions salons', href: '/conditions-salons' },
      { label: 'Confidentialité', href: '/confidentialite' },
      { label: 'Cookies', href: '/cookies' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="on-dark bg-ink text-white">
      <div className="container-site py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div>
            <p className="flex items-center gap-3 font-display text-3xl font-semibold">
              <Image src="/logo-mark-white.png" alt="" width={44} height={44} className="h-11 w-11" />
              Sankéa
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-dark">{ENTITY_SHORT}</p>
            <div className="mt-5 flex gap-3">
              <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full border border-border-dark p-2.5 transition hover:bg-surface-dark">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-border-dark p-2.5 transition hover:bg-surface-dark">
                <Linkedin className="h-4 w-4" />
              </a>
              {SOCIALS.tiktok ? (
                <a href={SOCIALS.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="rounded-full border border-border-dark px-3 py-2 text-xs font-semibold transition hover:bg-surface-dark">
                  TikTok
                </a>
              ) : null}
            </div>
          </div>
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="eyebrow">{col.title}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-white/85 transition hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <p className="mt-12 border-t border-border-dark pt-6 text-xs text-muted-dark">© 2026 Sankéa. Tous droits réservés.</p>
      </div>
    </footer>
  )
}
