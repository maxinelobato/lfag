import { ComponentProps } from 'react'

export interface CardsSectionsProps {
  className: string
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
      className="mx-auto -mt-16 px-4 py-8  sm:max-w-xl sm:py-10 md:max-w-full md:px-24  lg:max-w-6xl lg:px-8 lg:py-14"
      {...props}
    />
  )
}

type CardsSectionsContentProps = ComponentProps<'div'>

export function CardsSectionsContent(props: CardsSectionsContentProps) {
  return <div className="mx-auto text-left" {...props} />
}
