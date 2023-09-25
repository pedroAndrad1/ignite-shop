'use client'

import { ErrorPageProdutoContainer } from './styles'

export default function ErrorPageProduto() {
  return (
    <ErrorPageProdutoContainer>
      <p>
        Não foi possível carregar as informações do produto. Por favor, tente
        novamente mais tarde.
      </p>
    </ErrorPageProdutoContainer>
  )
}
