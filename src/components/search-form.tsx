import { Search } from 'lucide-react'

export default function SearchForm() {
  return (
    <form className="mx-auto mt-16 flex max-w-6xl items-center gap-2">
      <div className="flex flex-1 items-center gap-3 rounded-md bg-zinc-900 px-4 py-4">
        <Search className="size-5 text-emerald-500" />
        <input
          type="text"
          placeholder="Busque por transações..."
          className="flex-1 bg-transparent outline-none placeholder:text-zinc-500"
        />
      </div>
      <button
        type="submit"
        className="flex items-center gap-2 rounded-md border border-emerald-500 px-8 py-4 font-bold text-emerald-500 transition-all duration-200 hover:bg-emerald-500 hover:text-white"
      >
        <Search className="size-5" />
        Buscar
      </button>
    </form>
  )
}
