import Api from '@/services/Api'
import { useEffect, useState } from 'react'
import { ProductData } from '@/types/DataTypes'
import { Navbar } from '@/components/navbar'
import { SideBar } from '@/components/side-bar'
import { Products } from '@/components/products'

export default function Home() {
  const [products, setProducts] = useState<ProductData[]>([])
  const [activeFilters, setActiveFilters] = useState<boolean>(false)
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

  return (
    <div className="flex flex-col w-full">
      <Navbar onInputSearch={setSearchProduct} />
      <div className="flex">
        <SideBar
          products={products}
          setFilteredProducts={setFilteredProducts}
          setActiveFilters={setActiveFilters}
        />
        <Products
          activeFilters={activeFilters}
          products={products}
          isLoading={isLoading}
          filteredProducts={filteredProducts}
        />
      </div>
    </div>
  )
}
