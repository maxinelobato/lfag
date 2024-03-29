import { WhatsappLogo } from '@phosphor-icons/react'
import {
  AnchorButtonCta,
  FlexItensButtonCta,
  RootButtonCta,
  TextButtonCta,
} from '../Buttons/ButtonCta'
import { IconWtp } from '../Icons/IconWtp'
import Image from 'next/image'
import ImageAurely from '../../../../public/img/aurely.jpeg'

export function AboutHeading() {
  return (
    <>
      <section className="mx-auto max-w-screen-xl overflow-hidden sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="font-sans text-2xl font-extrabold uppercase text-white md:text-3xl">
              Conheça à LFAG da Especialista Aurely Feitoza
            </h2>
            <span className="flex items-center">
              <span className="h-px flex-1 bg-brandOrange"></span>
              <span className="pl-4 font-bold text-brandOrange">
                CREA 135798D
              </span>
            </span>
            <p className="font-semibold text-white md:mt-4 md:block">
              Especialista em Segurança do Trabalho, com mais de 23 anos de
              experiência, vários cursos de especialização e capacitação
              profissional. Trazemos soluções em Saúde e Segurança para sua
              empresa, não importa o tamanho do problema, tratamos com seriedade
              e profissionalismo, dando uma solução específica e fazendo toda a
              diferença na hora da fiscalização pois damos garantia Jurídica.
              Realizamos a Gestão do E-social, com os envio dos Eventos S2210 /
              S2230 e S2240.
            </p>
            <p className="font-semibold text-white md:mt-4 md:block">
              Nosso atendimento dedica em especial, à segurança Jurídica da
              empresa, proporcionando um ambiente mais Salubre e Seguro para
              todos os trabalhadores.
            </p>
            <div className="mt-4 md:mt-8">
              <RootButtonCta>
                <AnchorButtonCta href="https://api.whatsapp.com/send?phone=9889096968&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20a%20minha%20Empresa.%20Podemos%20conversar%3F%20">
                  <TextButtonCta>
                    Garanta a Segurança de sua Empresa
                  </TextButtonCta>
                  <FlexItensButtonCta>
                    <IconWtp icon={WhatsappLogo} />
                  </FlexItensButtonCta>
                </AnchorButtonCta>
              </RootButtonCta>
            </div>
          </div>
        </div>

        <Image
          alt="Imagem"
          src={ImageAurely}
          loading="lazy"
          className="h-full w-full rounded-xl object-cover shadow-2xl shadow-white"
        />
      </section>
    </>
  )
}
