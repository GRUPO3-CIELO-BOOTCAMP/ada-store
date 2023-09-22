import { ProductData } from '@/types/DataTypes'
import { Categories } from './categories'
import { Prices } from './prices'
import { ScoreFilter } from './score-filter'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { CategoryFilter } from '@/utils/cagetoryFilter'

type SideBarData = {
  products: ProductData[]
  filteredProducts: ProductData[]
  setFilteredProducts: Dispatch<SetStateAction<ProductData[]>>
}

export const SideBar = ({
  products,
  filteredProducts,
  setFilteredProducts,
}: SideBarData) => {
  const [minPrice, setMinPrice] = useState<number>(0)
  const [maxPrice, setMaxPrice] = useState<number>(0)

  const filterByCategory = (isChecked: boolean, category: string) => {
    if (isChecked) {
      const result = products.filter((product) => product.category === category)
      return [...filteredProducts, ...result]
    } else {
      const result = filteredProducts.filter(
        (product) => product.category !== category,
      )
      return result
    }
  }

  const filterByRating = (isChecked: boolean, rate: number) => {
    if (isChecked) {
      const result = products.filter(
        (product) => Math.floor(product.rating) === rate,
      )
      return [...filteredProducts, ...result]
    } else {
      const result = filteredProducts.filter(
        (product) => Math.floor(product.rating) !== rate,
      )
      return result
    }
  }

  const handleProducts = (isChecked: boolean, value: number | string) => {
    let result: ProductData[] = []
    if (typeof value === 'number') result = filterByRating(isChecked, value)
    else if (typeof value === 'string')
      result = filterByCategory(isChecked, value)

    setFilteredProducts(result)
  }

  const categories = CategoryFilter(products)

  useEffect(() => {
    let result: ProductData[] = []
    if (minPrice && maxPrice) {
      result = products.filter(
        (product) =>
          Number(product.price) >= minPrice &&
          Number(product.price) <= maxPrice,
      )
    } else if (minPrice) {
      result = products.filter((product) => Number(product.price) >= minPrice)
    } else if (maxPrice) {
      result = products.filter((product) => Number(product.price) <= maxPrice)
    }
    setFilteredProducts(result)
  }, [minPrice, maxPrice, products, setFilteredProducts])

  return (
    <div className="flex flex-col w-min h-fit m-4 p-[16px] gap-[20px] box-border border-2 rounded">
      <Categories categories={categories} handleProducts={handleProducts} />
      <Prices setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
      <ScoreFilter handleProducts={handleProducts} />
    </div>
  )
}
