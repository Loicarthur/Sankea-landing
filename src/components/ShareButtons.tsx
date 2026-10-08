'use client'

import { useEffect, useState } from 'react'
import { Check, Facebook, Link2, Linkedin, Mail, MessageCircle, Share2, Twitter } from 'lucide-react'

type Props = { url: string; title: string; dark?: boolean }

export function ShareButtons({ url, title, dark = false }: Props) {
  const [copied, setCopied] = useState(false)
  const [canShare, setCanShare] = useState(false)
  useEffect(() => setCanShare(typeof navigator.share === 'function'), [])
  const u = encodeURIComponent(url)
  const t = encodeURIComponent(title)

  const links = [
    { label: 'WhatsApp', icon: MessageCircle, href: `https://wa.me/?text=${t}%20${u}` },
    { label: 'Facebook', icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
    { label: 'X (Twitter)', icon: Twitter, href: `https://twitter.com/intent/tweet?url=${u}&text=${t}` },
    { label: 'LinkedIn', icon: Linkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { label: 'E-mail', icon: Mail, href: `mailto:?subject=${t}&body=${u}` },
  ]

  async function copy() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt('Copie ce lien :', url)
    }
  }

  async function nativeShare() {
    try {
      await navigator.share({ title, url })
    } catch {
      /* partage annulé */
    }
  }

  const btn = `inline-flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 hover:-translate-y-0.5 ${
    dark ? 'border-border-dark hover:bg-surface-dark' : 'border-line hover:bg-paper-soft'
  }`

  return (
    <div className="flex flex-wrap items-center gap-3">
      <p className="mr-2 font-display text-lg font-semibold">Partager cet article</p>
      {canShare ? (
        <button type="button" onClick={nativeShare} className={`${btn} md:hidden`} aria-label="Partager">
          <Share2 className="h-4 w-4" />
        </button>
      ) : null}
      {links.map((l) => (
        <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={btn} aria-label={`Partager sur ${l.label}`}>
          <l.icon className="h-4 w-4" />
        </a>
      ))}
      <button type="button" onClick={copy} className={btn} aria-label={copied ? 'Lien copié' : 'Copier le lien'}>
        {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
      </button>
      <span role="status" className={`text-sm ${dark ? 'text-muted-dark' : 'text-muted'}`}>
        {copied ? 'Lien copié' : ''}
      </span>
    </div>
  )
}
