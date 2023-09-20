import { Search } from 'lucide-react'
import { Logo } from './logo'
import { ModeToggle } from './mode-toggle'
import { Input } from './ui/input'
import { ChangeEvent, FormEvent, useState } from 'react'

export const Navbar = () => {
  const [search, setSearch] = useState<string>('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log('pesquisar', search)
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
        <button
          type="submit"
          disabled={!search}
          className="flex items-center justify-center"
        >
          <Search
            data-disabled={search === ''}
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

      <ModeToggle />
    </header>
  )
}
