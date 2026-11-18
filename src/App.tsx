import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

function App() {
  return (
    <>
      <Header />
      <main id="inicio" style={{ minHeight: '100vh', background: 'var(--color-ocean-700)' }} />
      <Footer />
    </>
  )
}

export default App
