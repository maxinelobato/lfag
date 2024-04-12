'use client'

import { RevealWrapper } from 'next-reveal'
import {
  CardH1,
  CardParagraph,
  CardSpan,
  CardProperty,
  CardsSection,
  CardSpace,
} from './CardComponents'
import { CardsCollection } from './CardsCollection'

export function Card() {
  return (
    <>
      <CardSpace>
        <RevealWrapper reset={true}>
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
      </CardSpace>
    </>
  )
}
