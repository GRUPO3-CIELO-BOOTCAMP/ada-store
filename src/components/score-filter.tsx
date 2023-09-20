import { Stars } from './stars'

export const ScoreFilter = () => {
  const stars = []

  for (let i = 5; i > 0; i--) {
    stars.push(<Stars solidStarsAmount={i} />)
  }

  return (
    <>
      <h2 className="text-sm font-medium leading-[13px]">Avaliação</h2>
      <div className="flex flex-col w-[120px] h-[139px] gap-[4px]">{stars}</div>
    </>
  )
}
