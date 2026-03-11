# Sistema visual — Cartomancia para Mulheres

## 1) Paleta sugerida (extraída da referência)
- `night.950` `#05070F` — fundo principal profundo.
- `night.900` `#0B1226` — camadas de seção e cards.
- `night.800` `#14203D` — planos intermediários.
- `celestial.700` `#1A315A` — nuance azul noturna.
- `celestial.500` `#2A4A82` — acento de profundidade.
- `gold.300` `#F5DEA0` — brilho suave.
- `gold.400` `#E2C178` — bordas/linhas decorativas.
- `gold.500` `#CDA158` — CTA primário.
- `gold.600` `#9F7434` — contraste dourado mais fechado.
- `mist.100` `#EEF2FF` — texto principal.
- `mist.200` `#CFD9F5` — texto secundário.
- `mist.300` `#AAB8DF` — suporte.

## 2) Tradução dos elementos visuais
- **Estrelas**: pontos de brilho pontuais em cada seção, com glow controlado.
- **Linhas finas**: divisores dourados discretos em títulos e bordas suaves em cards.
- **Profundidade**: gradientes radiais (azul + dourado) sobre base escura.
- **Brilho suave**: halos desfocados no fundo para sensação celestial sofisticada.
- **Moldura elegante**: cards com borda dourada de baixa opacidade + blur leve.

## 3) Arquivos alterados para aplicar o sistema
- `tailwind.config.ts`
- `src/styles.css`
- `src/content/designSystem.ts`
- `src/content/landingContent.ts`
- `src/App.tsx`
- `src/components/ui/Section.tsx`
- `src/components/ui/Card.tsx`
