import { ReactNode } from 'react'
import './globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: { default: 'MentaMoney', template: '%s | MentaMoney' },
  description: 'Organize your finances with MentaMoney',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-1">{children}</body>
    </html>
  )
}
