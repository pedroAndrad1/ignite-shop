'use client'

import { useStripe } from '@/app/custom-hooks/useStripe'
import useToast from '@/app/custom-hooks/useToast'
import { useCart } from '@/app/custom-hooks/useCart'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  PageProdutoContainer,
  ProductImageContainer,
  ProductInfoContainer,
} from './styles'
import Image from 'next/image'
import { Product } from '@/app/interfaces'
import LoadingPageProduto from './loading'

interface PageProdutoParams {
  params: {
    produtoId: string
  }
}

export default function PageProduto({
  params: { produtoId },
}: PageProdutoParams) {
  const { getProduct } = useStripe()
  const { addProductToChart } = useCart()
  const { success } = useToast()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState<Product>({
    id: '',
    currency: '',
    description: '',
    image: '',
    name: '',
    price: '',
    rawPrice: 0,
  })

  const handleChart = () => {
    addProductToChart(product)
    success('Produto adicionado ao carrinho!')
    router.push('/')
  }

  useEffect(() => {
    const handleGetProducts = async () => {
      const product = await getProduct(produtoId)
      setProduct(product)
      setLoading(false)
    }

    if (!product.id) {
      handleGetProducts()
    }
  }, [produtoId, getProduct, product])

  return (
    <>
      {loading ? (
        <LoadingPageProduto />
      ) : (
        <PageProdutoContainer>
          <ProductImageContainer>
            <Image
              src={product.image}
              width={520}
              height={480}
              alt={`Camisa ${product.name}`}
            />
          </ProductImageContainer>
          <ProductInfoContainer>
            <h1>{product.name}</h1>
            <span>{product.price}</span>
            <p>{product.description}</p>
            <button onClick={handleChart}>Colocar na sacola</button>
          </ProductInfoContainer>
        </PageProdutoContainer>
      )}
    </>
  )
}
