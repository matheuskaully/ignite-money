import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { CircleArrowDown, CircleArrowUp, X } from 'lucide-react'

export default function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="backdrop-blur-md fixed w-screen h-screen inset-0 bg-black/75" />
      <Dialog.Content className="min-w-[32rem] rounded-md py-10 px-12 bg-zinc-800 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-shape">
        <Dialog.Title className="text-xl font-bold">
          Nova transação
        </Dialog.Title>

        <Dialog.Close asChild>
          <button className="absolute bg-transparent top-6 right-6 hover:cursor-pointer text-zinc-500 outline-none group">
            <X className="size-6 group-hover:text-emerald-500" />
          </button>
        </Dialog.Close>

        <form action="" className="mt-8 flex flex-col gap-4">
          <input
            className="rounded-md bg-zinc-900 text-zinc-300 p-4 placeholder:text-zinc-500"
            type="text"
            placeholder="Descrição"
            required
          />
          <input
            className="rounded-md bg-zinc-900 text-zinc-300 p-4 placeholder:text-zinc-500"
            type="number"
            placeholder="Preço"
            required
          />
          <input
            className="rounded-md bg-zinc-900 text-zinc-300 p-4 placeholder:text-zinc-500"
            type="text"
            placeholder="Categoria"
            required
          />

          <RadioGroup.Root className="grid grid-cols-2 gap-4 mt-2">
            <RadioGroup.Item
              value="income"
              className="bg-zinc-700 p-4 flex items-center justify-center gap-2 rounded-md hover:cursor-pointer text-zinc-300 checked:text-white checked:bg-emerald-500 data-[atribute]:checked:bg-emerald-500"
            >
              <CircleArrowUp className="text-emerald-500" />
              Entrada
            </RadioGroup.Item>
            <RadioGroup.Item
              value="outcome"
              className="bg-zinc-700 p-4 flex items-center justify-center gap-2 rounded-md hover:cursor-pointer text-zinc-300"
            >
              <CircleArrowDown className="text-red-500" />
              Saída
            </RadioGroup.Item>
          </RadioGroup.Root>

          <button
            type="submit"
            className="h-14 bg-emerald-500 text-white font-bold px-5 rounded-md mt-6 hover:cursor-pointer hover:bg-emerald-700 transition-colors duration-200"
          >
            Cadastrar
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
