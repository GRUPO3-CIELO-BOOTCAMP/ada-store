import { Categories } from './categories'
import { Prices } from './prices'
import { ScoreFilter } from './score-filter'

export const SideBar = () => {
  return (
    <div className="flex flex-col w-48 p-2 box-border border-2 rounded space-y-1.5">
      <Categories />
      <Prices />
      <ScoreFilter />
    </div>
  )
}
