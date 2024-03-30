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
  CardButtonAnchor,
  CardButtonFlex,
  CardButtonRoot,
  CardButtonText,
} from './CardButton'
import { CardBg, CardGrid, CardH1, CardP } from './CardSections'

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
      <CardBg>
        <IconCard icon={File} />
        <CardH1>{titleCards.title1}</CardH1>
        <CardP>{paragraphCards.paragraphCards1}</CardP>
        <CardButtonRoot>
          <CardButtonAnchor href="https://api.whatsapp.com/send?phone=9889096968&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20a%20minha%20Empresa.%20Podemos%20conversar%3F%20">
            <CardButtonFlex>
              <CardButtonText>Saiba mais</CardButtonText>
              <IconWtp icon={WhatsappLogo} />
            </CardButtonFlex>
          </CardButtonAnchor>
        </CardButtonRoot>
      </CardBg>
      <CardBg>
        <IconCard icon={Certificate} />
        <CardH1>{titleCards.title2}</CardH1>
        <CardP>{paragraphCards.paragraphCards2}</CardP>
        <CardButtonRoot>
          <CardButtonAnchor href="https://api.whatsapp.com/send?phone=9889096968&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20a%20minha%20Empresa.%20Podemos%20conversar%3F%20">
            <CardButtonFlex>
              <CardButtonText>Saiba mais</CardButtonText>
              <IconWtp icon={WhatsappLogo} />
            </CardButtonFlex>
          </CardButtonAnchor>
        </CardButtonRoot>
      </CardBg>
      <CardBg>
        <IconCard icon={Warning} />
        <CardH1>{titleCards.title3}</CardH1>
        <CardP>{paragraphCards.paragraphCards3}</CardP>
        <CardButtonRoot>
          <CardButtonAnchor href="https://api.whatsapp.com/send?phone=9889096968&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20a%20minha%20Empresa.%20Podemos%20conversar%3F%20">
            <CardButtonFlex>
              <CardButtonText>Saiba mais</CardButtonText>
              <IconWtp icon={WhatsappLogo} />
            </CardButtonFlex>
          </CardButtonAnchor>
        </CardButtonRoot>
      </CardBg>
      <CardBg>
        <IconCard icon={NotePencil} />
        <CardH1>{titleCards.title4}</CardH1>
        <CardP>{paragraphCards.paragraphCards4}</CardP>
        <CardButtonRoot>
          <CardButtonAnchor href="https://api.whatsapp.com/send?phone=9889096968&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20a%20minha%20Empresa.%20Podemos%20conversar%3F%20">
            <CardButtonFlex>
              <CardButtonText>Saiba mais</CardButtonText>
              <IconWtp icon={WhatsappLogo} />
            </CardButtonFlex>
          </CardButtonAnchor>
        </CardButtonRoot>
      </CardBg>
      <CardBg>
        <IconCard icon={Stethoscope} />
        <CardH1>{titleCards.title5}</CardH1>
        <CardP>{paragraphCards.paragraphCards5}</CardP>
        <CardButtonRoot>
          <CardButtonAnchor href="https://api.whatsapp.com/send?phone=9889096968&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20a%20minha%20Empresa.%20Podemos%20conversar%3F%20">
            <CardButtonFlex>
              <CardButtonText>Saiba mais</CardButtonText>
              <IconWtp icon={WhatsappLogo} />
            </CardButtonFlex>
          </CardButtonAnchor>
        </CardButtonRoot>
      </CardBg>
    </CardGrid>
  )
}
