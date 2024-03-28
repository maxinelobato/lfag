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

export function HeroCTA() {
  return (
    <>
      {/* Section 1 */}
      <HeroSectionRoot>
        <HeroSectionBgGradient>
          <HeroSectionProperty>
            <LogoLFAG />
            <HeadingH1>
              Proteja sua empresa e evite multas e{' '}
              <HeadingSpan>processos trabalhistas</HeadingSpan>
            </HeadingH1>
            <HeadingParagraph>
              Transforme Sua Empresa em um Ambiente Seguro e Produtivo com Nossa
              Consultoria de Ponta em Segurança Ocupacional.
            </HeadingParagraph>
            <RootButtonCta>
              <AnchorButtonCta href="https://api.whatsapp.com/send?phone=351933965256&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20a%20minha%20Empresa.%20Podemos%20conversar%3F%20">
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
      </CardsSectionColor>
      {/* BenefitsHeading */}
      <RootButtonWtsFloat>
        <ButtonWtsFloatAbsolute>
          <ButtonWtsFloatAnchor href="https://api.whatsapp.com/send?phone=351933965256&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20a%20minha%20Empresa.%20Podemos%20conversar%3F%20">
            <IconWtpFloat icon={WhatsappLogo} />
          </ButtonWtsFloatAnchor>
        </ButtonWtsFloatAbsolute>
      </RootButtonWtsFloat>
    </>
  )
}
