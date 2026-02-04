import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Symptoms from '@/components/Symptoms'
import Treatments from '@/components/Treatments'
import About from '@/components/About'
import Results from '@/components/Results'
import Testimonials from '@/components/Testimonials'
import Differentials from '@/components/Differentials'
import Location from '@/components/Location'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Symptoms />
      <Treatments />
      <About />
      <Results />
      <Testimonials />
      <Differentials />
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
