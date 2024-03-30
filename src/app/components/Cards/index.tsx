import { Benefits } from '../Benefits'
import {
  CardHeadingH1,
  CardHeadingParagraph,
  CardHeadingSpan,
} from './CardHeading'
import {
  CardsSectionColor,
  CardsSectionsContent,
  CardsSectionsRoot,
} from './CardSections'
import { CardsCollection } from './CardsCollection'

export function Card() {
  return (
    <>
      <CardsSectionColor>
        <CardHeadingH1>
          Confira as Especialidades que{' '}
          <CardHeadingSpan>Atuamos para Sua Empresa</CardHeadingSpan>
        </CardHeadingH1>
        <CardHeadingParagraph>
          Consulte nossos especialistas para uma avaliação
        </CardHeadingParagraph>
        <CardsSectionsRoot>
          <CardsSectionsContent>
            <CardsCollection />
          </CardsSectionsContent>
        </CardsSectionsRoot>
        {/* BenefitsHeading */}
        <Benefits />
      </CardsSectionColor>
    </>
  )
}
