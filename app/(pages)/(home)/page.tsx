'use client'

import Image from 'next/image'
import { BagContainer, HomeContainer, Product } from './styles'
import { Bag } from 'phosphor-react'
import { theme } from '@/app/styles/stitches.config'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [keenSliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 40,
    },
    dragSpeed: 2,
    mode: 'free-snap',

    breakpoints: {
      '(max-width: 900px)': {
        slides: {
          perView: 1,
        },
      },
    },
  })

  return (
    <HomeContainer ref={keenSliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={'/camisa1.svg'} height={401} width={401} alt="" />
        <footer>
          <div>
            <h2>Camiseta nome</h2>
            <p>R$ 79,90</p>
          </div>
          <BagContainer>
            <Bag size={32} color={theme.colors.white.toString()} />
          </BagContainer>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={'/camisa1.svg'} height={401} width={401} alt="" />
        <footer>
          <div>
            <h2>Camiseta nome</h2>
            <p>R$ 79,90</p>
          </div>
          <BagContainer>
            <Bag size={32} color={theme.colors.white.toString()} />
          </BagContainer>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={'/camisa1.svg'} height={401} width={401} alt="" />
        <footer>
          <div>
            <h2>Camiseta nome</h2>
            <p>R$ 79,90</p>
          </div>
          <BagContainer>
            <Bag size={32} color={theme.colors.white.toString()} />
          </BagContainer>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={'/camisa1.svg'} height={401} width={401} alt="" />
        <footer>
          <div>
            <h2>Camiseta nome</h2>
            <p>R$ 79,90</p>
          </div>
          <BagContainer>
            <Bag size={32} color={theme.colors.white.toString()} />
          </BagContainer>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={'/camisa1.svg'} height={401} width={401} alt="" />
        <footer>
          <div>
            <h2>Camiseta nome</h2>
            <p>R$ 79,90</p>
          </div>
          <BagContainer>
            <Bag size={32} color={theme.colors.white.toString()} />
          </BagContainer>
        </footer>
      </Product>
    </HomeContainer>
  )
}
