import Image from 'next/image'
import Logo from '../../../../public/img/lfag1.png'

export function LogoLFagAzul() {
  return (
    <>
      <Image
        className="drop-shadow-md"
        width={80}
        height={80}
        loading="lazy"
        rel="preload"
        src={Logo}
        alt="Logo"
      />
    </>
  )
}
