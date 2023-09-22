import Api from '@/services/Api'
import { useEffect, useState } from 'react'
import { ProductData } from '@/types/DataTypes'
import { Navbar } from '@/components/navbar'
import { SideBar } from '@/components/side-bar'
import { Products } from '@/components/products'
import { useToast } from '@/components/ui/use-toast'
import { Pagination } from '@/components/pagination'

export default function Home() {
  const PAGE_SIZE_DEFAULT = import.meta.env.VITE_DEFAULT_PAGE_SIZE
  const PAGE_NUMBER_DEFAULT = import.meta.env.VITE_DEFAULT_PAGE_NUMBER
  const SEARCH_TERM_DEFAULT = ''

  const [products, setProducts] = useState<ProductData[]>([])
  const [activeFilters, setActiveFilters] = useState<boolean>(false)
  const [filteredProducts, setFilteredProducts] = useState<ProductData[]>([])
  const [pageSize, setPageSize] = useState<number>(PAGE_SIZE_DEFAULT)
  const [pageNumber, setPageNumber] = useState<number>(PAGE_NUMBER_DEFAULT)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [searchProduct, setSearchProduct] = useState<string>('')

  const { toast } = useToast()

  async function fetchProducts(
    pageSize: number,
    pageNumber: number,
    searchProduct: string,
  ) {
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
  }

  useEffect(() => {
    ;(async () => {
      await fetchProducts(pageSize, pageNumber, searchProduct)
    })()
  }, [pageNumber, pageSize, searchProduct])

  async function handleRefreshProducts() {
    if (
      searchProduct !== SEARCH_TERM_DEFAULT ||
      pageNumber !== PAGE_NUMBER_DEFAULT ||
      pageSize !== PAGE_SIZE_DEFAULT
    ) {
      await fetchProducts(
        PAGE_SIZE_DEFAULT,
        PAGE_NUMBER_DEFAULT,
        SEARCH_TERM_DEFAULT,
      )
      toast({ title: 'A lista de produtos foi atualizada!' })
    } else {
      toast({ title: 'A lista de produtos está atualizada!' })
    }
  }

  return (
    <div className="flex flex-col w-full">
      <Navbar
        onInputSearch={setSearchProduct}
        onRefreshProducts={handleRefreshProducts}
      />
      <div className="flex">
        <SideBar
          products={products}
          setFilteredProducts={setFilteredProducts}
          setActiveFilters={setActiveFilters}
        />
        <div className="flex flex-col">
          <Products
            activeFilters={activeFilters}
            products={products}
            isLoading={isLoading}
            filteredProducts={filteredProducts}
          />
          <Pagination />
        </div>
      </div>
    </div>
  )
}
