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
    },
  },
  media: {
    sm: '(max-width: 640px)',
  },
})
