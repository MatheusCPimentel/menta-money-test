import { ArrowBigUpDash } from 'lucide-react'
import { Button } from './Button'
import { FC } from 'react'

interface HeaderProps {
  handleOpenNewTransactionModal: () => void
}

export const Header: FC<HeaderProps> = (props) => {
  const { handleOpenNewTransactionModal = () => undefined } = props

  return (
    <header className="relative z-10 flex items-center justify-between pb-10">
      <div className="flex items-center gap-2 ">
        <ArrowBigUpDash size={24} />
        <span className="text-xl font-bold">MentaMoney</span>
      </div>

      <Button onClick={() => handleOpenNewTransactionModal()}>
        Nova transação
      </Button>
    </header>
  )
}
