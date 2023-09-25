/* eslint-disable @typescript-eslint/no-explicit-any */
import { stripe } from '@/app/lib/stripe'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function GET() {
  try {
    const res = await stripe.products.list({
      expand: ['data.default_price'],
    })
    const products = res.data.map((product: any) => {
      const price = product.default_price as Stripe.Price

      return {
        id: product.id,
        name: product.name,
        description: product.description ? product.description : '',
        image: product.images[0],
        currency: price.currency,
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format((price.unit_amount as number) / 100),
        rawPrice: price.unit_amount as number,
      }
    })
    return NextResponse.json(
      {
        data: products,
      },
      { status: 200 },
    )
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 })
  }
}
