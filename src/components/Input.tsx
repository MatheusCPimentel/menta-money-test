import { FC, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

export const Input: FC<InputProps> = (props) => {
  const { hasError = false, ...rest } = props

  return (
    <input
      className={`${
        hasError ? 'border-red' : ''
      } w-full rounded-md border border-gray-1 bg-gray-1 p-4 text-gray-6 outline-0 placeholder:text-gray-5 focus:border-green`}
      type="text"
      {...rest}
    />
  )
}
