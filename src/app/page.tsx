'use client'

import { PriceHighlight } from '@/components/price-highlight'
import { useTransaction } from '@/contexts/transactions-context'
import { format } from 'date-fns'
import Header from '@/components/header'
import SearchForm from '@/components/search-form'
import Summary from '@/components/summary'
import { priceFormatter } from '@/utils/formatter'

export default function Home() {
  const { transactions } = useTransaction()
  const currentDate = new Date()
  console.log(currentDate)

  return (
    <div>
      <Header />
      <Summary />

      <main className="mx-auto mt-16 max-w-6xl space-y-6 px-6">
        <SearchForm />

        <table className="w-full flex-1 border-collapse border-spacing-2">
          <tbody className="w-full space-y-2">
            {transactions.map((transaction) => {
              return (
                <tr
                  key={transaction.id}
                  className="w-full max-w-full rounded-md bg-zinc-900 hover:bg-zinc-800/80"
                >
                  <td>{format(transaction.createdAt, 'MM/dd/yyyy')}</td>
                  <td className="w-1/2 px-8 py-5">{transaction.description}</td>
                  <td className="px-8 py-5 text-left">
                    <PriceHighlight variant={transaction.type}>
                      {priceFormatter.format(transaction.price)}
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
