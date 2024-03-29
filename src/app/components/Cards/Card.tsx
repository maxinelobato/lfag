import { ComponentProps } from 'react'

export interface CardProps {
  className: string
}

type CardGridProps = ComponentProps<'div'>

export function CardGrid(props: CardGridProps) {
  return (
    <div
      className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      {...props}
    />
  )
}

type CardH1Props = ComponentProps<'h1'>

export function CardH1(props: CardH1Props) {
  return (
    <h1
      className="mt-4 text-xl font-black text-brandGreyBlue group-hover:text-white"
      {...props}
    />
  )
}

type CardPProps = ComponentProps<'p'>

export function CardP(props: CardPProps) {
  return (
    <p
      className="mt-1 text-sm text-brandGreyBlue group-hover:text-white"
      {...props}
    />
  )
}

type CardBgProps = ComponentProps<'div'>

export function CardBg(props: CardBgProps) {
  return (
    <div
      className="group rounded-lg  border-2 border-white/30 bg-white/20 p-8 shadow-lg shadow-white delay-0 duration-150 ease-in-out hover:scale-105 hover:border-2 hover:border-none hover:border-white hover:bg-brandGreyBlue hover:shadow-brandGreyBlue hover:transition-all"
      {...props}
    />
  )
}
