import { ReactNode } from 'react'
import './globals.css'

import { Roboto } from 'next/font/google'

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
      <body className="bg-gray-2 text-gray-6">{children}</body>
    </html>
  )
}
