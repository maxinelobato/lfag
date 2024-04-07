'use client'

import { WhatsappLogo } from '@phosphor-icons/react'
import { IconWtpFloat } from '../Icons/IconWtpFloat'
import {
  ButtonFloatAbsolute,
  ButtonFloatAnchor,
  ButtonFloatProperty,
} from './ButtonWtsFloat'

export function ButtonFloatWttp() {
  return (
    <>
      {/* Button Flutuante Whatsapp */}
      <ButtonFloatProperty>
        <ButtonFloatAbsolute>
          <ButtonFloatAnchor href="https://api.whatsapp.com/send?phone=94992659199&text=Ol%C3%A1%2C%20Aurely!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda%20na%20minha%20Empresa.%20Podemos%20conversar%3F%20">
            <IconWtpFloat icon={WhatsappLogo} />
          </ButtonFloatAnchor>
        </ButtonFloatAbsolute>
      </ButtonFloatProperty>
    </>
  )
}
