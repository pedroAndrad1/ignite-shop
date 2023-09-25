import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { globalStyles } from './styles/global'
import { getCssText } from './styles/stitches.config'
import { Header } from './components/Header'
import LoadUseShoppingCart from './components/LoadUseShoppingCart'
import { ToastContainer } from 'react-toastify'

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
        <LoadUseShoppingCart>
          <ToastContainer />
          <Header />
          {children}
        </LoadUseShoppingCart>
      </body>
    </html>
  )
}
