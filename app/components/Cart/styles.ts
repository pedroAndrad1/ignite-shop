import { styled } from '@/app/styles/stitches.config'

export const CartContainer = styled('aside', {
  backgroundColor: '$elements',
  position: 'absolute',
  right: 0,
  top: 0,
  height: 'calc(100vh + 3.75rem)',
  width: '480px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '5rem 2rem 2rem 2rem',
  zIndex: '1',
})

export const CloseContainer = styled('button', {
  position: 'absolute',
  top: '20px',
  right: '20px',
  padding: 0,
  background: 'none',
})

export const CartList = styled('ul', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '2rem',
  maxHeight: '300px',
  overflowY: 'auto',

  h2: {
    fontSize: '$20',
    color: '$title',
  },
})

export const CartItem = styled('li', {
  display: 'grid',
  gridTemplateColumns: '0.3fr 0.7fr',

  h3: {
    fontSize: '$18',
    color: '$text',
    fontWeight: '400',
  },

  img: {
    borderRadius: 8,
    background: '$gradientBackground',
  },

  '> div': {
    display: 'grid',
    gridTemplateColumns: '1fr',

    span: {
      fontSize: '$18',
      color: '$title',
      fontWeight: 'bold',
    },

    button: {
      fontSize: '1rem',
      color: '$principal',
      padding: 0,
      background: 'none',
      textAlign: 'start',
    },
  },
})

export const CartResume = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '3rem',

  ul: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1rem',

    li: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '$18',
      color: '$text',
    },

    'li:nth-child(2)': {
      fontSize: '$24',
      color: '$title',
      fontWeight: 'bold',
    },
  },
})

export const EmptyCart = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
})
