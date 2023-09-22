import { Dispatch, SetStateAction } from 'react'
import { Checkbox } from './ui/checkbox'
import { Input } from './ui/input'
import { Label } from './ui/label'

type CategoriesData = {
  categories: string[]
  setSelectedCategories: Dispatch<SetStateAction<string[]>>
}

export const Categories = ({
  categories,
  setSelectedCategories,
}: CategoriesData) => {
  const handleClick = (isChecked: boolean, category: string) => {
    if (isChecked) {
      setSelectedCategories((prev) => [...prev, category])
    } else {
      setSelectedCategories((prev) => prev.filter((c) => c !== category))
    }
  }

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
                onCheckedChange={(isChecked) =>
                  handleClick(!!isChecked, category)
                }
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
