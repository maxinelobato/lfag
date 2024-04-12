import { ComponentProps } from 'react'

export interface ButtonCta {
  className: string
}

type ButtonHomeProps = ComponentProps<'a'>

export function ButtonHome(props: ButtonHomeProps) {
  return (
    <div className="my-8 flex w-full justify-center sm:justify-start">
      <a
        target="_blank"
        aria-label="Clique no botão"
        className="focus:shadow-outline group z-40 inline-flex h-16 w-full items-center justify-center rounded-full bg-green-600 px-6 font-medium tracking-wide text-white shadow-sm shadow-black/30 delay-0 duration-150 ease-in-out hover:scale-105 hover:bg-brandWts hover:transition-all focus:outline-none sm:h-14 md:w-auto"
        {...props}
      />
    </div>
  )
}

type ButtonHomeFlexProps = ComponentProps<'div'>

export function ButtonHomeFlex(props: ButtonHomeFlexProps) {
  return (
    <div className="flex items-center group-hover:text-zinc-800" {...props} />
  )
}

type ButtonHomeTextProps = ComponentProps<'div'>

export function ButtonHomeText(props: ButtonHomeTextProps) {
  return (
    <div
      className="mr-3 text-center text-sm font-semibold uppercase text-white group-hover:text-zinc-800 sm:text-left sm:text-lg"
      {...props}
    />
  )
}

type ButtonFloatProps = ComponentProps<'a'>

export function ButtonFloat(props: ButtonFloatProps) {
  return (
    <div className="group fixed bottom-4 right-4 z-[100] flex h-24 w-24 items-end justify-end p-2 hover:-translate-x-0 hover:scale-110 hover:transition-all hover:duration-300">
      <div className="absolute z-50 flex items-center justify-center rounded-full bg-green-600 p-4 text-white shadow-sm shadow-black/30 hover:bg-brandWts hover:transition-all focus:outline-none group-hover:text-zinc-800">
        <a
          className="decoration-transparent group-hover:text-zinc-800"
          target="_blank"
          aria-label="Clique no botão"
          {...props}
        />
      </div>
    </div>
  )
}
