import { styled } from '@/app/styles/stitches.config'

export const CompraEfetuadaContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '3rem',

  img: {
    marginBottom: '5rem',
  },

  h2: {
    fontSize: '$32',
    fontWeight: 'bold',
    color: '$title',
    marginBottom: '1.5rem',
  },

  p: {
    fontSize: '$24',
    color: '$text',
    marginBottom: '2rem',

    '@sm': {
      textAlign: 'center',
    },
  },

  button: {
    fontSize: '1rem',
    color: '$principal',
    padding: 0,
    background: 'none',
  },
})

export const ProductImagesContainer = styled('div', {
  display: 'flex',
  marginBottom: '1rem',

  img: {
    borderRadius: '100%',
    background: '$gradientBackground',

    '&:not(:first-child)': {
      marginLeft: '-3rem',
      boxShadow: '12px 0px 60px #000000',
    },
  },
})
