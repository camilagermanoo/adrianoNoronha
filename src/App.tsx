import { About } from './components/About/About'
import { ContactForm } from './components/ContactForm/ContactForm'
import { Destinations } from './components/Destinations/Destinations'
import { Faq } from './components/Faq/Faq'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Itineraries } from './components/Itineraries/Itineraries'
import { Tours } from './components/Tours/Tours'
import { TravelChecklist } from './components/TravelChecklist/TravelChecklist'
import { useScrollReveal } from './hooks/useScrollReveal'
import { WhatsAppFloat } from './components/WhatsAppFloat/WhatsAppFloat'

function App() {
  useScrollReveal()

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
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
