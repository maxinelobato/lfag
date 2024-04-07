'use client'

import { RevealWrapper } from 'next-reveal'
import {
  CardH1,
  CardParagraph,
  CardSpan,
  CardProperty,
  CardsSection,
} from './CardComponents'
import { CardsCollection } from './CardsCollection'

export function Card() {
  return (
    <>
      <RevealWrapper delay={200} reset={true}>
        <CardH1>
          Confira as Especialidades que{' '}
          <CardSpan>Atuamos para Sua Empresa</CardSpan>
        </CardH1>
        <CardParagraph>
          Consulte nossos especialistas para uma avaliação
        </CardParagraph>
      </RevealWrapper>
      <CardsSection>
        <CardProperty>
          <CardsCollection />
        </CardProperty>
      </CardsSection>
    </>
  )
}
