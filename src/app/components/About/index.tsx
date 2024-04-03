'use client'

import { WhatsappLogo } from '@phosphor-icons/react'
import {
  ButtonAnchor,
  ButtonFlex,
  ButtonProperty,
  ButtonText,
} from '../Buttons/ButtonCta'
import { IconWtp } from '../Icons/IconWtp'
import Image from 'next/image'
import ImageAurely from '../../../../public/img/aurely-img.png'
import {
  AboutDivButton,
  AboutH1,
  AboutParagraph,
  AboutProperty,
  AboutSection,
  AboutSpan,
} from './AboutComponents'

export function About() {
  return (
    <>
      <AboutSection>
        <AboutProperty>
          <AboutH1>Conheça à LFAG da Especialista Aurely Feitoza</AboutH1>
          <AboutSpan>CREA 135798D</AboutSpan>
          <AboutParagraph>
            Especialista em Segurança do Trabalho, com mais de 23 anos de
            experiência, vários cursos de especialização e capacitação
            profissional. Trazemos soluções em Saúde e Segurança para sua
            empresa, não importa o tamanho do problema, tratamos com seriedade e
            profissionalismo, dando uma solução específica e fazendo toda a
            diferença na hora da fiscalização pois damos garantia Jurídica.
            Realizamos a Gestão do E-social, com os envio dos Eventos S2210 /
            S2230 e S2240.
          </AboutParagraph>
          <AboutParagraph>
            Nosso atendimento dedica em especial, à segurança Jurídica da
            empresa, proporcionando um ambiente mais Salubre e Seguro para todos
            os trabalhadores.
          </AboutParagraph>
          <AboutDivButton>
            <ButtonProperty>
              <ButtonAnchor href="https://api.whatsapp.com/send?phone=9889096968&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20a%20minha%20Empresa.%20Podemos%20conversar%3F%20">
                <ButtonText>Garanta a Segurança de sua Empresa</ButtonText>
                <ButtonFlex>
                  <IconWtp icon={WhatsappLogo} />
                </ButtonFlex>
              </ButtonAnchor>
            </ButtonProperty>
          </AboutDivButton>
        </AboutProperty>
        <Image
          alt="Imagem"
          src={ImageAurely}
          loading="lazy"
          className="h-fit w-full object-cover"
        />
      </AboutSection>
    </>
  )
}
