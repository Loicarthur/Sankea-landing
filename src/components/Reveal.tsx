type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li' | 'p' | 'span'
}

/**
 * Apparition au scroll. Composant serveur : il ne rend qu'un attribut `data-reveal`,
 * l'animation est pilotée par un seul observateur (voir RevealController).
 */
export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }: RevealProps) {
  return (
    <Tag data-reveal="" style={delay ? { transitionDelay: `${delay}ms` } : undefined} className={`reveal ${className}`}>
      {children}
    </Tag>
  )
}
