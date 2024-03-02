'use client'

import Image from 'next/image'
import { CompraEfetuadaContainer, ProductImagesContainer } from './styles'
import { useCart } from '@/app/custom-hooks/useCart'
import { useRouter } from 'next/navigation'

export default function CompraEfetuada() {
  const { cartDetails, clearCart } = useCart()
  const router = useRouter()
  if (!cartDetails || (cartDetails && Object.keys(cartDetails).length === 0))
    router.push('/')
  const calcQuantidade = (): number => {
    if (!cartDetails) return 0

    const keys = Object.keys(cartDetails)
    let quantidade = 0
    keys.forEach((key) => (quantidade += cartDetails[key].quantity))
    return quantidade
  }
  const quantidade = calcQuantidade()
  const limparCarrinho = () => {
    router.push('/')
    setTimeout(() => clearCart(), 300)
  }

  return (
    <CompraEfetuadaContainer>
      <Image src="/logo.svg" width={130} height={52} alt="Logo" />
      <ProductImagesContainer>
        {cartDetails &&
          Object.keys(cartDetails).map((key) => (
            <Image
              key={key}
              src={cartDetails[key].image as string}
              width={140}
              height={140}
              alt={cartDetails[key].name}
            />
          ))}
      </ProductImagesContainer>
      <h2>Compra efetuada!</h2>
      <p>
        Uhuul, sua compra de {quantidade} camiseta
        {quantidade > 1 ? 's' : ''} já está a caminho da sua casa.
      </p>
      <button onClick={limparCarrinho}>Voltar ao catálogo</button>
    </CompraEfetuadaContainer>
  )
}
