import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react'
import { FC } from 'react'
import { formatCurrency } from '@/utils/formatCurrency'
import { formatDate } from '@/utils/formatDate'

interface SummaryCardProps {
  amount: number
  transactionType: 'income' | 'outcome'
  lastTransactionDate: string
}

export const SummaryCard: FC<SummaryCardProps> = (props) => {
  const {
    amount = 0,
    lastTransactionDate = '',
    transactionType = 'income',
  } = props

  const formattedCurrency = formatCurrency({ amount })

  const formattedLastTransactionDate = formatDate({
    date: lastTransactionDate,
    isFullString: true,
  })

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
