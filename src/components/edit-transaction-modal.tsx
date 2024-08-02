'use client'

import { useTransaction } from '@/contexts/transactions-context'
import { api } from '@/lib/api'
import * as Dialog from '@radix-ui/react-dialog'
import { MoreVertical, X } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface EditTransactionModalProps {
  idTransaction: string
  transaction: Transaction
}

export default function EditTransactionModal({
  idTransaction,
  transaction,
}: EditTransactionModalProps) {
  const [description, setDescription] = useState<string>(
    transaction.description,
  )
  const [price, setPrice] = useState<number>(transaction.price)
  const [category, setCategory] = useState<string>(transaction.category)
  const [transactionType, setTransactionType] = useState<'income' | 'outcome'>(
    transaction.type,
  )
  const { refreshTransactions } = useTransaction()

  async function submitChanges() {
    const updatedFields: Partial<Transaction> = {}

    if (description !== transaction.description) {
      updatedFields.description = description
    }

    if (price !== transaction.price) {
      updatedFields.price = price
    }

    if (category !== transaction.category) {
      updatedFields.category = category
    }

    if (transactionType !== transaction.type) {
      updatedFields.type = transactionType
    }

    if (Object.keys(updatedFields).length === 0) {
      toast.info('Nenhuma informação foi alterada!')
      return
    }

    try {
      await api.patch(`/transactions/${idTransaction}`, updatedFields)
      toast.success('Informações atualizadas com sucesso!')
      refreshTransactions()
    } catch (error) {
      toast.error('Erro ao atualizar informações')
      console.error(error)
    }
  }

  function handleCancelEdition() {
    setDescription(transaction.description)
    setCategory(transaction.category)
    setPrice(transaction.price)
    setTransactionType(transaction.type)
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="rounded-2xl border border-zinc-800 bg-zinc-900 p-3 hover:bg-zinc-800">
          <MoreVertical />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 h-screen w-screen bg-black/75 backdrop-blur-md" />
        <Dialog.Content className="fixed left-1/2 top-1/2 min-w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-md bg-zinc-800 px-12 py-10 shadow-shape">
          <Dialog.Title className="text-2xl font-bold">
            Editar transação
          </Dialog.Title>

          <Dialog.Close asChild>
            <button className="group absolute right-6 top-6 bg-transparent text-zinc-500 outline-none hover:cursor-pointer">
              <X className="size-6 group-hover:text-emerald-500" />
            </button>
          </Dialog.Close>

          <Dialog.Description className="mb-5 mt-2 text-sm"></Dialog.Description>
          <form action="" className="mt-8 flex flex-col gap-4">
            <input
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="rounded-md bg-zinc-900 p-4 text-zinc-300 placeholder:text-zinc-500"
              type="text"
              placeholder="Descrição"
              required
            />
            <input
              onChange={(e) => setPrice(Number(e.target.value))}
              value={price}
              className="rounded-md bg-zinc-900 p-4 text-zinc-300 placeholder:text-zinc-500"
              type="number"
              placeholder="Preço"
              required
            />
            <input
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              className="rounded-md bg-zinc-900 p-4 text-zinc-300 placeholder:text-zinc-500"
              type="text"
              placeholder="Categoria"
              required
            />
            <div className="flex gap-4 rounded-md bg-zinc-900 p-4">
              <div className="flex items-center gap-2">
                <input
                  onClick={() => setTransactionType('income')}
                  checked={transactionType === 'income'}
                  className="size-4"
                  id="income"
                  type="radio"
                  name="type"
                  value="income"
                />
                <label htmlFor="type">Entrada</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  onClick={() => setTransactionType('outcome')}
                  checked={transactionType === 'outcome'}
                  className="size-4"
                  id="outcome"
                  type="radio"
                  name="type"
                  value="outcome"
                />
                <label htmlFor="type">Saída</label>
              </div>
            </div>
          </form>
          <div className="flex justify-end gap-2 pt-4">
            <Dialog.Close asChild>
              <button
                onClick={handleCancelEdition}
                className="h-12 rounded-md bg-red-500 px-5 font-bold text-white transition-colors duration-200 hover:cursor-pointer hover:bg-red-700"
              >
                Cancelar
              </button>
            </Dialog.Close>

            <Dialog.Close asChild>
              <button
                onClick={submitChanges}
                className="h-12 rounded-md bg-emerald-500 px-5 font-bold text-white transition-colors duration-200 hover:cursor-pointer hover:bg-emerald-700"
              >
                Salvar
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
