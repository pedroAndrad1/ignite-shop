import { ProductCard } from '@/app/components/ProductCard'
import { HomeContainer } from './styles'
import { Carousel } from '@/app/components/Carousel'
import { useStripe } from '@/app/custom-hooks/useStripe'

export default async function Home() {
  const { getProducts } = useStripe()
  const { data } = await getProducts()

  return (
    <HomeContainer>
      <Carousel>
        {data.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Carousel>
    </HomeContainer>
  )
}
