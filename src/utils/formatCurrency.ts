interface FormatCurrencyProps {
  amount: number
  hasFractionDigits?: boolean
}

export function formatCurrency(props: FormatCurrencyProps) {
  const { amount = 0, hasFractionDigits = true } = props

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: hasFractionDigits ? 2 : 0,
  }).format(amount || 0)
}
