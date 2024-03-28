import { ElementType } from 'react'

export interface IconCardProps {
  icon: ElementType
}

export function IconCard({ icon: Icon }: IconCardProps) {
  return <Icon className="h-10 w-10 text-white" weight="fill" />
}
