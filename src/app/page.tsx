'use client'

import { PriceHighlight } from '@/components/price-highlight'
import { useTransaction } from '@/contexts/transactions-context'
import { format } from 'date-fns'
import Header from '@/components/header'
import SearchForm from '@/components/search-form'
import Summary from '@/components/summary'

export default function Home() {
  const { transactions } = useTransaction()

  return (
    <div>
      <Header />
      <Summary />

      <main className="mx-auto mt-16 w-full max-w-6xl space-y-6 px-6">
        <SearchForm />

        <table className="w-full border-collapse border-spacing-2">
          <tbody className="w-full space-y-2">
            {transactions.map((transaction) => {
              return (
                <tr
                  key={transaction.id}
                  className="flex w-full rounded-md bg-zinc-800 hover:bg-zinc-800/80"
                >
                  <td className="flex-1 px-8 py-5">
                    {transaction.description}
                  </td>
                  <td className="px-8 py-5 text-left">
                    <PriceHighlight variant={transaction.type}>
                      R$ {transaction.price}
                    </PriceHighlight>
                  </td>
                  <td className="px-8 py-5 text-left">
                    {transaction.category}
                  </td>
                  <td className="px-8 py-5 text-left">
                    {format(transaction.createdAt, 'dd/MM/yyyy')}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </main>
    </div>
  )
}
