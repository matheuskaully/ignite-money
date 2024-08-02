'use client'

import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CircleArrowDown, CircleArrowUp, X } from 'lucide-react'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { api } from '@/lib/api'
import { toast } from 'sonner'
import { useTransaction } from '@/contexts/transactions-context'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export default function NewTransactionModal() {
  const [transactionType, setTransactionType] = useState<string | undefined>('')
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })
  const { refreshTransactions } = useTransaction()

  function handleTransactionType(value: string) {
    setTransactionType(value)
  }

  async function handleCreateANewTransaction(data: NewTransactionFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const { category, price, description, type } = data

    await api
      .post('/transactions', {
        category,
        price,
        description,
        type,
        createdAt: new Date(),
      })
      .then((response) => {
        console.log(response.status)
        toast.success('Transação criada com sucesso!')
        refreshTransactions()
      })
      .catch((error) => {
        console.error(error)
        toast.success('Ops, algo deu errado!')
      })

    reset()
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 h-screen w-screen bg-black/75 backdrop-blur-md" />
      <Dialog.Content className="fixed left-1/2 top-1/2 min-w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-md bg-zinc-800 px-12 py-10 shadow-shape">
        <Dialog.Title className="text-2xl font-bold">
          Nova transação
        </Dialog.Title>

        <Dialog.Close asChild>
          <button className="group absolute right-6 top-6 bg-transparent text-zinc-500 outline-none hover:cursor-pointer">
            <X className="size-6 group-hover:text-emerald-500" />
          </button>
        </Dialog.Close>

        <form
          onSubmit={handleSubmit(handleCreateANewTransaction)}
          className="mt-8 flex flex-col gap-4"
        >
          <input
            className="rounded-md bg-zinc-900 p-4 text-zinc-300 placeholder:text-zinc-500"
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            className="rounded-md bg-zinc-900 p-4 text-zinc-300 placeholder:text-zinc-500"
            type="number"
            placeholder="Preço"
            required
            {...register('price', {
              valueAsNumber: true,
            })}
          />
          <input
            className="rounded-md bg-zinc-900 p-4 text-zinc-300 placeholder:text-zinc-500"
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <RadioGroup.Root
                  onValueChange={field.onChange}
                  className="mt-2 grid grid-cols-2 gap-4"
                >
                  <RadioGroup.Item
                    onClick={() => handleTransactionType('income')}
                    id="income"
                    value="income"
                    className={`flex items-center justify-center gap-2 rounded-md p-4 transition-all duration-200 ${transactionType === 'income' ? 'bg-emerald-500 text-white' : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'}`}
                  >
                    <CircleArrowUp
                      className={`text-emerald-500 ${transactionType === 'income' && 'text-white'}`}
                    />
                    Entrada
                  </RadioGroup.Item>
                  <RadioGroup.Item
                    onClick={() => handleTransactionType('outcome')}
                    id="outcome"
                    value="outcome"
                    className={`flex items-center justify-center gap-2 rounded-md p-4 transition-all duration-200 ${transactionType === 'outcome' ? 'bg-red-500 text-white' : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'}`}
                  >
                    <CircleArrowDown
                      className={`text-red-500 ${transactionType === 'outcome' && 'text-white'}`}
                    />
                    Saída
                  </RadioGroup.Item>
                </RadioGroup.Root>
              )
            }}
          />

          <button
            disabled={isSubmitting}
            type="submit"
            className="mt-6 h-14 rounded-md bg-emerald-500 px-5 font-bold text-white transition-colors duration-200 hover:cursor-pointer hover:bg-emerald-700 disabled:cursor-not-allowed disabled:border disabled:border-emerald-500 disabled:bg-transparent disabled:text-emerald-500 disabled:opacity-50 disabled:hover:text-emerald-500"
          >
            Cadastrar
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
