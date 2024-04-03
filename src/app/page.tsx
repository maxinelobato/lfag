import { About } from './components/About'
import { ButtonFloatWttp } from './components/Buttons'
import { Card } from './components/Cards'
import { Faq } from './components/Faq'
import { Hero } from './components/Hero'
import { BgGradientColor } from './components/SectionColor/BgGradient'
import { SocialProve } from './components/SocialProve'

export default function Home() {
  return (
    <>
      <Hero />
      <BgGradientColor>
        <Card />
        <About />
        <SocialProve />
        <Faq />
      </BgGradientColor>
      <ButtonFloatWttp />
    </>
  )
}
