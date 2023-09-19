import { Input } from './ui/input'

export const Prices = () => {
  return (
    <div>
      <h2>Preço</h2>
      <div className="flex flex-row space-x-2">
        <Input type="minPrice" placeholder="de R$" className="h-6" />
        <Input type="maxPrice" placeholder="até R$" className="h-6" />
      </div>
    </div>
  )
}
