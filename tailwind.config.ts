import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: {
          950: '#060814',
          900: '#0A1022',
          800: '#121A33'
        },
        gold: {
          300: '#F6DFA2',
          400: '#DFC27A',
          500: '#CFA85B',
          600: '#A57D36'
        },
        mist: {
          100: '#E8ECF8',
          200: '#C9D2EA'
        }
      },
      boxShadow: {
        glow: '0 0 30px rgba(223, 194, 122, 0.2)',
        soft: '0 18px 60px rgba(6, 8, 20, 0.45)'
      },
      backgroundImage: {
        'radial-depth': 'radial-gradient(circle at 20% 20%, rgba(26,36,72,0.55), transparent 45%), radial-gradient(circle at 75% 0%, rgba(207,168,91,0.16), transparent 35%), linear-gradient(180deg, #060814 0%, #0A1022 45%, #060814 100%)'
      }
    },
  },
  plugins: [],
} satisfies Config;
