import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
  },
  body: {
    background: '$background',
    lineHeight: '160%',
    fontWeight: 400,
    paddingBottom: '8.5rem',
    transition: '0.3s',
  },
  h1: {
    color: '$title',
  },
  'p, span': {
    color: '$text',
  },
})
