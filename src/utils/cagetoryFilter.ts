import { ProductData } from '@/types/DataTypes'

export const CategoryFilter = (products: ProductData[]) => {
  const uniqueCategories: string[] = []

  products.forEach((product) => {
    if (!uniqueCategories.includes(product.category)) {
      uniqueCategories.push(product.category)
    }
  })

  return uniqueCategories
}
