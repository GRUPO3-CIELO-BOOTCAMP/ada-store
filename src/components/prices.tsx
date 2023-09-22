import { Dispatch, SetStateAction } from 'react'
import { Input } from './ui/input'

type PricesData = {
  setMinPrice: Dispatch<SetStateAction<number>>
  setMaxPrice: Dispatch<SetStateAction<number>>
}

export const Prices = ({ setMinPrice, setMaxPrice }: PricesData) => {
  return (
    <div>
      <h2 className="text-sm font-medium leading-[13px] mb-[13px]">Preço</h2>
      <div className="flex flex-row w-fit h-fit gap-[14px]">
        <Input
          type="input"
          id="minValue"
          placeholder="de R$"
          className="h-8"
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
        <Input
          type="input"
          id="maxValue"
          placeholder="até R$"
          className="h-8"
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>
    </div>
  )
}
