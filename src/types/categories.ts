/* eslint-disable no-unused-vars */
export enum Categories {
  Food = 'food',
  Rent = 'rent',
  Sale = 'sale',
  Salary = 'salary',
  Shopping = 'shopping',
  Transport = 'transport',
  Travel = 'travel',
  Others = 'others',
}

export const transactionCategoryMapper = {
  [Categories.Food]: 'Alimentação',
  [Categories.Salary]: 'Salário',
  [Categories.Rent]: 'Aluguel',
  [Categories.Sale]: 'Venda',
  [Categories.Shopping]: 'Compras',
  [Categories.Transport]: 'Transporte',
  [Categories.Travel]: 'Viagem',
  [Categories.Others]: 'Outros',
}
