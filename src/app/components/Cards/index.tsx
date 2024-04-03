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
      <CardH1>
        Confira as Especialidades que{' '}
        <CardSpan>Atuamos para Sua Empresa</CardSpan>
      </CardH1>
      <CardParagraph>
        Consulte nossos especialistas para uma avaliação
      </CardParagraph>
      <CardsSection>
        <CardProperty>
          <CardsCollection />
        </CardProperty>
      </CardsSection>
    </>
  )
}
