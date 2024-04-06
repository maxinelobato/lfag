import { ComponentProps } from 'react'

export interface FaqSectionsProps {
  className: string
}

type FaqSectionsRootProps = ComponentProps<'section'>

export function FaqSectionsRoot(props: FaqSectionsRootProps) {
  return (
    <section
      className="mx-auto px-4 py-8 sm:max-w-xl sm:py-10 md:max-w-full md:px-24 lg:max-w-6xl lg:px-8 lg:py-14"
      {...props}
    />
  )
}

type FaqH1Props = ComponentProps<'h1'>

export function FaqH1(props: FaqH1Props) {
  return (
    <h1
      style={{ textShadow: '0px 0px 2px #000000' }}
      className="mb-6 max-w-5xl pt-8 text-center font-sans text-4xl font-bold uppercase text-white sm:text-5xl md:mx-auto"
      {...props}
    />
  )
}

type FaqParagraphProps = ComponentProps<'p'>

export function FaqParagraph(props: FaqParagraphProps) {
  return (
    <p
      className="text-center text-sm font-medium text-brandGreyBlue/85 sm:text-lg md:mt-2 md:block"
      {...props}
    />
  )
}

type FaqSpanProps = ComponentProps<'span'>

export function FaqSpan(props: FaqSpanProps) {
  return <span className="text-brandGreyBlue" {...props} />
}

type FaqSpaceProps = ComponentProps<'div'>

export function FaqSpace(props: FaqSpaceProps) {
  return <div className="space-y-4" {...props} />
}

type FaqDetailsProps = ComponentProps<'details'>

export function FaqDetails(props: FaqDetailsProps) {
  return (
    <details
      className="group rounded-lg border-2 border-white/30 bg-white/20 p-4 shadow-sm backdrop-blur-lg [&_summary::-webkit-details-marker]:hidden"
      open={false}
      {...props}
    />
  )
}

type FaqSummaryProps = ComponentProps<'summary'>

export function FaqSummary(props: FaqSummaryProps) {
  return (
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5"
      {...props}
    />
  )
}

type FaqSummaryH1Props = ComponentProps<'h1'>

export function FaqSummaryH1(props: FaqSummaryH1Props) {
  return <h1 className="text-xl font-bold text-brandGreyBlue" {...props} />
}

type FaqSummarySpanIconProps = ComponentProps<'span'>

export function FaqSummarySpanIcon(props: FaqSummarySpanIconProps) {
  return (
    <span
      className="shrink-0 rounded-full border-2 border-brandGreyBlue/30 bg-white/80 p-1.5 text-brandGreyBlue shadow-2xl sm:p-3"
      {...props}
    />
  )
}

type FaqDetailsParagraphProps = ComponentProps<'p'>

export function FaqDetailsParagraph(props: FaqDetailsParagraphProps) {
  return (
    <p className="mt-4 text-sm leading-relaxed text-brandGreyBlue" {...props} />
  )
}
