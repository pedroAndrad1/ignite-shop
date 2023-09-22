'use client'

import Image from 'next/image'
import { BagContainer, ProductCardContainer } from './styles'
import { Bag } from 'phosphor-react'
import { theme } from '@/app/styles/stitches.config'
import { Product } from '@/app/interfaces'

export const ProductCard = ({ image, name, price, id }: Product) => {
  return (
    <ProductCardContainer>
      <Image src={image} height={401} width={401} alt={`camisa ${name}`} />
      <footer>
        <div>
          <h2>{name}</h2>
          <p>{price}</p>
        </div>
        <BagContainer href={`produto/${id}`}>
          <Bag size={32} color={theme.colors.white.toString()} />
        </BagContainer>
      </footer>
    </ProductCardContainer>
  )
}
