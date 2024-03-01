export interface Product {
  id: string
  name: string
  description: string
  price: string
  rawPrice: number // Preco em centavos
  image: string
  currency: string
  defaultPriceId: string // Para ser usado no checkout
}

export interface CreateCheckoutResponse {
  sessionId: string
  url: string
}
