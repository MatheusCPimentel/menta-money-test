import { ArrowDownCircle, ArrowUpCircle, X } from 'lucide-react'
import { Input } from './Input'
import { Button } from './Button'
import { FC, useState } from 'react'

interface NewTransactionModalProps {
  onClose: () => void
  onSave: () => void
}

export const NewTransactionModal: FC<NewTransactionModalProps> = (props) => {
  const { onSave = () => undefined, onClose = () => undefined } = props

  const [transactionTypeSelected, setTransactionTypeSelect] = useState<
    'income' | 'outcome'
  >('income')

  return (
    <>
      <div className="fixed inset-0 z-10 flex items-center bg-gray-1 bg-opacity-75"></div>

      <div className="flex items-center justify-center">
        <div className="fixed bottom-0 z-10 rounded-t-xl bg-gray-2 p-6">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">Nova transação</span>

            <X
              className="cursor-pointer text-gray-5"
              size={24}
              onClick={() => onClose()}
            />
          </div>

          <div className="my-6">
            <Input placeholder="Título" />
            <Input customClassName="my-3" placeholder="Preço" />
            <Input placeholder="Categoria" />
          </div>

          <div className="mb-10 flex items-center justify-between gap-2">
            <div
              onClick={() => setTransactionTypeSelect('income')}
              className={`${
                transactionTypeSelected === 'income'
                  ? 'cursor-default bg-green-dark'
                  : 'cursor-pointer bg-gray-3 hover:bg-gray-4'
              } flex flex-1 items-center justify-center gap-2 rounded-md py-4`}
            >
              <ArrowUpCircle
                className={
                  transactionTypeSelected === 'income'
                    ? 'text-white'
                    : 'text-green-light'
                }
                size={26}
              />

              <span
                className={
                  transactionTypeSelected === 'income' ? 'text-white' : ''
                }
              >
                Entrada
              </span>
            </div>

            <div
              onClick={() => setTransactionTypeSelect('outcome')}
              className={`${
                transactionTypeSelected === 'outcome'
                  ? 'cursor-default bg-red'
                  : 'cursor-pointer bg-gray-3 hover:bg-gray-4'
              } flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md bg-gray-3 py-4`}
            >
              <ArrowDownCircle
                className={
                  transactionTypeSelected === 'outcome'
                    ? 'text-white'
                    : 'text-red'
                }
                size={26}
              />

              <span
                className={
                  transactionTypeSelected === 'outcome' ? 'text-white' : ''
                }
              >
                Saída
              </span>
            </div>
          </div>

          <Button isFullWidth isLargeSize onClick={() => onSave()}>
            Cadastrar
          </Button>
        </div>
      </div>
    </>
  )
}
