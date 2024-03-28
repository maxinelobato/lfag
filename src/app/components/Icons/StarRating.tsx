import { Star } from '@phosphor-icons/react'

export function StarRating() {
  return (
    <div className="mx-2 flex items-center gap-2 text-xl font-semibold text-zinc-800 drop-shadow-sm">
      <Star size={32} weight="fill" className="h-5 w-5" />
      <Star size={32} weight="fill" className="h-5 w-5" />
      <Star size={32} weight="fill" className="h-5 w-5" />
      <Star size={32} weight="fill" className="h-5 w-5" />
      <Star size={32} weight="fill" className="h-5 w-5" />
      <span className="text-sm font-medium text-zinc-800">
        Atendimento de Excelência
      </span>
    </div>
  )
}
