import { SummaryCard } from './SummaryCard'

export const Summary = () => {
  return (
    <div
      className={
        'relative flex items-center gap-5 overflow-x-auto whitespace-nowrap'
      }
    >
      <SummaryCard
        amount={200}
        transactionType={'income'}
        lastTransactionDate="10/10/2023"
      />

      <SummaryCard
        amount={5000}
        transactionType={'outcome'}
        lastTransactionDate="12/12/2023"
      />
    </div>
  )
}
