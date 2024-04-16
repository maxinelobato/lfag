'use client'

import {
  At,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  WhatsappLogo,
} from '@phosphor-icons/react'
import {
  FooterAllRights,
  FooterAnchorSocialMidia,
  FooterButtonAnchor,
  FooterButtonFlex,
  FooterButtonProperty,
  FooterButtonText,
  FooterCols,
  FooterDiv,
  FooterFlex,
  FooterFlexItensCenter,
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
import { LogoLfagFooter } from '../Image'
import { IconWtpFooter } from '../Icons/IconWtpFooter'

export function Footer() {
  return (
    <>
      <FooterProperty>
        <FooterRows>
          <FooterCols>
            <LogoLfagFooter />
            <FooterSpanLogo>Segurança do Trabalho e Ergonomia</FooterSpanLogo>
          </FooterCols>
          <FooterSpace>
            <FooterParagraphContact>Entre em Contato</FooterParagraphContact>
            <FooterFlex>
              <FooterButtonProperty>
                <FooterButtonAnchor href="https://api.whatsapp.com/send?phone=94992659199&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20minha%20Empresa.%20Podemos%20conversar%3F%20">
                  <FooterButtonFlex>
                    <FooterButtonText>
                      <FooterLabelContact>Celular:</FooterLabelContact>
                      (94)99265-9199
                    </FooterButtonText>
                    <IconWtpFooter icon={WhatsappLogo} />
                  </FooterButtonFlex>
                </FooterButtonAnchor>
              </FooterButtonProperty>
            </FooterFlex>
            <FooterFlex>
              <FooterButtonProperty>
                <FooterButtonAnchor href="mailto:lfagsst@gmail.com">
                  <FooterButtonFlex>
                    <FooterButtonText>
                      <FooterLabelContact>Email:</FooterLabelContact>
                      lfagsst@gmail.com
                    </FooterButtonText>
                    <IconWtpFooter icon={At} />
                  </FooterButtonFlex>
                </FooterButtonAnchor>
              </FooterButtonProperty>
            </FooterFlex>
            <FooterFlex>
              <FooterButtonProperty>
                <FooterButtonAnchor href="https://maps.app.goo.gl/k3zDfuPESt36ntiPA">
                  <FooterButtonFlex>
                    <FooterButtonText>
                      <FooterLabelContact>Endereço:</FooterLabelContact>
                      Parauapebas/PA
                    </FooterButtonText>
                    <IconWtpFooter icon={MapPin} />
                  </FooterButtonFlex>
                </FooterButtonAnchor>
              </FooterButtonProperty>
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
