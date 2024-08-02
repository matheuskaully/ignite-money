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
import { Trash2 } from 'lucide-react'
import { api } from '@/lib/api'
import { toast } from 'sonner'

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

    return dateFormatted
  }

  async function deleteTransaction(transactionId: number) {
    await api
      .delete(`/transactions/${transactionId}`)
      .then((response) => {
        console.log(response)
        toast.success(
          `Transação de ID: ${transactionId} foi excluída com sucesso!`,
        )
      })
      .catch((error) => {
        console.error(error)
        toast.error('Ops, algo deu errado ao tentar excluir...')
      })
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
                  <td className="px-2 py-5 text-left">
                    <PriceHighlight variant={transaction.type}>
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td className="px-2 py-5 text-left">
                    {transaction.category}
                  </td>
                  <td className="px-2 py-5 text-left">
                    {dateFormat(transaction.createdAt)}
                  </td>

                  <td className="flex items-center justify-end gap-2 px-8 py-5 text-left">
                    <button
                      onClick={() => deleteTransaction(transaction.id)}
                      className="px-2 py-2"
                    >
                      <Trash2 className="size-5" />
                    </button>

                    <EditTransactionModal
                      transaction={transaction}
                      idTransaction={String(transaction.id)}
                    />
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
