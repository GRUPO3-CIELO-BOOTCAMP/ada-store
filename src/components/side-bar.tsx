import { CategoriesData, RatingData } from '@/types/DataTypes'
import { Categories } from './categories'
import { Prices } from './prices'
import { ScoreFilter } from './score-filter'

export const SideBar = ({
  categories,
  filterByCategory,
  filterByRating,
}: CategoriesData & RatingData) => {
  return (
    <div className="flex flex-col w-min h-fit m-4 p-[16px] gap-[20px] box-border border-2 rounded">
      <Categories categories={categories} filterByCategory={filterByCategory} />
      <Prices />
      <ScoreFilter filterByRating={filterByRating} />
    </div>
  )
}
