import { ComponentProps } from 'react'

export interface ButtonCtaFooter {
  className: string
}

type ButtonPropertyFooterProps = ComponentProps<'div'>

export function ButtonPropertyFooter(props: ButtonPropertyFooterProps) {
  return <div className="my-8 w-full justify-center" {...props} />
}

type ButtonAnchorFooterProps = ComponentProps<'a'>

export function ButtonAnchorFooter(props: ButtonAnchorFooterProps) {
  return (
    <a
      target="_blank"
      aria-label="Clique no botão"
      className="focus:shadow-outline group inline-flex h-16 w-full items-center justify-center rounded-full bg-green-600 px-6 font-medium tracking-wide text-white shadow-md delay-0 duration-150 ease-in-out hover:scale-110 hover:bg-brandWts hover:transition-all focus:outline-none sm:h-14 md:w-auto"
      {...props}
    />
  )
}

type ButtonFlexFooterProps = ComponentProps<'div'>

export function ButtonFlexFooter(props: ButtonFlexFooterProps) {
  return (
    <div className="flex items-center group-hover:text-zinc-800" {...props} />
  )
}

type ButtonTextFooterProps = ComponentProps<'div'>

export function ButtonTextFooter(props: ButtonTextFooterProps) {
  return (
    <div
      className="mr-3 text-center text-sm font-semibold uppercase text-white group-hover:text-zinc-800 sm:text-left sm:text-lg"
      {...props}
    />
  )
}
