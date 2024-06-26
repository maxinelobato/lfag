'use client'

import { About } from './components/About'
import { Benefits } from './components/Benefits'
import { BusinessWorked } from './components/BusinessWorked'
import { ButtonFloatWttp } from './components/Buttons'
import { Card } from './components/Cards'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { BgGradientColor } from './components/SectionColor/BgGradient'
import { SocialProve } from './components/SocialProve'

export default function Home() {
  return (
    <>
      <Hero />
      <BgGradientColor>
        <Card />
        <Benefits />
        <About />
        <SocialProve />
        <BusinessWorked />
        <Faq />
      </BgGradientColor>
      <Footer />
      <ButtonFloatWttp />
    </>
  )
}
