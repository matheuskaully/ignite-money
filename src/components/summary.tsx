import { ArrowDownCircle, ArrowUpCircle, DollarSign } from 'lucide-react'

export default function Summary() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 grid grid-cols-3 gap-2 -mt-20">
      <div className="bg-zinc-800 rounded-md p-8 shadow-shape">
        <header className="flex items-center justify-between text-zinc-300">
          <span>Entradas</span>
          <ArrowUpCircle className="size-8 text-emerald-500" />
        </header>

        <strong className="block mt-4 text-4xl">R$ 17.400,00</strong>
      </div>

      <div className="bg-zinc-800 rounded-md p-8 shadow-shape">
        <header className="flex items-center justify-between text-zinc-300">
          <span>Saídas</span>
          <ArrowDownCircle className="size-8 text-red-500" />
        </header>

        <strong className="block mt-4 text-4xl">R$ 5.120,80</strong>
      </div>

      <div className="bg-emerald-600 rounded-md p-8 shadow-shape">
        <header className="flex items-center justify-between text-zinc-300">
          <span>Total</span>
          <DollarSign className="size-8 text-white" />
        </header>

        <strong className="block mt-4 text-4xl">R$ 48.090,27</strong>
      </div>
    </section>
  )
}
