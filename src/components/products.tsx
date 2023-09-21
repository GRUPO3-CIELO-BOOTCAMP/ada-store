import formatMoney from '@/utils/formatMoney'
import { Stars } from './stars'
import { ProductData } from '@/types/DataTypes'

type ProductsData = {
  products: ProductData[]
  filteredProducts: ProductData[]
  isLoading: boolean
}

export const Products = ({
  products,
  isLoading,
  filteredProducts,
}: ProductsData) => {
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

  return (
    <div className="grid grid-cols-4 gap-4 m-4">
      {!products.length && !isLoading && <h1>Sem produtos encontrados</h1>}
      {filteredProducts.length
        ? renderProducts(filteredProducts)
        : renderProducts(products)}
    </div>
  )
}
