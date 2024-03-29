'use client'

import { WhatsappLogo } from '@phosphor-icons/react'
import {
  AnchorButtonCta,
  FlexItensButtonCta,
  RootButtonCta,
  TextButtonCta,
} from '../Buttons/ButtonCta'
import { HeadingH1, HeadingParagraph, HeadingSpan } from '../Heading/Heading'
import { IconWtp } from '../Icons/IconWtp'
import {
  HeroSectionBgGradient,
  HeroSectionProperty,
  HeroSectionRoot,
} from './HeroSections'
import {
  CardsSectionColor,
  CardsSectionsContent,
  CardsSectionsRoot,
} from '../Cards/CardSections'
import { CardsCollection } from '../Cards/CardsCollection'
import { StarRating } from '../Icons/StarRating'
import {
  CardHeadingH1,
  CardHeadingParagraph,
  CardHeadingSpan,
} from '../Cards/CardHeading'
import { LogoLFAG } from '../Logo/LogoLFAG'
import {
  ButtonWtsFloatAbsolute,
  ButtonWtsFloatAnchor,
  RootButtonWtsFloat,
} from '../Buttons/ButtonWtsFloat'
import { IconWtpFloat } from '../Icons/IconWtpFloat'
import {
  BenefitsSectionColor,
  BenefitsSectionsRoot,
} from '../Benefits/BenefitsSections'
import {
  BenefitsHeadingH1,
  BenefitsHeadingParagraph,
  BenefitsHeadingSpan,
} from '../Benefits/BenefitsHeading'
import { BenefitsStats } from '../Benefits/BenefitsStats'
import { AboutHeading } from '../About/AboutHeading'

export function HeroCTA() {
  return (
    <>
      {/* Section 1 */}
      <HeroSectionRoot>
        <HeroSectionBgGradient>
          <HeroSectionProperty>
            <LogoLFAG />
            <HeadingH1>
              Proteja sua empresa evitando multas e{' '}
              <HeadingSpan>processos trabalhistas</HeadingSpan>
            </HeadingH1>
            <HeadingParagraph>
              Transforme Sua Empresa em um Ambiente Seguro e Produtivo com Nossa
              Consultoria de Ponta em Segurança do Trabalho.
            </HeadingParagraph>
            <RootButtonCta>
              <AnchorButtonCta href="https://api.whatsapp.com/send?phone=9889096968&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20a%20minha%20Empresa.%20Podemos%20conversar%3F%20">
                <TextButtonCta>
                  Garanta a Segurança de sua Empresa
                </TextButtonCta>
                <FlexItensButtonCta>
                  <IconWtp icon={WhatsappLogo} />
                </FlexItensButtonCta>
              </AnchorButtonCta>
            </RootButtonCta>
            <StarRating />
          </HeroSectionProperty>
        </HeroSectionBgGradient>
      </HeroSectionRoot>
      {/* Cards Especialidades */}
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
          <AboutHeading />
        </BenefitsSectionColor>
      </CardsSectionColor>
      {/* Button Flutuante Whatsapp */}
      <RootButtonWtsFloat>
        <ButtonWtsFloatAbsolute>
          <ButtonWtsFloatAnchor href="https://api.whatsapp.com/send?phone=9889096968&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20a%20minha%20Empresa.%20Podemos%20conversar%3F%20">
            <IconWtpFloat icon={WhatsappLogo} />
          </ButtonWtsFloatAnchor>
        </ButtonWtsFloatAbsolute>
      </RootButtonWtsFloat>
    </>
  )
}
