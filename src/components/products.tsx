import formatMoney from '@/utils/formatMoney'
import { Stars } from './stars'
import { ProductData } from '@/types/DataTypes'

type ProductsData = {
  products: ProductData[]
  filteredProducts: ProductData[]
  isLoading: boolean
  activeFilters: boolean
}

export const Products = ({
  products,
  isLoading,
  filteredProducts,
  activeFilters,
}: ProductsData) => {
  const renderProducts = (products: ProductData[]) => {
    return products.map((product) => (
      <div
        className="flex flex-col max-w-[400px] p-4 bg-gradient-to-r from-opacity-13 via-opacity-0 to-opacity-13 border border-solid border-opacity-21 rounded-[0.25rem] mb-8"
        key={product.id}
      >
        <img
          className="px-12 py-4 min-h-[122px] min-w-[122px]"
          src={product.avatar}
          alt="imagem do produto"
        />
        <div className="flex flex-col gap-3">
          <p className="text-base leading-[1.5rem] min-h-[3rem] text-gray-900">
            {product.name}
          </p>
          <span className="font-normal text-xs leading-[0.75rem] text-blue-500">
            {product.category}
          </span>
          <p className="flex items-center text-gray-700 gap-1">
            {
              <Stars
                isChecked={false}
                solidStarsAmount={Math.floor(product.rating)}
                setSelectedRatings={() => null}
              />
            }{' '}
            {product.rating}
          </p>
          <span className="font-bold text-2xl leading-[1.5rem] text-blue-500">
            {formatMoney(product.price)}
          </span>
        </div>
      </div>
    ))
  }
  return (
    <div className="grid grid-cols-4 gap-4 m-4">
      {!products.length && !isLoading && <h1>Sem produtos encontrados</h1>}
      {filteredProducts.length || activeFilters
        ? renderProducts(filteredProducts)
        : renderProducts(products)}
    </div>
  )
}
