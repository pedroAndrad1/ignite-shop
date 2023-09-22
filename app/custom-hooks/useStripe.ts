/* eslint-disable camelcase */
import Stripe from 'stripe'
import { stripe } from '../lib/stripe'
import { Product } from '../interfaces'

export const useStripe = () => {
  const getProducts = async (): Promise<Product[]> => {
    const res = await stripe.products.list({
      expand: ['data.default_price'],
    })

    return res.data.map((product) => {
      const price = product.default_price as Stripe.Price

      return {
        id: product.id,
        name: product.name,
        description: product.description ? product.description : '',
        image: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format((price.unit_amount as number) / 100),
      }
    })
  }

  const getProduct = async (productId: string): Promise<Product> => {
    const { id, name, description, images, default_price } =
      await stripe.products.retrieve(productId, {
        expand: ['default_price'],
      })

    const price = default_price as Stripe.Price

    return {
      id,
      name,
      description: description || '',
      image: images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format((price.unit_amount as number) / 100),
    }
  }

  return {
    getProducts,
    getProduct,
  }
}
