import { ComponentProps } from 'react'

export interface BgGradientProps {
  className: string
}

type BgGradientColorProps = ComponentProps<'div'>

export function BgGradientColor(props: BgGradientColorProps) {
  return (
    <>
      <div
        className="min-h-full bg-gradient-to-br from-brandOrange to-white"
        {...props}
      />
    </>
  )
}
