import { Logo } from './logo'
import { ModeToggle } from './mode-toggle'

export const Navbar = () => {
  return (
    <header className="flex justify-between items-center h-16 px-8 bg-default text-secondary dark:text-primary">
      <div className="flex items-center justify-center font-bold">
        <Logo />
        <span className="text-lg">ADA STORE</span>
      </div>

      <ModeToggle />
    </header>
  )
}
