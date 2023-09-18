import { createStitches } from '@stitches/react'

export const { theme, styled, globalCss, getCssText } = createStitches({
  theme: {
    colors: {
      principal: '#00875F',
      light: '#00B37E',
      background: '#121214',
      elements: '#202024',
      icon: '#8D8D99',
      text: '#C4C4CC',
      title: '#E1E1E6',
      white: '#FFFFFF',
      gradientBackground: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    },
    fontSizes: {
      '18': '1.125rem',
      '20': '1.25rem',
      '24': '1.5rem',
      '32': '2rem',
    },
  },
  media: {
    sm: '(max-width: 640px)',
    m: '(max-width: 900px)',
  },
})
