import { ThemeProvider } from './components/theme-provider'
import Home from './pages/Home'
import { Navbar } from './components/navbar'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <main className="flex box-border">
        <Home />
      </main>
      <footer></footer>
    </ThemeProvider>
  )
}
