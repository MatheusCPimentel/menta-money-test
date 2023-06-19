'use client'

import { api } from '@/api/api'
import { Transaction } from '@/types/transaction'
import { useEffect, useState } from 'react'
import { TransactionCard } from './TransactionCard'
import { Search } from 'lucide-react'
import { Input } from '../Input'

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
    <>
      <div className="mt-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-lg">Transações</span>
          <span className="text-gray-5">4 itens</span>
        </div>

        <div className="flex items-center gap-2">
          <Input placeholder="Busque uma transação" />

          <div className="cursor-pointer rounded-md border border-green-light p-4 text-green-light">
            <Search size={22} />
          </div>
        </div>
      </div>

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
    </>
  )
}
