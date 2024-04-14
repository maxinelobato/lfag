import Image from 'next/image'
import ImageGoogle from '../../../../public/img/google.png'

export function ImgGoogle() {
  return (
    <>
      <Image
        src={ImageGoogle}
        alt="Imagem"
        width={300}
        height={300}
        rel="preload"
        loading="lazy"
        className="h-28 w-28 drop-shadow-lg"
      />
    </>
  )
}
