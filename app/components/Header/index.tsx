'use client'

import Image from 'next/image'
import { BagContainer, StyledHeader } from './styles'
import { Bag } from 'phosphor-react'
import { theme } from '@/app/styles/stitches.config'
import Link from 'next/link'

export const Header = () => {
  return (
    <StyledHeader>
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          width={130}
          height={50}
          priority
        ></Image>
      </Link>
      <BagContainer href="/">
        <Bag size={24} color={theme.colors.icon.toString()} />
      </BagContainer>
    </StyledHeader>
  )
}
