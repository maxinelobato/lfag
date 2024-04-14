// 'use client'

// import { Swiper, SwiperSlide } from 'swiper/react'
// import './swiper.css'

// import 'swiper/css'
// import 'swiper/css/navigation'

// import { Navigation, Autoplay } from 'swiper/modules'

// import ImageAurely from '../../../../public/img/aurely-img.png'
import {
  SocialProveH1,
  SocialProveSpace,
  SocialProveSpan,
} from './SocialProveComponents'
import { RevealWrapper } from 'next-reveal'
import { ImgGoogle } from './ImgGoogle'
import {
  SocialCardImgClient,
  SocialCardImgGoogle,
  SocialCardParagraphContent,
  SocialCardParagraphSubtitle,
  SocialCardParagraphTitle,
  SocialCardProperty,
} from './SocialCardComponents'
import { ImgClient } from './ImgClient'

export function SocialProve() {
  return (
    <>
      <SocialProveSpace>
        <RevealWrapper reset={true}>
          <SocialProveH1>
            O que os clientes falam {''}
            <SocialProveSpan>sobre a LFAG</SocialProveSpan>
          </SocialProveH1>
        </RevealWrapper>
        <SocialCardImgGoogle>
          <ImgGoogle />
        </SocialCardImgGoogle>

        {/* <Swiper
          navigation={true}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="group relative block overflow-hidden rounded-lg bg-black">
              <Image
                alt="Img"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={Client1}
                className="absolute inset-0 h-auto w-full cursor-pointer rounded-lg object-cover opacity-90 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div className="translate-y-8 transform rounded-lg bg-white/10 p-2 opacity-0 backdrop-blur-sm transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm font-medium uppercase tracking-widest text-brandOrange ">
                      VForte
                    </p>
                    <p className="text-xl font-bold text-white sm:text-2xl">
                      Maria das Graças
                    </p>
                    <p className="text-sm text-white">
                      Amando a consultoria da Aurely! Uma profissional muito
                      competente e sabe exatamente o que está fazendo pelos 20
                      anos de experiência. Acabei aconomizando muito pelos
                      próximos 10 anos de empresas. Minha enorme Gratidão por
                      toda sua entrega.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <blockquote className="items-center justify-center sm:p-8 lg:p-12">
              <Image
                src={ImageAurely}
                alt="Imagem 2"
                rel="preload"
                className="cursor-pointer rounded-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </blockquote>
          </SwiperSlide>

          <SwiperSlide>
            <blockquote className="items-center justify-center sm:p-8 lg:p-12">
              <Image
                src={ImageAurely}
                alt="Imagem 3"
                rel="preload"
                className="cursor-pointer rounded-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </blockquote>
          </SwiperSlide>

          <SwiperSlide>
            <blockquote className="items-center justify-center sm:p-8 lg:p-12">
              <Image
                src={ImageAurely}
                alt="Imagem 4"
                rel="preload"
                className="cursor-pointer rounded-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </blockquote>
          </SwiperSlide>

          <SwiperSlide>
            <blockquote className="items-center justify-center sm:p-8 lg:p-12">
              <Image
                src={ImageAurely}
                alt="Imagem 5"
                rel="preload"
                className="cursor-pointer rounded-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </blockquote>
          </SwiperSlide>
        </Swiper> */}
        <SocialCardImgClient>
          <ImgClient />
          <SocialCardProperty>
            <SocialCardParagraphTitle>
              VForte | Engenharia e Controle Ambiental
            </SocialCardParagraphTitle>
            <SocialCardParagraphSubtitle>
              Viviane Oliveira
            </SocialCardParagraphSubtitle>
            <SocialCardParagraphContent>
              Amando a consultoria da Aurely! Uma profissional muito competente
              e sabe exatamente o que está fazendo pelos 20 anos de experiência.
              Acabei aconomizando muito pelos próximos 10 anos de empresas.
              Minha enorme Gratidão por toda sua entrega.
            </SocialCardParagraphContent>
          </SocialCardProperty>
        </SocialCardImgClient>
      </SocialProveSpace>
    </>
  )
}
