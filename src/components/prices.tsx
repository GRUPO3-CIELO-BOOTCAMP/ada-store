import { Input } from './ui/input'

export const Prices = () => {
  return (
    <div>
      <h2 className="text-sm font-medium leading-[13px] mb-[13px]">Preço</h2>
      <div className="flex flex-row w-[216px] gap-[14px]">
        <Input type="minPrice" placeholder="de R$" className="h-8" />
        <Input type="maxPrice" placeholder="até R$" className="h-8" />
      </div>
    </div>
  )
}
