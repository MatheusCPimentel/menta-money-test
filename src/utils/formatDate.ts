import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface FormatDateProps {
  date: string
  isFullString?: boolean
}

export function formatDate(props: FormatDateProps) {
  const { date = '', isFullString = false } = props

  try {
    if (isFullString)
      return format(new Date(date), "dd 'de' MMMM", { locale: ptBR })

    return format(new Date(date), 'dd/MM/yyyy')
  } catch (e) {
    return '-'
  }
}
