import { ChevronLeft, ChevronRight } from 'lucide-react'
import { FC } from 'react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const Pagination: FC<PaginationProps> = (props) => {
  const {
    currentPage = 1,
    totalPages = 1,
    onPageChange = () => undefined,
  } = props

  return (
    <div className="mt-8 flex items-center justify-center">
      <ChevronLeft
        className={`${
          currentPage === 1
            ? 'cursor-not-allowed text-gray-4'
            : 'cursor-pointer text-green'
        } mr-4 `}
        size={24}
        onClick={() => currentPage !== 1 && onPageChange(currentPage - 1)}
      />

      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index + 1}
            onClick={() => onPageChange(index + 1)}
            className={`${
              index + 1 === currentPage
                ? 'bg-green-dark'
                : 'cursor-pointer bg-gray-4 text-gray-5'
            } rounded-md px-4 py-2`}
          >
            {index + 1}
          </span>
        ))}
      </div>

      <ChevronRight
        className={`${
          currentPage === totalPages
            ? 'cursor-not-allowed text-gray-4'
            : 'cursor-pointer text-green'
        } ml-4`}
        size={24}
        onClick={() =>
          currentPage !== totalPages && onPageChange(currentPage + 1)
        }
      />
    </div>
  )
}
