import { ElementType } from 'react'

export interface IconWtpProps {
  icon: ElementType
}

export function IconWtp({ icon: Icon }: IconWtpProps) {
  return <Icon className="h-8 w-8 sm:h-6 sm:w-6" weight="fill" />
}
