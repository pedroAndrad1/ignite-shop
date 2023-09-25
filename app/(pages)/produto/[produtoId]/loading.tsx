import {
  PageProdutoContainer,
  ProductButtonSkeleton,
  ProductDescriptionSkeleton,
  ProductImageContainerSkeleton,
  ProductInfoContainer,
  ProductTitleSkeleton,
} from './styles'

export default function LoadingPageProduto() {
  return (
    <PageProdutoContainer>
      <ProductImageContainerSkeleton />
      <ProductInfoContainer>
        <ProductTitleSkeleton />
        <ProductDescriptionSkeleton />
        <ProductButtonSkeleton />
      </ProductInfoContainer>
    </PageProdutoContainer>
  )
}
