import { ComponentProps } from 'react'

export interface BenefitsSectionsProps {
  className: string
}

type BenefitsSectionColorProps = ComponentProps<'div'>

export function BenefitsSectionColor(props: BenefitsSectionColorProps) {
  return (
    <>
      <div className="bg-brandGreyBlue bg-scroll" {...props} />
    </>
  )
}

type BenefitsSectionsRootProps = ComponentProps<'section'>

export function BenefitsSectionsRoot(props: BenefitsSectionsRootProps) {
  return (
    <section
      className="mx-auto -mt-16 px-4 py-8 sm:max-w-xl sm:py-10 md:max-w-full md:px-24 lg:max-w-6xl lg:px-8 lg:py-14"
      {...props}
    />
  )
}

type BenefitsSectionsContentProps = ComponentProps<'div'>

export function BenefitsSectionsContent(props: BenefitsSectionsContentProps) {
  return <div className="mx-auto text-left" {...props} />
}
