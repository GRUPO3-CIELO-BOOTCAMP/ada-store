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
  const [pageSize, setPageSize] = useState<number>(10)
  const [pageNumber, setPageNumber] = useState<number>(1)
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

  return (
    <div
      style={{
        minWidth: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: '1rem',
        margin: '1rem',
      }}
    >
      {!products.length && !isLoading && <h1>Sem produtos encontrados</h1>}
      {!!products.length &&
        products.map((product) => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '300px',
              padding: '1rem',
              borderRadius: '0.25rem',
              backgroundColor: 'gray',
            }}
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
    </div>
  )
}
