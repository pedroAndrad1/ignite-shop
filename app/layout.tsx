import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { globalStyles } from './styles/global'
import { getCssText } from './styles/stitches.config'
import { Header } from './components/Header'
import { CartProvider } from 'use-shopping-cart'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--roboto',
})

export const metadata: Metadata = {
  title: 'Ignite Shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  globalStyles()

  return (
    <html lang="en">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body className={roboto.className}>
        <CartProvider
          mode="payment"
          cartMode="client-only"
          stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string}
          successUrl="stripe.com"
          cancelUrl="twitter.com/dayhaysoos"
          currency="BRL"
          shouldPersist={true}
        >
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
