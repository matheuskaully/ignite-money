'use client'

import { PriceHighlight } from '@/components/price-highlight'
import { useTransaction } from '@/contexts/transactions-context'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Header from '@/components/header'
import SearchForm from '@/components/search-form'
import Summary from '@/components/summary'
import { priceFormatter } from '@/utils/formatter'
import EditTransactionModal from '@/components/edit-transaction-modal'

export default function Home() {
  const { transactions } = useTransaction()

  function dateFormat(date: string) {
    const dateString = new Date(date)

    if (isNaN(dateString.getTime())) {
      return
    }

    const dateFormatted = format(new Date(date), "d 'de' MMMM 'de' yyyy", {
      locale: ptBR,
    })

    console.log(dateFormatted)

    return dateFormatted
  }

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
                  <td className="w-2/5 px-8 py-5">{transaction.description}</td>
                  <td className="px-8 py-5 text-left">
                    <PriceHighlight variant={transaction.type}>
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td className="px-8 py-5 text-left">
                    {transaction.category}
                  </td>
                  <td className="px-8 py-5 text-left">
                    {dateFormat(transaction.createdAt)}
                  </td>
                  <td className="items-center px-8 py-5 text-left">
                    <EditTransactionModal />
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
