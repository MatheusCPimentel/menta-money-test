import { ArrowBigUpDash } from 'lucide-react'
import { Button } from './Button'

export const Header = () => {
  return (
    <header className="relative z-10 flex items-center justify-between pb-10">
      <div className="flex items-center gap-2 ">
        <ArrowBigUpDash size={24} />
        <span className="text-xl font-bold">MentaMoney</span>
      </div>

      <Button>Nova transação</Button>
    </header>
  )
}
