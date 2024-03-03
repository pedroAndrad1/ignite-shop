/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import { CartEntry } from 'use-shopping-cart/core'
import { CreateCheckoutResponse, Product } from '../interfaces'

export const useStripe = () => {
  const handleResponse = async (res: Response) => await res.json()

  const options = (
    method = 'GET',
    cacheRevalidateTime = 60 * 60 * 1,
    body?: any,
  ): RequestInit => {
    return {
      method,
      next: {
        revalidate: cacheRevalidateTime,
      },
      body: JSON.stringify(body),
    }
  }

  const getProducts = async (): Promise<{
    data: Product[]
    error?: string
  }> => {
    return await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
      options(),
    ).then(handleResponse)
  }

  const getProduct = async (
    productId: string,
  ): Promise<{
    data: Product
    error?: string
  }> => {
    return await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${productId}`,
      options(),
    ).then(handleResponse)
  }

  const createCheckout = async (
    products: CartEntry[],
  ): Promise<{
    data: CreateCheckoutResponse
    error?: string
  }> => {
    return await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout`,
      options('POST', 60 * 60 * 1, products),
    ).then(handleResponse)
  }

  return {
    getProducts,
    getProduct,
    createCheckout,
  }
}
