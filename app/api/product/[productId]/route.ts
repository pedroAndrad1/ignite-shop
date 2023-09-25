/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { stripe } from '@/app/lib/stripe'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function GET(
  request: Request,
  { params: { productId } }: { params: { productId: string } },
) {
  try {
    const { id, name, description, images, default_price } =
      await stripe.products.retrieve(productId, {
        expand: ['default_price'],
      })

    const price = default_price as Stripe.Price

    const product = {
      id,
      name,
      description: description || '',
      image: images[0],
      currency: price.currency,
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format((price.unit_amount as number) / 100),
      rawPrice: price.unit_amount as number,
    }
    return NextResponse.json(
      {
        data: product,
      },
      { status: 200 },
    )
  } catch (err) {
    return NextResponse.json(
      {
        error: err,
      },
      { status: 500 },
    )
  }
}
