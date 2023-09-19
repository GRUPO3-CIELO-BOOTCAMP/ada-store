import { Checkbox } from './ui/checkbox'
import { Input } from './ui/input'
import { Label } from './ui/label'

export const Categories = () => {
  const testObject = [
    {
      id: '1',
      name: 'Licensed Bronze Soap',
      avatar: 'https://loremflickr.com/640/480?lock=1398074320617472',
      description:
        'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
      price: '134.00',
      rating: 1.2,
      category: 'Shoes',
    },
    {
      id: '2',
      name: 'Bespoke Rubber Pants',
      avatar: 'https://loremflickr.com/640/480?lock=5772969227845632',
      description:
        'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
      price: '187.00',
      rating: 1.6,
      category: 'Baby',
    },
  ]
  return (
    <div className="space-y-1.5">
      <h2>Categorias</h2>
      <Input
        type="categories"
        placeholder="Pesquisar em categorias"
        className="h-6"
      />
      {testObject.map((object) => {
        return (
          <div className="flex items-center space-x-2" key={object.id}>
            <Checkbox id="side-bar" />
            <Label htmlFor="side-bar">{object.category}</Label>
          </div>
        )
      })}
    </div>
  )
}
