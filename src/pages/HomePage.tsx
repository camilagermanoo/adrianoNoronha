import { About } from '../components/About/About'
import { ContactForm } from '../components/ContactForm/ContactForm'
import { Destinations } from '../components/Destinations/Destinations'
import { Faq } from '../components/Faq/Faq'
import { Hero } from '../components/Hero/Hero'
import { Itineraries } from '../components/Itineraries/Itineraries'
import { Moments } from '../components/Moments/Moments'
import { Testimonials } from '../components/Testimonials/Testimonials'
import { Tours } from '../components/Tours/Tours'
import { TravelChecklist } from '../components/TravelChecklist/TravelChecklist'

export function HomePage() {
  return (
    <>
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
    </>
  )
}
