'use client'

import Image from 'next/image'
import { BagContainer, CartCounter, StyledHeader } from './styles'
import { Bag } from 'phosphor-react'
import { theme } from '@/app/styles/stitches.config'
import Link from 'next/link'
import { useCart } from '@/app/custom-hooks/useCart'
import { Cart } from '../Cart'
import { useCartContext } from '@/app/contexts/CartContext'

export const Header = () => {
  const { cartCount } = useCart()
  const { toogleCart } = useCartContext()

  return (
    <StyledHeader>
      <Cart />
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          width={130}
          height={50}
          priority
        ></Image>
      </Link>
      <BagContainer onClick={() => toogleCart()}>
        {cartCount && <CartCounter>{cartCount}</CartCounter>}
        <Bag size={24} color={theme.colors.icon.toString()} />
      </BagContainer>
    </StyledHeader>
  )
}
