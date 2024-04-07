'use client'

import { WhatsappLogo } from '@phosphor-icons/react'
import {
  ButtonAnchor,
  ButtonFlex,
  ButtonProperty,
  ButtonText,
} from '../Buttons/ButtonCta'
import { HeadingH1, HeadingParagraph, HeadingSpan } from '../Heading/Heading'
import { IconWtp } from '../Icons/IconWtp'
import {
  HeroSectionBgGradient,
  HeroSectionProperty,
  HeroSectionRoot,
} from './HeroComponents'
import { LogoLFAG } from '../Logo/LogoLFAG'
import { StarRating } from '../Icons/StarRating'
import { RevealWrapper } from 'next-reveal'

export function Hero() {
  return (
    <>
      {/* Hero CTA */}
      <HeroSectionRoot>
        <HeroSectionBgGradient>
          <HeroSectionProperty>
            {/* Logo LFAG */}
            <LogoLFAG />
            <RevealWrapper delay={100} reset={true}>
              <HeadingH1>
                Proteja sua empresa evitando multas e{' '}
                <HeadingSpan>processos trabalhistas</HeadingSpan>
              </HeadingH1>
              <HeadingParagraph>
                Faça da Sua Empresa um Ambiente Mais Saudável, Próspero e Seguro
                com Nossas Soluções em SST.
              </HeadingParagraph>
            </RevealWrapper>
            {/* Button CTA */}
            <ButtonProperty>
              <ButtonAnchor href="https://api.whatsapp.com/send?phone=94992659199&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20minha%20Empresa.%20Podemos%20conversar%3F%20">
                <ButtonText>Garanta a Segurança de sua Empresa</ButtonText>
                <ButtonFlex>
                  <IconWtp icon={WhatsappLogo} />
                </ButtonFlex>
              </ButtonAnchor>
            </ButtonProperty>
            {/* Atendimento de Excelência */}
            <StarRating />
          </HeroSectionProperty>
        </HeroSectionBgGradient>
      </HeroSectionRoot>
    </>
  )
}
