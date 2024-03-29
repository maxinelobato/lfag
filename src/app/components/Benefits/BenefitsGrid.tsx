import { ComponentProps } from 'react'

export interface BenefitsGridProps {
  className: string
}

type BenefitsGridRootProps = ComponentProps<'div'>

export function BenefitsGridRoot(props: BenefitsGridRootProps) {
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
        className="flex h-12 w-12 flex-none items-center justify-center rounded-lg border-2 border-white/30 bg-brandOrange shadow-lg shadow-white"
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
      <h1 className="mt-2 text-xl font-black text-white" {...props} />
    </>
  )
}

type BenefitsGridLiParagraphProps = ComponentProps<'p'>

export function BenefitsGridLiParagraph(props: BenefitsGridLiParagraphProps) {
  return (
    <>
      <p className="mt-3 text-sm text-white" {...props} />
    </>
  )
}
