import type { Metadata } from 'next'
import { DATA, SITE_NAME, SITE_URL, APP_STORE_URL, SOCIALS, ENTITY_SENTENCE, absoluteUrl, has } from './site-config'

/** Date de dernière révision éditoriale du site (dateModified des pages). */
export const SITE_UPDATED = '2026-10-08'

type MetaInput = {
  title: string
  description: string
  path: string
  ogTitle?: string
  noindex?: boolean
}

/** Title ≤ 60 caractères et meta description ≤ 155 : tronque proprement au besoin. */
export function fitTitle(title: string, max = 60): string {
  if (title.length <= max) return title
  const noBrand = title.replace(/\s*\|\s*Sankéa( Pro)?$/, '')
  return noBrand.length <= max ? noBrand : `${noBrand.slice(0, max - 1).trimEnd()}…`
}

export function buildMetadata({ title, description, path, ogTitle, noindex }: MetaInput): Metadata {
  const finalTitle = fitTitle(title)
  const og = `/og?title=${encodeURIComponent(ogTitle ?? finalTitle.replace(/\s*\|\s*Sankéa( Pro)?$/, ''))}`
  return {
    title: { absolute: finalTitle },
    description,
    alternates: { canonical: path },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title: finalTitle,
      description,
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      locale: 'fr_FR',
      type: 'website',
      images: [{ url: og, width: 1200, height: 630, alt: finalTitle }],
    },
    twitter: { card: 'summary_large_image', title: finalTitle, description, images: [og] },
  }
}

/* ------------------------------------------------------------------ */
/* Entités globales                                                    */
/* ------------------------------------------------------------------ */

const ORG_ID = `${SITE_URL}/#organization`
const SITE_ID = `${SITE_URL}/#website`

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE_NAME,
  legalName: DATA.RAISON_SOCIALE ?? SITE_NAME,
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    '@id': `${SITE_URL}/#logo`,
    url: absoluteUrl('/logo-mark.png'),
    width: 512,
    height: 512,
    caption: SITE_NAME,
  },
  image: absoluteUrl('/og?title=Sank%C3%A9a'),
  description: ENTITY_SENTENCE,
  slogan: 'La coiffure afro, enfin simple à réserver.',
  email: DATA.EMAIL_CONTACT ?? undefined,
  ...(has('ANNEE') ? { foundingDate: DATA.ANNEE } : {}),
  ...(has('VILLE_SIEGE')
    ? { address: { '@type': 'PostalAddress', addressLocality: DATA.VILLE_SIEGE, addressCountry: 'FR' } }
    : {}),
  areaServed: { '@type': 'Country', name: 'France' },
  knowsAbout: ['coiffure afro', 'tresses', 'knotless braids', 'locks', 'dégradé afro', 'réservation en ligne de coiffure'],
  contactPoint: [
    { '@type': 'ContactPoint', contactType: 'customer support', email: DATA.EMAIL_CONTACT, availableLanguage: 'fr', areaServed: 'FR' },
    { '@type': 'ContactPoint', contactType: 'sales', email: DATA.EMAIL_PRO, availableLanguage: 'fr', areaServed: 'FR' },
    { '@type': 'ContactPoint', contactType: 'press', email: DATA.EMAIL_PRESSE, availableLanguage: 'fr', areaServed: 'FR' },
  ].filter((c) => c.email),
  sameAs: [SOCIALS.instagram, SOCIALS.linkedin, SOCIALS.tiktok, APP_STORE_URL].filter(Boolean),
}

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': SITE_ID,
  name: SITE_NAME,
  alternateName: 'Sankéa — application de réservation de coiffure afro',
  url: SITE_URL,
  inLanguage: 'fr-FR',
  description: ENTITY_SENTENCE,
  publisher: { '@id': ORG_ID },
}

/* ------------------------------------------------------------------ */
/* Helpers par page                                                    */
/* ------------------------------------------------------------------ */

export function breadcrumbJsonLd(crumbs: { name: string; path: string }[]) {
  const last = crumbs[crumbs.length - 1]
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${absoluteUrl(last.path)}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  }
}

export function faqJsonLd(items: { q: string; a: string }[], path?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    ...(path ? { '@id': `${absoluteUrl(path)}#faq` } : {}),
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  }
}

type PageInput = {
  path: string
  name: string
  description: string
  /** WebPage, AboutPage, ContactPage, CollectionPage, ProfilePage… */
  type?: string
  /** Image principale (chemin public). */
  image?: string
  /** Entité principale décrite par la page (référence @id ou objet). */
  mainEntity?: object
  about?: object
  breadcrumb?: boolean
  datePublished?: string
  dateModified?: string
}

/** WebPage typée, reliée au WebSite, à l'Organization et au fil d'Ariane. */
export function pageJsonLd({
  path,
  name,
  description,
  type = 'WebPage',
  image,
  mainEntity,
  about,
  breadcrumb = true,
  datePublished = SITE_UPDATED,
  dateModified = SITE_UPDATED,
}: PageInput) {
  const url = absoluteUrl(path)
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: 'fr-FR',
    isPartOf: { '@id': SITE_ID },
    publisher: { '@id': ORG_ID },
    datePublished,
    dateModified,
    ...(image ? { primaryImageOfPage: { '@type': 'ImageObject', url: absoluteUrl(image) } } : {}),
    ...(breadcrumb ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
    ...(mainEntity ? { mainEntity } : {}),
    ...(about ? { about } : {}),
  }
}

export function itemListJsonLd(name: string, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: absoluteUrl(it.path),
    })),
  }
}

export const APP_ID = `${SITE_URL}/#app`
export const PRO_APP_ID = `${SITE_URL}/pro#app`
export { ORG_ID, SITE_ID }
