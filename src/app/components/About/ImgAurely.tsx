import Image from 'next/image'
import ImageAurely from '../../../../public/img/aurely-img.png'

export function ImgAurely() {
  return (
    <>
      <Image
        alt="Imagem"
        src={ImageAurely}
        loading="lazy"
        rel="preload"
        sizes='"(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"'
        className="object-auto h-auto w-full"
      />
    </>
  )
}
