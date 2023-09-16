import { styled } from '@/app/styles/stitches.config'

export const HomeContainer = styled('main', {
  display: 'flex',
  alignItems: 'center',
  gap: '3rem',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2) )',
  marginLeft: 'auto',
  background: 'red',
})

export const Product = styled('div', {})
