import Image from 'next/image'
import {
  CartContainer,
  CartItem,
  CartList,
  CartResume,
  CloseContainer,
} from './styles'
import { X } from 'phosphor-react'
import { useCartContext } from '@/app/contexts/CartContext'

export const Cart = () => {
  const { showCart, toogleCart } = useCartContext()

  return (
    showCart && (
      <CartContainer>
        <CartList>
          <CloseContainer onClick={() => toogleCart()}>
            <X size={32} />
          </CloseContainer>
          <h2>Sacola de compras</h2>
          <CartItem>
            <Image
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              width={102}
              height={93}
              alt="alt"
            />
            <div>
              <h3>Nome do produto</h3>
              <span>Preço</span>
              <button>Remover</button>
            </div>
          </CartItem>
        </CartList>
        <CartResume>
          <ul>
            <li>
              <p>Quantidade</p>
              <p>3 itens</p>
            </li>
            <li>
              <p>Valor total</p>
              <p>270</p>
            </li>
          </ul>
          <button>Finalizar compra</button>
        </CartResume>
      </CartContainer>
    )
  )
}
