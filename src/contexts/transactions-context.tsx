'use client'

import { api } from '@/lib/api'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface TransactionsProps {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface TransactionContextType {
  transactions: TransactionsProps[]
  fetchTransactions: (query?: string) => Promise<void>
  refreshTransactions: () => void
}

const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])
  const [refresh, setRefresh] = useState<boolean>(false)

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        q: query,
      },
    })
    const sortedTransactions = response.data.sort(
      (a: TransactionsProps, b: TransactionsProps) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )

    console.log(response.data)

    setTransactions(sortedTransactions)
  }

  useEffect(() => {
    fetchTransactions()
  }, [refresh])

  const refreshTransactions = () => {
    setRefresh(!refresh)
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, refreshTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransaction(): TransactionContextType {
  const context = useContext(TransactionsContext)

  if (!context) {
    throw new Error('error')
  }
  return context
}
