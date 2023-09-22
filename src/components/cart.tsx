import { ShoppingCart } from 'lucide-react'

interface CartProps {
  amount: number
}

export const Cart: React.FC<CartProps> = ({ amount }) => {
  return (
    <div className="relative">
      <div
        className="
            bg-blue-600
            hover:bg-blue-600
            absolute 
            -right-1
            bottom-4 
            rounded-full
            h-3
            w-3
            p-3
            flex 
            items-center 
            justify-center 
            text-xs
            text-white"
      >
        {amount}
      </div>
      <ShoppingCart strokeWidth={1.5} className="h-10 w-10"></ShoppingCart>
    </div>
  )
}
