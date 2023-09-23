import { Plus, Minus } from 'lucide-react'

interface ProductCounterProps {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}

const ProductCounter: React.FC<ProductCounterProps> = ({ count, setCount }) => {
  const incrementCount = () => {
    setCount(count + 1)
  }

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className="flex itens-center">
      <Minus aria-label="Remover" onClick={decrementCount} />
      <p>{count}</p>
      <Plus aria-label="Adicionar" onClick={incrementCount} />
    </div>
  )
}

export default ProductCounter
