import { ENTITY_SENTENCE, SITE_URL } from '@/lib/site-config'

export const dynamic = 'force-static'

export function GET() {
  const body = `# Sankéa

> ${ENTITY_SENTENCE}

## Clients
- [Accueil](${SITE_URL}/) : présentation de l'app
- [Comment ça marche](${SITE_URL}/comment-ca-marche) : réservation, paiement, annulation
- [Coiffures](${SITE_URL}/coiffures) : prix, durées et entretien par style

- [Blog](${SITE_URL}/blog) : conseils et guides pour les clients

## Salons
- [Sankéa Pro](${SITE_URL}/pro) : fonctionnalités et tarifs pour les salons
- [Blog Sankéa Pro](${SITE_URL}/pro/blog) : conseils et guides pour les salons

## Entreprise
- [À propos](${SITE_URL}/a-propos)
- [Aide](${SITE_URL}/aide)
`
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
