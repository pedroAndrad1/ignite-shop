import Image from 'next/image'
import { HomeContainer, Product } from './styles'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={'/camisa1.svg'} height={401} width={401} alt="" />
      </Product>
      <Product>
        <Image src={'/camisa2.svg'} height={401} width={401} alt="" />
      </Product>
    </HomeContainer>
  )
}
