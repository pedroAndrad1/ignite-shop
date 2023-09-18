import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    transition: 'all 0.2s ease-in-out',
  },
  body: {
    background: '$background',
    lineHeight: '160%',
    fontWeight: 400,
    paddingBottom: '8.5rem',
  },
  h1: {
    color: '$title',
  },
  'p, span': {
    color: '$text',
  },
  button: {
    border: 'none',
    width: 'auto',
    background: 'transparent',
    color: 'inherit',
    font: 'inherit',
  },
})
