/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { stripe } from '@/app/lib/stripe'
import { NextRequest, NextResponse } from 'next/server'
import { CartEntry } from 'use-shopping-cart/core'

export async function POST(request: NextRequest) {
  const req: CartEntry[] = await request.json()
  const line_items = req.map((product) => {
    return {
      price: product.price_id,
      quantity: product.quantity,
    }
  })

  try {
    const session = await stripe.checkout.sessions.create({
      success_url: 'http://localhost:3000',
      cancel_url: 'http://localhost:3000',
      line_items,
      mode: 'payment',
    })

    return NextResponse.json(
      {
        data: {
          sessionId: session.id,
          url: session.url,
        },
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
