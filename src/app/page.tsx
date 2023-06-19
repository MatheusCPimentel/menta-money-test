'use client'

import { Header } from '@/components/Header'
import { NewTransactionModal } from '@/components/NewTransactionModal'
import { Summary } from '@/components/Summary'
import { Transactions } from '@/components/Transactions'
import { useState } from 'react'

export default function Home() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false)

  return (
    <div className="m-auto max-w-screen-lg px-6 py-16">
      <Header
        handleOpenNewTransactionModal={() => setIsNewTransactionModalOpen(true)}
      />

      <div className="absolute top-0 -mx-6 h-52 w-full bg-gray-1" />
      <Summary />
      <Transactions />

      {isNewTransactionModalOpen ? (
        <NewTransactionModal
          onSave={() => undefined}
          onClose={() => setIsNewTransactionModalOpen(false)}
        />
      ) : null}
    </div>
  )
}
