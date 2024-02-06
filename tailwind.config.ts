import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem'
      },
      screens: {
        DEFAULT: '1280px'
      }
    },
    colors: {
      brand: {
        50: '#FEFBE8',
        100: '#FFF8C2',
        200: '#FFEC89',
        300: '#FFDD54',
        400: '#FDC512',
        500: '#ECAB06',
        600: '#CC8302',
        700: '#A35C05',
        800: '#86480D',
        900: '#723B11',
        950: '#431E05'
      },
      gray: {
        50: '#F8FAFC',
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CBD5E1',
        400: '#94A3B8',
        500: '#64748B',
        600: '#475569',
        700: '#334155',
        800: '#1E293B',
        900: '#0F172A',
        950: '#020617'
      },
      green: '#25D366',
      white: '#FFF'
    },
    fontFamily: {
      sans: ['var(--font-sans)', 'sans-serif'],
      heading: ['var(--font-heading)', 'serif']
    },
    extend: {
      spacing: {
        18: '72px'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      backgroundImage: {
        hero: "url('/hero.webp')",
        cta: "url('/pictureCTA.webp')"
      }
    }
  },
  plugins: []
} satisfies Config

export default config
