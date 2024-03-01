import Image from 'next/image'
import {
  CartContainer,
  CartItem,
  CartList,
  CartResume,
  CloseContainer,
} from './styles'
import { X } from 'phosphor-react'
import { useCart } from '@/app/custom-hooks/useCart'
import { useStripe } from '@/app/custom-hooks/useStripe'
import { CartEntry } from 'use-shopping-cart/core'
import useToast from '@/app/custom-hooks/useToast'
import { useState } from 'react'

export const Cart = () => {
  const { cartDetails, shouldDisplayCart, handleCartClick, removeItem } =
    useCart()
  const { createCheckout } = useStripe()
  const { error } = useToast()
  const [loading, setLoading] = useState(false)
  const calcQuantidade = (): number => {
    if (!cartDetails) return 0

    const keys = Object.keys(cartDetails)
    let quantidade = 0
    keys.forEach((key) => (quantidade += cartDetails[key].quantity))
    return quantidade
  }

  const calcValorTotal = (): string => {
    if (!cartDetails) return 'R$ 0,00'

    const keys = Object.keys(cartDetails)
    let valorTotal = 0
    keys.forEach((key) => (valorTotal += cartDetails[key].value / 100))

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valorTotal)
  }

  const mountCheckout = () => {
    if (!cartDetails) throw new Error('Não há objeto de carrinho cardDetails!')

    setLoading(true)
    const products: CartEntry[] = []
    const keys = Object.keys(cartDetails)
    keys.forEach((key) => products.push(cartDetails[key]))

    createCheckout(products)
      .then((res) => (window.location.href = res.data.url))
      .catch(() =>
        error(
          'Ocorreu um erro ao processar a solicitação. Por favor, tente novamente mais tarde',
        ),
      )
  }

  return (
    shouldDisplayCart && (
      <CartContainer>
        <CloseContainer onClick={() => handleCartClick()}>
          <X size={32} />
        </CloseContainer>
        <CartList>
          <h2>Sacola de compras</h2>
          {cartDetails &&
            Object.keys(cartDetails).map((key) => {
              return (
                <CartItem key={key}>
                  <Image
                    src={cartDetails[key].image as string}
                    width={102}
                    height={93}
                    alt="alt"
                  />
                  <div>
                    <h3>{cartDetails[key].name}</h3>
                    <span>
                      {cartDetails[key].formattedValue} x (
                      {cartDetails[key].quantity})
                    </span>
                    <button onClick={() => removeItem(key)}>Remover</button>
                  </div>
                </CartItem>
              )
            })}
        </CartList>
        <CartResume>
          <ul>
            <li>
              <p>Quantidade</p>
              <p>{calcQuantidade()} itens</p>
            </li>
            <li>
              <p>Valor total</p>
              <p>{calcValorTotal()}</p>
            </li>
          </ul>
          <button
            disabled={
              (cartDetails && Object.keys(cartDetails).length === 0) || loading
            }
            onClick={mountCheckout}
          >
            Finalizar compra
          </button>
        </CartResume>
      </CartContainer>
    )
  )
}
