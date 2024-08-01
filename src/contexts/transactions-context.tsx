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
}

const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
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
