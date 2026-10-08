import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site-config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/og'] },
      { userAgent: ['GPTBot', 'PerplexityBot', 'ClaudeBot', 'Google-Extended'], allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
