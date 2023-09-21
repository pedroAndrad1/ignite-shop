import { ProductCard } from '@/app/components/ProductCard'
import { HomeContainer } from './styles'

import { Carousel } from '@/app/components/Carousel'

export default function Home() {
  return (
    <HomeContainer>
      <Carousel>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Carousel>
    </HomeContainer>
  )
}
