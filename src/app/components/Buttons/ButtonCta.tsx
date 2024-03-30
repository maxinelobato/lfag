import { ComponentProps } from 'react'

export interface ButtonCta {
  className: string
}

type RootButtonCtaProps = ComponentProps<'div'>

export function RootButtonCta(props: RootButtonCtaProps) {
  return (
    <div
      className="my-8 flex w-full justify-center sm:justify-start"
      {...props}
    />
  )
}

type AnchorButtonCtaProps = ComponentProps<'a'>

export function AnchorButtonCta(props: AnchorButtonCtaProps) {
  return (
    <a
      target="_blank"
      aria-label="Clique no botão"
      className="focus:shadow-outline group inline-flex h-16 w-full items-center justify-center rounded-full bg-green-600 px-6 font-medium tracking-wide text-white shadow-md delay-0 duration-150 ease-in-out hover:scale-110 hover:bg-brandWts hover:transition-all focus:outline-none sm:h-14 md:w-auto"
      {...props}
    />
  )
}

type FlexItensButtonCtaProps = ComponentProps<'div'>

export function FlexItensButtonCta(props: FlexItensButtonCtaProps) {
  return (
    <div className="flex items-center group-hover:text-zinc-800" {...props} />
  )
}

type TextButtonCtaProps = ComponentProps<'div'>

export function TextButtonCta(props: TextButtonCtaProps) {
  return (
    <div
      className="mr-3 text-center text-sm font-semibold uppercase text-white group-hover:text-zinc-800 sm:text-left sm:text-lg"
      {...props}
    />
  )
}
