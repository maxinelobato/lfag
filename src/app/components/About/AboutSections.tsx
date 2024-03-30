import { ComponentProps } from 'react'

export interface AboutProps {
  className: string
}

type AboutRootProps = ComponentProps<'section'>

export function AboutRoot(props: AboutRootProps) {
  return (
    <>
      <section
        className="mx-auto max-w-screen-xl overflow-hidden bg-scroll sm:grid sm:max-w-6xl sm:grid-cols-2 sm:items-center"
        {...props}
      />
    </>
  )
}

type AboutPropertyProps = ComponentProps<'div'>

export function AboutProperty(props: AboutPropertyProps) {
  return (
    <>
      <div className="p-8 md:p-12 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-left" {...props} />
      </div>
    </>
  )
}

type AboutH1Props = ComponentProps<'h1'>

export function AboutH1(props: AboutH1Props) {
  return (
    <>
      <h1
        className="font-sans text-2xl font-extrabold uppercase text-white md:text-3xl"
        {...props}
      />
    </>
  )
}

type AboutSpanProps = ComponentProps<'span'>

export function AboutSpan(props: AboutSpanProps) {
  return (
    <>
      <span className="flex items-center">
        <span className="h-px flex-1 bg-brandOrange"></span>
        <span className="pl-4 font-bold text-brandOrange" {...props} />
      </span>
    </>
  )
}

type AboutParagraphProps = ComponentProps<'p'>

export function AboutParagraph(props: AboutParagraphProps) {
  return (
    <>
      <p className="font-semibold text-white md:mt-4 md:block" {...props} />
    </>
  )
}

type AboutDivButtonProps = ComponentProps<'div'>

export function AboutDivButton(props: AboutDivButtonProps) {
  return (
    <>
      <div className="mt-4 md:mt-8" {...props} />
    </>
  )
}
