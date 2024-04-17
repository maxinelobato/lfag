'use client'

import { WhatsappLogo } from '@phosphor-icons/react'
import {
  ButtonHome,
  ButtonHomeFlex,
  ButtonHomeText,
} from '../Buttons/ButtonCta'
import { IconWtp } from '../Icons/IconWtp'
import {
  AboutDivButton,
  AboutH1,
  AboutParagraph,
  AboutProperty,
  AboutSection,
  AboutSpan,
  AboutSpanH1,
} from './AboutComponents'
import { RevealWrapper } from 'next-reveal'
import { ImgAurely } from '../Image'

export function About() {
  return (
    <>
      <AboutSection>
        <AboutProperty>
          <RevealWrapper reset={true}>
            <AboutH1>
              Conheça à LFAG da{' '}
              <AboutSpanH1>Especialista Aurely Feitoza</AboutSpanH1>
            </AboutH1>
            <AboutSpan>CREA 135798D</AboutSpan>
          </RevealWrapper>
          <RevealWrapper reset={true}>
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
                quero a segurança da minha empresa
              </ButtonHomeText>
              <ButtonHomeFlex>
                <IconWtp icon={WhatsappLogo} />
              </ButtonHomeFlex>
            </ButtonHome>
          </AboutDivButton>
        </AboutProperty>
        <ImgAurely />
      </AboutSection>
    </>
  )
}
