import { ReactNode } from 'react'
import './globals.css'

import { Roboto } from 'next/font/google'
import { DashboardCard } from '@/components/DashboardCard'
import { ArrowBigUpDash } from 'lucide-react'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

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

        <div>
          <div>
            <span>Transações</span>
            <span>4 itens</span>
          </div>

          <div>
            <Input placeholder="Busque uma transação" />
          </div>
        </div>

        <div>{children}</div>
      </body>
    </html>
  )
}
