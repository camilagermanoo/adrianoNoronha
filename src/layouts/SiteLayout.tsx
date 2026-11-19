import { Outlet } from 'react-router'
import { BackToTop } from '../components/BackToTop/BackToTop'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { ScrollManager } from '../components/ScrollManager/ScrollManager'
import { WhatsAppFloat } from '../components/WhatsAppFloat/WhatsAppFloat'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function SiteLayout() {
  useScrollReveal()

  return (
    <>
      <ScrollManager />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppFloat />
    </>
  )
}
