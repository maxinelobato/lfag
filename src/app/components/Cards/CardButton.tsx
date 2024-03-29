import { ComponentProps } from 'react'

export interface CardButton {
  className: string
}

type CardButtonRootProps = ComponentProps<'div'>

export function CardButtonRoot(props: CardButtonRootProps) {
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
