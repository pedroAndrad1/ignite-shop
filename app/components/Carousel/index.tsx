'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { ReactNode, useState } from 'react'
import {
  CarouselContainer,
  LeftArrowContainer,
  RightArrowContainer,
} from './styles'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { theme } from '@/app/styles/stitches.config'

interface CarouselProps {
  children: ReactNode[]
}

export const Carousel = ({ children }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const [keenSliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    slides: {
      origin: 'center',
      perView: 2,
      spacing: 40,
    },

    breakpoints: {
      '(max-width: 900px)': {
        slides: {
          perView: 1,
        },
      },
    },
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollLeft = (e: any) => {
    e.stopPropagation()
    instanceRef.current?.prev()
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollRight = (e: any) => {
    e.stopPropagation()
    instanceRef.current?.next()
  }

  return (
    <CarouselContainer ref={keenSliderRef} className="keen-slider">
      {children.map((children, i) => (
        <li key={`keen-slider__slide__${i}`} className="keen-slider__slide">
          {children}
        </li>
      ))}
      {currentSlide !== 0 && (
        <LeftArrowContainer onClick={scrollLeft}>
          <CaretLeft size={48} color={theme.colors.text.toString()}></CaretLeft>
        </LeftArrowContainer>
      )}
      {!instanceRef.current ? (
        <RightArrowContainer onClick={scrollRight}>
          <CaretRight
            size={48}
            color={theme.colors.text.toString()}
          ></CaretRight>
        </RightArrowContainer>
      ) : (
        currentSlide !==
          instanceRef.current.track.details.slides.length - 1 && (
          <RightArrowContainer onClick={scrollRight}>
            <CaretRight
              size={48}
              color={theme.colors.text.toString()}
            ></CaretRight>
          </RightArrowContainer>
        )
      )}
    </CarouselContainer>
  )
}
