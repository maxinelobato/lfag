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
import Image from 'next/image'

export function Hero() {
  return (
    <>
      <HeroSectionRoot>
        <Image
          src="https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="bg image"
          loading="lazy"
          fill
          className="h-full w-full bg-cover bg-fixed bg-center bg-no-repeat object-cover"
        />
        <div className="absolute h-full w-full bg-gradient-to-r from-brandOrange/90 from-40% to-brandOrange200/45 to-90%"></div>
        <HeroSectionBgGradient>
          <HeroSectionProperty>
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
            <ButtonProperty>
              <ButtonAnchor href="https://api.whatsapp.com/send?phone=94992659199&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20minha%20Empresa.%20Podemos%20conversar%3F%20">
                <ButtonText>Garanta a Segurança de sua Empresa</ButtonText>
                <ButtonFlex>
                  <IconWtp icon={WhatsappLogo} />
                </ButtonFlex>
              </ButtonAnchor>
            </ButtonProperty>
            <StarRating />
          </HeroSectionProperty>
        </HeroSectionBgGradient>
      </HeroSectionRoot>
    </>
  )
}
