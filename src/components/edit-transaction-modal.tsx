import * as Dialog from '@radix-ui/react-dialog'
import { MoreVertical, X } from 'lucide-react'

export default function EditTransactionModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="rounded-2xl border border-zinc-800 bg-zinc-900 p-3 hover:bg-zinc-800">
          <MoreVertical />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/100 bg-zinc-800 text-zinc-800 backdrop-blur-md" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md translate-x-[-50%] translate-y-[-50%] rounded-lg bg-zinc-800 p-8">
          <Dialog.Title>Editar transação</Dialog.Title>
          <Dialog.Description className="mb-5 mt-2 text-sm"></Dialog.Description>
          <form action=" " className="flex flex-col gap-4">
            <input
              className="rounded-md bg-zinc-900 p-4 text-zinc-300 placeholder:text-zinc-500"
              type="text"
              placeholder="Descrição"
              required
            />
            <input
              className="rounded-md bg-zinc-900 p-4 text-zinc-300 placeholder:text-zinc-500"
              type="number"
              placeholder="Preço"
              required
            />
            <input
              className="rounded-md bg-zinc-900 p-4 text-zinc-300 placeholder:text-zinc-500"
              type="text"
              placeholder="Categoria"
              required
            />
            <div></div>
          </form>
          <div className="flex justify-end p-4">
            <Dialog.Close asChild>
              <button className="">Salvar</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="absolute right-3 top-3 inline-flex size-5 items-center justify-center">
              <X className="size-5" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
