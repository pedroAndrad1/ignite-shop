import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
  },
  body: {
    background: '$gray1',
    lineHeight: '160%',
    fontWeight: 400,
  },
  h1: {
    color: '$gray5',
  },
  'p, span': {
    color: '$gray4',
  },
})
