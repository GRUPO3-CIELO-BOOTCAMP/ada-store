import { ProductData } from '@/types/DataTypes'
import { Categories } from './categories'
import { Prices } from './prices'
import { ScoreFilter } from './score-filter'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { CategoryFilter } from '@/utils/cagetoryFilter'

type SideBarData = {
  products: ProductData[]
  setFilteredProducts: Dispatch<SetStateAction<ProductData[]>>
  setActiveFilters: Dispatch<SetStateAction<boolean>>
}

export const SideBar = ({
  products,
  setFilteredProducts,
  setActiveFilters,
}: SideBarData) => {
  const [minPrice, setMinPrice] = useState<number>(0)
  const [maxPrice, setMaxPrice] = useState<number>(0)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedRatings, setSelectedRatings] = useState<number[]>([])

  const categories = CategoryFilter(products)

  useEffect(() => {
    const result: ProductData[] = products.filter((product) => {
      let hasCategory = true
      let hasRating = true
      let hasPrice = true
      if (selectedCategories.length) {
        hasCategory = selectedCategories.includes(product.category)
      }
      if (selectedRatings.length) {
        hasRating = selectedRatings.includes(Math.floor(product.rating))
      }
      if (minPrice && maxPrice) {
        hasPrice =
          Number(product.price) >= minPrice && Number(product.price) <= maxPrice
      }
      if (minPrice && !maxPrice) {
        hasPrice = Number(product.price) >= minPrice
      }
      if (!minPrice && maxPrice) {
        hasPrice = Number(product.price) <= maxPrice
      }
      setActiveFilters(hasCategory || hasRating || hasPrice)
      return hasCategory && hasRating && hasPrice
    })
    setFilteredProducts(result)
  }, [
    minPrice,
    maxPrice,
    selectedCategories,
    selectedRatings,
    products,
    setFilteredProducts,
    setActiveFilters,
  ])

  return (
    <div className="flex flex-col w-min h-fit m-4 p-[16px] gap-[20px] box-border border-2 rounded">
      <Categories
        categories={categories}
        setSelectedCategories={setSelectedCategories}
      />
      <Prices setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
      <ScoreFilter setSelectedRatings={setSelectedRatings} />
    </div>
  )
}
