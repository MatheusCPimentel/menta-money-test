import { Categories } from './categories'

export interface Transaction {
  id?: string
  amount: number
  transactionType: 'income' | 'outcome'
  category: Categories
  title: string
  date: string
}
