import Image from 'next/image'
import Logo from '../../../../public/img/lfag1.png'

export function LogoLFagAzul() {
  return (
    <>
      <Image
        className="drop-shadow-md"
        width={100}
        height={100}
        loading="lazy"
        src={Logo}
        alt="Logo"
      />
    </>
  )
}
