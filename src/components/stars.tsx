import { SolidStar } from './solid-star'
import { EmptyStar } from './empty-star'
import { Checkbox } from './ui/checkbox'
import { Dispatch, SetStateAction } from 'react'

type StarsProps = {
  solidStarsAmount: number
  isChecked?: boolean
  setSelectedRatings: Dispatch<SetStateAction<number[]>>
}

export const Stars = ({
  solidStarsAmount,
  isChecked = true,
  setSelectedRatings,
}: StarsProps) => {
  const handleClick = (isChecked: boolean, rating: number) => {
    if (isChecked) {
      setSelectedRatings((prev) => [...prev, rating])
    } else {
      setSelectedRatings((prev) => prev.filter((r) => r !== rating))
    }
  }

  const container = [
    isChecked ? (
      <Checkbox
        className="mr-2"
        onCheckedChange={(isChecked) =>
          handleClick(!!isChecked, solidStarsAmount)
        }
      />
    ) : undefined,
  ]

  for (let i = 0; i < 5; i++) {
    if (i < solidStarsAmount) container.push(<SolidStar />)
    else container.push(<EmptyStar />)
  }

  return <div className="flex flex-row items-center">{container}</div>
}
