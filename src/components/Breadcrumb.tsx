import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function Breadcrumb({ items, dark = false }: { items: { name: string; href?: string }[]; dark?: boolean }) {
  return (
    <nav aria-label="Fil d’Ariane" className={`text-sm ${dark ? 'text-muted-dark' : 'text-muted'}`}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => (
          <li key={it.name} className="flex items-center gap-1.5">
            {it.href ? (
              <Link href={it.href} className={`underline-offset-4 hover:underline ${dark ? 'hover:text-white' : 'hover:text-ink'}`}>
                {it.name}
              </Link>
            ) : (
              <span aria-current="page" className={dark ? 'text-white' : 'text-ink'}>
                {it.name}
              </span>
            )}
            {i < items.length - 1 ? <ChevronRight className="h-3.5 w-3.5" aria-hidden /> : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}
