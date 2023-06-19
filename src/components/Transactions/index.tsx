'use client'

import { api } from '@/api/api'
import { Transaction } from '@/types/transaction'
import { useEffect, useState } from 'react'
import { TransactionCard } from './TransactionCard'

export const Transactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    async function getTransactions() {
      try {
        const { data: transactions } = await api.get<Transaction[]>(
          '/transactions',
        )

        setTransactions(transactions)
      } catch (error) {
        console.log(`Houve um erro ao tentar carregar as transações: ${error}`)
      }
    }

    getTransactions()
  }, [])

  return (
    <main className="mt-3 flex flex-col gap-3">
      {transactions.map((transaction) => (
        <TransactionCard
          key={transaction.id}
          amount={transaction.amount}
          category={transaction.category}
          date={transaction.date}
          title={transaction.title}
          transactionType={transaction.transactionType}
        />
      ))}
    </main>
  )
}
