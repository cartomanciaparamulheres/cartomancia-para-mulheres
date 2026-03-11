export const designSystem = {
  inspiration: {
    atmosphere: 'Celestial sofisticada: profundidade noturna, brilho dourado suave e sensação de acolhimento com mistério.',
    contrast: 'Azul noturno profundo com dourado quente para hierarquia visual e CTAs.',
  },
  palette: {
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
  elements: {
    stars: 'Pontos de brilho discreto e difuso entre seções para manter profundidade sem poluição.',
    lines: 'Linhas finas douradas como divisores e molduras leves nos cards.',
    glow: 'Halos suaves em gradiente para sensação de luz celestial premium.',
    frame: 'Bordas arredondadas com baixa opacidade dourada para elegância e leitura.',
  },
  filesTouched: [
    'tailwind.config.ts',
    'src/styles.css',
    'src/content/designSystem.ts',
    'src/content/landingContent.ts',
    'src/App.tsx',
    'src/components/ui/Section.tsx',
    'src/components/ui/Card.tsx',
  ],
};
