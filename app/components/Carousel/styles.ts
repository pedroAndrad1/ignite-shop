import { styled } from '@/app/styles/stitches.config'

export const CarouselContainer = styled('ul', {
  width: '100%',
  position: 'relative',
})

export const LeftArrowContainer = styled('aside', {
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  position: 'absolute',
  left: 0,
  top: 0,
  bottom: 0,
  background:
    'linear-gradient(270deg, rgba(18, 18, 20, 0.00) 0%, rgba(18, 18, 20, 0.75) 100%)',
})

export const RightArrowContainer = styled('aside', {
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  position: 'absolute',
  right: 0,
  top: 0,
  bottom: 0,
  background:
    'linear-gradient(90deg, rgba(18, 18, 20, 0.00) 0%, rgba(18, 18, 20, 0.75) 100%)',
})
