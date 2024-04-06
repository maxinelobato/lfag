'use client'

import { InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
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
                  href="tel:+5594992659199"
                  aria-label="Whatsapp"
                  title="Whatsapp"
                  className="text-white transition-colors duration-300 hover:text-brandOrange200"
                >
                  +55 94 99265-9199
                </a>
              </div>
              <div className="flex">
                <p className="mr-1 text-brandOrange">Email:</p>
                <a
                  href="mailto:lfagsst@gmail.com"
                  aria-label="Email"
                  title="Email"
                  className="text-white transition-colors duration-300 hover:text-brandOrange200"
                >
                  lfagsst@gmail.com
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
                  href="https://www.linkedin.com/in/aurely-feitoza-a4815525/"
                  target="_blank"
                  className="text-brandOrange transition-colors duration-300 hover:text-brandOrange200"
                >
                  <LinkedinLogo weight="fill" size={32} />
                </a>
                <a
                  href="https://www.instagram.com/aurely_gloria/"
                  target="_blank"
                  className="text-brandOrange transition-colors duration-300 hover:text-brandOrange200"
                >
                  <InstagramLogo weight="fill" size={32} />
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