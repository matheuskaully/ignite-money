import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import logo from '../../public/ignite-logo.svg'
import NewTransactionModal from './new-transaction-modal'

export default function Header() {
  return (
    <header className="bg-zinc-900 pb-28 pt-10 shadow-shape">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="dt money" className="h-12 w-12" />
          <span className="text-3xl font-light text-zinc-300">
            ignite
            <span className="font-bold text-white">m</span>oney.
          </span>
        </div>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="h-12 rounded-md bg-emerald-500 px-5 font-bold text-white transition-colors duration-200 hover:cursor-pointer hover:bg-emerald-700">
              Nova transação
            </button>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </div>
    </header>
  )
}
