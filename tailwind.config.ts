import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#191919',
        'ink-soft': '#202020',
        'surface-dark': '#262626',
        'border-dark': '#333333',
        paper: '#FFFFFF',
        'paper-soft': '#F9F8F8',
        line: '#E6E6E6',
        muted: '#6B6B6B',
        'muted-dark': '#A3A3A3',
        surface: '#f9f8f8',
      },
      fontFamily: {
        sans: ['var(--font-sans)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        eyebrow: '0.12em',
      },
      maxWidth: {
        site: '1200px',
      },
      borderRadius: {
        card: '16px',
      },
    },
  },
  plugins: [],
}
export default config
