import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { globalStyles } from './styles/global'
import { getCssText } from './styles/stitches.config'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
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
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
