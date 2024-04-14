import Image from 'next/image'
import Client1 from '../../../../public/img/client1.jpg'

export function ImgClient() {
  return (
    <>
      <Image
        alt="Img"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={Client1}
        loading="lazy"
        rel="preload"
        className="h-full w-full object-cover sm:h-80 lg:h-auto"
      />
    </>
  )
}
