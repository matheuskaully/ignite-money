import { zodResolver } from '@hookform/resolvers/zod'
import { Search } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export default function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSubmitTransactions(data: SearchFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitTransactions)}
      className="mx-auto mt-16 flex max-w-6xl items-center gap-2"
    >
      <div className="flex flex-1 items-center gap-3 rounded-md bg-zinc-900 px-4 py-4">
        <Search className="size-5 text-emerald-500" />
        <input
          type="text"
          placeholder="Busque por transações..."
          className="flex-1 bg-transparent outline-none placeholder:text-zinc-500"
          {...register('query')}
        />
      </div>
      <button
        disabled={isSubmitting}
        type="submit"
        className="flex items-center gap-2 rounded-md border border-emerald-500 px-8 py-4 font-bold text-emerald-500 transition-all duration-200 hover:bg-emerald-500 hover:text-white disabled:cursor-not-allowed disabled:text-emerald-500 disabled:opacity-50 disabled:hover:bg-transparent"
      >
        <Search className="size-5" />
        Buscar
      </button>
    </form>
  )
}
