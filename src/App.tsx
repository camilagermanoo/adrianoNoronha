import { Destinations } from './components/Destinations/Destinations'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { TopBar } from './components/TopBar/TopBar'
import { Tours } from './components/Tours/Tours'
import { TripProfiles } from './components/TripProfiles/TripProfiles'
import { TrustBar } from './components/TrustBar/TrustBar'
import { WhatsAppFloat } from './components/WhatsAppFloat/WhatsAppFloat'

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <TripProfiles />
        <Destinations />
        <Tours />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
