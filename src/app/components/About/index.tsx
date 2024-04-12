'use client'

import { WhatsappLogo } from '@phosphor-icons/react'
import {
  ButtonHome,
  ButtonHomeFlex,
  ButtonHomeText,
} from '../Buttons/ButtonCta'
import { IconWtp } from '../Icons/IconWtp'
import ImageAurely from '../../../../public/img/aurely-img.png'
import {
  AboutDivButton,
  AboutH1,
  AboutParagraph,
  AboutProperty,
  AboutSection,
  AboutSpan,
} from './AboutComponents'
import { RevealWrapper } from 'next-reveal'
import Image from 'next/image'

export function About() {
  return (
    <>
      <AboutSection>
        <AboutProperty>
          <RevealWrapper delay={400} reset={true}>
            <AboutH1>Conheça à LFAG da Especialista Aurely Feitoza</AboutH1>
            <AboutSpan>CREA 135798D</AboutSpan>
          </RevealWrapper>
          <RevealWrapper delay={450} reset={true}>
            <AboutParagraph>
              Especialista em Segurança do Trabalho, com mais de 23 anos de
              experiência, vários cursos de especialização e capacitação
              profissional. Trazemos soluções em Saúde e Segurança para sua
              empresa, não importa o tamanho do problema, tratamos com seriedade
              e profissionalismo, dando uma solução específica e fazendo toda a
              diferença na hora da fiscalização pois damos garantia Jurídica.
              Realizamos a Gestão do E-social, com os envio dos Eventos S2210 /
              S2230 e S2240.
            </AboutParagraph>
            <AboutParagraph>
              Nosso atendimento dedica em especial, à segurança Jurídica da
              empresa, proporcionando um ambiente mais Salubre e Seguro para
              todos os trabalhadores.
            </AboutParagraph>
          </RevealWrapper>
          <AboutDivButton>
            <ButtonHome href="https://api.whatsapp.com/send?phone=94992659199&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20minha%20Empresa.%20Podemos%20conversar%3F%20">
              <ButtonHomeText>
                Garanta a Segurança de sua Empresa
              </ButtonHomeText>
              <ButtonHomeFlex>
                <IconWtp icon={WhatsappLogo} />
              </ButtonHomeFlex>
            </ButtonHome>
          </AboutDivButton>
        </AboutProperty>
        <Image
          alt="Imagem"
          src={ImageAurely}
          loading="lazy"
          sizes='"(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"'
          className="object-auto h-fit w-full"
        />
      </AboutSection>
    </>
  )
}
