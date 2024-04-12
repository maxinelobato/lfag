'use client'

import {
  WhatsappLogo,
  File,
  Certificate,
  Warning,
  NotePencil,
  Stethoscope,
  WarningDiamond,
  PlusCircle,
} from '@phosphor-icons/react'
import { IconCard } from '../Icons/IconCard'
import { IconWtp } from '../Icons/IconWtp'
import {
  CardGridBg,
  CardGrid,
  CardGridH1,
  CardGridParagraph,
  CardButtonAnchor,
  CardButtonFlex,
  CardButtonProperty,
  CardButtonText,
} from './CardComponents'
import { RevealWrapper } from 'next-reveal'

export function CardsCollection() {
  const titleCards = {
    title1: 'E-Social',
    title2: 'LTCAT',
    title3: 'PGR',
    title4: 'DIR',
    title5: 'PCMSO',
    title6: 'PPP',
    title7: 'SST',
    title8: 'FAE',
  }

  const paragraphCards = {
    paragraphCards1: 'Envio dos Eventos de SST para o E-Social',
    paragraphCards2: 'Elaborar e Auditar a Conformidade do LTCAT',
    paragraphCards3: 'Programa de Gerenciamento de Riscos',
    paragraphCards4: 'Declaração de Inexistência de Riscos',
    paragraphCards5: 'Programa de Controle Médico de Saúde Ocupacional',
    paragraphCards6: 'Emitir e Auditar a Conformidade do PPP',
    paragraphCards7:
      'Transmitir os Eventos do SST ao eSocial e Auditar a conformidade do envio dos eventos de SST ao eSocial',
    paragraphCards8: 'Auditar a Conformidade do Recolhimento do FAE',
  }

  return (
    <CardGrid>
      <RevealWrapper
        rotate={{ x: 0, y: 0, z: 0 }}
        origin="left"
        distance="500px"
        reset={true}
        desktop={true}
        mobile={true}
        viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <CardGridBg>
          <IconCard icon={File} />
          <CardGridH1>{titleCards.title1}</CardGridH1>
          <CardGridParagraph>
            {paragraphCards.paragraphCards1}
          </CardGridParagraph>
          <CardButtonProperty>
            <CardButtonAnchor href="https://api.whatsapp.com/send?phone=94992659199&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20minha%20Empresa.%20Podemos%20conversar%3F%20">
              <CardButtonFlex>
                <CardButtonText>Saiba mais</CardButtonText>
                <IconWtp icon={WhatsappLogo} />
              </CardButtonFlex>
            </CardButtonAnchor>
          </CardButtonProperty>
        </CardGridBg>
      </RevealWrapper>
      <RevealWrapper
        rotate={{ x: 0, y: 0, z: 0 }}
        origin="left"
        distance="500px"
        reset={true}
        desktop={true}
        mobile={true}
        viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <CardGridBg>
          <IconCard icon={Certificate} />
          <CardGridH1>{titleCards.title2}</CardGridH1>
          <CardGridParagraph>
            {paragraphCards.paragraphCards2}
          </CardGridParagraph>
          <CardButtonProperty>
            <CardButtonAnchor href="https://api.whatsapp.com/send?phone=94992659199&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20minha%20Empresa.%20Podemos%20conversar%3F%20">
              <CardButtonFlex>
                <CardButtonText>Saiba mais</CardButtonText>
                <IconWtp icon={WhatsappLogo} />
              </CardButtonFlex>
            </CardButtonAnchor>
          </CardButtonProperty>
        </CardGridBg>
      </RevealWrapper>
      <RevealWrapper
        rotate={{ x: 0, y: 0, z: 0 }}
        origin="left"
        distance="500px"
        reset={true}
        desktop={true}
        mobile={true}
        viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <CardGridBg>
          <IconCard icon={Warning} />
          <CardGridH1>{titleCards.title3}</CardGridH1>
          <CardGridParagraph>
            {paragraphCards.paragraphCards3}
          </CardGridParagraph>
          <CardButtonProperty>
            <CardButtonAnchor href="https://api.whatsapp.com/send?phone=94992659199&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20minha%20Empresa.%20Podemos%20conversar%3F%20">
              <CardButtonFlex>
                <CardButtonText>Saiba mais</CardButtonText>
                <IconWtp icon={WhatsappLogo} />
              </CardButtonFlex>
            </CardButtonAnchor>
          </CardButtonProperty>
        </CardGridBg>
      </RevealWrapper>
      <RevealWrapper
        rotate={{ x: 0, y: 0, z: 0 }}
        origin="left"
        distance="500px"
        reset={true}
        desktop={true}
        mobile={true}
        viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <CardGridBg>
          <IconCard icon={NotePencil} />
          <CardGridH1>{titleCards.title4}</CardGridH1>
          <CardGridParagraph>
            {paragraphCards.paragraphCards4}
          </CardGridParagraph>
          <CardButtonProperty>
            <CardButtonAnchor href="https://api.whatsapp.com/send?phone=94992659199&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20minha%20Empresa.%20Podemos%20conversar%3F%20">
              <CardButtonFlex>
                <CardButtonText>Saiba mais</CardButtonText>
                <IconWtp icon={WhatsappLogo} />
              </CardButtonFlex>
            </CardButtonAnchor>
          </CardButtonProperty>
        </CardGridBg>
      </RevealWrapper>
      <RevealWrapper
        rotate={{ x: 0, y: 0, z: 0 }}
        origin="left"
        distance="500px"
        reset={true}
        desktop={true}
        mobile={true}
        viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <CardGridBg>
          <IconCard icon={Stethoscope} />
          <CardGridH1>{titleCards.title5}</CardGridH1>
          <CardGridParagraph>
            {paragraphCards.paragraphCards5}
          </CardGridParagraph>
          <CardButtonProperty>
            <CardButtonAnchor href="https://api.whatsapp.com/send?phone=94992659199&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20minha%20Empresa.%20Podemos%20conversar%3F%20">
              <CardButtonFlex>
                <CardButtonText>Saiba mais</CardButtonText>
                <IconWtp icon={WhatsappLogo} />
              </CardButtonFlex>
            </CardButtonAnchor>
          </CardButtonProperty>
        </CardGridBg>
      </RevealWrapper>
      <RevealWrapper
        rotate={{ x: 0, y: 0, z: 0 }}
        origin="left"
        distance="500px"
        reset={true}
        desktop={true}
        mobile={true}
        viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <CardGridBg>
          <IconCard icon={WarningDiamond} />
          <CardGridH1>{titleCards.title6}</CardGridH1>
          <CardGridParagraph>
            {paragraphCards.paragraphCards6}
          </CardGridParagraph>
          <CardButtonProperty>
            <CardButtonAnchor href="https://api.whatsapp.com/send?phone=94992659199&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20minha%20Empresa.%20Podemos%20conversar%3F%20">
              <CardButtonFlex>
                <CardButtonText>Saiba mais</CardButtonText>
                <IconWtp icon={WhatsappLogo} />
              </CardButtonFlex>
            </CardButtonAnchor>
          </CardButtonProperty>
        </CardGridBg>
      </RevealWrapper>
      <RevealWrapper
        rotate={{ x: 0, y: 0, z: 0 }}
        origin="left"
        distance="500px"
        reset={true}
        desktop={true}
        mobile={true}
        viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <CardGridBg>
          <IconCard icon={PlusCircle} />
          <CardGridH1>{titleCards.title7}</CardGridH1>
          <CardGridParagraph>
            {paragraphCards.paragraphCards7}
          </CardGridParagraph>
          <CardButtonProperty>
            <CardButtonAnchor href="https://api.whatsapp.com/send?phone=94992659199&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20minha%20Empresa.%20Podemos%20conversar%3F%20">
              <CardButtonFlex>
                <CardButtonText>Saiba mais</CardButtonText>
                <IconWtp icon={WhatsappLogo} />
              </CardButtonFlex>
            </CardButtonAnchor>
          </CardButtonProperty>
        </CardGridBg>
      </RevealWrapper>
      <RevealWrapper
        rotate={{ x: 0, y: 0, z: 0 }}
        origin="left"
        distance="500px"
        reset={true}
        desktop={true}
        mobile={true}
        viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <CardGridBg>
          <IconCard icon={File} />
          <CardGridH1>{titleCards.title8}</CardGridH1>
          <CardGridParagraph>
            {paragraphCards.paragraphCards8}
          </CardGridParagraph>
          <CardButtonProperty>
            <CardButtonAnchor href="https://api.whatsapp.com/send?phone=94992659199&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20minha%20Empresa.%20Podemos%20conversar%3F%20">
              <CardButtonFlex>
                <CardButtonText>Saiba mais</CardButtonText>
                <IconWtp icon={WhatsappLogo} />
              </CardButtonFlex>
            </CardButtonAnchor>
          </CardButtonProperty>
        </CardGridBg>
      </RevealWrapper>
    </CardGrid>
  )
}
