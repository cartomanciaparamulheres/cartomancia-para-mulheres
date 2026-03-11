import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: {
          950: '#05070F',
          900: '#0B1226',
          800: '#14203D',
        },
        celestial: {
          700: '#1A315A',
          500: '#2A4A82',
        },
        gold: {
          300: '#F5DEA0',
          400: '#E2C178',
          500: '#CDA158',
          600: '#9F7434',
        },
        mist: {
          100: '#EEF2FF',
          200: '#CFD9F5',
          300: '#AAB8DF',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        glow: '0 0 42px rgba(226, 193, 120, 0.22)',
        soft: '0 20px 60px rgba(5, 7, 15, 0.52)',
        edge: 'inset 0 0 0 1px rgba(226, 193, 120, 0.18)',
      },
      backgroundImage: {
        'radial-depth': 'radial-gradient(circle at 15% 0%, rgba(42,74,130,0.28), transparent 36%), radial-gradient(circle at 80% 10%, rgba(205,161,88,0.18), transparent 34%), linear-gradient(180deg, #05070F 0%, #0B1226 38%, #05070F 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
