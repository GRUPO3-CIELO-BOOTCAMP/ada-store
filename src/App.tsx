import { ThemeProvider } from './components/theme-provider'
import { Toaster } from './components/ui/toaster'
import Home from './pages/Home'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="flex box-border">
        <Home />
        <Toaster />
      </main>
      <footer></footer>
    </ThemeProvider>
  )
}
