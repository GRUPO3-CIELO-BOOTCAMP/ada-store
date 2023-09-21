import { CategoriesData } from '@/types/DataTypes'
import { Checkbox } from './ui/checkbox'
import { Input } from './ui/input'
import { Label } from './ui/label'

export const Categories = ({
  categories,
  filterByCategory,
}: CategoriesData) => {
  return (
    <div className="w-max h-fit gap-[14px] space-y-1.5">
      <h2 className="text-sm font-medium leading-[13px] mb-[13px]">
        Categorias
      </h2>
      <Input
        type="categories"
        placeholder="Pesquisar em categorias"
        className="h-8 box-border border-2 rounded"
      />
      {categories
        .sort((a, b) => (a > b ? 1 : -1))
        .map((category) => {
          return (
            <div
              className="flex items-center w-[102px] gap-[8px]"
              key={category}
            >
              <Checkbox
                id="side-bar"
                onCheckedChange={(e) => {
                  filterByCategory(!!e, category)
                }}
              />
              <Label htmlFor="side-bar" className="text-sm">
                {category}
              </Label>
            </div>
          )
        })}
    </div>
  )
}
