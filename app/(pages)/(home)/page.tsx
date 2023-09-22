import { ProductCard } from '@/app/components/ProductCard'
import { HomeContainer } from './styles'
import { Carousel } from '@/app/components/Carousel'
import { useStripe } from '@/app/custom-hooks/useStripe'

export const revalidate = 60 * 60 * 2

export default async function Home() {
  const { getProducts } = useStripe()
  const products = await getProducts()

  return (
    <HomeContainer>
      <Carousel>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Carousel>
    </HomeContainer>
  )
}
