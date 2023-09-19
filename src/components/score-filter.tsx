import { Stars } from './stars'

export const ScoreFilter = () => {
  const stars = []

  for (let i = 5; i > 0; i--) {
    stars.push(<Stars solidStarsAmount={i} />)
  }

  return (
    <>
      <h2>Avaliação</h2>
      <div className="flex flex-col">{stars}</div>
    </>
  )
}
