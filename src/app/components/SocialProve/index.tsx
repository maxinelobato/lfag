'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import './swiper.css'

import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation, Autoplay } from 'swiper/modules'

import Image from 'next/image'
import ImageAurely from '../../../../public/img/aurely-img.png'
import ImageGoogle from '../../../../public/img/google.png'
import { SocialProveH1, SocialProveSpan } from './SocialProveComponents'
import { RevealWrapper } from 'next-reveal'

export function SocialProve() {
  return (
    <>
      <RevealWrapper delay={450} reset={true}>
        <SocialProveH1>
          O que os clientes falam {''}
          <SocialProveSpan>sobre a LFAG</SocialProveSpan>
        </SocialProveH1>
      </RevealWrapper>
      <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6">
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 xl:justify-center">
          <Image
            src={ImageGoogle}
            alt="Imagem"
            width={300}
            height={300}
            rel="preload"
            className="h-28 w-28 drop-shadow-lg"
          />
        </div>
      </div>
      <div className="mx-auto max-w-lg px-4 pt-8 sm:px-6">
        <Swiper
          navigation={true}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <blockquote className="items-center justify-center sm:p-8 lg:p-12">
              <Image
                src={ImageAurely}
                alt="Imagem 1"
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
        </Swiper>
      </div>
    </>
  )
}
