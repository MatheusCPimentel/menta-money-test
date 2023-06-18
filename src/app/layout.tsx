import { ReactNode } from 'react'
import './globals.css'

import { Roboto } from 'next/font/google'
import { DashboardCard } from '@/components/DashboardCard'
import { ArrowBigUpDash } from 'lucide-react'
import { Button } from '@/components/Button'

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
      <body className="m-auto max-w-screen-lg bg-gray-1 px-6 py-16 text-gray-6">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ArrowBigUpDash size={24} />
            <span className="text-xl font-bold">DT Money</span>
          </div>

          <Button>Nova transação</Button>
        </header>

        <div className={'flex items-center gap-5'}>
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

        <div>{children}</div>
      </body>
    </html>
  )
}
