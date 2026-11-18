import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Destinations } from './components/Destinations/Destinations'
import { Hero } from './components/Hero/Hero'
import { Tours } from './components/Tours/Tours'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Destinations />
        <Tours />
      </main>
      <Footer />
    </>
  )
}

export default App
