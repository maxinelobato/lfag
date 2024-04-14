'use client'

import { InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { LogoLFagAzul } from '../Logo/LogoLFagAzul'
import {
  FooterAllRights,
  FooterAnchorEmail,
  FooterAnchorSocialMidia,
  FooterAnchorWhatsapp,
  FooterCols,
  FooterDiv,
  FooterFlex,
  FooterFlexItensCenter,
  FooterLabelCity,
  FooterLabelContact,
  FooterParagraphContact,
  FooterPoliticsProperty,
  FooterPoliticsPropertyParagraph,
  FooterProperty,
  FooterRows,
  FooterSpace,
  FooterSpanLogo,
  FooterSpanSocialMidia,
} from './FooterComponents'

export function Footer() {
  return (
    <>
      <FooterProperty>
        <FooterRows>
          <FooterCols>
            <LogoLFagAzul />
            <FooterSpanLogo>Segurança do Trabalho e Ergonomia</FooterSpanLogo>
          </FooterCols>
          <FooterSpace>
            <FooterParagraphContact>Entre em Contato</FooterParagraphContact>
            <FooterFlex>
              <FooterLabelContact>Whastsapp:</FooterLabelContact>
              <FooterAnchorWhatsapp href="https://api.whatsapp.com/send?phone=94992659199&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20minha%20Empresa.%20Podemos%20conversar%3F%20">
                +55 94 99265-9199
              </FooterAnchorWhatsapp>
            </FooterFlex>
            <FooterFlex>
              <FooterLabelContact>Email:</FooterLabelContact>
              <FooterAnchorEmail href="mailto:lfagsst@gmail.com">
                lfagsst@gmail.com
              </FooterAnchorEmail>
            </FooterFlex>
            <FooterFlex>
              <FooterLabelContact>Endereço:</FooterLabelContact>
              <FooterLabelCity>Parauapebas/PA</FooterLabelCity>
            </FooterFlex>
          </FooterSpace>
          <FooterDiv>
            <FooterSpanSocialMidia>
              Siga Nossas Redes Sociais
            </FooterSpanSocialMidia>
            <FooterFlexItensCenter>
              <FooterAnchorSocialMidia
                aria-label="Me siga no LinkedIn"
                href="https://www.linkedin.com/in/aurely-feitoza-a4815525/"
              >
                <LinkedinLogo weight="fill" size={48} />
              </FooterAnchorSocialMidia>
              <FooterAnchorSocialMidia
                href="https://www.instagram.com/aurely_gloria/"
                aria-label="Me siga no Instagram"
              >
                <InstagramLogo weight="fill" size={48} />
              </FooterAnchorSocialMidia>
            </FooterFlexItensCenter>
          </FooterDiv>
        </FooterRows>
        <FooterAllRights>
          © Todos os Direitos Reservados 2024. LFAG - Segurança do Trabalho e
          Engonomia.
        </FooterAllRights>
      </FooterProperty>
      <FooterPoliticsProperty>
        <FooterPoliticsPropertyParagraph>
          Este site não faz parte do Google nem do Facebook ou do Facebook Inc.
          Além disso, não oferecemos nenhum tipo de serviço oficial do governo,
          NÃO praticamos fraude, não somos uma empresa que vende criptoativos ou
          qualquer outro serviço.
        </FooterPoliticsPropertyParagraph>
        <FooterPoliticsPropertyParagraph>
          Essa empresa trabalha exclusivamente com serviços jurídicos e
          segurança do trabalho.
        </FooterPoliticsPropertyParagraph>
      </FooterPoliticsProperty>
    </>
  )
}
