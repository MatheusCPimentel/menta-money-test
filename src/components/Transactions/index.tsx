'use client'

import { api } from '@/api/api'
import { Transaction } from '@/types/transaction'
import { useEffect, useState } from 'react'
import { TransactionCard } from './TransactionCard'
import { Search } from 'lucide-react'
import { Input } from '../Input'

export const Transactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [searchInputValue, setSearchInputValue] = useState('')

  const [transactionsToShow, setTransactionsToShow] = useState<Transaction[]>(
    [],
  )

  useEffect(() => {
    async function getTransactions() {
      try {
        const { data: transactions } = await api.get<Transaction[]>(
          '/transactions',
        )

        setTransactions(transactions)
        setTransactionsToShow(transactions)
      } catch (error) {
        console.log(`Houve um erro ao tentar carregar as transações: ${error}`)
      }
    }

    getTransactions()
  }, [])

  const handleSearchTransaction = () => {
    const sanitizedSearchInputValue = searchInputValue?.toLowerCase().trim()

    const filteredTransactions = transactions.filter((transaction) =>
      transaction.title.toLowerCase().includes(sanitizedSearchInputValue),
    )

    setTransactionsToShow(filteredTransactions)
  }

  return (
    <>
      <div className="mt-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-lg">Transações</span>
          <span className="text-gray-5">{transactions?.length || 0} itens</span>
        </div>

        <div className="flex items-center gap-2">
          <Input
            placeholder="Busque uma transação"
            value={searchInputValue}
            onChange={(e) => setSearchInputValue(e?.currentTarget?.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearchTransaction()}
          />

          <div
            className="cursor-pointer rounded-md border border-green-light p-4 text-green-light"
            onClick={() => handleSearchTransaction()}
          >
            <Search size={22} />
          </div>
        </div>
      </div>

      <main className="mt-3 flex flex-col gap-3">
        {transactionsToShow.map((transaction) => (
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
