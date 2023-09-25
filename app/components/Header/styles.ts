import { styled } from '@/app/styles/stitches.config'

export const StyledHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'transparent',
  padding: '2.5rem 0',
  maxWidth: '1180px',
  margin: '0 auto',

  '@sm': {
    display: 'grid',
    justifyContent: 'center',
    gap: '4rem',
  },
})

export const BagContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0.375rem',
  padding: '12px',
  background: '$elements',
  position: 'relative',

  '&:hover': {
    filter: 'brightness(0.8)',
  },
})

export const CartCounter = styled('span', {
  position: 'absolute',
  right: -5,
  top: -5,
  width: '1.5rem',
  height: '1.5rem',
  borderRadius: 9999,
  color: '$white',
  background: '$principal',
  border: '1px solid $background',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '700',
  fontSize: '0.875rem',
})
