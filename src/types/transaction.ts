import { Categories } from './categories'

export interface Transaction {
  amount: number
  transactionType: 'income' | 'outcome'
  category: Categories
  title: string
  date: string
}
