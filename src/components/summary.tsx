import { ArrowDownCircle, ArrowUpCircle, DollarSign } from 'lucide-react'

export default function Summary() {
  return (
    <section className="mx-auto -mt-20 grid w-full max-w-6xl grid-cols-3 gap-2 px-6">
      <div className="rounded-md bg-zinc-800 p-8 shadow-shape">
        <header className="flex items-center justify-between text-zinc-300">
          <span>Entradas</span>
          <ArrowUpCircle className="size-8 text-emerald-500" />
        </header>

        <strong className="mt-4 block text-4xl">R$ 17.400,00</strong>
      </div>

      <div className="rounded-md bg-zinc-800 p-8 shadow-shape">
        <header className="flex items-center justify-between text-zinc-300">
          <span>Saídas</span>
          <ArrowDownCircle className="size-8 text-red-500" />
        </header>

        <strong className="mt-4 block text-4xl">R$ 5.120,80</strong>
      </div>

      <div className="rounded-md bg-emerald-600 p-8 shadow-shape">
        <header className="flex items-center justify-between text-zinc-300">
          <span>Total</span>
          <DollarSign className="size-8 text-white" />
        </header>

        <strong className="mt-4 block text-4xl">R$ 48.090,27</strong>
      </div>
    </section>
  )
}
