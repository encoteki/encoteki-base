import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#1A1A1A',
          blue: '#1346AC',
          red: '#D63B29',
          green: '#246234',
        },
        neutral: {
          '10': '#0D140F',
          '30': '#515351',
          '60': '#CCCECC',
          '70': '#E6E8E6',
        },
        green: {
          '10': '#163C20',
          '90': '#F0FAF3',
        },
        khaki: {
          '60': '#DADA9F',
          '70': '#E7E7C0',
          '80': '#EFEFD6',
          '90': '#F6F6EC',
          '99': '#F9F9F6',
        },
        red: {
          '90': '#FBE8E2',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
