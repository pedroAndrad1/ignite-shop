'use client'
import { ErrorContainer } from './styles'

export default function ErrorHome({
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <ErrorContainer>
      <p>
        Ocorreu um erro de comunicação com nosso servidor. Por favor, tente
        novamente mais tarde ou clique no botão abaixo para tentar nova
        comunicação.
      </p>
      <button onClick={() => reset()}>Tentar nova comunicação</button>
    </ErrorContainer>
  )
}
