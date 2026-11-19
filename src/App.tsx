import { About } from './components/About/About'
import { ContactCta } from './components/ContactCta/ContactCta'
import { Destinations } from './components/Destinations/Destinations'
import { Faq } from './components/Faq/Faq'
import { Fees } from './components/Fees/Fees'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Testimonials } from './components/Testimonials/Testimonials'
import { Tours } from './components/Tours/Tours'
import { WhatsAppFloat } from './components/WhatsAppFloat/WhatsAppFloat'
import { WhyUs } from './components/WhyUs/WhyUs'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Tours />
        <Destinations />
        <About />
        <Testimonials />
        <WhyUs />
        <Fees />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
