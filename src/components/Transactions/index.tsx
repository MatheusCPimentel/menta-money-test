'use client'

import { api } from '@/api/api'
import { Transaction } from '@/types/transaction'
import { useEffect, useState } from 'react'
import { TransactionCard } from './TransactionCard'
import { Input } from '../Input'
import { Pagination } from '../Pagination'

export const Transactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [searchInputValue, setSearchInputValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const [transactionsToShow, setTransactionsToShow] = useState<Transaction[]>(
    [],
  )

  // eslint-disable-next-line no-undef
  const [debounceTime, setDebounceTime] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    async function getTransactions() {
      try {
        const { data: transactions } = await api.get<Transaction[]>(
          `/transactions?_page=${currentPage}&_limit=10`,
        )

        setSearchInputValue('')
        setTransactions(transactions)
        setTransactionsToShow(transactions)
      } catch (error) {
        console.log(`Houve um erro ao tentar carregar as transações: ${error}`)
      }
    }

    getTransactions()
  }, [currentPage])

  const handleSearchTransaction = (inputValue: string) => {
    setSearchInputValue(inputValue)

    if (debounceTime) clearTimeout(debounceTime)

    const timeout = setTimeout(() => {
      const sanitizedSearchInputValue = inputValue?.toLowerCase().trim()

      const filteredTransactions = transactions.filter((transaction) =>
        transaction.title.toLowerCase().includes(sanitizedSearchInputValue),
      )

      setTransactionsToShow(filteredTransactions)

      console.log(inputValue)
    }, 500)

    setDebounceTime(timeout)
  }

  return (
    <>
      <div className="mt-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-lg">Transações</span>
          <span className="text-gray-5">{transactions?.length || 0} itens</span>
        </div>

        <Input
          placeholder="Busque uma transação"
          value={searchInputValue}
          onChange={(e) => {
            handleSearchTransaction(e?.currentTarget?.value)
          }}
        />
      </div>

      <main className="mt-3 flex flex-col gap-3">
        {transactionsToShow?.length > 0 ? (
          transactionsToShow?.map((transaction) => (
            <TransactionCard
              key={transaction.id}
              amount={transaction.amount}
              category={transaction.category}
              date={transaction.date}
              title={transaction.title}
              transactionType={transaction.transactionType}
            />
          ))
        ) : (
          <span>Nenhum resultado encontrado.</span>
        )}
      </main>

      <Pagination
        currentPage={currentPage}
        totalPages={3}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  )
}
