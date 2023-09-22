import { Stars } from './stars'

type ScoreFilterData = {
  handleProducts: (isChecked: boolean, value: number | string) => void
}

export const ScoreFilter = ({ handleProducts }: ScoreFilterData) => {
  const stars = []

  for (let i = 5; i > 0; i--) {
    stars.push(<Stars solidStarsAmount={i} handleProducts={handleProducts} />)
  }

  return (
    <>
      <h2 className="text-sm font-medium leading-[13px]">Avaliação</h2>
      <div className="flex flex-col w-max h-fit gap-[4px]">{stars}</div>
    </>
  )
}
