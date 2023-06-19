import { SummaryCard } from './SummaryCard'

export const Summary = () => {
  return (
    <div className={'relative inline-flex items-center gap-5'}>
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
