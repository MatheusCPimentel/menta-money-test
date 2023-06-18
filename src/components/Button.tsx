import { Search } from 'lucide-react'
import { ButtonHTMLAttributes, FC } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  hasSearchIcon?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
  const { hasSearchIcon = false, children, ...rest } = props

  return (
    <button
      className={`${
        hasSearchIcon
          ? 'border border-green-light bg-opacity-100 text-green-light hover:border-green hover:bg-green hover:text-white'
          : 'bg-green text-white hover:bg-green-light'
      } flex items-center gap-3 rounded-md px-4 py-2 font-bold transition-colors md:px-5 md:py-3 lg:px-8 lg:py-4`}
      {...rest}
    >
      {hasSearchIcon ? <Search size={20} /> : null}

      <span>{children}</span>
    </button>
  )
}
