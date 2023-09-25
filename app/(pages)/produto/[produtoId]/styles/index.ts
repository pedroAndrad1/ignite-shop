import { skeleton } from '@/app/styles/animations'
import { styled } from '@/app/styles/stitches.config'

export const PageProdutoContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4.5rem',
  alignItems: 'stretch',
  maxWidth: '1180px',
  margin: '0 auto',

  '@m': {
    gridTemplateColumns: '1fr',
  },
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

export const ProductImageContainerSkeleton = styled('div', {
  background: '$gradientSkeleton',
  borderRadius: '8px',
  animation: `${skeleton} 15s infinite linear`,
  height: 480,
  width: '100%',
})

export const ProductTitleSkeleton = styled('div', {
  background: '$gradientSkeleton',
  borderRadius: '8px',
  animation: `${skeleton} 15s infinite linear`,
  height: '2rem',
  width: '100%',
  marginBottom: '1rem',
})

export const ProductDescriptionSkeleton = styled('div', {
  background: '$gradientSkeleton',
  borderRadius: '8px',
  animation: `${skeleton} 15s infinite linear`,
  height: '50%',
  width: '100%',
  marginBottom: '2.5rem',
})

export const ProductButtonSkeleton = styled('button', {
  background: '$gradientSkeleton',
  animation: `${skeleton} 15s infinite linear`,
  marginTop: 'auto',
})
