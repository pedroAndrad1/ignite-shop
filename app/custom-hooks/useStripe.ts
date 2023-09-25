/* eslint-disable camelcase */
import { Product } from '../interfaces'

export const useStripe = () => {
  const handleResponse = async (res: Response) => await res.json()

  const options = (
    method = 'GET',
    cacheRevalidateTime = 60 * 60 * 1,
  ): RequestInit => {
    return {
      method,
      next: {
        revalidate: cacheRevalidateTime,
      },
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

  return {
    getProducts,
    getProduct,
  }
}
