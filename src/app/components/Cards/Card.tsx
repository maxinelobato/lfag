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
  return <h1 className="mt-4 text-xl font-black text-white" {...props} />
}

type CardPProps = ComponentProps<'p'>

export function CardP(props: CardPProps) {
  return <p className="mt-1 text-sm text-white" {...props} />
}

type CardBgProps = ComponentProps<'div'>

export function CardBg(props: CardBgProps) {
  return (
    <div
      className="block rounded-lg bg-brandGreyBlue/20 p-8 drop-shadow-sm backdrop-blur-sm delay-0 duration-150 ease-in-out hover:scale-105 hover:bg-brandGreyBlue hover:transition-all"
      {...props}
    />
  )
}
