'use client'

import { createContext, ReactNode, useState } from 'react'

interface CartContextData {
  produtos: any[]
  showCart: boolean
  toogleCart: () => void
}

interface CartContextProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProps) {
  const [produtos, setProdutos] = useState([])
  const [showCart, setShowCart] = useState(false)

  const toogleCart = () => setShowCart((cartStatus) => !cartStatus)
  return (
    <CartContext.Provider
      value={{
        produtos,
        showCart,
        toogleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
