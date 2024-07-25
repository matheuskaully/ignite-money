import { useSummary } from '@/hooks/useSummary'
import { priceFormatter } from '@/utils/formatter'
import { ArrowDownCircle, ArrowUpCircle, DollarSign } from 'lucide-react'

export default function Summary() {
  const { income, outcome, total } = useSummary()

  return (
    <section className="mx-auto -mt-20 grid w-full max-w-6xl grid-cols-3 gap-2 px-6">
      <div className="rounded-md bg-zinc-800 p-8 shadow-shape">
        <header className="flex items-center justify-between text-zinc-300">
          <span>Entradas</span>
          <ArrowUpCircle className="size-8 text-emerald-500" />
        </header>

        <strong className="mt-4 block text-4xl">
          {priceFormatter.format(income)}
        </strong>
      </div>

      <div className="rounded-md bg-zinc-800 p-8 shadow-shape">
        <header className="flex items-center justify-between text-zinc-300">
          <span>Saídas</span>
          <ArrowDownCircle className="size-8 text-red-500" />
        </header>

        <strong className="mt-4 block text-4xl">
          {priceFormatter.format(outcome)}
        </strong>
      </div>

      <div className="rounded-md bg-emerald-600 p-8 shadow-shape">
        <header className="flex items-center justify-between text-zinc-300">
          <span>Total</span>
          <DollarSign className="size-8 text-white" />
        </header>

        <strong className="mt-4 block text-4xl">
          {priceFormatter.format(total)}
        </strong>
      </div>
    </section>
  )
}
