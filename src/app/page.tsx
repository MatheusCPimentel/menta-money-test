import { Header } from '@/components/Header'
import { Summary } from '@/components/Summary'
import { Transactions } from '@/components/Transactions'

export default function Home() {
  return (
    <div className="m-auto max-w-screen-lg px-6 py-16">
      <Header />
      <div className="absolute top-0 -mx-6 h-52 w-full bg-gray-1" />
      <Summary />
      <Transactions />
    </div>
  )
}
