import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: {
          950: '#040711',
          900: '#091228',
          800: '#132347',
        },
        celestial: {
          700: '#1C3360',
          500: '#2D4F88',
        },
        gold: {
          300: '#F3DFAC',
          400: '#E3C27C',
          500: '#CEA55F',
          600: '#A57B3A',
        },
        mist: {
          100: '#F1F4FF',
          200: '#D2DCF7',
          300: '#AEBCE4',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        glow: '0 10px 45px rgba(226, 193, 120, 0.34)',
        soft: '0 22px 64px rgba(4, 7, 17, 0.58)',
        edge: 'inset 0 0 0 1px rgba(226, 193, 120, 0.2)',
      },
      backgroundImage: {
        'radial-depth':
          'radial-gradient(circle at 16% 0%, rgba(45,79,136,0.32), transparent 38%), radial-gradient(circle at 84% 12%, rgba(206,165,95,0.2), transparent 36%), linear-gradient(180deg, #040711 0%, #091228 42%, #040711 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
