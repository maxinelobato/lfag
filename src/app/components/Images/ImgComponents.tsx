import Image, { ImageProps } from 'next/image'

export type ImgResponsiveProps = Omit<
  ImageProps,
  'src' | 'srcSet' | 'ref' | 'alt' | 'width' | 'height' | 'loading'
>

export function ImgProperty(props: ImgResponsiveProps) {
  return (
    <Image
      src={''}
      alt={''}
      className="h-fit w-full object-cover"
      sizes="(max-width: 768px) 100vw, 33vw"
      {...props}
    />
  )
}
