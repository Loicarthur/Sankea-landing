import { ImageResponse } from 'next/og'

export async function GET(req: Request) {
  const title = (new URL(req.url).searchParams.get('title') ?? 'Sankéa').slice(0, 110)
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#191919',
          color: '#ffffff',
          padding: 72,
        }}
      >
        <div style={{ display: 'flex', fontSize: 40, letterSpacing: 4, textTransform: 'uppercase', color: '#a3a3a3' }}>Sankéa</div>
        <div style={{ display: 'flex', fontSize: 78, fontWeight: 700, lineHeight: 1.05, maxWidth: 1000 }}>{title}</div>
        <div style={{ display: 'flex', fontSize: 30, color: '#a3a3a3' }}>L’app de réservation de coiffure afro</div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
