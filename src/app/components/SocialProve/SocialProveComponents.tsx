import { ComponentProps } from 'react'

export interface SocialProveProps {
  className: string
}

type SocialProveH1Props = ComponentProps<'h1'>

export function SocialProveH1(props: SocialProveH1Props) {
  return (
    <h1
      style={{ textShadow: '0px 0px 2px #000000' }}
      className="mb-6 max-w-5xl pt-8 text-center font-sans text-4xl font-bold uppercase text-white sm:text-5xl md:mx-auto"
      {...props}
    />
  )
}

type SocialProveParagraphProps = ComponentProps<'p'>

export function SocialProveParagraph(props: SocialProveParagraphProps) {
  return (
    <p
      className="text-center text-sm font-medium text-white/85 sm:text-lg md:mt-2 md:block"
      {...props}
    />
  )
}

type SocialProveSpanProps = ComponentProps<'span'>

export function SocialProveSpan(props: SocialProveSpanProps) {
  return <span className="text-brandGreyBlue sm:block" {...props} />
}
