'use client'

import React from 'react'
import { CartProvider } from 'use-shopping-cart'
export default function LoadUseShoppingCart({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string}
      currency="BRL"
      shouldPersist={true}
    >
      {children}
    </CartProvider>
  )
}
