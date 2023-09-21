import { ThemeProvider } from './components/theme-provider'
import Home from './pages/Home'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="flex box-border">
        <Home />
      </main>
      <footer></footer>
    </ThemeProvider>
  )
}
