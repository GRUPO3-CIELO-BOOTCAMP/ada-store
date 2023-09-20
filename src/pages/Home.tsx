import { SideBar } from '@/components/side-bar'
import { Stars } from '@/components/stars'
import Api from '@/services/Api'
import formatMoney from '@/utils/formatMoney'
import { useEffect, useState } from 'react'
import { ProductData } from '@/types/DataTypes'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

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
  // const [searchProduct, setSearchProduct] = useState<string>('')

  useEffect(() => {
    ;(async () => {
      try {
        setIsLoading(true)
        const { data } = await Api.get(
          `/products?pageSize=${pageSize}&pageNumber=${pageNumber}`,
        )
        setProducts(data)
        setIsLoading(false)
      } catch (err) {
        console.error(err)
        setIsLoading(false)
      }
    })()
  }, [])

  const renderProducts = (products: ProductData[]) => {
    return products.map((product) => (
      <Dialog key={product.id}>
        <div className="flex flex-col max-w-[300px] p-4 rounded-[0.25rem] bg-gray-300">
          <DialogContent>
            <img src={product.avatar} alt="imagem do produto" />
            <DialogHeader>
              <DialogTitle>{product.name}</DialogTitle>
            </DialogHeader>
            <DialogDescription>{product.description}</DialogDescription>
            <div>
              <Stars isChecked={false} solidStarsAmount={product.rating} />
              {formatMoney(product.price)}
            </div>
          </DialogContent>
          <DialogTrigger>
            <img src={product.avatar} alt="imagem do produto" />
            <p>{product.name}</p>
            <p>{product.category}</p>
            <p>{product.description}</p>
            <p>
              {<Stars isChecked={false} solidStarsAmount={product.rating} />}
            </p>
            <p>{formatMoney(product.price)}</p>
          </DialogTrigger>
        </div>
      </Dialog>
    ))
  }

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

  return (
    <div className="grid grid-cols-4 gap-4 m-4">
      <SideBar handleProducts={filterByCategory} categories={categories} />
      {!products.length && !isLoading && <h1>Sem produtos encontrados</h1>}
      {!!filteredProducts.length && renderProducts(filteredProducts)}
      {!!products.length &&
        !filteredProducts.length &&
        renderProducts(products)}
    </div>
  )
}
