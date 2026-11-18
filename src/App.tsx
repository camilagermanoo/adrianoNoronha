import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Destinations } from './components/Destinations/Destinations'
import { Hero } from './components/Hero/Hero'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Destinations />
      </main>
      <Footer />
    </>
  )
}

export default App
