import { About } from './components/About/About'
import { BackToTop } from './components/BackToTop/BackToTop'
import { ContactForm } from './components/ContactForm/ContactForm'
import { Destinations } from './components/Destinations/Destinations'
import { Faq } from './components/Faq/Faq'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Itineraries } from './components/Itineraries/Itineraries'
import { Moments } from './components/Moments/Moments'
import { Testimonials } from './components/Testimonials/Testimonials'
import { Tours } from './components/Tours/Tours'
import { TravelChecklist } from './components/TravelChecklist/TravelChecklist'
import { WhatsAppFloat } from './components/WhatsAppFloat/WhatsAppFloat'
import { useScrollReveal } from './hooks/useScrollReveal'

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
        <Moments />
        <Testimonials />
        <TravelChecklist />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppFloat />
    </>
  )
}

export default App
