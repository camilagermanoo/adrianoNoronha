import { About } from './components/About/About'
import { ContactCta } from './components/ContactCta/ContactCta'
import { Destinations } from './components/Destinations/Destinations'
import { Faq } from './components/Faq/Faq'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Itineraries } from './components/Itineraries/Itineraries'
import { Tours } from './components/Tours/Tours'
import { TravelChecklist } from './components/TravelChecklist/TravelChecklist'
import { WhatsAppFloat } from './components/WhatsAppFloat/WhatsAppFloat'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Tours />
        <Itineraries />
        <Destinations />
        <About />
        <TravelChecklist />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
