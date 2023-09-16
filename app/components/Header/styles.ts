import { styled } from '@/app/styles/stitches.config'
import Link from 'next/link'

export const StyledHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'transparent',
  padding: '2.5rem 8.5rem',

  '@sm': {
    display: 'grid',
    justifyContent: 'center',
    gap: '4rem',
  },
})

export const BagContainer = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0.375rem',
  padding: '12px',
  background: '$elements',

  '&:hover': {
    filter: 'brightness(0.8)',
  },
})
