import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LFAG - Consultoria em Segurança do Trabalho',
  description:
    'Envio dos Eventos de SST para o E-Social, Laudos Técnicos de Condições Ambientais - LTCAT, Programa de Gerenciamento de Riscos - PGR, Declaração de Inexistência de Riscos - DIR e Programa de Controle Médico de Saúde Ocupacional - PCMSO',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
