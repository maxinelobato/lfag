'use client'

import { RevealWrapper } from 'next-reveal'
import {
  BusinessWorkedFlexJusitfyCenter,
  BusinessWorkedH1,
  BusinessWorkedLi,
  BusinessWorkedParagraph,
  BusinessWorkedProperty,
  BusinessWorkedSection,
  BusinessWorkedUl,
} from './BusinessWorkedComponents'
import { ImgAnglo, ImgDirecional, ImgElo, ImgMrv } from '../Image'

export function BusinessWorked() {
  return (
    <>
      <BusinessWorkedSection>
        <RevealWrapper reset={true}>
          <BusinessWorkedProperty>
            <BusinessWorkedH1>
              As empresas que fazem parte da trajetória da LFAG
            </BusinessWorkedH1>
            <BusinessWorkedParagraph>
              Empresas multinacionais e brasileiras altamente sustentáveis. Com
              mais de 100 anos de história.
            </BusinessWorkedParagraph>
          </BusinessWorkedProperty>
        </RevealWrapper>
        <BusinessWorkedFlexJusitfyCenter>
          <RevealWrapper
            rotate={{ x: 0, y: 0, z: 0 }}
            origin="left"
            distance="500px"
            reset={true}
            desktop={true}
            mobile={true}
            viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            <BusinessWorkedUl>
              <BusinessWorkedLi>
                <ImgAnglo />
              </BusinessWorkedLi>
              <BusinessWorkedLi>
                <ImgElo />
              </BusinessWorkedLi>
              <BusinessWorkedLi>
                <ImgDirecional />
              </BusinessWorkedLi>
              <BusinessWorkedLi>
                <ImgMrv />
              </BusinessWorkedLi>
            </BusinessWorkedUl>
          </RevealWrapper>
        </BusinessWorkedFlexJusitfyCenter>
      </BusinessWorkedSection>
    </>
  )
}
