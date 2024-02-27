import { useShoppingCart } from 'use-shopping-cart'
import { Product } from '../interfaces'

export const useCart = () => {
  const {
    addItem,
    cartCount,
    cartDetails,
    handleCartClick,
    shouldDisplayCart,
    removeItem,
  } = useShoppingCart()
  const addProductToChart = ({
    id,
    description,
    image,
    name,
    currency,
    rawPrice,
  }: Product) => {
    addItem({
      id,
      description,
      name,
      image,
      currency,
      price: rawPrice,
    })
  }

  return {
    addProductToChart,
    cartCount,
    cartDetails,
    handleCartClick,
    shouldDisplayCart,
    removeItem,
  }
}
