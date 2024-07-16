import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import logo from '../../public/ignite-logo.svg'
import NewTransactionModal from './new-transaction-modal'

export default function Header() {
  return (
    <header className="bg-zinc-900 pt-10 pb-28 shadow-shape">
      <div className="w-full max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image src={logo} alt="dt money" className="w-12 h-12" />
          <span className="font-light text-3xl text-zinc-300">
            ignite
            <span className="font-bold text-white">m</span>oney.
          </span>
        </div>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="h-12 bg-emerald-500 text-white font-bold rounded-md px-5 hover:cursor-pointer hover:bg-emerald-700 transition-colors duration-200">
              Nova transação
            </button>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </div>
    </header>
  )
}
