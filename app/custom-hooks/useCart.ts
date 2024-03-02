import { useShoppingCart } from 'use-shopping-cart'
import { Product } from '../interfaces'

export const useCart = () => {
  const { addItem } = useShoppingCart()

  const addProductToChart = (
    {
      id,
      description,
      image,
      name,
      currency,
      rawPrice,
      defaultPriceId,
    }: Product,
    count = 1,
  ) => {
    addItem(
      {
        id,
        description,
        name,
        image,
        currency,
        price: rawPrice,
        price_id: defaultPriceId,
      },
      {
        count,
      },
    )
  }

  return {
    addProductToChart,
    ...useShoppingCart(),
  }
}
