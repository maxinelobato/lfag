import { ComponentProps } from 'react'

export interface SocialCardProps {
  className: string
}

type SocialCardImgGoogleProps = ComponentProps<'div'>

export function SocialCardImgGoogle(props: SocialCardImgGoogleProps) {
  return (
    <>
      <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6">
        <div
          className="mt-2 flex flex-wrap items-center justify-center gap-4 xl:justify-center"
          {...props}
        />
      </div>
    </>
  )
}

type SocialCardImgClientProps = ComponentProps<'div'>

export function SocialCardImgClient(props: SocialCardImgClientProps) {
  return (
    <>
      <div className="mx-auto max-w-lg px-4 pt-8 sm:px-6">
        <div className="block overflow-hidden rounded-lg" {...props} />
      </div>
    </>
  )
}

type SocialCardPropertyProps = ComponentProps<'div'>

export function SocialCardProperty(props: SocialCardPropertyProps) {
  return (
    <>
      <div
        className="rounded-b-sm border-2 border-white/30 bg-white/20 p-4 shadow-sm shadow-black/30 backdrop-blur-lg"
        {...props}
      />
    </>
  )
}

type SocialCardParagraphTitleProps = ComponentProps<'p'>

export function SocialCardParagraphTitle(props: SocialCardParagraphTitleProps) {
  return (
    <>
      <p
        className="text-xs font-bold uppercase tracking-widest text-brandGreyBlue900/80"
        {...props}
      />
    </>
  )
}

type SocialCardParagraphSubtitleProps = ComponentProps<'p'>

export function SocialCardParagraphSubtitle(
  props: SocialCardParagraphSubtitleProps,
) {
  return (
    <>
      <p
        className="pt-2 text-xl font-bold text-brandGreyBlue sm:text-2xl"
        {...props}
      />
    </>
  )
}

type SocialCardParagraphContentProps = ComponentProps<'p'>

export function SocialCardParagraphContent(
  props: SocialCardParagraphContentProps,
) {
  return (
    <>
      <p className="pt-1 text-sm text-brandGreyBlue900" {...props} />
    </>
  )
}
