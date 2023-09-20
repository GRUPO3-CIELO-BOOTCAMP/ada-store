export type ProductData = {
  id: string
  avatar: string
  name: string
  description: string
  price: string
  rating: number
  category: string
}

export type CategoriesData = {
  categories: string[]
  handleProducts: (isChecked: boolean, category: string) => void
}
