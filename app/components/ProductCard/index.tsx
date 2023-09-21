'use client'

import Image from 'next/image'
import { BagContainer, Product } from './styles'
import { Bag } from 'phosphor-react'
import { theme } from '@/app/styles/stitches.config'
export const ProductCard = () => {
  return (
    <Product>
      <Image src={'/camisa1.svg'} height={401} width={401} alt="" />
      <footer>
        <div>
          <h2>Camiseta nome</h2>
          <p>R$ 79,90</p>
        </div>
        <BagContainer>
          <Bag size={32} color={theme.colors.white.toString()} />
        </BagContainer>
      </footer>
    </Product>
  )
}
