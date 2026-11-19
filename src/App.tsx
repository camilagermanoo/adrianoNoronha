import { Combos } from './components/Combos/Combos'
import { ContactCta } from './components/ContactCta/ContactCta'
import { Destinations } from './components/Destinations/Destinations'
import { Faq } from './components/Faq/Faq'
import { Fees } from './components/Fees/Fees'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Testimonials } from './components/Testimonials/Testimonials'
import { TopBar } from './components/TopBar/TopBar'
import { Tours } from './components/Tours/Tours'
import { TripProfiles } from './components/TripProfiles/TripProfiles'
import { TrustBar } from './components/TrustBar/TrustBar'
import { WhatsAppFloat } from './components/WhatsAppFloat/WhatsAppFloat'
import { WhyUs } from './components/WhyUs/WhyUs'

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <TripProfiles />
        <Tours />
        <Combos />
        <Destinations />
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
