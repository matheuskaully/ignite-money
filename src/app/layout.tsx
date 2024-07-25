import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { TransactionsProvider } from '@/contexts/transactions-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ignite-money',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-zinc-950 text-zinc-50`}>
        <TransactionsProvider>{children}</TransactionsProvider>
      </body>
    </html>
  )
}
