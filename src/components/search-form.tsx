import { Search } from 'lucide-react'

export default function SearchForm() {
  return (
    <form className="flex gap-2 items-center max-w-6xl mx-auto mt-16">
      <div className="flex gap-3 items-center flex-1 bg-zinc-900 py-4 px-4 rounded-md">
        <Search className="text-emerald-500 size-5" />
        <input
          type="text"
          placeholder="Busque por transações..."
          className="bg-transparent outline-none flex-1 placeholder:text-zinc-500"
        />
      </div>
      <button
        type="submit"
        className="flex font-bold items-center px-8 py-4 gap-2 rounded-md border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all duration-200"
      >
        <Search className="size-5" />
        Buscar
      </button>
    </form>
  )
}
