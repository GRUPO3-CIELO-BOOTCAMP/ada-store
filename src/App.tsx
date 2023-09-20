import { ModeToggle } from './components/mode-toggle'
import { ThemeProvider } from './components/theme-provider'
import Home from './pages/Home'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header className="h-12 border border-b-zinc-800 flex justify-between items-center px-8">
        <span>ADA STORE</span>
        <ModeToggle />
      </header>
      <main className="flex box-border">
        <Home />
      </main>
      <footer></footer>
    </ThemeProvider>
  )
}
