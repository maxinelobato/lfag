'use client'

import { InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { IconWtp } from '../Icons/IconWtp'
import { LogoLFagAzul } from '../Logo/LogoLFagAzul'

export function Footer() {
  return (
    <>
      <footer className="bg-brandGreyBlue900">
        <div className="mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div className="row-gap-6 mb-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <div className="inline-flex items-center">
                <LogoLFagAzul />
                <span className="ml-2 text-sm font-bold tracking-wide text-white">
                  Segurança do Trabalho e Ergonomia
                </span>
              </div>
              {/* <div className="mt-6 lg:max-w-sm">
                <p className="text-sm text-white">Lorem</p>
                <p className="mt-4 text-sm text-white">Lorem</p>
              </div> */}
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-base font-bold tracking-wide text-white">
                Entre em Contato
              </p>
              <div className="flex">
                <p className="mr-1 text-brandOrange">Whastsapp:</p>
                <a
                  href="tel:+559898909-6968"
                  aria-label="Whatsapp"
                  title="Whatsapp"
                  className="text-white transition-colors duration-300 hover:text-brandOrange200"
                >
                  +55 98 98909-6968
                </a>
              </div>
              <div className="flex">
                <p className="mr-1 text-brandOrange">Email:</p>
                <a
                  href="mailto:lfag@lfag.com.br"
                  aria-label="Email"
                  title="Email"
                  className="text-white transition-colors duration-300 hover:text-brandOrange200"
                >
                  lfag@lfag.com.br
                </a>
              </div>
              <div className="flex">
                <p className="mr-1 text-brandOrange">Endereço:</p>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Endereço"
                  title="Endereço"
                  className="text-white transition-colors duration-300 hover:text-brandOrange200"
                >
                  Parauapebas/PA
                </a>
              </div>
            </div>
            <div>
              <span className="text-base font-bold tracking-wide text-white">
                Siga Nossas Redes Sociais
              </span>
              <div className="mt-1 flex items-center space-x-3">
                <a
                  href="/"
                  className="text-brandOrange transition-colors duration-300 hover:text-brandOrange200"
                >
                  <IconWtp icon={LinkedinLogo} />
                </a>
                <a
                  href="/"
                  className="text-brandOrange transition-colors duration-300 hover:text-brandOrange200"
                >
                  <IconWtp icon={InstagramLogo} />
                </a>
              </div>
              {/* <p className="mt-4 text-sm text-white">Lorem</p> */}
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between border-t border-brandOrange200 pb-10 pt-5 lg:flex-row">
            <p className="text-center text-sm text-white/80 sm:text-left">
              © Todos os Direitos Reservados 2024 - LFAG - Segurança do
              Trabalho e Engonomia.
            </p>
            {/* <ul className="mb-3 flex flex-col space-y-2 sm:flex-row sm:space-x-5 sm:space-y-0 lg:mb-0">
              <li>
                <a
                  href="/"
                  className="hover:text-deep-purple-accent-400 text-sm text-gray-600 transition-colors duration-300"
                >
                  F.A.Q
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-deep-purple-accent-400 text-sm text-gray-600 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-deep-purple-accent-400 text-sm text-gray-600 transition-colors duration-300"
                >
                  Terms &amp; Conditions
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </footer>
    </>
  )
}
