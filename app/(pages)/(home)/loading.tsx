import { Carousel } from '@/app/components/Carousel'
import { HomeContainer, ProductCardSkeleton } from './styles'

export default function LoadingHome() {
  return (
    <HomeContainer>
      <Carousel>
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </Carousel>
    </HomeContainer>
  )
}
