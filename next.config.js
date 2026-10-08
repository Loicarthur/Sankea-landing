/** @type {import('next').NextConfig} */
const ONE_MONTH = 60 * 60 * 24 * 30

const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Pas de variantes > 1920 px : les sources font au plus ~2000 px
    deviceSizes: [640, 828, 1080, 1280, 1600, 1920],
    imageSizes: [48, 96, 160, 256, 384],
    qualities: [60, 70, 75],
    minimumCacheTTL: ONE_MONTH,
  },
  async headers() {
    // Médias de /public : non versionnés, donc cache long + revalidation en arrière-plan
    const media = `public, max-age=${ONE_MONTH}, stale-while-revalidate=86400`
    return ['photos', 'styles', 'screens', 'bw'].map((dir) => ({
      source: `/${dir}/:path*`,
      headers: [{ key: 'Cache-Control', value: media }],
    })).concat([
      { source: '/logo-mark:suffix(.*).png', headers: [{ key: 'Cache-Control', value: media }] },
    ])
  },
}
module.exports = nextConfig
