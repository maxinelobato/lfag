'use client'

import {
  WhatsappLogo,
  File,
  Certificate,
  Warning,
  NotePencil,
  Stethoscope,
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

export function CardsCollection() {
  const titleCards = {
    title1: 'E-Social',
    title2: 'LTCAT',
    title3: 'PGR',
    title4: 'DIR',
    title5: 'PCMSO',
  }

  const paragraphCards = {
    paragraphCards1: 'Envio dos Eventos de SST para o E-Social',
    paragraphCards2: 'Laudo Técnico de Condições Ambientais do Trabalho',
    paragraphCards3: 'Programa de Gerenciamento de Riscos',
    paragraphCards4: 'Declaração de Inexistência de Riscos',
    paragraphCards5: 'Programa de Controle Médico de Saúde Ocupacional',
  }

  return (
    <CardGrid>
      <CardGridBg>
        <IconCard icon={File} />
        <CardGridH1>{titleCards.title1}</CardGridH1>
        <CardGridParagraph>{paragraphCards.paragraphCards1}</CardGridParagraph>
        <CardButtonProperty>
          <CardButtonAnchor href="https://api.whatsapp.com/send?phone=9889096968&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20a%20minha%20Empresa.%20Podemos%20conversar%3F%20">
            <CardButtonFlex>
              <CardButtonText>Saiba mais</CardButtonText>
              <IconWtp icon={WhatsappLogo} />
            </CardButtonFlex>
          </CardButtonAnchor>
        </CardButtonProperty>
      </CardGridBg>
      <CardGridBg>
        <IconCard icon={Certificate} />
        <CardGridH1>{titleCards.title2}</CardGridH1>
        <CardGridParagraph>{paragraphCards.paragraphCards2}</CardGridParagraph>
        <CardButtonProperty>
          <CardButtonAnchor href="https://api.whatsapp.com/send?phone=9889096968&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20a%20minha%20Empresa.%20Podemos%20conversar%3F%20">
            <CardButtonFlex>
              <CardButtonText>Saiba mais</CardButtonText>
              <IconWtp icon={WhatsappLogo} />
            </CardButtonFlex>
          </CardButtonAnchor>
        </CardButtonProperty>
      </CardGridBg>
      <CardGridBg>
        <IconCard icon={Warning} />
        <CardGridH1>{titleCards.title3}</CardGridH1>
        <CardGridParagraph>{paragraphCards.paragraphCards3}</CardGridParagraph>
        <CardButtonProperty>
          <CardButtonAnchor href="https://api.whatsapp.com/send?phone=9889096968&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20a%20minha%20Empresa.%20Podemos%20conversar%3F%20">
            <CardButtonFlex>
              <CardButtonText>Saiba mais</CardButtonText>
              <IconWtp icon={WhatsappLogo} />
            </CardButtonFlex>
          </CardButtonAnchor>
        </CardButtonProperty>
      </CardGridBg>
      <CardGridBg>
        <IconCard icon={NotePencil} />
        <CardGridH1>{titleCards.title4}</CardGridH1>
        <CardGridParagraph>{paragraphCards.paragraphCards4}</CardGridParagraph>
        <CardButtonProperty>
          <CardButtonAnchor href="https://api.whatsapp.com/send?phone=9889096968&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20a%20minha%20Empresa.%20Podemos%20conversar%3F%20">
            <CardButtonFlex>
              <CardButtonText>Saiba mais</CardButtonText>
              <IconWtp icon={WhatsappLogo} />
            </CardButtonFlex>
          </CardButtonAnchor>
        </CardButtonProperty>
      </CardGridBg>
      <CardGridBg>
        <IconCard icon={Stethoscope} />
        <CardGridH1>{titleCards.title5}</CardGridH1>
        <CardGridParagraph>{paragraphCards.paragraphCards5}</CardGridParagraph>
        <CardButtonProperty>
          <CardButtonAnchor href="https://api.whatsapp.com/send?phone=9889096968&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20a%20minha%20Empresa.%20Podemos%20conversar%3F%20">
            <CardButtonFlex>
              <CardButtonText>Saiba mais</CardButtonText>
              <IconWtp icon={WhatsappLogo} />
            </CardButtonFlex>
          </CardButtonAnchor>
        </CardButtonProperty>
      </CardGridBg>
    </CardGrid>
  )
}
