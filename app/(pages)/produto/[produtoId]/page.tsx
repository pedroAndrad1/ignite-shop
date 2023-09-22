import { useStripe } from '@/app/custom-hooks/useStripe'
import {
  PageProdutoContainer,
  ProductImageContainer,
  ProductInfoContainer,
} from './styles'
import Image from 'next/image'

interface PageProdutoParams {
  params: {
    produtoId: string
  }
}

export default async function PageProduto({
  params: { produtoId },
}: PageProdutoParams) {
  const { getProduct } = useStripe()
  const { image, name, price, description } = await getProduct(produtoId)

  return (
    <PageProdutoContainer>
      <ProductImageContainer>
        <Image src={image} width={520} height={480} alt={`Camisa ${name}`} />
      </ProductImageContainer>
      <ProductInfoContainer>
        <h1>{name}</h1>
        <span>{price}</span>
        <p>{description}</p>
        <button>Colocar na sacola</button>
      </ProductInfoContainer>
    </PageProdutoContainer>
  )
}
