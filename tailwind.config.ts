import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './data/**/*.{json,md}'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1320px'
      }
    },
    extend: {
      colors: {
        // Slightly lighter blacks for a softer dark theme
        background: '#101214',
        foreground: '#F6F7F9',
        muted: '#181A1F',
        border: '#2C2F34',
        bluee: {
          500: '#1E6CFF',
          400: '#5AA8FF'
        },
        accent: {
          DEFAULT: '#1E6CFF',
          foreground: '#0B0B0D'
        }
      },
      dropShadow: {
        blue: '0 0 18px rgba(30,108,255,0.55)'
      }
    }
  },
  plugins: []
}

export default config
