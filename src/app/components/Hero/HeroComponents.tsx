import { ComponentProps } from 'react'

export interface HeroSectionProps {
  className: string
}

type HeroSectionRootProps = ComponentProps<'section'>

export function HeroSectionRoot(props: HeroSectionRootProps) {
  return <section className="relative overflow-hidden" {...props} />
}

type HeroSectionBgGradientProps = ComponentProps<'div'>

export function HeroSectionBgGradient(props: HeroSectionBgGradientProps) {
  return (
    <div
      className="bg-gradient-to-r from-brandOrange/90 from-40% to-brandOrange200/45 to-90% p-6 md:p-12 lg:px-16 lg:py-12"
      {...props}
    />
  )
}

type HeroSectionPropertyProps = ComponentProps<'div'>

export function HeroSectionProperty(props: HeroSectionPropertyProps) {
  return (
    <div className="mx-auto py-12 sm:max-w-xl md:max-w-full md:px-20 lg:max-w-6xl lg:px-4 lg:py-16">
      <div className="flex flex-col items-center justify-between xl:flex-row">
        <div className="mb-0 w-full max-w-6xl xl:w-8/12" {...props} />
      </div>
    </div>
  )
}
