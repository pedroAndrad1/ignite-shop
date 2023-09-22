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
  'a, button': {
    cursor: 'pointer',
  },
  button: {
    border: 'none',
    width: 'auto',
    background: '$light',
    color: '$text',
    font: 'inherit',
    padding: '1.25rem 2rem',
    borderRadius: '0.5rem',

    '&:hover': {
      filter: 'brightness(0.7)',
    },
  },
  img: {
    objectFit: 'cover',
  },
})
