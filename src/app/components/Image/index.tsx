import Image from 'next/image'
import LogoLfag from '../../../../public/img/lfag1.png'
import mrv from '../../../../public/img/mrn-logo.svg'
import anglo from '../../../../public/img/anglo-american-logo-white.svg'
import direcional from '../../../../public/img/direcional-logo.webp'
import elo from '../../../../public/img/grupoelo-logo.png'
import ImageGoogle from '../../../../public/img/google.png'
import ImgVforte from '../../../../public/img/client1.jpg'

export function LogoLfagHero() {
  return (
    <>
      <Image
        width={100}
        height={100}
        loading="lazy"
        rel="preload"
        src={LogoLfag}
        alt="Logo"
      />
    </>
  )
}

export function LogoLfagFooter() {
  return (
    <>
      <Image
        className="drop-shadow-md"
        width={80}
        height={80}
        loading="lazy"
        rel="preload"
        src={LogoLfag}
        alt="Logo"
      />
    </>
  )
}

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

export function ImgVForte() {
  return (
    <>
      <Image
        alt="Img"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={ImgVforte}
        loading="lazy"
        rel="preload"
        className="h-full w-full object-cover sm:h-80 lg:h-auto"
      />
    </>
  )
}

export function ImgAnglo() {
  return (
    <>
      <Image
        className="my-auto w-48"
        src={anglo}
        alt=""
        loading="lazy"
        rel="preload"
        sizes='"(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"'
      />
    </>
  )
}

export function ImgElo() {
  return (
    <>
      <Image
        className="my-auto w-48"
        src={elo}
        alt=""
        loading="lazy"
        rel="preload"
        sizes='"(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"'
      />
    </>
  )
}

export function ImgDirecional() {
  return (
    <>
      <Image
        className="my-auto w-48"
        src={direcional}
        alt=""
        loading="lazy"
        rel="preload"
        sizes='"(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"'
      />
    </>
  )
}

export function ImgMrv() {
  return (
    <>
      <Image
        className="my-auto w-48"
        src={mrv}
        alt=""
        loading="lazy"
        rel="preload"
        sizes='"(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"'
      />
    </>
  )
}
