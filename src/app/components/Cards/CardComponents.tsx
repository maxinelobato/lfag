import { ComponentProps } from 'react'

export interface CardProps {
  className: string
}

type CardSpaceProps = ComponentProps<'section'>

export function CardSpace(props: CardSpaceProps) {
  return <section className="px-2 py-10" {...props} />
}

type CardH1Props = ComponentProps<'h1'>

export function CardH1(props: CardH1Props) {
  return (
    <h1
      style={{ textShadow: '0px 0px 2px #000000' }}
      className="mb-6 max-w-5xl p-2 pt-8 text-center font-sans text-4xl font-bold uppercase text-white sm:text-5xl md:mx-auto"
      {...props}
    />
  )
}

type CardParagraphProps = ComponentProps<'p'>

export function CardParagraph(props: CardParagraphProps) {
  return (
    <p
      className="text-center text-sm font-medium text-brandGreyBlue/85 sm:text-lg md:mt-2 md:block"
      {...props}
    />
  )
}

type CardSpanProps = ComponentProps<'span'>

export function CardSpan(props: CardSpanProps) {
  return <span className="text-brandGreyBlue sm:block" {...props} />
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

type CardGridIconDivProps = ComponentProps<'div'>

export function CardGridIconDiv(props: CardGridIconDivProps) {
  return (
    <div
      className="h-10 w-10 text-brandGreyBlue group-hover:text-white"
      {...props}
    />
  )
}

type CardGridH1Props = ComponentProps<'h1'>

export function CardGridH1(props: CardGridH1Props) {
  return (
    <h1
      className="mt-4 text-xl font-black text-brandGreyBlue group-hover:text-white"
      {...props}
    />
  )
}

type CardGridParagraphProps = ComponentProps<'p'>

export function CardGridParagraph(props: CardGridParagraphProps) {
  return (
    <p
      className="mt-1 text-sm text-brandGreyBlue group-hover:text-white"
      {...props}
    />
  )
}

type CardGridBgProps = ComponentProps<'div'>

export function CardGridBg(props: CardGridBgProps) {
  return (
    <div
      className="group rounded-lg border-2 border-white/30 bg-white/20 p-8 shadow-sm shadow-black/30 backdrop-blur-lg hover:border-2 hover:border-white hover:bg-zinc-950/30"
      {...props}
    />
  )
}

type CardsSectionProps = ComponentProps<'section'>

export function CardsSection(props: CardsSectionProps) {
  return (
    <section
      className="mx-auto -mt-16 px-4 py-8 sm:max-w-xl sm:py-10 md:max-w-full md:px-24 lg:max-w-6xl lg:px-8 lg:py-14"
      {...props}
    />
  )
}

type CardPropertyProps = ComponentProps<'div'>

export function CardProperty(props: CardPropertyProps) {
  return <div className="mx-auto text-left" {...props} />
}

type CardButtonPropertyProps = ComponentProps<'div'>

export function CardButtonProperty(props: CardButtonPropertyProps) {
  return (
    <div
      className="mt-8 flex w-full justify-center sm:justify-start"
      {...props}
    />
  )
}

type CardButtonAnchorProps = ComponentProps<'a'>

export function CardButtonAnchor(props: CardButtonAnchorProps) {
  return (
    <a
      target="_blank"
      aria-label="Clique no botão"
      className="focus:shadow-outline inline-flex h-10 w-full items-center justify-center rounded-full bg-green-600 px-6 font-medium tracking-wide text-white shadow-md hover:bg-brandWts hover:transition-all focus:outline-none sm:h-10 md:w-auto"
      {...props}
    />
  )
}

type CardButtonFlexProps = ComponentProps<'div'>

export function CardButtonFlex(props: CardButtonFlexProps) {
  return <div className="flex items-center" {...props} />
}

type CardButtonTextProps = ComponentProps<'div'>

export function CardButtonText(props: CardButtonTextProps) {
  return <div className="mr-3 font-semibold text-white" {...props} />
}
