import { ElementType } from 'react'

export interface IconCardProps {
  icon: ElementType
}

export function IconCard({ icon: Icon }: IconCardProps) {
  return (
    <Icon
      className="h-10 w-10 text-brandGreyBlue group-hover:text-white"
      weight="fill"
    />
  )
}
