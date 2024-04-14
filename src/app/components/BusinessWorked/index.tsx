'use client'

import Image from 'next/image'
import mrv from '../../../../public/img/mrn-logo.svg'
import anglo from '../../../../public/img/anglo-american-logo-white.svg'
import direcional from '../../../../public/img/direcional-logo.webp'
import elo from '../../../../public/img/grupoelo-logo.png'
import { RevealWrapper } from 'next-reveal'

export function BusinessWorked() {
  return (
    <>
      <div className="bg-gradient-to-r from-transparent to-brandGreyBlue900 py-14 shadow-2xl">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <RevealWrapper reset={true}>
            <div className="mx-auto max-w-4xl text-center">
              <h1
                style={{ textShadow: '0px 0px 2px #000000' }}
                className="mb-6 max-w-5xl p-2 pt-8 text-center font-sans text-4xl font-bold uppercase text-white sm:text-5xl md:mx-auto"
              >
                Quais são as empresas que a LFAG já trabalhou?
              </h1>
              <p className="text-center text-sm font-medium text-white sm:text-lg md:mt-2 md:block">
                Empresas multinacionais e brasileiras altamente sustentáveis.
                Com mais de 100 anos de história.
              </p>
            </div>
          </RevealWrapper>
          <div className="mt-12 flex justify-center">
            <ul className="inline-grid grid-cols-2 items-center gap-x-10 gap-y-6 md:grid-cols-3 md:gap-x-16 lg:grid-cols-4">
              {/* LOGO 1 */}
              <RevealWrapper
                rotate={{ x: 0, y: 0, z: 0 }}
                origin="left"
                distance="500px"
                reset={true}
                desktop={true}
                mobile={true}
                viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
              >
                <li>
                  <Image
                    className="my-auto w-48"
                    src={anglo}
                    alt=""
                    loading="lazy"
                    rel="preload"
                    sizes='"(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"'
                  />
                </li>
              </RevealWrapper>

              {/* LOGO 2 */}
              <RevealWrapper
                rotate={{ x: 0, y: 0, z: 0 }}
                origin="left"
                distance="500px"
                reset={true}
                desktop={true}
                mobile={true}
                viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
              >
                <li>
                  <Image
                    className="my-auto w-48"
                    src={elo}
                    alt=""
                    loading="lazy"
                    rel="preload"
                    sizes='"(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"'
                  />
                </li>
              </RevealWrapper>

              {/* LOGO 3 */}
              <RevealWrapper
                rotate={{ x: 0, y: 0, z: 0 }}
                origin="left"
                distance="500px"
                reset={true}
                desktop={true}
                mobile={true}
                viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
              >
                <li>
                  <Image
                    className="my-auto w-48"
                    src={direcional}
                    alt=""
                    loading="lazy"
                    rel="preload"
                    sizes='"(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"'
                  />
                </li>
              </RevealWrapper>
              {/* LOGO 4 */}
              <RevealWrapper
                rotate={{ x: 0, y: 0, z: 0 }}
                origin="left"
                distance="500px"
                reset={true}
                desktop={true}
                mobile={true}
                viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
              >
                <li>
                  <Image
                    className="my-auto w-48"
                    src={mrv}
                    alt=""
                    loading="lazy"
                    rel="preload"
                    sizes='"(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"'
                  />
                </li>
              </RevealWrapper>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
