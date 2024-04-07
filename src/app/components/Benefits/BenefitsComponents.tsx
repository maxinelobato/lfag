import { ComponentProps } from 'react'

export interface BenefitsComponentsProps {
  className: string
}

type BenefitsBgProps = ComponentProps<'div'>

export function BenefitsBg(props: BenefitsBgProps) {
  return (
    <>
      <div className="bg-brandGreyBlue bg-scroll" {...props} />
    </>
  )
}

type BenefitsSectionProps = ComponentProps<'section'>

export function BenefitsSection(props: BenefitsSectionProps) {
  return (
    <section
      className="mx-auto -mt-16 px-4 py-8 sm:max-w-xl sm:py-10 md:max-w-full md:px-24 lg:max-w-6xl lg:px-8 lg:py-14"
      {...props}
    />
  )
}

type BenefitsH1Props = ComponentProps<'h1'>

export function BenefitsH1(props: BenefitsH1Props) {
  return (
    <h1
      style={{ textShadow: '0px 0px 2px #000000' }}
      className="mb-6 max-w-5xl pt-8 text-center font-sans text-4xl font-bold uppercase text-white sm:text-5xl md:mx-auto"
      {...props}
    />
  )
}

type BenefitsParagraphProps = ComponentProps<'p'>

export function BenefitsParagraph(props: BenefitsParagraphProps) {
  return (
    <p
      className="text-center text-sm font-medium text-brandGreyBlue/85 sm:text-lg md:mt-2 md:block"
      {...props}
    />
  )
}

// type BenefitsSpanH1Props = ComponentProps<'span'>

// export function BenefitsSpanH1(props: BenefitsSpanH1Props) {
//   return (
//     <>
//       <span className="flex items-center">
//         <span className="h-px flex-1 bg-brandGreyBlue"></span>
//         <span className="pl-4 font-bold text-brandGreyBlue" {...props} />
//       </span>
//     </>
//   )
// }

type BenefitsSpanProps = ComponentProps<'span'>

export function BenefitsSpan(props: BenefitsSpanProps) {
  return <span className="text-brandGreyBlue sm:block" {...props} />
}

type BenefitsGridSectionProps = ComponentProps<'div'>

export function BenefitsGridSection(props: BenefitsGridSectionProps) {
  return (
    <>
      <section className="py-14">
        <div className="mt-12 lg:mt-0" {...props} />
      </section>
    </>
  )
}

type BenefitsGridUlProps = ComponentProps<'ul'>

export function BenefitsGridUl(props: BenefitsGridUlProps) {
  return (
    <>
      <ul className="grid gap-8 sm:grid-cols-3" {...props} />
    </>
  )
}

type BenefitsGridLiProps = ComponentProps<'li'>

export function BenefitsGridLi(props: BenefitsGridLiProps) {
  return (
    <>
      <li className="flex gap-x-4" {...props} />
    </>
  )
}

type BenefitsGridLiIconProps = ComponentProps<'div'>

export function BenefitsGridLiIcon(props: BenefitsGridLiIconProps) {
  return (
    <>
      <div
        className="flex h-12 w-12 flex-none items-center justify-center rounded-lg border-2 border-white/30 bg-white/20 shadow-sm shadow-black/30"
        {...props}
      />
    </>
  )
}

type BenefitsGridLiDivProps = ComponentProps<'div'>

export function BenefitsGridLiDiv(props: BenefitsGridLiDivProps) {
  return (
    <>
      <div {...props} />
    </>
  )
}

type BenefitsGridLiH1Props = ComponentProps<'h1'>

export function BenefitsGridLiH1(props: BenefitsGridLiH1Props) {
  return (
    <>
      <h1 className="mt-2 text-xl font-black text-brandGreyBlue" {...props} />
    </>
  )
}

type BenefitsGridLiParagraphProps = ComponentProps<'p'>

export function BenefitsGridLiParagraph(props: BenefitsGridLiParagraphProps) {
  return (
    <>
      <p className="mt-3 text-sm text-brandGreyBlue" {...props} />
    </>
  )
}
