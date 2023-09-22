import { RefreshCcw, Search } from 'lucide-react'
import { Logo } from './logo'
import { ModeToggle } from './mode-toggle'
import { Input } from './ui/input'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Cart } from './cart'
import { Button } from './ui/button'

interface NavBarProps {
  onInputSearch: (search: string) => void
  onRefreshProducts?: () => void
  loading?: boolean
}

export const Navbar: React.FC<NavBarProps> = ({
  onInputSearch,
  onRefreshProducts,
}) => {
  const productsStorage = window.localStorage.getItem('products_cart')
  const productsCart = productsStorage ? JSON.parse(productsStorage) : null
  const [search, setSearch] = useState<string>('')
  const [amount, setAmount] = useState<number>(productsCart?.length || 0)

  useEffect(() => {
    function handleStorageChange(event: StorageEvent) {
      if (event.key === 'products_cart') {
        const newProductsCart = JSON.parse(event.newValue || '[]')
        setAmount(newProductsCart.length || 0)
      }
    }
    window.addEventListener('storage', handleStorageChange)
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onInputSearch(search.trim())
  }

  return (
    <header className="flex justify-between items-center h-16 px-8 bg-default text-secondary dark:text-primary">
      <div className="flex items-center justify-center font-bold">
        <Logo />
        <span className="text-lg">ADA STORE</span>
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative flex items-center w-full max-w-sm"
      >
        <Input
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          placeholder="O que você está procurando?"
          className=" bg-zinc-50 text-default"
        />
        <button type="submit" className="flex items-center justify-center">
          <Search
            strokeWidth={2.5}
            className="
              h-6
              w-6 
              absolute 
              right-1 
              text-default 
              cursor-pointer 
              data-[disabled=true]:text-default/40
              data-[disabled=true]:cursor-not-allowed
              "
          />
        </button>
      </form>

      <Button
        onClick={onRefreshProducts}
        variant="outline"
        className="flex items-center gap-2 border border-zinc-100"
      >
        Atualizar produtos
        <RefreshCcw className="h-4 w-4" />
      </Button>

      <div className="flex items-center gap-6">
        <Cart amount={amount} />
        <ModeToggle />
      </div>
    </header>
  )
}
