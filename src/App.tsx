import { Destinations } from './components/Destinations/Destinations'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { TopBar } from './components/TopBar/TopBar'
import { TrustBar } from './components/TrustBar/TrustBar'
import { Tours } from './components/Tours/Tours'
import { WhatsAppFloat } from './components/WhatsAppFloat/WhatsAppFloat'

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Destinations />
        <Tours />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
