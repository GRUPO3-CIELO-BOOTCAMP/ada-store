import { ThemeProvider } from './components/theme-provider'
import Home from './pages/Home'
import { Navbar } from './components/navbar'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar
        onInputSearch={(term) => {
          console.log('termo da pesquisa:', term)
        }}
        amountProducts={4}
      />
      <main className="flex box-border">
        <Home />
      </main>
      <footer></footer>
    </ThemeProvider>
  )
}
