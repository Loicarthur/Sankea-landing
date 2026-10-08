'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { appStoreUrl } from '@/lib/site-config'
import { track } from '@/lib/analytics'

type NavLink = { label: string; href: string }

type Props = {
  variant?: 'client' | 'pro'
  links: NavLink[]
  ctaLabel: string
  ctaHref?: string
  logoLabel?: string
  /** Lien discret (ex. « Vous cherchez un salon ? »). */
  sideLink?: NavLink
  /** Bouton secondaire placé juste avant le bouton principal. */
  secondaryCta?: NavLink
}

/** Pages dont le hero plein écran passe sous le header (transparent au départ). */
const HERO_PATHS = ['/', '/pro']

export function Header({ variant = 'client', links, ctaLabel, ctaHref, logoLabel = 'Sankéa', sideLink, secondaryCta }: Props) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const pro = variant === 'pro'
  const heroPage = HERO_PATHS.includes(pathname)
  /** Header fondu dans le hero : transparent, texte blanc, jusqu'au premier scroll. */
  const clear = heroPage && !scrolled && !open

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const href = ctaHref ?? appStoreUrl(pro ? 'header-pro' : 'header')
  const external = href.startsWith('http')
  const onCta = () => (pro ? track('clic_pro', { section: 'header' }) : track('clic_store', { section: 'header' }))

  const solid = pro
    ? 'bg-ink/90 text-white backdrop-blur-md'
    : 'bg-white/90 text-ink backdrop-blur-md'
  const tone = clear ? 'bg-transparent text-white' : solid
  const position = heroPage ? 'fixed inset-x-0 top-0' : 'sticky top-0'

  const whiteMark = pro || clear
  const cta = pro || clear ? 'btn-pill-inverse' : 'btn-pill'
  const ghost = clear ? 'btn-ghost !border-white/40 !text-white hover:!bg-white/10' : 'btn-ghost'

  return (
    <header className={`${position} z-50 transition-colors duration-300 ${tone}`}>
      <div className="container-site flex h-16 items-center justify-between gap-6">
        <Link href={pro ? '/pro' : '/'} className="flex items-center gap-2.5 font-display text-2xl font-semibold tracking-tight" aria-label={`${logoLabel}${pro ? ' Pro' : ''} : accueil`}>
          <Image
            src={whiteMark ? '/logo-mark-white.png' : '/logo-mark.png'}
            alt=""
            width={40}
            height={40}
            priority
            className="h-9 w-9 md:h-10 md:w-10"
          />
          {logoLabel}
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-7 text-sm font-medium lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="opacity-80 transition hover:opacity-100">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          {sideLink ? (
            <Link href={sideLink.href} className="text-xs opacity-60 transition hover:opacity-100">
              {sideLink.label}
            </Link>
          ) : null}
          {secondaryCta ? (
            <Link href={secondaryCta.href} className={ghost}>
              {secondaryCta.label}
            </Link>
          ) : null}
          <a href={href} onClick={onCta} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})} className={cta}>
            {ctaLabel}
          </a>
        </div>

        <button
          type="button"
          className="-mr-2 p-2 lg:hidden"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className={`fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto lg:hidden ${pro ? 'bg-ink text-white' : 'bg-white text-ink'}`}>
          <nav aria-label="Menu mobile" className="container-site flex flex-col py-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`border-b py-5 font-display text-3xl font-semibold ${pro ? 'border-border-dark' : 'border-line'}`}
              >
                {l.label}
              </Link>
            ))}
            {sideLink ? (
              <Link href={sideLink.href} onClick={() => setOpen(false)} className="py-5 text-sm opacity-70">
                {sideLink.label}
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link href={secondaryCta.href} onClick={() => setOpen(false)} className="btn-ghost mt-6 py-4 text-base">
                {secondaryCta.label}
              </Link>
            ) : null}
            <a href={href} onClick={onCta} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})} className={`${pro ? 'btn-pill-inverse' : 'btn-pill'} ${secondaryCta ? 'mt-3' : 'mt-6'} py-4 text-base`}>
              {ctaLabel}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
