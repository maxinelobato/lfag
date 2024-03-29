import { Star } from '@phosphor-icons/react'

export function StarRating() {
  return (
    <div className="mx-2 flex items-center gap-1 text-xl font-semibold text-yellow-500 drop-shadow-md">
      <Star size={32} weight="fill" className="h-5 w-5" />
      <Star size={32} weight="fill" className="h-5 w-5" />
      <Star size={32} weight="fill" className="h-5 w-5" />
      <Star size={32} weight="fill" className="h-5 w-5" />
      <Star size={32} weight="fill" className="h-5 w-5" />
      <span className="text-base font-medium text-white">
        Atendimento de Excelência
      </span>
    </div>
  )
}
