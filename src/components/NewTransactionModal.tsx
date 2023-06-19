import { ArrowDownCircle, ArrowUpCircle, X } from 'lucide-react'
import { Input } from './Input'
import { Button } from './Button'
import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Categories } from '@/types/categories'

interface NewTransactionModalProps {
  onClose: () => void
}

interface IFormInput {
  title: string
  amount: number
  category: Categories
  transactionType: 'income' | 'outcome'
}

export const NewTransactionModal: FC<NewTransactionModalProps> = (props) => {
  const { onClose = () => undefined } = props

  const { control, handleSubmit, watch } = useForm<IFormInput>({
    defaultValues: {
      title: '',
      amount: 0,
      category: '' as Categories,
      transactionType: 'income',
    },
  })

  const transactionTypeWatch = watch('transactionType')

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <>
      <div className="fixed inset-0 z-10 flex items-center bg-gray-1 bg-opacity-75"></div>

      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="fixed bottom-0 z-10 rounded-t-xl bg-gray-2 p-6"
        >
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">Nova transação</span>

            <X
              className="cursor-pointer text-gray-5"
              size={24}
              onClick={() => onClose()}
            />
          </div>

          <div className="my-6">
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <Input
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Título"
                />
              )}
            />

            <Controller
              name="amount"
              control={control}
              render={({ field }) => (
                <Input
                  value={field.value === 0 ? '' : field.value}
                  onChange={field.onChange}
                  customClassName="my-3"
                  placeholder="Valor"
                />
              )}
            />

            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Input
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Categoria"
                />
              )}
            />
          </div>

          <Controller
            name="transactionType"
            control={control}
            render={({ field }) => (
              <div className="mb-10 flex items-center justify-between gap-2">
                <div
                  onClick={() => field.onChange('income')}
                  className={`${
                    transactionTypeWatch === 'income'
                      ? 'cursor-default bg-green-dark'
                      : 'cursor-pointer bg-gray-3 hover:bg-gray-4'
                  } flex flex-1 items-center justify-center gap-2 rounded-md py-4`}
                >
                  <ArrowUpCircle
                    className={
                      transactionTypeWatch === 'income'
                        ? 'text-white'
                        : 'text-green-light'
                    }
                    size={26}
                  />

                  <span
                    className={
                      transactionTypeWatch === 'income' ? 'text-white' : ''
                    }
                  >
                    Entrada
                  </span>
                </div>

                <div
                  onClick={() => field.onChange('outcome')}
                  className={`${
                    transactionTypeWatch === 'outcome'
                      ? 'cursor-default bg-red'
                      : 'cursor-pointer bg-gray-3 hover:bg-gray-4'
                  } flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md bg-gray-3 py-4`}
                >
                  <ArrowDownCircle
                    className={
                      transactionTypeWatch === 'outcome'
                        ? 'text-white'
                        : 'text-red'
                    }
                    size={26}
                  />

                  <span
                    className={
                      transactionTypeWatch === 'outcome' ? 'text-white' : ''
                    }
                  >
                    Saída
                  </span>
                </div>
              </div>
            )}
          />

          <Button type="submit" isFullWidth isLargeSize>
            Cadastrar
          </Button>
        </form>
      </div>
    </>
  )
}
