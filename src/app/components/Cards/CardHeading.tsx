import { ComponentProps } from 'react'

export interface CardHeadingProps {
  className: string
}

type CardHeadingH1Props = ComponentProps<'h1'>

export function CardHeadingH1(props: CardHeadingH1Props) {
  return (
    <h1
      style={{ textShadow: '0px 0px 4px #000000' }}
      className="mb-6 max-w-5xl pt-8 text-center font-sans text-4xl font-bold uppercase text-white sm:text-5xl md:mx-auto"
      {...props}
    />
  )
}

type CardHeadingParagraphProps = ComponentProps<'p'>

export function CardHeadingParagraph(props: CardHeadingParagraphProps) {
  return (
    <p
      className="text-center text-sm font-medium text-brandGreyBlue/85 sm:text-lg md:mt-2 md:block"
      {...props}
    />
  )
}

type CardHeadingSpanProps = ComponentProps<'span'>

export function CardHeadingSpan(props: CardHeadingSpanProps) {
  return <span className="text-brandGreyBlue sm:block" {...props} />
}
