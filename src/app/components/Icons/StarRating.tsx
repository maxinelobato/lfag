'use client'

import { Star } from '@phosphor-icons/react'

export function StarRating() {
  return (
    <>
      <div className="mx-2 flex flex-wrap items-center justify-center gap-1 text-xl font-semibold text-yellow-500 sm:justify-normal">
        <Star
          weight="fill"
          className="h-5 w-5"
          style={{
            filter: 'drop-shadow(1px 1px 1px #292929)',
          }}
        />
        <Star
          weight="fill"
          className="h-5 w-5"
          style={{
            filter: 'drop-shadow(1px 1px 1px #292929)',
          }}
        />
        <Star
          weight="fill"
          className="h-5 w-5"
          style={{
            filter: 'drop-shadow(1px 1px 1px #292929)',
          }}
        />
        <Star
          weight="fill"
          className="h-5 w-5"
          style={{
            filter: 'drop-shadow(1px 1px 1px #292929)',
          }}
        />
        <Star
          weight="fill"
          className="h-5 w-5"
          style={{
            filter: 'drop-shadow(1px 1px 1px #292929)',
          }}
        />
        <span className="mt-1 text-base font-medium text-white">
          Atendimento de Excelência
        </span>
      </div>
    </>
  )
}
