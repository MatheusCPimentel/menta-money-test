import { ReactNode } from 'react'
import './globals.css'

import { Roboto } from 'next/font/google'
import { DashboardCard } from '@/components/DashboardCard'

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
      <body className="m-auto max-w-screen-lg bg-gray-1 text-gray-6">
        <DashboardCard
          amount={200}
          isIncomeTransactionType
          lastTransactionDate="10/10/2023"
        />

        <div>{children}</div>
      </body>
    </html>
  )
}
