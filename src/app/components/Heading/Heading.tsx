import { ComponentProps } from 'react'

export interface HeadingProps {
  className: string
}

type HeadingH1Props = ComponentProps<'h1'>

export function HeadingH1(props: HeadingH1Props) {
  return (
    <h1
      style={{ textShadow: '0px 0px 2px #000000' }}
      className="mb-6 max-w-5xl text-center font-sans text-4xl font-extrabold uppercase text-white sm:text-left sm:text-5xl md:mx-auto"
      {...props}
    />
  )
}

type HeadingSpanProps = ComponentProps<'span'>

export function HeadingSpan(props: HeadingSpanProps) {
  return <span className="text-brandGreyBlue sm:block" {...props} />
}

type HeadingParagraphProps = ComponentProps<'p'>

export function HeadingParagraph(props: HeadingParagraphProps) {
  return (
    <p
      className="text-center text-sm font-semibold text-white/85 sm:text-left sm:text-lg md:mt-2 md:block"
      {...props}
    />
  )
}
