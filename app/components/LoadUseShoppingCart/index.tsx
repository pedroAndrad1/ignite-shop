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
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string}
      successUrl="stripe.com"
      cancelUrl="twitter.com/dayhaysoos"
      currency="BRL"
      shouldPersist={true}
    >
      {children}
    </CartProvider>
  )
}
