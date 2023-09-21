import { SideBar } from '@/components/side-bar'
import Api from '@/services/Api'
import { useEffect, useState } from 'react'
import { ProductData } from '@/types/DataTypes'
import { Navbar } from '@/components/navbar'
import { Products } from '@/components/products'

export default function Home() {
  const [products, setProducts] = useState<ProductData[]>([])
  const [filteredProducts, setFilteredProducts] = useState<ProductData[]>([])
  const [pageSize, setPageSize] = useState<number>(
    import.meta.env.VITE_DEFAULT_PAGE_SIZE,
  )
  const [pageNumber, setPageNumber] = useState<number>(
    import.meta.env.VITE_DEFAULT_PAGE_NUMBER,
  )
  const [isLoading, setIsLoading] = useState<boolean>(true)
  // TODO: Add logic for search products
  const [searchProduct, setSearchProduct] = useState<string>('')

  useEffect(() => {
    ;(async () => {
      try {
        setIsLoading(true)
        const { data } = await Api.get(
          `/products?pageSize=${pageSize}&pageNumber=${pageNumber}&search=${searchProduct}`,
        )
        setProducts(data)
        setIsLoading(false)
      } catch (err) {
        console.error(err)
        setIsLoading(false)
      }
    })()
  }, [searchProduct])

  const CategoryFilter = () => {
    const uniqueCategories: string[] = []

    products.forEach((product) => {
      if (!uniqueCategories.includes(product.category)) {
        uniqueCategories.push(product.category)
      }
    })

    return uniqueCategories
  }
  const categories = CategoryFilter()

  const filterByCategory = (isChecked: boolean, category: string) => {
    if (isChecked) {
      const result = products.filter((product) => product.category === category)
      setFilteredProducts((prev) => [...prev, ...result])
    } else {
      const result = filteredProducts.filter(
        (product) => product.category !== category,
      )
      setFilteredProducts(result)
    }
  }

  const filterByRating = (isChecked: boolean, rate: number) => {
    const result: ProductData[] = []
    if (filteredProducts.length)
      filteredProducts.forEach((product) => {
        if (product.rating >= rate) result.push(product)
      })
    else if (rate)
      products.forEach((product) => {
        if (product.rating >= rate) result.push(product)
      })
    setFilteredProducts(result.length ? result : products)
  }

  return (
    <div className="flex flex-col w-full">
      <Navbar onInputSearch={setSearchProduct} amountProducts={4} />
      <div className="flex">
        <SideBar
          filterByCategory={filterByCategory}
          filterByRating={filterByRating}
          categories={categories}
        />
        <Products
          products={products}
          isLoading={isLoading}
          filteredProducts={filteredProducts}
        />
      </div>
    </div>
  )
}
