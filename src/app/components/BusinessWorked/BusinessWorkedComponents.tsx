import { ComponentProps } from 'react'

export interface BusinessWorkedComponentsProps {
  className: string
}

type BusinessWorkedSectionProps = ComponentProps<'div'>

export function BusinessWorkedSection(props: BusinessWorkedSectionProps) {
  return (
    <>
      <section className="bg-gradient-to-r from-transparent to-brandGreyBlue900 py-14 shadow-2xl">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8" {...props} />
      </section>
    </>
  )
}

type BusinessWorkedPropertyProps = ComponentProps<'div'>

export function BusinessWorkedProperty(props: BusinessWorkedPropertyProps) {
  return (
    <>
      <div className="mx-auto max-w-4xl text-center" {...props} />
    </>
  )
}

type BusinessWorkedH1Props = ComponentProps<'h1'>

export function BusinessWorkedH1(props: BusinessWorkedH1Props) {
  return (
    <>
      <h1
        style={{ textShadow: '0px 0px 2px #000000' }}
        className="mb-6 max-w-5xl p-2 pt-8 text-center font-sans text-4xl font-bold uppercase text-white sm:text-5xl md:mx-auto"
        {...props}
      />
    </>
  )
}

type BusinessWorkedParagraphProps = ComponentProps<'p'>

export function BusinessWorkedParagraph(props: BusinessWorkedParagraphProps) {
  return (
    <>
      <p
        className="text-center text-sm font-medium text-white sm:text-lg md:mt-2 md:block"
        {...props}
      />
    </>
  )
}

type BusinessWorkedFlexJusitfyCenterProps = ComponentProps<'div'>

export function BusinessWorkedFlexJusitfyCenter(
  props: BusinessWorkedFlexJusitfyCenterProps,
) {
  return (
    <>
      <div className="mt-12 flex justify-center" {...props} />
    </>
  )
}

type BusinessWorkedUlProps = ComponentProps<'ul'>

export function BusinessWorkedUl(props: BusinessWorkedUlProps) {
  return (
    <>
      <ul
        className="inline-grid grid-cols-2 items-center gap-x-10 gap-y-6 md:grid-cols-3 md:gap-x-16 lg:grid-cols-4"
        {...props}
      />
    </>
  )
}

type BusinessWorkedLiProps = ComponentProps<'li'>

export function BusinessWorkedLi(props: BusinessWorkedLiProps) {
  return (
    <>
      <li {...props} />
    </>
  )
}
