import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from './NavBar.jsx'
import HeroGallery from './HeroGallery.jsx'
import AboutUs from './AboutUs.jsx'
import Services from './Services.jsx'
import CCTV from './CCTV.jsx'
import FAQ from './FAQ.jsx'
import References from './References.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'
import useScrollReveal from './hooks/useScrollReveal.js'

function App() {
  useScrollReveal();
  return (
    <>
      <NavBar />
      <main>
        <HeroGallery />
        <AboutUs />
        <Services />
        <CCTV />
        <FAQ />
        <References />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
