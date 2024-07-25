import { useTransaction } from '@/contexts/transactions-context'

export function useSummary() {
  const { transactions } = useTransaction()
  const { income, outcome, total } = transactions.reduce(
    (accumulatorSummary, transaction) => {
      if (transaction.type === 'income') {
        accumulatorSummary.income += transaction.price
        accumulatorSummary.total += transaction.price
      } else {
        accumulatorSummary.outcome += transaction.price
        accumulatorSummary.total -= transaction.price
      }

      return accumulatorSummary
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return {
    income,
    outcome,
    total,
  }
}
