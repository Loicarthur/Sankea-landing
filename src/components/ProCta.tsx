'use client'

import { track } from '@/lib/analytics'

export function ProCta({ href, section, className, children }: { href: string; section: string; className?: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className} onClick={() => track('clic_pro', { section })}>
      {children}
    </a>
  )
}
