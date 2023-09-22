import { styled } from '@/app/styles/stitches.config'

export const PageProdutoContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4.5rem',
  alignItems: 'stretch',
  maxWidth: '1180px',
  margin: '0 auto',
})

export const ProductImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$gradientBackground',
  borderRadius: '8px',
})

export const ProductInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  h1: {
    fontWeight: 700,
    fontSize: '$32',
    color: '$text',
    marginBottom: '1rem',
  },
  span: {
    fontSize: '$32',
    color: '$light',
    marginBottom: '2.5rem',
  },
  p: {
    fontSize: '$18',
  },
  button: {
    marginTop: 'auto',
  },
})
