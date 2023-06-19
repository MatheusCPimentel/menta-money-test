import { ReactNode } from 'react'
import './globals.css'

import { Roboto } from 'next/font/google'
import { DashboardCard } from '@/components/DashboardCard'
import { ArrowBigUpDash, Search } from 'lucide-react'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { TransactionCard } from '@/components/TransactionCard'
import { Categories } from '@/types/categories'

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
})

export const metadata = {
  title: { default: 'MentaMoney', template: '%s | MentaMoney' },
  description: 'Organize your finances with MentaMoney',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="m-auto max-w-screen-lg bg-gray-2 px-6 py-16 text-gray-6">
        <header className="relative z-10 flex items-center justify-between pb-10">
          <div className="flex items-center gap-2 ">
            <ArrowBigUpDash size={24} />
            <span className="text-xl font-bold">MentaMoney</span>
          </div>

          <Button>Nova transação</Button>
        </header>

        <div className="absolute top-0 -mx-6 h-52 w-full bg-gray-1" />

        <div className={'relative inline-flex items-center gap-5'}>
          <DashboardCard
            amount={200}
            transactionType={'income'}
            lastTransactionDate="10/10/2023"
          />

          <DashboardCard
            amount={5000}
            transactionType={'outcome'}
            lastTransactionDate="12/12/2023"
          />
        </div>

        <div className="mt-6">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-lg">Transações</span>
            <span className="text-gray-5">4 itens</span>
          </div>

          <div className="flex items-center gap-2">
            <Input placeholder="Busque uma transação" />

            <div className="cursor-pointer rounded-md border border-green-light p-4 text-green-light">
              <Search size={22} />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center"></div>

        <div className="mt-3 flex flex-col gap-3">
          <TransactionCard
            amount={20}
            category={Categories.Others}
            date="10/30/23"
            title="Test"
            transactionType="income"
          />

          <TransactionCard
            amount={20}
            category={Categories.Others}
            date="10/30/23"
            title="Test"
            transactionType="income"
          />

          <TransactionCard
            amount={20}
            category={Categories.Others}
            date="10/30/23"
            title="Test"
            transactionType="income"
          />

          <TransactionCard
            amount={20}
            category={Categories.Others}
            date="10/30/23"
            title="Test"
            transactionType="income"
          />

          <TransactionCard
            amount={20}
            category={Categories.Others}
            date="10/30/23"
            title="Test"
            transactionType="income"
          />
        </div>

        <div>{children}</div>
      </body>
    </html>
  )
}
