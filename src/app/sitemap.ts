import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site-config'
import { PUBLISHED_STYLES } from '@/content/coiffures'
import { POSTS, postPath } from '@/content/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const pages = ['/', '/pro', '/coiffures', '/comment-ca-marche', '/blog', '/pro/blog', '/app', '/a-propos', '/aide', '/contact', '/liens']
  const legal = ['/mentions-legales', '/cgu', '/conditions-salons', '/confidentialite', '/cookies']
  return [
    ...pages.map((p) => ({ url: `${SITE_URL}${p}`, lastModified: now, changeFrequency: 'monthly' as const, priority: p === '/' ? 1 : 0.8 })),
    ...PUBLISHED_STYLES.map((s) => ({ url: `${SITE_URL}/coiffures/${s.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 })),
    ...POSTS.map((p) => ({ url: `${SITE_URL}${postPath(p)}`, lastModified: new Date(p.updated), changeFrequency: 'monthly' as const, priority: 0.6 })),
    ...legal.map((p) => ({ url: `${SITE_URL}${p}`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.2 })),
  ]
}
