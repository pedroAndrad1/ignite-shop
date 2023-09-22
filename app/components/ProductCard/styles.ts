import { styled } from '@/app/styles/stitches.config'

export const ProductCardContainer = styled('div', {
  background: '$gradientBackground',
  position: 'relative',
  borderRadius: '8px',
  overflow: 'hidden',

  display: 'grid',
  justifyContent: 'center',

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    right: '0.25rem',
    left: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderRadius: '8px',
    padding: '1.25rem 2rem 1.25rem 1.25rem',
    background: '$elements',
    transform: 'translateY(110%)',
    opacity: '0',

    '> div': {
      display: 'grid',
      alignItems: 'flex-start',
      justifyContent: 'center',
      gap: '0.5rem',

      h2: {
        fontSize: '$20',
        fontWeight: '700',
        color: '$title',
      },

      p: {
        fontSize: '$24',
        fontWeight: '700',
        color: '$light',
      },
    },

    img: {
      maxWidth: '100%',
    },
  },

  '&:hover': {
    footer: {
      opacity: '0.9',
      transform: 'translate(0%)',
    },
  },
})

export const BagContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0.375rem',
  padding: '12px',
  background: '$principal',
  cursor: 'pointer',

  '&:hover': {
    filter: 'brightness(0.8)',
  },
})
