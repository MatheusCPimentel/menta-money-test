import { Header } from '@/components/Header'
import { Summary } from '@/components/Summary'
import { Transactions } from '@/components/Transactions'

export default function Home() {
  return (
    <>
      <Header />
      <div className="absolute top-0 -mx-6 h-52 w-full bg-gray-1" />
      <Summary />
      <Transactions />
    </>
  )
}
