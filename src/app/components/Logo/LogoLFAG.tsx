import Image from 'next/image'
import Logo from '../../../../public/img/lfag1.png'

export function LogoLFAG() {
  return (
    <>
      <div className="mx-auto max-w-5xl">
        <div className="flex justify-center sm:flex-none sm:justify-start">
          <div className="-mt-10 block pb-8">
            <Image
              width={100}
              height={100}
              loading="lazy"
              src={Logo}
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </>
  )
}
