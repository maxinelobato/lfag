import Image from 'next/image'
import Logo from '../../../../public/img/lfagazul.png'

export function LogoLFagAzul() {
  return (
    <>
      <a className="-mt-14 block pb-8 text-teal-600" href="/">
        <Image width={100} height={100} loading="lazy" src={Logo} alt="Logo" />
      </a>
    </>
  )
}
