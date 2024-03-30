import { About } from '../About'
import {
  BenefitsHeadingH1,
  BenefitsHeadingParagraph,
  BenefitsHeadingSpan,
} from './BenefitsHeading'
import { BenefitsSectionColor, BenefitsSectionsRoot } from './BenefitsSections'
import { BenefitsStats } from './BenefitsStats'

export function Benefits() {
  return (
    <>
      <BenefitsSectionColor>
        <BenefitsHeadingH1>
          Como você irá se beneficiar ao{' '}
          <BenefitsHeadingSpan>contratar a LFAG</BenefitsHeadingSpan>
        </BenefitsHeadingH1>
        <BenefitsHeadingParagraph>
          São mais de 20 anos de Expertise em Segurança do Trabalho
        </BenefitsHeadingParagraph>
        <BenefitsSectionsRoot>
          <BenefitsStats />
        </BenefitsSectionsRoot>
        {/* About Heading */}
        <About />
      </BenefitsSectionColor>
    </>
  )
}
