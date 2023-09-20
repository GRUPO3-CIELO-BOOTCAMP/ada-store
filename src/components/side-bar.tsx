import { CategoriesData } from '@/types/DataTypes'
import { Categories } from './categories'
import { Prices } from './prices'
import { ScoreFilter } from './score-filter'

export const SideBar = ({ categories, handleProducts }: CategoriesData) => {
  return (
    <div className="flex flex-col w-[248px] h-[653px] mt-[62px] ml-[32px] p-[16px] gap-[20px] box-border border-2 rounded">
      <Categories categories={categories} handleProducts={handleProducts} />
      <Prices />
      <ScoreFilter />
    </div>
  )
}
