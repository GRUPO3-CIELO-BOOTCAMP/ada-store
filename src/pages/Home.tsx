import { Stars } from '@/components/stars'
import Api from '@/services/Api'
import formatMoney from '@/utils/formatMoney'
import { useEffect, useState } from 'react'

type ProductData = {
  id: string
  avatar: string
  name: string
  description: string
  price: string
  rating: number
  category: string
}

export default function Home() {
  const [products, setProducts] = useState<ProductData[]>([])
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

  const CategoryFilter = () => {
    const uniqueCategories: string[] = []

    products.forEach((product) => {
      if (!uniqueCategories.includes(product.category)) {
        uniqueCategories.push(product.category)
      }
    })

    return (
      <div>
        <h1>Listagem de Categorias Únicas:</h1>
        {uniqueCategories.map((category) => (
          <p key={category}>{category}</p>
        ))}
      </div>
    )
  }

  return (
    <div className="min-w-full grid grid-cols-4 gap-4 m-4">
      {!products.length && !isLoading && <h1>Sem produtos encontrados</h1>}
      {!!products.length &&
        products.map((product) => (
          <div
            className="flex flex-col max-w-[300px] p-4 rounded-[0.25rem] bg-gray-300"
            key={product.id}
          >
            <img src={product.avatar} alt="imagem do produto" />
            <p>{product.name}</p>
            <p>{product.category}</p>
            <p>{product.description}</p>
            <p>
              {<Stars isChecked={false} solidStarsAmount={product.rating} />}
            </p>
            <p>{formatMoney(product.price)}</p>
          </div>
        ))}
      <CategoryFilter />
    </div>
  )
}
