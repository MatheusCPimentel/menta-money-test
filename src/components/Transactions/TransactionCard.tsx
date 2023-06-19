import { FC } from 'react'
import { Transaction } from '@/types/transaction'
import { Categories, transactionCategoryMapper } from '@/types/categories'
import { Calendar, Tag } from 'lucide-react'
import { formatCurrency } from '@/utils/formatCurrency'
import { formatDate } from '@/utils/formatDate'

export const TransactionCard: FC<Transaction> = (props) => {
  const {
    amount = 0,
    category = Categories.Others,
    transactionType = 'income',
    date = '',
    title = '',
  } = props

  const formattedCurrency = formatCurrency({ amount })
  const formattedDate = formatDate({ date })

  return (
    <div className="w-full rounded-md bg-gray-3 p-5 transition-colors hover:bg-gray-4">
      <span className="block">{title}</span>

      <span
        className={`${
          transactionType === 'income' ? 'text-green-light' : 'text-red'
        } block pb-3 pt-1 text-xl font-bold `}
      >
        {transactionType === 'income'
          ? formattedCurrency
          : `- ${formattedCurrency}`}
      </span>

      <div className="flex items-center justify-between text-gray-5">
        <div className="flex items-center gap-1">
          <Tag size={16} />
          <span>{transactionCategoryMapper[category]}</span>
        </div>

        <div className="flex items-center gap-1">
          <Calendar size={16} />
          <span>{formattedDate}</span>
        </div>
      </div>
    </div>
  )
}
