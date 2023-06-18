import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react'
import { FC } from 'react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface DashboardCardProps {
  amount: number
  transactionType: 'income' | 'outcome'
  lastTransactionDate: string
}

export const DashboardCard: FC<DashboardCardProps> = (props) => {
  const {
    amount = 0,
    lastTransactionDate = '',
    transactionType = 'income',
  } = props

  const formattedCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount)

  const formattedLastTransactionDate = format(
    new Date(lastTransactionDate),
    "dd 'de' MMMM",
    { locale: ptBR },
  )

  return (
    <div className="w-80 rounded-md bg-gray-3 p-6 pl-8">
      <div className="flex items-center justify-between pb-3">
        {transactionType === 'income' ? (
          <>
            <span>Entradas</span>
            <ArrowUpCircle className="text-green-light" size={26} />
          </>
        ) : (
          <>
            <span>Saídas</span>
            <ArrowDownCircle className="text-red" size={26} />
          </>
        )}
      </div>

      <h1>{formattedCurrency}</h1>

      <span className="mt-1 block text-gray-5">
        Última entrada em {formattedLastTransactionDate}
      </span>
    </div>
  )
}
