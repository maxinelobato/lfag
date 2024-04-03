import { ComponentProps } from 'react'

export interface HeroSectionProps {
  className: string
}

type HeroSectionRootProps = ComponentProps<'section'>

export function HeroSectionRoot(props: HeroSectionRootProps) {
  return (
    <section
      className="relative bg-[url(https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-fixed bg-center bg-no-repeat"
      {...props}
    />
  )
}

type HeroSectionBgGradientProps = ComponentProps<'div'>

export function HeroSectionBgGradient(props: HeroSectionBgGradientProps) {
  return (
    <div
      className="bg-gradient-to-r from-brandOrange from-40% to-transparent to-90% p-8 md:p-12 lg:px-16 lg:py-12"
      {...props}
    />
  )
}

type HeroSectionPropertyProps = ComponentProps<'div'>

export function HeroSectionProperty(props: HeroSectionPropertyProps) {
  return (
    <div className="mx-auto px-4 py-8 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-6xl lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between xl:flex-row">
        <div className="mb-0 w-full max-w-6xl xl:w-8/12" {...props} />
      </div>
    </div>
  )
}
