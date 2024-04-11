import Image from 'next/image'

export function HeroSectionBgImg() {
  return (
    <>
      <Image
        src="https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="bg image"
        loading="lazy"
        fill
        className="h-full w-full bg-cover bg-fixed bg-center bg-no-repeat object-cover"
      />
      <div className="absolute h-full w-full bg-gradient-to-r from-brandOrange/90 from-40% to-brandOrange200/45 to-90% p-6 md:p-12 lg:px-16 lg:py-12"></div>
    </>
  )
}
