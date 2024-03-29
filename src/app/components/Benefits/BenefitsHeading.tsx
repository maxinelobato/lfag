import { ComponentProps } from 'react'

export interface BenefitsHeadingProps {
  className: string
}

type BenefitsHeadingH1Props = ComponentProps<'h1'>

export function BenefitsHeadingH1(props: BenefitsHeadingH1Props) {
  return (
    <h1
      className="mb-6 max-w-5xl pt-8 text-center font-sans text-4xl font-bold uppercase text-white sm:text-5xl md:mx-auto"
      {...props}
    />
  )
}

type BenefitsHeadingParagraphProps = ComponentProps<'p'>

export function BenefitsHeadingParagraph(props: BenefitsHeadingParagraphProps) {
  return (
    <p
      className="text-center text-sm font-medium text-white/85 sm:text-lg md:mt-2 md:block"
      {...props}
    />
  )
}

type BenefitsHeadingSpanProps = ComponentProps<'span'>

export function BenefitsHeadingSpan(props: BenefitsHeadingSpanProps) {
  return <span className="text-brandOrange sm:block" {...props} />
}
