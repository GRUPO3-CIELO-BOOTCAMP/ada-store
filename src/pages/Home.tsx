import { SideBar } from '@/components/side-bar'
import { Stars } from '@/components/stars'
import Api from '@/services/Api'
import formatMoney from '@/utils/formatMoney'
import { useEffect, useState } from 'react'
import { ProductData } from '@/types/DataTypes'

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
          `/products?pageSize=${10}&pageNumber=${1}`,
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
      <div
        className="flex flex-col max-w-[300px] p-4 rounded-[0.25rem] bg-gray-300"
        key={product.id}
      >
        <img src={product.avatar} alt="imagem do produto" />
        <p>{product.name}</p>
        <p>{product.category}</p>
        <p>{product.description}</p>
        <p>{<Stars isChecked={false} solidStarsAmount={product.rating} />}</p>
        <p>{formatMoney(product.price)}</p>
      </div>
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

  const handleProducts = (e: string | boolean, category: string) => {
    if (e) {
      const result = products.filter((product) => product.category === category)
      setFilteredProducts(result)
    } else setFilteredProducts([])
  }

  return (
    <div className="grid grid-cols-4 gap-4 m-4">
      <SideBar handleProducts={handleProducts} categories={categories} />
      {!products.length && !isLoading && <h1>Sem produtos encontrados</h1>}
      {!!filteredProducts.length && renderProducts(filteredProducts)}
      {!!products.length &&
        !filteredProducts.length &&
        renderProducts(products)}
    </div>
  )
}
