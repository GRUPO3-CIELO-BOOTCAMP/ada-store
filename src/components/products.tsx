import formatMoney from '@/utils/formatMoney'
import { Stars } from './stars'
import { ProductData } from '@/types/DataTypes'
import { useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  // DialogTrigger,
} from '@/components/ui/dialog'
import ProductCounter from './product-counter'
import { Button } from './ui/button'
import { Cross2Icon } from '@radix-ui/react-icons'

type ProductsData = {
  products: ProductData[]
  filteredProducts: ProductData[]
  isLoading: boolean
}

type ProductCartItem = {
  productId: string
  quantity: number
}

export const Products = ({
  products,
  isLoading,
  filteredProducts,
}: ProductsData) => {
  const [productCount, setProductCount] = useState(1)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<ProductData>()

  const renderProducts = (products: ProductData[]) => {
    function addProductToCart(productId: string, quantity: number): void {
      const cartDataString = localStorage.getItem('products_cart')
      let cartData = []

      if (cartDataString !== null) {
        // eslint-disable-next-line no-var
        cartData = JSON.parse(cartDataString)
        console.log(cartData)
      }

      const existingCartItemIndex = cartData.findIndex(
        (item: { productId: string }) => item.productId === productId,
      )

      if (existingCartItemIndex !== -1) {
        cartData[existingCartItemIndex].quantity += quantity
      } else {
        const newCartItem: ProductCartItem = {
          productId,
          quantity,
        }
        cartData.push(newCartItem)
      }

      localStorage.setItem('products_cart', JSON.stringify(cartData))

      setIsDialogOpen(false)
    }

    return products.map((product) => (
      <Dialog key={product.id} open={isDialogOpen}>
        <div
          className="flex flex-col max-w-[400px] p-4 bg-gradient-to-r from-opacity-13 via-opacity-0 to-opacity-13 border border-solid border-opacity-21 rounded-[0.25rem] mb-8"
          key={product.id}
        >
          {selectedProduct && (
            <DialogContent>
              <img src={selectedProduct.avatar} alt="imagem do produto" />
              <Cross2Icon />

              <DialogHeader>
                <DialogTitle>{selectedProduct.name}</DialogTitle>
              </DialogHeader>
              <DialogDescription>
                {selectedProduct.description}
              </DialogDescription>
              <div>
                <Stars
                  isChecked={false}
                  solidStarsAmount={selectedProduct.rating}
                />
                {formatMoney(selectedProduct.price)}
                <div className="flex">
                  <ProductCounter
                    count={productCount}
                    setCount={setProductCount}
                  />
                  <Button
                    onClick={() => {
                      addProductToCart(selectedProduct.id, productCount)
                    }}
                  >
                    Adicionar ao carrinho
                  </Button>
                </div>
              </div>
            </DialogContent>
          )}

          <div
            onClick={() => {
              setIsDialogOpen(true)
              setSelectedProduct(product)
            }}
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
                {<Stars isChecked={false} solidStarsAmount={product.rating} />}{' '}
                {product.rating}
              </p>
              <span className="font-bold text-2xl leading-[1.5rem] text-blue-500">
                {formatMoney(product.price)}
              </span>
            </div>
          </div>
        </div>
      </Dialog>
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
