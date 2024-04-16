'use client'

import { WhatsappLogo } from '@phosphor-icons/react'
import {
  ButtonHome,
  ButtonHomeFlex,
  ButtonHomeText,
} from '../Buttons/ButtonCta'
import { HeadingH1, HeadingParagraph, HeadingSpan } from '../Heading/Heading'
import { IconWtp } from '../Icons/IconWtp'
import {
  HeroImage,
  HeroSectionProperty,
  HeroSectionRoot,
} from './HeroComponents'
import { StarRating } from '../Icons/StarRating'
import { RevealWrapper } from 'next-reveal'
import { HeroSectionBgImg } from './HeroSectionBgImg'
import { LogoLfagHero } from '../Image'

export function Hero() {
  return (
    <>
      <HeroSectionRoot>
        <HeroSectionBgImg />
        <HeroSectionProperty>
          <HeroImage>
            <LogoLfagHero />
          </HeroImage>
          <RevealWrapper reset={true}>
            <HeadingH1>
              Proteja sua empresa evitando multas e{' '}
              <HeadingSpan>processos trabalhistas</HeadingSpan>
            </HeadingH1>
            <HeadingParagraph>
              Faça da Sua Empresa um Ambiente Mais Saudável, Próspero e Seguro
              com Nossas Soluções em SST.
            </HeadingParagraph>
          </RevealWrapper>
          <ButtonHome href="https://api.whatsapp.com/send?phone=94992659199&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20minha%20Empresa.%20Podemos%20conversar%3F%20">
            <ButtonHomeText>quero a segurança da minha empresa</ButtonHomeText>
            <ButtonHomeFlex>
              <IconWtp icon={WhatsappLogo} />
            </ButtonHomeFlex>
          </ButtonHome>
          <StarRating />
        </HeroSectionProperty>
      </HeroSectionRoot>
    </>
  )
}
