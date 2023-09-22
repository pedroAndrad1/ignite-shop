import { skeleton } from '@/app/styles/animations'
import { styled } from '@/app/styles/stitches.config'

export const HomeContainer = styled('main', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  // maxWidth: 'calc(100vw - ((100vw - 1180px) / 2) )',
  // marginLeft: 'auto',
})

export const ProductCardSkeleton = styled('div', {
  width: '100%',
  height: 401,
  borderRadius: '8px',
  background: '$gradientSkeleton',
  animation: `${skeleton} 15s infinite linear`,
})

export const ErrorContainer = styled('main', {
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2) )',
  margin: '0 auto',
  height: '50vh',
  p: {
    fontSize: '$24',
    color: '$text',
    textAlign: 'center',
  },
})
