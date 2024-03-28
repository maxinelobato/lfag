import { ComponentProps } from 'react'

export interface ButtonWtsFloat {
  className: string
}

type RootButtonWtsFloatProps = ComponentProps<'div'>

export function RootButtonWtsFloat(props: RootButtonWtsFloatProps) {
  return (
    <div
      className="group fixed bottom-4 right-4 z-[100] flex h-24 w-24 items-end justify-end p-2 hover:-translate-x-0 hover:scale-110 hover:transition-all hover:duration-300"
      {...props}
    />
  )
}

type ButtonWtsFloatAbsoluteProps = ComponentProps<'div'>

export function ButtonWtsFloatAbsolute(props: ButtonWtsFloatAbsoluteProps) {
  return (
    <div
      className="absolute z-50 flex items-center justify-center rounded-full bg-green-600 p-4 text-white shadow-xl hover:bg-brandWts hover:transition-all focus:outline-none group-hover:text-zinc-800"
      {...props}
    />
  )
}

type ButtonWtsFloatAnchorProps = ComponentProps<'a'>

export function ButtonWtsFloatAnchor(props: ButtonWtsFloatAnchorProps) {
  return (
    <a
      className="decoration-transparent group-hover:text-zinc-800"
      target="_blank"
      aria-label="Clique no botão"
      {...props}
    />
  )
}
