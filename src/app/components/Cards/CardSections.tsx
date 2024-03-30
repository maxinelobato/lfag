import { ComponentProps } from 'react'

export interface CardsSectionsProps {
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
      className="group rounded-lg border-2 border-white/30 bg-white/20 p-8 shadow-lg shadow-white hover:border-2 hover:border-none hover:border-white hover:bg-brandGreyBlue hover:shadow-brandGreyBlue"
      {...props}
    />
  )
}

type CardsSectionColorProps = ComponentProps<'div'>

export function CardsSectionColor(props: CardsSectionColorProps) {
  return (
    <>
      <div
        className="min-h-full bg-gradient-to-br from-brandOrange to-white bg-scroll"
        {...props}
      />
    </>
  )
}

type CardsSectionsRootProps = ComponentProps<'section'>

export function CardsSectionsRoot(props: CardsSectionsRootProps) {
  return (
    <section
      className="mx-auto -mt-16 px-4 py-8 sm:max-w-xl sm:py-10 md:max-w-full md:px-24 lg:max-w-6xl lg:px-8 lg:py-14"
      {...props}
    />
  )
}

type CardsSectionsContentProps = ComponentProps<'div'>

export function CardsSectionsContent(props: CardsSectionsContentProps) {
  return <div className="mx-auto text-left" {...props} />
}
