import { ComponentProps } from 'react'

export interface HeroSectionProps {
  className: string
}

type HeroSectionRootProps = ComponentProps<'section'>

export function HeroSectionRoot(props: HeroSectionRootProps) {
  return <section className="relative overflow-hidden" {...props} />
}

type HeroSectionPropertyProps = ComponentProps<'div'>

export function HeroSectionProperty(props: HeroSectionPropertyProps) {
  return (
    <div className="mx-auto py-12 sm:max-w-xl md:max-w-full md:px-20 lg:max-w-6xl lg:px-4 lg:py-16">
      <div className="flex flex-col items-center justify-between xl:flex-row">
        <div className="mb-0 w-full max-w-6xl p-4 xl:w-8/12" {...props} />
      </div>
    </div>
  )
}

type HeroImageProps = ComponentProps<'div'>

export function HeroImage(props: HeroImageProps) {
  return (
    <div className="z-40 mx-auto max-w-5xl">
      <div className="z-40 flex justify-center sm:flex-none sm:justify-start">
        <div className="z-40 -mt-10 block pb-8" {...props} />
      </div>
    </div>
  )
}
