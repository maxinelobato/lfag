import { ComponentProps } from 'react'

export interface FooterProps {
  className: string
}

type FooterPropertyProps = ComponentProps<'div'>

export function FooterProperty(props: FooterPropertyProps) {
  return (
    <>
      <footer className="bg-brandGreyBlue900">
        <div
          className="mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8"
          {...props}
        />
      </footer>
    </>
  )
}

type FooterRowsProps = ComponentProps<'div'>

export function FooterRows(props: FooterRowsProps) {
  return (
    <>
      <div
        className="row-gap-6 mb-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        {...props}
      />
    </>
  )
}

type FooterColsProps = ComponentProps<'div'>

export function FooterCols(props: FooterColsProps) {
  return (
    <>
      <div className="sm:col-span-2">
        <div
          className="inline-flex items-center justify-center sm:justify-start"
          {...props}
        />
      </div>
    </>
  )
}

type FooterSpanLogoProps = ComponentProps<'span'>

export function FooterSpanLogo(props: FooterSpanLogoProps) {
  return (
    <>
      <span
        className="ml-2 text-lg font-bold tracking-wide text-white"
        {...props}
      />
    </>
  )
}

type FooterSpaceProps = ComponentProps<'div'>

export function FooterSpace(props: FooterSpaceProps) {
  return (
    <>
      <div className="space-y-2 text-sm" {...props} />
    </>
  )
}

type FooterParagraphContactProps = ComponentProps<'p'>

export function FooterParagraphContact(props: FooterParagraphContactProps) {
  return (
    <>
      <p
        className="text-center text-base font-bold tracking-wide text-white sm:text-left"
        {...props}
      />
    </>
  )
}

type FooterFlexProps = ComponentProps<'div'>

export function FooterFlex(props: FooterFlexProps) {
  return (
    <>
      <div className="flex justify-center sm:justify-start" {...props} />
    </>
  )
}

type FooterLabelContactProps = ComponentProps<'p'>

export function FooterLabelContact(props: FooterLabelContactProps) {
  return (
    <>
      <p className="mr-1 text-brandOrange" {...props} />
    </>
  )
}

type FooterDivProps = ComponentProps<'div'>

export function FooterDiv(props: FooterDivProps) {
  return (
    <>
      <div className="text-center sm:text-left" {...props} />
    </>
  )
}

type FooterSpanSocialMidiaProps = ComponentProps<'span'>

export function FooterSpanSocialMidia(props: FooterSpanSocialMidiaProps) {
  return (
    <>
      <span
        className="text-base font-bold tracking-wide text-white"
        {...props}
      />
    </>
  )
}

type FooterFlexItensCenterProps = ComponentProps<'div'>

export function FooterFlexItensCenter(props: FooterFlexItensCenterProps) {
  return (
    <>
      <div
        className="mt-1 flex items-center justify-center space-x-3 sm:justify-start"
        {...props}
      />
    </>
  )
}

type FooterAnchorSocialMidiaProps = ComponentProps<'a'>

export function FooterAnchorSocialMidia(props: FooterAnchorSocialMidiaProps) {
  return (
    <>
      <a
        target="_blank"
        className="text-brandOrange transition-colors duration-300 hover:text-brandOrange200"
        {...props}
      />
    </>
  )
}

type FooterAllRightsProps = ComponentProps<'p'>

export function FooterAllRights(props: FooterAllRightsProps) {
  return (
    <>
      <div className="flex flex-col-reverse justify-between border-t border-brandOrange200 pb-10 pt-5 lg:flex-row">
        <p
          className="text-center text-sm text-white/80 sm:text-left"
          {...props}
        />
      </div>
    </>
  )
}

type FooterPoliticsPropertyProps = ComponentProps<'div'>

export function FooterPoliticsProperty(props: FooterPoliticsPropertyProps) {
  return (
    <>
      <footer className="bg-brandGreyBlue900/90">
        <div className="mx-auto max-w-5xl p-4 py-10" {...props} />
      </footer>
    </>
  )
}

type FooterPoliticsPropertyParagraphProps = ComponentProps<'p'>

export function FooterPoliticsPropertyParagraph(
  props: FooterPoliticsPropertyParagraphProps,
) {
  return (
    <>
      <p className="text-center text-sm text-white" {...props} />
    </>
  )
}

type FooterButtonPropertyProps = ComponentProps<'div'>

export function FooterButtonProperty(props: FooterButtonPropertyProps) {
  return (
    <div className="flex w-auto justify-center sm:justify-start" {...props} />
  )
}

type FooterButtonAnchorProps = ComponentProps<'a'>

export function FooterButtonAnchor(props: FooterButtonAnchorProps) {
  return (
    <a
      target="_blank"
      aria-label="Clique no botão"
      className="focus:shadow-outline inline-flex h-10 w-full items-center justify-center rounded-md bg-transparent px-4 py-6 font-medium tracking-wide text-white shadow-lg hover:bg-brandOrange/10 hover:transition-colors focus:outline-none sm:h-10 md:w-auto"
      {...props}
    />
  )
}

type FooterButtonFlexProps = ComponentProps<'div'>

export function FooterButtonFlex(props: FooterButtonFlexProps) {
  return <div className="flex items-center" {...props} />
}

type FooterButtonTextProps = ComponentProps<'div'>

export function FooterButtonText(props: FooterButtonTextProps) {
  return (
    <div
      className="mr-3 font-semibold text-white sm:text-wrap sm:text-xs"
      {...props}
    />
  )
}
