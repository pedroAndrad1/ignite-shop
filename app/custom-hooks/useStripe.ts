/* eslint-disable camelcase */
import { Product } from '../interfaces'

export const useStripe = () => {
  const getProducts = async (): Promise<Product[]> => {
    return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
      method: 'GET',
    }).then((res) => res.json())
  }

  const getProduct = async (productId: string): Promise<Product> => {
    return await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${productId}`,
      {
        method: 'GET',
      },
    ).then((res) => res.json())
  }

  return {
    getProducts,
    getProduct,
  }
}
