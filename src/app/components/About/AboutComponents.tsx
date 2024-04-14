import { ComponentProps } from 'react'

export interface AboutProps {
  className: string
}

type AboutSectionProps = ComponentProps<'section'>

export function AboutSection(props: AboutSectionProps) {
  return (
    <>
      <section
        className="mx-auto max-w-screen-xl overflow-hidden sm:grid sm:max-w-6xl sm:grid-cols-2 sm:items-center"
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
        style={{ textShadow: '0px 0px 2px #000000' }}
        className="font-sans text-2xl font-extrabold uppercase text-white md:text-3xl"
        {...props}
      />
    </>
  )
}

type AboutSpanH1Props = ComponentProps<'span'>

export function AboutSpanH1(props: AboutSpanH1Props) {
  return <span className="text-brandGreyBlue sm:block" {...props} />
}

type AboutSpanProps = ComponentProps<'span'>

export function AboutSpan(props: AboutSpanProps) {
  return (
    <>
      <span className="flex items-center">
        <span className="h-px flex-1 bg-brandGreyBlue"></span>
        <span className="pl-4 font-bold text-brandGreyBlue" {...props} />
      </span>
    </>
  )
}

type AboutParagraphProps = ComponentProps<'p'>

export function AboutParagraph(props: AboutParagraphProps) {
  return (
    <>
      <p
        className="mt-6 font-semibold text-brandGreyBlue sm:mt-4 md:block"
        {...props}
      />
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
