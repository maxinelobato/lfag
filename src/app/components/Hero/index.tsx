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
import { LogoLFAG } from '../Logo/LogoLFAG'
import {
  ButtonWtsFloatAbsolute,
  ButtonWtsFloatAnchor,
  RootButtonWtsFloat,
} from '../Buttons/ButtonWtsFloat'
import { IconWtpFloat } from '../Icons/IconWtpFloat'
import { StarRating } from '../Icons/StarRating'

export function Hero() {
  return (
    <>
      {/* Hero CTA */}
      <HeroSectionRoot>
        <HeroSectionBgGradient>
          <HeroSectionProperty>
            {/* Logo LFAG */}
            <LogoLFAG />
            <HeadingH1>
              Proteja sua empresa evitando multas e{' '}
              <HeadingSpan>processos trabalhistas</HeadingSpan>
            </HeadingH1>
            <HeadingParagraph>
              Faça da Sua Empresa um Ambiente Mais Saudável, Próspero e Seguro
              com Nossas Soluções em SST.
            </HeadingParagraph>
            {/* Button CTA */}
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
            {/* Atendimento de Excelência */}
            <StarRating />
          </HeroSectionProperty>
        </HeroSectionBgGradient>
      </HeroSectionRoot>
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
